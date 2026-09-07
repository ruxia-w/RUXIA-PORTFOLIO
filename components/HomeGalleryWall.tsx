"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  /** When set, the tile autoplays this video (muted, looped, desktop only) once it's in or near the viewport — see HomeGalleryTile. */
  video?: string;
  /**
   * Tag shared by tiles (within the same row) that should scale together as
   * one visual group — e.g. two adjacent tiles whose COMBINED width should
   * match another group's combined width. Every member scales by the same
   * factor, so each tile's own aspect ratio and its size relative to its
   * groupmates are both preserved (uncropped) — see matchGroupWidthTo.
   */
  widthGroup?: string;
  /**
   * Set on any one member of a widthGroup: the `src`s (searched across every
   * row) whose combined computed width this tile's whole group should be
   * scaled to match. The group's shared height changes with the scale
   * (taller/shorter than its row's base height, uncropped); the row's
   * wrapper grows to fit it, and unrelated tiles/rows are untouched.
   */
  matchGroupWidthTo?: string[];
};

type HomeGalleryCta = {
  href: string;
  label: string;
  /** Class name for the arrow glyph, e.g. the page's own `.linkArrow` — lets the CTA reuse the exact same arrow implementation used elsewhere on the page instead of a one-off. */
  arrowClassName?: string;
};

type Entry = { key: string; thumbnailWidth: number; thumbnailHeight: number; image: HomeGalleryImage };

function toEntry(item: HomeGalleryImage): Entry {
  return { key: item.src, thumbnailWidth: item.width, thumbnailHeight: item.height, image: item };
}

// The trailing CTA tile flex-grows into whatever width the last row's real
// images leave behind. At narrower (tablet) container widths, those images
// sized at the full target height can leave too little room — so the last
// row's height is capped below target whenever needed to guarantee the CTA
// keeps at least this much width to flex-grow into. Raised from the original
// 140px so the CTA reads as a deliberate, substantial tile rather than a
// narrow leftover column — this only affects HomeGalleryWall's single
// homepage usage, not the full Gallery page (which has its own layout code).
const MIN_CTA_WIDTH = 220;

function lastRowHeight(entries: Entry[], containerWidth: number, targetHeight: number): number {
  const sumRatios = entries.reduce((sum, e) => sum + e.thumbnailWidth / e.thumbnailHeight, 0);
  const gapTotal = GALLERY_GAP * entries.length; // gaps between real images + one gap before the CTA
  const maxHeightForCta = (containerWidth - gapTotal - MIN_CTA_WIDTH) / sumRatios;
  return Math.round(Math.min(targetHeight, Math.max(maxHeightForCta, 1)));
}

/**
 * Desktop tile. Plain image by default; when `image.video` is set, it
 * autoplays (muted, looped, playsInline, no native controls) as soon as the
 * tile enters or nears the viewport — no hover required, unlike GalleryTile
 * on /gallery, which intentionally keeps its separate hover-to-play
 * behavior. Poster stays visible as the fallback/initial state until the
 * video actually starts (`onPlaying`), then crossfades in — same visual
 * mechanism as before, just triggered by IntersectionObserver instead of a
 * pointer event. Pauses on leaving the viewport and resumes (without
 * rewinding) on re-entry, so off-screen tiles aren't playing needlessly.
 * Respects prefers-reduced-motion (live-updating, matching
 * PhoneMediaViewer's pattern) by never starting playback at all. Own
 * per-tile state/observer is why this is a component rather than inline
 * JSX in a .map(). Sizing/positioning stays exactly the same `.tile` div
 * contract as before, driven by the same width/height the row layout
 * already computes.
 */
