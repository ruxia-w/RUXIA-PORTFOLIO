"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./CustomCursor.module.css";

// Approved V2.6 cursor spec — one obvious knob per tunable, kept together
// per the HeroHeadline.tsx tuning-constants convention.
const DOT_NORMAL_DIAMETER = 11;
const DOT_HOVER_DIAMETER = 9;
const DOT_NORMAL_RADIUS = DOT_NORMAL_DIAMETER / 2;
const DOT_HOVER_RADIUS = DOT_HOVER_DIAMETER / 2;
const COLOR_RGB = "49, 95, 213"; // #315FD5 Cobalt Blue

const TRAIL_WIDTH = 2.3;
const TRAIL_RETENTION_MS = 390;
const MAX_TRAIL_LENGTH_PX = 125;
const TRAIL_BASE_ALPHA = 0.55; // restrained, not flashy — see design brief

// Light smoothing only — large enough that the dot still reads as
// effectively 1:1 with the raw pointer, small enough to absorb trackpad/
// high-polling-rate jitter rather than visibly lagging behind it.
const DOT_POSITION_EASE = 0.45;
const DOT_RADIUS_EASE = 0.3;

// A pointer that goes quiet for longer than this (trail fully aged out plus
// a small margin) stops the rAF loop entirely until the next pointermove —
// this cursor never spends a frame animating while truly idle.
const IDLE_STOP_MARGIN_MS = 120;

// Heuristic for "hovering over text, links, or interactive elements" (spec
// wording) — deliberately broad: any element whose content is normally
// read or clicked. Native elements with their own explicit `cursor` rule
// (e.g. ResponsiveMedia's zoom-in trigger, a <button>) are already covered
// by `button`/`a` below, so their own affordance and this 9px shrink both
// apply together rather than conflicting.
const SHRINK_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "summary",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "li",
  "blockquote",
  "figcaption",
  "td",
  "th",
  "dt",
  "dd",
  "strong",
  "em",
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
    let targetRadius = DOT_NORMAL_RADIUS;
    let currentRadius = DOT_NORMAL_RADIUS;
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
        const shrink = !!target?.closest?.(SHRINK_SELECTOR);
        targetRadius = shrink ? DOT_HOVER_RADIUS : DOT_NORMAL_RADIUS;
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

    function drawTrail(now: number) {
      if (points.length < 2) return;

      // One continuous path through midpoints (the standard smooth-
      // freehand-line technique) — a single moveTo + a chain of
      // quadraticCurveTo calls, never multiple independent beginPath/stroke
      // calls. That single-path, single-stroke construction is what
      // guarantees the result reads as one visually continuous curved
      // stroke: there are no segment seams for overlapping semi-transparent
      // alpha to double up on, and therefore no bright joints.
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i += 1) {
        const mid = midpoint(points[i], points[i + 1]);
        ctx!.quadraticCurveTo(points[i].x, points[i].y, mid.x, mid.y);
      }
      const last = points[points.length - 1];
      ctx!.lineTo(last.x, last.y);

      // Fade is a single linear gradient along the whole path (tail -> head)
      // stroked once, not per-segment alpha — the only way to get a smooth
      // continuous fade with zero overlapping draws. Eased stops (rather
      // than two flat ones) make the fade read as "gradual toward the tail"
      // instead of a linear ramp.
      const tail = points[0];
      const head = last;
      const gradient = ctx!.createLinearGradient(tail.x, tail.y, head.x, head.y);
      const stops = [0, 0.15, 0.4, 0.7, 1];
      for (const stop of stops) {
        const eased = Math.pow(stop, 1.6);
        gradient.addColorStop(stop, `rgba(${COLOR_RGB}, ${eased * TRAIL_BASE_ALPHA})`);
      }

      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = TRAIL_WIDTH;
      ctx!.strokeStyle = gradient;
      ctx!.stroke();
      void now;
    }

    function drawDot() {
      const idleFade = hasPointer
        ? 1
        : Math.max(0, 1 - (performance.now() - lastMoveTime) / TRAIL_RETENTION_MS);
      if (idleFade <= 0) return;
      ctx!.beginPath();
      ctx!.fillStyle = `rgba(${COLOR_RGB}, ${idleFade})`;
      ctx!.arc(dotX, dotY, currentRadius, 0, Math.PI * 2);
      ctx!.fill();
    }

    function tick() {
      const now = performance.now();

      if (hasPointer) {
        dotX += (rawX - dotX) * DOT_POSITION_EASE;
        dotY += (rawY - dotY) * DOT_POSITION_EASE;
        points.push({ x: dotX, y: dotY, t: now });
      }
      currentRadius += (targetRadius - currentRadius) * DOT_RADIUS_EASE;

      // Prune by age (390ms retention) — this alone is what makes the trail
      // smoothly contract and vanish once the pointer stops moving: no new
      // points are pushed, so the tail simply ages out frame by frame.
      const cutoff = now - TRAIL_RETENTION_MS;
      while (points.length && points[0].t < cutoff) points.shift();

      // Prune by cumulative on-screen length (~125px) from the newest end
      // backward, trimming the oldest points first — covers a fast flick
      // that would otherwise paint a longer-than-intended trail within the
      // 390ms window.
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

      clear();
      drawTrail(now);
      drawDot();

      const settled = Math.abs(currentRadius - targetRadius) < 0.05;
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
