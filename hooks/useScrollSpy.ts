"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently active by watching a thin activation
 * line near the upper-middle of the viewport (below the sticky nav) and
 * reporting whichever section it falls inside. Using a thin line rather than
 * intersectionRatio avoids the failure mode where a section much taller than
 * the viewport never reaches a meaningful visible-area ratio.
 */
export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }

        // The activation line normally falls inside just one section; if a
        // transient update briefly reports more than one as intersecting,
        // prefer the later (further down) one. If none intersect (e.g.
        // mid-gap), keep the previous active id.
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          if (intersecting.has(sectionIds[i])) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      },
      {
        // Thin activation line at ~20% down the viewport, below the sticky nav.
        rootMargin: "-20% 0px -79% 0px",
        threshold: 0,
      }
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
    // Depend on a stable key rather than the array reference, since callers
    // may pass a freshly-mapped array on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
