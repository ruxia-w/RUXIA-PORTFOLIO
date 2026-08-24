"use client";

import { galleryCategoryLabels } from "@/lib/gallery/projects";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryFilters.module.css";

export type GalleryFilterValue = "discover" | GalleryItem["category"];

type GalleryFiltersProps = {
  value: GalleryFilterValue;
  onChange: (value: GalleryFilterValue) => void;
  /** Categories with at least one item — filters with none are hidden (e.g. Animation until populated). */
  availableCategories: GalleryItem["category"][];
};

export function GalleryFilters({ value, onChange, availableCategories }: GalleryFiltersProps) {
  const options: GalleryFilterValue[] = ["discover", ...availableCategories];

  return (
    <nav className={styles.wrap} aria-label="Filter gallery">
      <ul className={styles.list}>
        {options.map((option) => (
          <li key={option}>
            <button
              type="button"
              className={styles.filter}
              aria-current={value === option ? "true" : undefined}
              onClick={() => onChange(option)}
            >
              {galleryCategoryLabels[option]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
