"use client";

import { useEffect, useRef } from "react";
import pageStyles from "@/app/page.module.css";
import styles from "./HeroHeadline.module.css";

const LINE_1 = "Designing Products,";
const LINE_2 = "Connected Experiences,";
const LINE_3 = "and Systems.";
const WORDS_PER_LINE = [LINE_1, LINE_2, LINE_3].map((line) => line.split(" "));

// --- Tuning constants (kept obvious/adjustable per task brief) ---------

// How many letters on either side of the pointer's nearest letter join one
// wave (radius 2 => up to 5 letters), and how far the "ripple" travels
// before the next character's bump is scheduled.
const WAVE_RANGE_RADIUS = 2;
const WAVE_STAGGER_MS = 32; // 25–45ms/char suggested
const WAVE_DURATION_MS = 550; // 450–650ms suggested
const WAVE_AMPLITUDE_EM = 0.05; // 0.04–0.08em suggested, of the char's own font-size
const WAVE_EASING = "ease-in-out";

// Minimum time between two newly-triggered waves — the actual throttle, since
// a wave only re-fires when the nearest letter changes (see handlePointerMove).
const MIN_RETRIGGER_MS = 90;

// Probability that a letter reached by the wave also performs a reel/roll.
// Single obvious knob per task brief — 15–25% suggested.
const REEL_PROBABILITY = 0.2;
const REEL_DURATION_MS = 1000; // ~1s, matching the Wodniack reel pace — unchanged
const REEL_EASING = "cubic-bezier(0.83, 0, 0.17, 1)"; // quint ease-in-out, no overshoot

// Global caps so the effect always reads as "usually one letter, rarely two" —
// never a busy cascade, regardless of how fast the pointer moves.
const MAX_SIMULTANEOUS_REELS = 2;
const REEL_COOLDOWN_MS = 320; // 250–400ms suggested minimum gap between new reel starts
const REEL_DIRECTIONS = ["up", "down", "left", "right"] as const;
type ReelDirection = (typeof REEL_DIRECTIONS)[number];

const isLetter = (char: string) => /[a-zA-Z]/.test(char);

type LetterEntry = {
  frameEl: HTMLSpanElement;
  glyphEl: HTMLElement;
  dupeEl: HTMLElement;
  cx: number;
  cy: number;
  waveAmplitudePx: number;
  waving: boolean;
  reeling: boolean;
};

type RegisterFrame = (el: HTMLSpanElement | null) => void | (() => void);

function ReelWord({ word, registerFrame }: { word: string; registerFrame: RegisterFrame }) {
  return (
    <span className={styles.word}>
      {word.split("").map((char, index) =>
        isLetter(char) ? (
          <span key={index} ref={registerFrame} className={styles.frame}>
            <span className={styles.glyph}>{char}</span>
            <span className={styles.glyphDupe} aria-hidden="true">
              {char}
            </span>
          </span>
        ) : (
          // Punctuation stays fully static — never wrapped, never animated.
          <span key={index}>{char}</span>
        ),
      )}
    </span>
  );
}

function ReelLine({ words, registerFrame }: { words: string[]; registerFrame: RegisterFrame }) {
  return (
    <span aria-hidden="true">
      {words.map((word, index) => (
        <span key={index}>
          {index > 0 ? " " : ""}
          <ReelWord word={word} registerFrame={registerFrame} />
        </span>
      ))}
    </span>
  );
}

