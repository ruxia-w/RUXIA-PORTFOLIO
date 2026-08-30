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
 */
export function useDiagramReveal<T extends HTMLElement = HTMLDivElement>() {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { revealed, ref };
}
