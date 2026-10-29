"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./CustomCursor.module.css";

// Clean blue dot, crisp at all times — one obvious knob per tunable, kept
// together per the HeroHeadline.tsx tuning-constants convention.
const DOT_NORMAL_DIAMETER = 12;
const DOT_HOVER_DIAMETER = 16;
const DOT_NORMAL_RADIUS = DOT_NORMAL_DIAMETER / 2;
const DOT_HOVER_RADIUS = DOT_HOVER_DIAMETER / 2;
const COLOR_RGB = "49, 95, 213"; // #315FD5 Cobalt Blue — unchanged hue

// Hover glow: the solid dot's own opacity never changes (its center stays
// fully visible at all times) — instead, a separate radial gradient fades
// in around it on hover, from the dot's own current edge out to
// GLOW_RADIUS_PX (~24-28px overall, dot included). Not a second circle
// drawn at a fixed size: both the dot's radius and the glow's outer edge
// are derived from the same single `hoverT` value each frame (see
// drawDot()/tick() below), so the whole thing grows, fades in, and fades
// out together as one effect, never as a separately-animated ring.
const GLOW_RADIUS_PX = 13; // ~26px overall diameter, including the dot
const GLOW_PEAK_ALPHA = 0.45; // "subtle", strongest right at the dot's edge, 0 at GLOW_RADIUS_PX
// Canvas has no CSS transition to reach for — this per-frame lerp factor
// is what approximates the requested ~180ms hover transition (see its use
// in tick() below); an exponential lerp is inherently ease-out shaped, so
// no separate easing curve is needed.
const HOVER_T_EASE = 0.3;

// +40% from the previous 390ms/160px, scaled together so the extra length
// is actually visible at comparable pointer speed rather than being
// pruned away by an unchanged retention window — and because that scale
// factor happens to land the fade-out squarely in the requested
// ~500-650ms range on its own.
const TRAIL_RETENTION_MS = 550;
const MAX_TRAIL_LENGTH_PX = 224;

// The trail is rendered as several smooth layers stacked on the *same*
// centerline (narrowest/longest-reaching first, widest/shortest last) —
// each one individually a single continuous quadratic path, exactly like
// the one-layer version before. Stacking along the width this way is what
// fakes a tapered stroke without ever introducing the per-segment seam a
// stroked, discretely-varying lineWidth would otherwise need; there is
// still only ever one unbroken curve per layer, never a joint mid-path.
// `coverage` is the fraction of the *most recent* points that layer
// reaches back to (1 = the full trail, out to the tail); `alphaScale` is
// that layer's own peak (head-end) opacity.
const TRAIL_LAYERS = [
  { widthPx: 0.6, coverage: 1, alphaScale: 0.35 },
  { widthPx: 1.15, coverage: 0.6, alphaScale: 0.55 },
  { widthPx: 1.75, coverage: 0.28, alphaScale: 0.8 }, // ~1.5-2px "near the cursor"
] as const;
// Gentler than a steep fade curve — more of the trail's length stays
// visibly blue, tapering only right at the tail, rather than only the very
// tip being visible.
const TRAIL_FADE_EXPONENT = 1.15;
const TRAIL_GRADIENT_STOPS = [0, 0.15, 0.4, 0.7, 1];

// Position is read and drawn directly every frame inside the rAF loop —
// never a CSS transition, which is what keeps tracking immediate. This is
// still a touch of smoothing (not raw 1:1) to absorb trackpad/high-
// polling-rate jitter, closely attached to the pointer with minimal
// perceptible lag.
const DOT_POSITION_EASE = 0.6;

// A pointer that goes quiet for longer than this (trail fully aged out plus
// a small margin) stops the rAF loop entirely until the next pointermove —
// this cursor never spends a frame animating while truly idle.
const IDLE_STOP_MARGIN_MS = 120;

// Actionable/clickable elements only — links, buttons, form controls, and
// anything else a keyboard user could Tab to or a pointer could click.
// Deliberately narrower than earlier revisions: no plain-text tags (p,
// span, h1-h6, ...), so ordinary text never triggers the enlargement.
// "Clickable images" need no entry of their own here — every image-as-
// control in this codebase is already wrapped in an <a> or <button> (a
// project card Link, a gallery tile button, ResponsiveMedia's zoom
// trigger), so target.closest() against this same list already reaches
// them; a bare, non-interactive <img> correctly never matches.
const HOVER_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "summary",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