export function HeroHeadline() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const frameRefs = useRef<HTMLSpanElement[]>([]);

  const registerFrame: RegisterFrame = (el) => {
    if (!el) return;
    frameRefs.current.push(el);
    return () => {
      frameRefs.current = frameRefs.current.filter((entry) => entry !== el);
    };
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Reduced motion or no fine pointer (touch/tablet-without-mouse): stay on
    // the plain, unupgraded static markup — no listeners, no motion, ever.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    const section = root.closest("section");
    if (!section) return;

    let entries: LetterEntry[] = [];

    // Locks each letter's frame to its own already-rendered size (so clipping
    // never changes the approved layout), then reveals the off-frame
    // duplicate glyph used for the reel. Re-run on resize since the
    // responsive clamp() sizing changes each letter's natural dimensions.
    function upgradeAndMeasure() {
      // Reset first so natural (unclipped) sizing is what gets re-measured.
      for (const frameEl of frameRefs.current) {
        frameEl.removeAttribute("data-ready");
        frameEl.style.width = "";
        frameEl.style.height = "";
      }

      entries = frameRefs.current.map((frameEl) => {
        const rect = frameEl.getBoundingClientRect();
        frameEl.style.width = `${rect.width}px`;
        frameEl.style.height = `${rect.height}px`;
        frameEl.dataset.ready = "true";

        const fontSizePx = parseFloat(getComputedStyle(frameEl).fontSize) || 16;
        const glyphEl = frameEl.children[0] as HTMLElement;
        const dupeEl = frameEl.children[1] as HTMLElement;

        return {
          frameEl,
          glyphEl,
          dupeEl,
          cx: rect.left + rect.width / 2,
          cy: rect.top + rect.height / 2,
          waveAmplitudePx: fontSizePx * WAVE_AMPLITUDE_EM,
          waving: false,
          reeling: false,
        };
      });
    }

    function refreshPositions() {
      for (const entry of entries) {
        const rect = entry.frameEl.getBoundingClientRect();
        entry.cx = rect.left + rect.width / 2;
        entry.cy = rect.top + rect.height / 2;
      }
    }

    upgradeAndMeasure();

    let reelingCount = 0;
    let lastReelStartTime = -Infinity;

    function startReel(entry: LetterEntry) {
      lastReelStartTime = performance.now();
      reelingCount += 1;
      entry.reeling = true;

      const direction = REEL_DIRECTIONS[Math.floor(Math.random() * REEL_DIRECTIONS.length)] as ReelDirection;
      const axis = direction === "up" || direction === "down" ? "Y" : "X";
      const sign = direction === "up" || direction === "left" ? -1 : 1;

      const glyphKeyframes: Keyframe[] =
        axis === "Y"
          ? [{ translate: "0 0" }, { translate: `0 ${sign * 100}%` }]
          : [{ translate: "0 0" }, { translate: `${sign * 100}% 0` }];
      const dupeKeyframes: Keyframe[] =
        axis === "Y"
          ? [{ translate: `0 ${-sign * 100}%` }, { translate: "0 0" }]
          : [{ translate: `${-sign * 100}% 0` }, { translate: "0 0" }];

      const options: KeyframeAnimationOptions = { duration: REEL_DURATION_MS, easing: REEL_EASING, fill: "none" };
      const glyphAnim = entry.glyphEl.animate(glyphKeyframes, options);
      const dupeAnim = entry.dupeEl.animate(dupeKeyframes, options);

      Promise.allSettled([glyphAnim.finished, dupeAnim.finished]).then(() => {
        entry.reeling = false;
        reelingCount -= 1;
      });
    }

    // Re-checked at the moment the wave actually reaches the character (not
    // when the wave was first triggered), so the cap/cooldown reflect real
    // in-flight state rather than a snapshot taken one ripple-step early.
    function tryStartReel(entry: LetterEntry) {
      if (entry.reeling) return;
      if (reelingCount >= MAX_SIMULTANEOUS_REELS) return;
      if (performance.now() - lastReelStartTime < REEL_COOLDOWN_MS) return;
      if (Math.random() >= REEL_PROBABILITY) return;
      startReel(entry);
    }

    function triggerWave(origin: number) {
      for (let offset = -WAVE_RANGE_RADIUS; offset <= WAVE_RANGE_RADIUS; offset += 1) {
        const entry = entries[origin + offset];
        if (!entry || entry.waving) continue;

        const distance = Math.abs(offset);
        const delay = distance * WAVE_STAGGER_MS;

        entry.waving = true;
        const waveAnim = entry.frameEl.animate(
          [{ translate: "0 0" }, { translate: `0 ${-entry.waveAmplitudePx}px` }, { translate: "0 0" }],
          { duration: WAVE_DURATION_MS, delay, easing: WAVE_EASING, fill: "none" },
        );
        waveAnim.finished
          .then(() => {
            entry.waving = false;
          })
          .catch(() => {
            entry.waving = false;
          });

        // The reel "follows just behind the wave": eligibility is only
        // (re-)checked once the wave has actually reached this character.
        if (!entry.reeling) {
          const reelTimer = window.setTimeout(() => tryStartReel(entry), delay);
          pendingTimers.add(reelTimer);
        }
      }
    }

    const pendingTimers = new Set<number>();
    let lastOrigin = -1;
    let lastTriggerTime = 0;

    function handlePointerMove(event: PointerEvent) {
      const now = performance.now();
      if (now - lastTriggerTime < MIN_RETRIGGER_MS) return;

      let nearestIndex = -1;
      let nearestDist = Infinity;
      for (let i = 0; i < entries.length; i += 1) {
        const dx = event.clientX - entries[i].cx;
        const dy = event.clientY - entries[i].cy;
        const dist = dx * dx + dy * dy;
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestIndex = i;
        }
      }
      if (nearestIndex === -1 || nearestIndex === lastOrigin) return;

      lastOrigin = nearestIndex;
      lastTriggerTime = now;
      triggerWave(nearestIndex);
    }

    function handlePointerLeave() {
      // No new waves fire (handlePointerMove simply stops being called);
      // already-scheduled reel timers and in-flight animations finish on
      // their own via fill:"none", which is what lets them settle back to
      // the exact resting glyph without any abrupt cancellation here.
      lastOrigin = -1;
    }

    let resizeTimer: number | undefined;
    function handleResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(upgradeAndMeasure, 150);
    }

    function handleScroll() {
      refreshPositions();
    }

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(resizeTimer);
      for (const timer of pendingTimers) window.clearTimeout(timer);
      for (const entry of entries) {
        entry.frameEl.getAnimations().forEach((anim) => anim.cancel());
        entry.glyphEl.getAnimations().forEach((anim) => anim.cancel());
        entry.dupeEl.getAnimations().forEach((anim) => anim.cancel());
      }
    };
  }, []);

  return (
    <span ref={rootRef} className={styles.root}>
      <span className={pageStyles.heroLine}>
        <span className="visually-hidden">{LINE_1} </span>
        <ReelLine words={WORDS_PER_LINE[0]} registerFrame={registerFrame} />
      </span>
      <span className={pageStyles.heroLine}>
        <span className="visually-hidden">{LINE_2} </span>
        <ReelLine words={WORDS_PER_LINE[1]} registerFrame={registerFrame} />
      </span>
      <span className={`${pageStyles.heroLine} ${pageStyles.heroLastLineRow}`}>
        <span>
          <span className="visually-hidden">{LINE_3} </span>
          <ReelLine words={WORDS_PER_LINE[2]} registerFrame={registerFrame} />
        </span>
        <span className={pageStyles.heroRoleLabel}>Product Designer · Experience Designer</span>
      </span>
    </span>
  );
}
