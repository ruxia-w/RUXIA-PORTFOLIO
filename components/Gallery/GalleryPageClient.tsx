"use client";

import { useMemo, useState } from "react";
import { GalleryFilters } from "./GalleryFilters";
import type { GalleryFilterValue } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryViewer } from "./GalleryViewer";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryPageClient.module.css";

type GalleryPageClientProps = {
  items: GalleryItem[];
};

export function GalleryPageClient({ items }: GalleryPageClientProps) {
  const [filter, setFilter] = useState<GalleryFilterValue>("discover");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const availableCategories = useMemo(() => {
    // Fixed canonical order so the filter list doesn't reshuffle whenever the
    // Discover art-direction order changes — only presence/absence (e.g.
    // Animation) is data-driven.
    const canonicalOrder: GalleryItem["category"][] = ["product-design", "industrial-design", "animation"];
    const present = new Set(items.map((item) => item.category));
    return canonicalOrder.filter((category) => present.has(category));
  }, [items]);

  const visibleItems = useMemo(
    () => (filter === "discover" ? items : items.filter((item) => item.category === filter)),
    [items, filter]
  );

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] ?? null : null;

  function handleFilterChange(value: GalleryFilterValue) {
    setFilter(value);
    setActiveIndex(null);
  }

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.intro}>Selected design work, explorations, and visual experiments.</p>
      </header>

      <div className={styles.filters}>
        <GalleryFilters value={filter} onChange={handleFilterChange} availableCategories={availableCategories} />
      </div>

      <GalleryGrid items={visibleItems} onOpen={setActiveIndex} />

      <GalleryViewer item={activeItem} onClose={() => setActiveIndex(null)} />
    </main>
  );
}
