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
// Shrinks the root's bottom edge UPWARD by 12% of the viewport height, so
// an element only counts as "intersecting" once it has risen to roughly
// the 88% line of the viewport (within the requested 85-90% band) — a
// percentage, not a fixed px amount, so the trigger point scales correctly
// with viewport height instead of mattering far more on a short screen
// than a tall one.
//
// Deliberately a NEGATIVE (shrinking) margin, never a positive (growing)
// one: a previous version of this used a positive margin to extend the
// root *past* the real viewport, intending an earlier lead-in — but a
// grown root can, in principle, end up larger than the page's own
// still-settling layout at the exact moment the observer's first check
// runs (e.g. before web fonts swap in or images finish sizing), making
// far-below-the-fold content register as "intersecting" immediately on
// mount. Once that happens this one-shot reveal (see useDiagramReveal.ts)
// disconnects and never fires again, so the entrance looks like it already
// "played" before the visitor ever scrolled there. A shrinking margin
// can't produce that failure mode: it only ever makes the detection zone
// SMALLER/stricter than the true viewport, never larger, so it can't
// register something as in view before it actually, visibly is.
const ROOT_MARGIN = "0px 0px -12% 0px";

// 0: an "entry marker" rather than a percentage of the whole element's own
// height. For a box scrolling up into view, its top edge is always the
// first part to cross the ROOT_MARGIN line above — so threshold 0 fires at
// the exact same instant a dedicated 1px marker glued to that top edge
// would, without needing one. A tall reveal target (a full project row, a
// long case-study section) would otherwise need the hook's own 0.15
// default — 15% of ITS OWN height on screen — before revealing, which for
// a very tall element can be a long scroll after its top edge already
// crossed in.
const THRESHOLD = 0;

export function ScrollReveal({
  as = "div",
  id,
  className,
  style,
  "aria-labelledby": ariaLabelledBy,
  children,
}: ScrollRevealProps) {
  const { revealed, ref } = useDiagramReveal<HTMLElement>({ rootMargin: ROOT_MARGIN, threshold: THRESHOLD });
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
