"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery/types";
import { GalleryTile } from "./GalleryTile";
import { computeJustifiedRows } from "@/lib/gallery/justifiedLayout";
import styles from "./GalleryGrid.module.css";

type GalleryGridProps = {
  items: GalleryItem[];
  onOpen: (index: number) => void;
  /** True while the Discover filter is active — Motion items autoplay in place instead of requiring hover. */
  isDiscover?: boolean;
};

// Only used until the real container width is measured (or on the server,
// where there's no viewport to measure at all) — an arbitrary desktop-sized
// stand-in so computeJustifiedRows always has a positive width to work with
// and every item is always present in the DOM, at every viewport, from the
// very first render.
const FALLBACK_CONTAINER_WIDTH = 1440;

// Local to the /gallery page only — deliberately NOT the shared
// GALLERY_TARGET_HEIGHT_DESKTOP / GALLERY_GAP from lib/gallery/justifiedLayout,
// since HomeGalleryWall (the homepage) also reads those and must stay exactly
// as it is. ~10% shorter target row height and a slightly tighter gap (both
// within the requested 8-12% / 6-8px ranges) increase first-screen density
// without touching the shared constants or the justified-row algorithm itself
// — tile proportions/hierarchy are still fully preserved, just smaller.
const GALLERY_PAGE_ROW_HEIGHT = 306;
const GALLERY_PAGE_GAP = 6;

export function GalleryGrid({ items, onOpen, isDiscover }: GalleryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function measure() {
      if (el) setContainerWidth(el.clientWidth);
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Always the same rows/tiles structure, at every viewport width — no JS
  // branching between different DOM trees, so items are never dropped. Each
  // row's tiles are sized by computeJustifiedRows to sum to exactly `width`,
  // so the composition (mixed tile widths, row grouping, image order) simply
  // scales down together as the window narrows rather than reflowing into a
  // different column layout.
  const rows = useMemo(() => {
    const width = containerWidth > 0 ? containerWidth : FALLBACK_CONTAINER_WIDTH;
    return computeJustifiedRows(items, width, GALLERY_PAGE_ROW_HEIGHT, GALLERY_PAGE_GAP);
  }, [items, containerWidth]);

  return (
    <div ref={containerRef} className={styles.wrap}>
      <div className={styles.rows}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row} style={{ height: row.height }}>
            {row.items.map(({ item, width }) => {
              const index = items.indexOf(item);
              return (
                <GalleryTile
                  key={item.id}
                  item={item}
                  width={width}
                  height={row.height}
                  onOpen={() => onOpen(index)}
                  autoplayInView={isDiscover}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
