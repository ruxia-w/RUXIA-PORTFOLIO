"use client";

import { useEffect, useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { GalleryFilters } from "./GalleryFilters";
import type { GalleryFilterValue } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryViewer } from "./GalleryViewer";
import type { GalleryItem } from "@/lib/gallery/types";
import {
  discoverExcluded,
  discoverOrder,
  industrialDesignOrder,
  motionOrder,
  orderItemsByIds,
  productDesignOrder,
} from "@/lib/gallery/order";
import styles from "./GalleryPageClient.module.css";

type GalleryPageClientProps = {
  items: GalleryItem[];
};

/** The items a given filter tab shows, in display order. */
function itemsForFilter(items: GalleryItem[], filter: GalleryFilterValue): GalleryItem[] {
  if (filter === "discover") {
    const eligible = items.filter((item) => !discoverExcluded.includes(item.id));
    return orderItemsByIds(eligible, discoverOrder);
  }
  const filtered = items.filter((item) => item.category === filter);
  if (filter === "animation") return orderItemsByIds(filtered, motionOrder);
  if (filter === "product-design") return orderItemsByIds(filtered, productDesignOrder);
  if (filter === "industrial-design") return orderItemsByIds(filtered, industrialDesignOrder);
  // Branding has no separate order list: lib/gallery/branding.ts's array order is its display order.
  return filtered;
}

export function GalleryPageClient({ items }: GalleryPageClientProps) {
  const [filter, setFilter] = useState<GalleryFilterValue>("discover");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const availableCategories = useMemo(() => {
    // Fixed canonical order so the filter list doesn't reshuffle whenever the
    // Discover art-direction order changes — only presence/absence (e.g.
    // Animation) is data-driven.
    const canonicalOrder: GalleryItem["category"][] = ["product-design", "branding", "industrial-design", "animation"];
    const present = new Set(items.map((item) => item.category));
    return canonicalOrder.filter((category) => present.has(category));
  }, [items]);

  const visibleItems = useMemo(() => itemsForFilter(items, filter), [items, filter]);

  // Deep links such as /gallery?category=branding&item=branding-ocean-lab
  // (used by homepage tiles): select that tab and open that artwork in the
  // viewer. Read once on mount, from window.location rather than
  // useSearchParams, so the page stays fully prerendered. Unknown values
  // are ignored and the default Discover view shows.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (!category || !(["discover", ...availableCategories] as string[]).includes(category)) return;
    const nextFilter = category as GalleryFilterValue;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilter(nextFilter);
    const itemId = params.get("item");
    if (!itemId) return;
    const index = itemsForFilter(items, nextFilter).findIndex((item) => item.id === itemId);
    if (index >= 0) setActiveIndex(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] ?? null : null;

  function handleFilterChange(value: GalleryFilterValue) {
    setFilter(value);
    setActiveIndex(null);
  }

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>GALLERY</h1>
        <p className={styles.intro}>Selected design work, explorations, and visual experiments.</p>
      </header>

      <div className={styles.filters}>
        <GalleryFilters value={filter} onChange={handleFilterChange} availableCategories={availableCategories} />
      </div>

      <GalleryGrid items={visibleItems} onOpen={setActiveIndex} isDiscover={filter === "discover"} />

      <GalleryViewer item={activeItem} onClose={() => setActiveIndex(null)} />

      <Footer />
    </main>
  );
}
