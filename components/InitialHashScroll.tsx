"use client";

import { useEffect } from "react";

// Captured once when this module is first evaluated, before any of our own
// code (e.g. scroll-spy's history.replaceState) can mutate the URL hash.
// Reading window.location.hash directly inside the effect below is not safe:
// React StrictMode double-invokes effects in development, and by the second
// invocation the scroll-spy may have already written a hash that was never
// part of the actual navigation.
const initialHash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";

/**
 * Next.js App Router's client-side scroll handling can override the browser's
 * native scroll-to-fragment on a direct hash load. This waits for layout
 * (including reserved image dimensions) to settle, then scrolls the target
 * heading into view — respecting each section's `scroll-margin-top` so it
 * lands below the sticky global nav.
 */
export function InitialHashScroll() {
  useEffect(() => {
    if (!initialHash) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    // Wait a frame for layout (fonts, reserved image space) to settle before
    // scrolling, per the "scroll after layout is stable" requirement.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(initialHash);
        target?.scrollIntoView({ behavior, block: "start" });
      });
    });
  }, []);

  return null;
}
