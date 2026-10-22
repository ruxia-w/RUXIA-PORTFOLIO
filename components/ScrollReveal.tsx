"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { useDiagramReveal } from "./useDiagramReveal";

type Tag = "div" | "header" | "article" | "section";

type ScrollRevealProps = {
  as?: Tag;
  id?: string;
  className?: string;
  /** Passed through as-is — several case-study blocks (media width caps,
   * the equalHeight mediaGroup's --grid-cols custom property) already set
   * their own inline style on this exact element. */
  style?: CSSProperties;
  "aria-labelledby"?: string;
  children: ReactNode;
};

/**
 * Drop-in replacement for a plain <div>/<header>/<article> that adds a
 * one-time, scroll-triggered entrance reveal — reuses the exact same
 * IntersectionObserver hook (components/useDiagramReveal.ts) already shared
 * by every AURIC/Trace/SmartPuppy case-study diagram, rather than a second
 * observer implementation. "Once per page visit, never re-hides on scroll
 * up" and "falls back cleanly if IntersectionObserver is unsupported" both
 * come from that hook unchanged — see its own doc comment.
 *
 * Renders the SAME tag in place, never an extra wrapper element: several
 * callers (.sectionHeader, .project) are the actual grid/flex item their
 * parent lays out and/or carry the id a nav anchor or scroll-margin-top
 * targets directly (e.g. #selected-work) — wrapping them in a new <div>
 * would change what participates in the parent's grid track sizing, or
 * move the anchor target to a different box. This component IS that box.
 *
 * All actual visual styling (the hidden/revealed opacity+transform pair,
 * durations, the reduced-motion and no-JS fallbacks) lives in CSS, keyed
 * off the caller's own existing className plus the `data-revealed`
 * attribute this sets — see app/page.module.css. This component only ever
 * decides *when* to flip that attribute, never *how* the reveal looks.
 */
// Shrinks the bottom edge of the intersection root by 12% of the viewport
// height, so an element must scroll meaningfully past the fold before
// counting as "intersecting" — not just graze the very bottom edge, which
// (especially right below the Hero's own content-driven, no-min-height
// section) could otherwise fire the reveal within the very first frame,
// before the user has scrolled at all. Only affects elements near that
// edge; anything already substantially visible at mount still intersects
// immediately, so nothing already on screen is ever delayed.
const ROOT_MARGIN = "0px 0px -12% 0px";

export function ScrollReveal({
  as = "div",
  id,
  className,
  style,
  "aria-labelledby": ariaLabelledBy,
  children,
}: ScrollRevealProps) {
  const { revealed, ref } = useDiagramReveal<HTMLElement>({ rootMargin: ROOT_MARGIN });
  return createElement(
    as,
    {
      ref,
      id,
      className,
      style,
      "aria-labelledby": ariaLabelledBy,
      "data-revealed": revealed ? "true" : undefined,
    },
    children,
  );
}
