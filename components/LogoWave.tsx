"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import styles from "./LogoWave.module.css";

const LOGO_TEXT = "RUXIA WANG";

// Tuning constants — one obvious knob per tunable, same convention as
// HeroHeadline.tsx's own "Tuning constants" block.
const LETTER_LIFT_PX = 2;
const LETTER_STAGGER_MS = 27; // 25-30ms suggested
const LETTER_DURATION_MS = 450; // 400-500ms suggested
// Same choice as HeroHeadline's own letter-bump WAVE_EASING — a soft,
// symmetric ease-in-out reads as the "very gentle return" the brief asks
// for on both the rise and the settle back down.
const LETTER_EASING = "ease-in-out";

const ACCENT_COLOR = "#315FD5"; // Cobalt Blue
// Indices into the letters-only sequence below (the space between the two
// words is never its own animated unit, so it isn't counted here) — the
// first letter of each word, i.e. "one or two letters" per the brief.
const ACCENT_LETTER_INDICES = new Set([0, 5]);

const isLetter = (char: string) => /[a-zA-Z]/.test(char);

export function LogoWave({ className }: { className?: string }) {
  // Plain ref array, not React state: the animation is driven entirely by
  // the Web Animations API (same approach as HeroHeadline), so hovering the
  // logo never triggers a re-render.
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  const registerLetter = (el: HTMLSpanElement | null) => {
    if (!el) return;
    letterRefs.current.push(el);
    return () => {
      letterRefs.current = letterRefs.current.filter((entry) => entry !== el);
    };
  };

  function handlePointerEnter(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;

    // Checked fresh on every hover (cheap, and live-matches an OS-level
    // preference change without needing a separate change-listener/effect
    // for a component this small) — reduced motion or no fine pointer:
    // the handler simply does nothing, so hovering/tapping behaves exactly
    // like plain text.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    letterRefs.current.forEach((el, index) => {
      // Cancel any still-running animation from a rapid re-hover first, so
      // "play once per mouse enter" never stacks overlapping animations on
      // the same letter — each enter always starts clean from rest.
      el.getAnimations().forEach((anim) => anim.cancel());

      const options: KeyframeAnimationOptions = {
        duration: LETTER_DURATION_MS,
        delay: index * LETTER_STAGGER_MS,
        easing: LETTER_EASING,
        fill: "none",
      };

      if (ACCENT_LETTER_INDICES.has(index)) {
        // Read the letter's own current (theme-aware) color at the moment
        // of hover, rather than assuming light or dark — this is also what
        // "restores" it afterward: the animation returns to the exact same
        // value, not a hardcoded fallback.
        const restingColor = getComputedStyle(el).color;
        el.animate(
          [
            { translate: "0 0", color: restingColor },
            { translate: `0 -${LETTER_LIFT_PX}px`, color: ACCENT_COLOR },
            { translate: "0 0", color: restingColor },
          ],
          options,
        );
      } else {
        el.animate(
          [{ translate: "0 0" }, { translate: `0 -${LETTER_LIFT_PX}px` }, { translate: "0 0" }],
          options,
        );
      }
    });
  }

  return (
    <Link href="/" className={className} onPointerEnter={handlePointerEnter}>
      {/* Full text for assistive tech / no-JS, identical to how
          HeroHeadline pairs a visually-hidden accessible string with its
          own aria-hidden, letter-split animated markup. */}
      <span className="visually-hidden">{LOGO_TEXT}</span>
      <span aria-hidden="true">
        {LOGO_TEXT.split("").map((char, i) =>
          isLetter(char) ? (
            <span key={i} ref={registerLetter} className={styles.letter}>
              {char}
            </span>
          ) : (
            // The space between the two words stays plain, unwrapped text —
            // never animated, never measured.
            <span key={i}>{char}</span>
          ),
        )}
      </span>
    </Link>
  );
}
