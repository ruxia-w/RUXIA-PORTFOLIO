"use client";

import { useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { CaseStudySection } from "@/lib/types";
import styles from "./CaseStudySidebar.module.css";

type CaseStudySidebarProps = {
  sections: Pick<CaseStudySection, "id" | "label">[];
};

export function CaseStudySidebar({ sections }: CaseStudySidebarProps) {
  const ids = sections.map((s) => s.id);
  const activeId = useScrollSpy(ids);

  // Keep the URL hash in sync with scroll position without flooding history.
  useEffect(() => {
    if (!activeId) return;
    const current = window.location.hash.replace("#", "");
    if (current !== activeId) {
      window.history.replaceState(null, "", `#${activeId}`);
    }
  }, [activeId]);

  return (
    <nav className={styles.sidebar} aria-label="Case study chapters">
      <ol className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={styles.link}
              aria-current={activeId === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
