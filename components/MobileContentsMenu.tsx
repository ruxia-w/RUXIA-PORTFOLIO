"use client";

import { useRef, useState } from "react";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import type { CaseStudySection } from "@/lib/types";
import styles from "./MobileContentsMenu.module.css";

type MobileContentsMenuProps = {
  sections: Pick<CaseStudySection, "id" | "label">[];
};

export function MobileContentsMenu({ sections }: MobileContentsMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(panelRef, open, close);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function goToSection(id: string) {
    setOpen(false);
    // Focus the destination heading after the menu closes and the browser
    // has scrolled to the anchor.
    requestAnimationFrame(() => {
      const heading = document.getElementById(`${id}-heading`);
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    });
  }

  return (
    <div className={styles.wrapper}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Contents
      </button>

      {open ? (
        <div className={styles.overlay} role="presentation" onClick={close}>
          <div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Contents"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.panelHeader}>
              <p className={styles.panelTitle}>Contents</p>
              <button type="button" className={styles.closeButton} onClick={close}>
                Close
              </button>
            </div>
            <ol className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={styles.link}
                    onClick={() => goToSection(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
    </div>
  );
}