type Point = { x: number; y: number; t: number };

function isEligible() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  return !reducedMotion && finePointer;
}

/**
 * Minimal Blue Dot + Smooth Trail custom cursor (Approved V2.6).
 *
 * Single <canvas>, pointer-events: none, driven entirely by refs/closures
 * inside one rAF loop — no React state for position/size, so this component
 * never re-renders after mount (see requirement: avoid unnecessary React
 * rerenders). It adds exactly one `pointermove` listener, on `window`; it
 * never touches, wraps, or reads from the Hero <section> that
 * HeroHeadline.tsx listens on, so the two pointer-tracking systems run
 * fully independently and HeroHeadline's own hit-testing is unaffected.
 *
 * Renders unconditionally on the server and at first client paint (an empty
 * canvas has no text/branching output), so there is no hydration mismatch —
 * all eligibility checks (prefers-reduced-motion, hover/pointer:fine) run
 * only inside useEffect, after mount, exactly like HeroHeadline's own gate.
 */
export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // undefined: pre-mount / not yet determined — renders the plain, non-
  // portaled canvas below, which is also exactly what the server renders,
  // so hydration never mismatches. Element | null once the first effect
  // below has run at least once: the currently-open <dialog>, or null for
  // "none open, portal into document.body".
  const [portalTarget, setPortalTarget] = useState<Element | null | undefined>(undefined);

  useEffect(() => {
    // ResponsiveMedia's image-zoom lightbox and GalleryViewer both use a
    // native <dialog> shown via showModal(). Once modal, a <dialog> is
    // promoted to the browser's "top layer" — a compositing layer that
    // always paints above the ENTIRE normal document, regardless of any
    // z-index (even this canvas's own 2147483647, see
    // CustomCursor.module.css). The only way for anything outside the top
    // layer to appear above an open modal dialog is to also become part of
    // that same top-layer subtree, i.e. render as a descendant of the
    // dialog itself — which is what the portal below does, generically,
    // for whichever <dialog> is currently open. Neither dialog's own CSS
    // sets transform/filter/contain (verified), so the canvas's
    // position:fixed still measures against the real viewport, not the
    // dialog's box, once nested inside it. This needs no change to
    // ResponsiveMedia.tsx or GalleryViewer.tsx themselves, and covers any
    // future <dialog>-based component the same way.
    function sync() {
      setPortalTarget(document.querySelector("dialog[open]"));
    }
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let active = false;
    let rafId: number | null = null;

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    let hasPointer = false;
    let rawX = 0;
    let rawY = 0;
    let dotX = 0;
    let dotY = 0;
    // 0 = resting (12px dot, no glow), 1 = fully hovering (16px dot + full
    // glow) — radius and glow are both derived from this single value each
    // frame (see drawDot()), so they always grow/fade in perfect sync.
    let targetHoverT = 0;
    let currentHoverT = 0;
    let lastMoveTime = 0;
    let lastTarget: Element | null = null;
    const points: Point[] = [];

    function clear() {
      ctx!.clearRect(0, 0, width, height);
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      rawX = event.clientX;
      rawY = event.clientY;
      lastMoveTime = performance.now();

      if (!hasPointer) {
        // First sighting of the pointer (or return from idle/leave): snap
        // instead of easing in from a stale position, so the trail never
        // draws a false streak across the screen.
        dotX = rawX;
        dotY = rawY;
      }
      hasPointer = true;

      const target = event.target as Element | null;
      if (target !== lastTarget) {
        lastTarget = target;
        const hovering = !!target?.closest?.(HOVER_SELECTOR);
        targetHoverT = hovering ? 1 : 0;
      }

      ensureLoopRunning();
    }

    function handlePointerLeave() {
      hasPointer = false;
    }

    function handleWindowBlur() {
      hasPointer = false;
    }

    function midpoint(a: Point, b: Point) {
      return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    }

    // One layer's stroke: a single continuous path through midpoints (the
    // standard smooth-freehand-line technique) over the given slice of
    // points — one moveTo + a chain of quadraticCurveTo calls, never
    // multiple independent beginPath/stroke calls within this layer. That
    // single-path, single-stroke construction is what guarantees each
    // layer reads as one visually continuous curved stroke on its own:
    // there are no segment seams for overlapping semi-transparent alpha to
    // double up on, and therefore no bright joints.
    function strokeTrailLayer(slice: Point[], widthPx: number, alphaScale: number, idleFade: number) {
      if (slice.length < 2) return;

      ctx!.beginPath();
      ctx!.moveTo(slice[0].x, slice[0].y);
      for (let i = 1; i < slice.length - 1; i += 1) {
        const mid = midpoint(slice[i], slice[i + 1]);
        ctx!.quadraticCurveTo(slice[i].x, slice[i].y, mid.x, mid.y);
      }
      const last = slice[slice.length - 1];
      ctx!.lineTo(last.x, last.y);

      // Fade is a single linear gradient along this layer's own tail->head
      // span, stroked once, not per-segment alpha — the only way to get a
      // smooth continuous fade with zero overlapping draws within a layer.
      const tail = slice[0];
      const gradient = ctx!.createLinearGradient(tail.x, tail.y, last.x, last.y);
      for (const stop of TRAIL_GRADIENT_STOPS) {
        const eased = Math.pow(stop, TRAIL_FADE_EXPONENT);
        gradient.addColorStop(stop, `rgba(${COLOR_RGB}, ${eased * alphaScale * idleFade})`);
      }

      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = widthPx;
      ctx!.strokeStyle = gradient;
      ctx!.stroke();
    }

    function drawTrail(idleFade: number) {
      if (points.length < 2) return;
      // Widest-coverage (reaches back to the tail) and thinnest first, so
      // the narrower, more-opaque layers near the cursor paint on top of
      // it — stacked along the width at the same positions, not joined
      // end-to-end, so this still never introduces a seam.
      for (const layer of TRAIL_LAYERS) {
        const sliceStart = Math.max(0, points.length - Math.ceil(points.length * layer.coverage));
        strokeTrailLayer(points.slice(sliceStart), layer.widthPx, layer.alphaScale, idleFade);
      }
    }

    // Just the solid circle — no halo, glow, or perimeter stroke. radius
    // and hoverOpacity are both already-eased values from tick() below, so
    // this only ever draws, never animates anything itself.
    function drawDot(idleFade: number, hoverT: number) {
      if (idleFade <= 0) return;

      const radius = DOT_NORMAL_RADIUS + (DOT_HOVER_RADIUS - DOT_NORMAL_RADIUS) * hoverT;

      // Glow first (behind the dot): a radial gradient from the dot's own
      // current edge (radius) out to its outer extent — both ends scale
      // with hoverT together, so the glow grows and fades in as one
      // motion, never a separately-sized ring. Skipped below an
      // imperceptible threshold purely so there's nothing to draw at rest.
      if (hoverT > 0.001) {
        const glowOuterRadius = radius + (GLOW_RADIUS_PX - DOT_HOVER_RADIUS) * hoverT;
        const glow = ctx!.createRadialGradient(dotX, dotY, radius, dotX, dotY, glowOuterRadius);
        glow.addColorStop(0, `rgba(${COLOR_RGB}, ${GLOW_PEAK_ALPHA * hoverT * idleFade})`);
        glow.addColorStop(1, `rgba(${COLOR_RGB}, 0)`);
        ctx!.beginPath();
        ctx!.fillStyle = glow;
        ctx!.arc(dotX, dotY, glowOuterRadius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Solid dot on top — always full idleFade-scaled opacity, hover or
      // not, so its center stays clearly visible at every moment.
      ctx!.beginPath();
      ctx!.fillStyle = `rgba(${COLOR_RGB}, ${idleFade})`;
      ctx!.arc(dotX, dotY, radius, 0, Math.PI * 2);
      ctx!.fill();
    }

    function tick() {
      const now = performance.now();

      if (hasPointer) {
        dotX += (rawX - dotX) * DOT_POSITION_EASE;
        dotY += (rawY - dotY) * DOT_POSITION_EASE;
        points.push({ x: dotX, y: dotY, t: now });
      }
      // Per-frame lerp toward the hover target — the canvas equivalent of
      // a ~180ms CSS transition. Drives both the dot's radius and the
      // glow's extent/intensity (see drawDot()), always in sync since
      // they're both derived from this one value there.
      currentHoverT += (targetHoverT - currentHoverT) * HOVER_T_EASE;

      // Prune by age (550ms retention) — this alone is what makes the trail
      // smoothly contract and vanish once the pointer stops moving: no new
      // points are pushed, so the tail simply ages out frame by frame.
      const cutoff = now - TRAIL_RETENTION_MS;
      while (points.length && points[0].t < cutoff) points.shift();

      // Prune by cumulative on-screen length (~224px) from the newest end
      // backward, trimming the oldest points first — covers a fast flick
      // that would otherwise paint a longer-than-intended trail within the
      // 550ms window.
      let total = 0;
      for (let i = points.length - 1; i > 0; i -= 1) {
        const dx = points[i].x - points[i - 1].x;
        const dy = points[i].y - points[i - 1].y;
        total += Math.hypot(dx, dy);
        if (total > MAX_TRAIL_LENGTH_PX) {
          points.splice(0, i);
          break;
        }
      }

      // Shared by both draws so the trail and the dot fade out in lockstep
      // once idle, on top of (not instead of) the trail's own point-aging —
      // a point-count-pruned-away trail already shrinks from the tail; this
      // additionally dims what's left, together with the dot.
      const idleFade = hasPointer
        ? 1
        : Math.max(0, 1 - (now - lastMoveTime) / TRAIL_RETENTION_MS);

      clear();
      drawTrail(idleFade);
      drawDot(idleFade, currentHoverT);

      const settled = Math.abs(currentHoverT - targetHoverT) < 0.005;
      const quiet = !hasPointer && now - lastMoveTime > TRAIL_RETENTION_MS + IDLE_STOP_MARGIN_MS;
      if (quiet && points.length === 0 && settled) {
        clear();
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    function ensureLoopRunning() {
      if (rafId === null) rafId = requestAnimationFrame(tick);
    }

    function activate() {
      if (active) return;
      active = true;
      document.documentElement.dataset.customCursor = "active";
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
      window.addEventListener("blur", handleWindowBlur);
      window.addEventListener("resize", resize);
    }

    function deactivate() {
      if (!active) return;
      active = false;
      delete document.documentElement.dataset.customCursor;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("resize", resize);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      hasPointer = false;
      points.length = 0;
      clear();
    }

    function syncEligibility() {
      if (isEligible()) activate();
      else deactivate();
    }

    syncEligibility();

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    reducedMotionQuery.addEventListener("change", syncEligibility);
    finePointerQuery.addEventListener("change", syncEligibility);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncEligibility);
      finePointerQuery.removeEventListener("change", syncEligibility);
      deactivate();
    };
    // Deliberately depends on portalTarget even though nothing in this
    // effect's body reads it directly: the very first portalTarget change
    // (undefined -> null, right after mount) swaps the <canvas> below from
    // a plain, inline-rendered element to one rendered through
    // createPortal — a fiber-type change at that position, which React
    // unmounts and remounts rather than preserving. Without re-running
    // this effect on that change, it would stay bound forever to the now-
    // destroyed original canvas node, leaving the real (portaled) one with
    // no context, no listeners, and nothing drawing on it at all. Later
    // portalTarget changes (moving between an open dialog and body) don't
    // remount the node — React just relocates an already-portaled
    // element — so this mostly just re-runs once, right after mount.
  }, [portalTarget]);

  const canvas = <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;

  // Still undefined on the very first client render (the portal-tracking
  // effect above hasn't run yet) — render inline, identically to the
  // server. Every render after that portals, even for the "no dialog open"
  // case (document.body), so there is exactly one render path switch,
  // ever, right after mount — not a per-dialog-toggle remount (changing an
  // already-portaled target just moves the existing node, it doesn't
  // destroy/recreate it).
  if (portalTarget === undefined) return canvas;
  return createPortal(canvas, portalTarget ?? document.body);
}
