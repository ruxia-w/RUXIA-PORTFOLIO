"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery/types";
import { GalleryTile } from "./GalleryTile";
import {
  computeJustifiedRows,
  GALLERY_GAP,
  GALLERY_MOBILE_MAX_CONTAINER_WIDTH,
  GALLERY_TABLET_MAX_CONTAINER_WIDTH,
  GALLERY_TARGET_HEIGHT_DESKTOP,
  GALLERY_TARGET_HEIGHT_MOBILE,
  GALLERY_TARGET_HEIGHT_TABLET,
} from "@/lib/gallery/justifiedLayout";
import styles from "./GalleryGrid.module.css";

type GalleryGridProps = {
  items: GalleryItem[];
  onOpen: (index: number) => void;
};

export function GalleryGrid({ items, onOpen }: GalleryGridProps) {
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

  const isMobile = containerWidth > 0 && containerWidth < GALLERY_MOBILE_MAX_CONTAINER_WIDTH;
  const targetHeight =
    containerWidth < GALLERY_TABLET_MAX_CONTAINER_WIDTH ? GALLERY_TARGET_HEIGHT_TABLET : GALLERY_TARGET_HEIGHT_DESKTOP;

  const rows = useMemo(() => {
    if (isMobile || containerWidth === 0) return [];
    return computeJustifiedRows(items, containerWidth, targetHeight, GALLERY_GAP);
  }, [items, containerWidth, targetHeight, isMobile]);

  if (containerWidth === 0) {
    return <div ref={containerRef} className={styles.wrap} />;
  }

  if (isMobile) {
    return (
      <div ref={containerRef} className={styles.wrap}>
        <ul className={styles.mobileGrid}>
          {items.map((item, index) => (
            <li key={item.id} className={styles.mobileItem}>
              <button type="button" className={styles.mobileTile} onClick={() => onOpen(index)} aria-label={`Open ${item.title}`}>
                <Image
                  src={item.thumbnail}
                  alt=""
                  width={item.thumbnailWidth}
                  height={item.thumbnailHeight}
                  sizes="90vw"
                  className={styles.mobileImage}
                  style={{ height: GALLERY_TARGET_HEIGHT_MOBILE }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={styles.wrap}>
      <div className={styles.rows}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row} style={{ height: row.height }}>
            {row.items.map(({ item, width }) => {
              const index = items.indexOf(item);
              return <GalleryTile key={item.id} item={item} width={width} height={row.height} onOpen={() => onOpen(index)} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