function HomeGalleryTile({ image, width, height }: { image: HomeGalleryImage; width: number; height: number }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!image.video || reducedMotion) return;
    const tile = tileRef.current;
    const video = videoRef.current;
    if (!tile || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load only the tiles that actually come near the viewport.
          if (!video.getAttribute("src")) video.src = image.video!;
          void video.play().catch(() => {
            // Keep the poster visible if the browser cannot start playback.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0, rootMargin: "200px" } // "in or near the viewport"
    );
    observer.observe(tile);
    return () => observer.disconnect();
  }, [image.video, reducedMotion]);

  return (
    <div ref={tileRef} className={styles.tile} style={{ width, height }} data-playing={playing || undefined}>
      <Image src={image.src} alt={image.alt} fill sizes={`${width}px`} className={styles.image} />
      {image.video ? (
        <>
          <video
            ref={videoRef}
            className={styles.preview}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setPlaying(false)}
          />
          <span className={styles.playBadge} aria-hidden="true">
            ▶
          </span>
        </>
      ) : null}
    </div>
  );
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
    const rows: {
      height: number; // single shared height for every tile in the row, including the CTA
      items: Array<{ item: Entry; width: number; height: number }>;
      hasCta: boolean;
    }[] = [];
    rowGroups.forEach((group, rowIndex) => {
      const entries = group.map(toEntry);
      const isLastRow = rowIndex === rowGroups.length - 1;
      if (isLastRow) {
        // Target the row directly above (its real computeFixedRow height, not
        // the generic constant) so the last row reads as visually substantial
        // as its neighbor instead of defaulting shorter — falls back to the
        // shared target height only if this is the sole row. maxHeightForCta
        // (inside lastRowHeight) still applies on top, so the CTA's minimum
        // width is never sacrificed to match a very tall previous row.
        const matchHeight = rows.length > 0 ? rows[rows.length - 1].height : targetHeight;
        const height = lastRowHeight(entries, containerWidth, matchHeight);
        const items = computeRowAtHeight(entries, height).map((entryItem) => ({ ...entryItem, height }));
        rows.push({ height, items, hasCta: true });
        return;
      }
      const row = computeFixedRow(entries, containerWidth, GALLERY_GAP);
      const items = row.items.map((entryItem) => ({ ...entryItem, height: row.height }));
      rows.push({ height: row.height, items, hasCta: false });
    });

    // Second pass: resolve each widthGroup now that every row's natural
    // widths are known. A group's members all scale by the same factor —
    // (target combined width) / (their own natural combined width) — so
    // each tile's own aspect ratio AND its size relative to its groupmates
    // are both preserved; nothing is cropped, and no single tile is
    // stretched independently of the others.
    const widthBySrc = new Map<string, number>();
    rows.forEach((row) => row.items.forEach(({ item, width }) => widthBySrc.set(item.image.src, width)));

    rows.forEach((row) => {
      const groupIds = new Set(
        row.items.map(({ item }) => item.image.widthGroup).filter((id): id is string => Boolean(id))
      );
      const scaleByGroup = new Map<string, number>();
      groupIds.forEach((groupId) => {
        const members = row.items.filter(({ item }) => item.image.widthGroup === groupId);
        const targetSrcs = members.flatMap(({ item }) => item.image.matchGroupWidthTo ?? []);
        if (targetSrcs.length === 0) return;
        const naturalSum = members.reduce((sum, m) => sum + m.width, 0);
        const targetSum = targetSrcs.reduce((sum, src) => sum + (widthBySrc.get(src) ?? 0), 0);
        if (naturalSum > 0 && targetSum > 0) scaleByGroup.set(groupId, targetSum / naturalSum);
      });

      row.items = row.items.map((entryItem) => {
        const groupId = entryItem.item.image.widthGroup;
        const scale = groupId ? scaleByGroup.get(groupId) : undefined;
        if (!scale) return entryItem;
        return { ...entryItem, width: Math.round(entryItem.width * scale), height: Math.round(entryItem.height * scale) };
      });

      // Third pass: adopt the tallest resulting height (from any scaled
      // group) as the row's single shared height — used by the CTA and the
      // row wrapper itself — then bring every remaining (ungrouped) item up
      // to that same height too, recomputing its width from its OWN aspect
      // ratio at the new height exactly like every other tile in this file
      // (no stretching, no cropping — the tile's box ratio always equals the
      // image's own ratio). This keeps the whole row on one consistent
      // top/bottom baseline instead of shorter siblings floating inside a
      // taller wrapper. A no-op whenever no widthGroup changed this row's
      // height (i.e. every other row).
      const rowHeight = Math.max(row.height, ...row.items.map(({ height }) => height));
      row.items = row.items.map((entryItem) => {
        if (entryItem.height === rowHeight) return entryItem;
        const ratio = entryItem.item.thumbnailWidth / entryItem.item.thumbnailHeight;
        return { ...entryItem, width: Math.round(ratio * rowHeight), height: rowHeight };
      });
      row.height = rowHeight;
    });

    return rows;
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
              <span aria-hidden="true" className={cta.arrowClassName}>
                ↗
              </span>
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
            {row.items.map(({ item, width, height }) => (
              <HomeGalleryTile key={item.key} image={item.image} width={width} height={height} />
            ))}
            {row.hasCta ? (
              <Link
                href={cta.href}
                className={styles.ctaTile}
                style={{ flex: "1 1 0%", height: row.height }}
                aria-label="View full gallery"
              >
                <span>{cta.label}</span>
                <span aria-hidden="true" className={cta.arrowClassName}>
                  ↗
                </span>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
