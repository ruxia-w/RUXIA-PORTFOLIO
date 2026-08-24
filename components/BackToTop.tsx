"use client";

import styles from "./BackToTop.module.css";

export function BackToTop() {
  const returnToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={returnToTop}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20V5M5.5 11.5 12 5l6.5 6.5" />
      </svg>
    </button>
  );
}
