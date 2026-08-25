"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  computeFixedRow,
  computeRowAtHeight,
  GALLERY_GAP,
  GALLERY_MOBILE_MAX_CONTAINER_WIDTH,
  GALLERY_TABLET_MAX_CONTAINER_WIDTH,
  GALLERY_TARGET_HEIGHT_DESKTOP,
  GALLERY_TARGET_HEIGHT_MOBILE,
  GALLERY_TARGET_HEIGHT_TABLET,
} from "@/lib/gallery/justifiedLayout";
import styles from "./HomeGalleryWall.module.css";

export type HomeGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HomeGalleryCta = {
  href: string;
  label: string;
};

type Entry = { key: string; thumbnailWidth: number; thumbnailHeight: number; image: HomeGalleryImage };

function toEntry(item: HomeGalleryImage): Entry {
  return { key: item.src, thumbnailWidth: item.width, thumbnailHeight: item.height, image: item };
}

// The trailing CTA tile flex-grows into whatever width the last row's real
// images leave behind. At narrower (tablet) container widths, those images
// sized at the full target height can leave too little room — so the last
// row's height is capped below target whenever needed to guarantee the CTA
// keeps at least this much width to flex-grow into.
const MIN_CTA_WIDTH = 140;

function lastRowHeight(entries: Entry[], containerWidth: number, targetHeight: number): number {
  const sumRatios = entries.reduce((sum, e) => sum + e.thumbnailWidth / e.thumbnailHeight, 0);
  const gapTotal = GALLERY_GAP * entries.length; // gaps between real images + one gap before the CTA
  const maxHeightForCta = (containerWidth - gapTotal - MIN_CTA_WIDTH) / sumRatios;
  return Math.round(Math.min(targetHeight, Math.max(maxHeightForCta, 1)));
}

/**
 * Homepage-only image wall. `rows` is a curated, locked sequence of row
 * groups (editorial order is intentional — never re-sorted or auto-
 * justified across group boundaries). Each of the first N-1 rows is laid
 * out with computeFixedRow so its images alone fill the container width at
 * proportional per-item widths, matching the full Gallery page's justified
 * look row-by-row. The last row keeps its own images at their natural
 * proportional widths at the shared target height, and the trailing `cta`
 * tile flex-grows to fill whatever width is left — so it always fills the
 * row without ever being a fixed pixel width.
 */
export function HomeGalleryWall({ rows: rowGroups, cta }: { rows: HomeGalleryImage[][]; cta: HomeGalleryCta }) {
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

  const flatItems = useMemo(() => rowGroups.flat(), [rowGroups]);

  const desktopRows = useMemo(() => {
    if (isMobile || containerWidth === 0) return [];
    return rowGroups.map((group, rowIndex) => {
      const entries = group.map(toEntry);
      const isLastRow = rowIndex === rowGroups.length - 1;
      if (isLastRow) {
        const height = lastRowHeight(entries, containerWidth, targetHeight);
        return { height, items: computeRowAtHeight(entries, height), hasCta: true };
      }
      const row = computeFixedRow(entries, containerWidth, GALLERY_GAP);
      return { height: row.height, items: row.items, hasCta: false };
    });
  }, [rowGroups, containerWidth, targetHeight, isMobile]);

  if (containerWidth === 0) {
    return <div ref={containerRef} className={styles.wrap} />;
  }

  if (isMobile) {
    const mobileCtaHeight = GALLERY_TARGET_HEIGHT_MOBILE;
    return (
      <div ref={containerRef} className={styles.wrap}>
        <ul className={styles.mobileGrid}>
          {flatItems.map((item) => (
            <li key={item.src} className={styles.mobileItem}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="90vw"
                className={styles.mobileImage}
                style={{ height: mobileCtaHeight }}
              />
            </li>
          ))}
          <li className={styles.mobileItem}>
            <Link
              href={cta.href}
              className={styles.ctaTile}
              style={{ width: mobileCtaHeight, height: mobileCtaHeight, flex: "0 0 auto" }}
            >
              <span>{cta.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={styles.wrap}>
      <div className={styles.rows}>
        {desktopRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row} style={{ height: row.height }}>
            {row.items.map(({ item, width }) => (
              <div key={item.key} className={styles.tile} style={{ width, height: row.height }}>
                <Image src={item.image.src} alt={item.image.alt} fill sizes={`${width}px`} className={styles.image} />
              </div>
            ))}
            {row.hasCta ? (
              <Link
                href={cta.href}
                className={styles.ctaTile}
                style={{ flex: "1 1 0%", height: row.height }}
                aria-label="View full gallery"
              >
                <span>{cta.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
