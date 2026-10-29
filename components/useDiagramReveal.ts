import { useEffect, useRef, useState } from "react";

/**
 * One-time IntersectionObserver-driven reveal, shared by every AURIC
 * diagram: sets `revealed` true the first time the wrapper enters the
 * viewport (threshold 0.15), then disconnects.
 *
 * `revealed` must start `false` unconditionally — never derived from a
 * browser API (e.g. `typeof IntersectionObserver`). That check evaluates
 * differently on the server (no IntersectionObserver global in Node) than
 * on the client's first render (present in every real browser), which
 * previously produced a different root wrapper className between SSR
 * markup and the first client render — a hydration mismatch. Starting from
 * a hardcoded `false` keeps server and first-client-render output
 * identical; the reveal then only ever happens after mount, inside an
 * effect, which cannot cause a mismatch.
 *
 * `options.rootMargin` is optional and defaults to unset (the original,
 * unchanged "0px" behavior every existing diagram call-site still gets,
 * since none of them pass it) — added so a caller whose trigger element
 * can sit near the bottom edge of a short/variable-height viewport (e.g. a
 * homepage section just below a content-driven-height Hero) can require a
 * little more of the viewport before counting as "intersecting", so the
 * reveal plays as the user scrolls meaningfully toward it rather than
 * finishing before they do. It never delays something already prominently
 * in view at mount — the observer's first callback still fires immediately
 * for that case, margin or not.
 *
 * `options.threshold` defaults to 0.15 (every existing diagram call-site's
 * original, unchanged behavior, since none of them pass it) — ScrollReveal
 * passes 0 instead, so a tall reveal target (a whole project row, a long
 * case-study section) triggers off its first pixel of intersection — an
 * "entry marker" — rather than needing 15% of its own full height on
 * screen, which a short entering edge of a very tall element could take a
 * long scroll to satisfy.
 */
export function useDiagramReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  rootMargin?: string;
  threshold?: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Defensive fallback for browsers without IntersectionObserver
      // support. Never reached during SSR (effects don't run there) and
      // essentially never reached in any evergreen browser today — this is
      // a deliberate one-time mount-time state set, not a derived value,
      // so it doesn't fit the "compute during render instead" heuristic
      // the lint rule otherwise encourages.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // options is read once at mount, matching this hook's existing
    // run-once-per-mount contract (deps intentionally stay empty, exactly
    // as before this parameter existed) — a caller re-rendering with a
    // fresh object literal each time must not re-trigger the whole setup.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { revealed, ref };
}
