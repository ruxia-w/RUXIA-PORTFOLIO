"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryCategoryLabels } from "@/lib/gallery/projects";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryTile.module.css";

type GalleryTileProps = {
  item: GalleryItem;
  width: number;
  height: number;
  onOpen: () => void;
  /** Discover only: autoplay this tile's video once it's in/near the viewport instead of requiring hover — see the IntersectionObserver effect below. */
  autoplayInView?: boolean;
};

export function GalleryTile({ item, width, height, onOpen, autoplayInView }: GalleryTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRequested = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoMedia = item.media.find((media) => media.type === "video");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  function startPreview() {
    const video = videoRef.current;
    if (!video || !videoMedia || reducedMotion) return;
    previewRequested.current = true;
    // Load only the cards the visitor actually previews.
    if (!video.getAttribute("src")) video.src = videoMedia.src;
    void video.play().catch(() => {
      // Keep the poster visible if the browser cannot start playback.
    });
  }

  function stopPreview() {
    previewRequested.current = false;
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (video.readyState > 0) video.currentTime = 0;
    }
    setPlaying(false);
  }

  // Discover only: play automatically once the tile is in or near the
  // viewport (no hover needed), and pause again once it's substantially
  // offscreen — same IntersectionObserver pattern already used by
  // HomeGalleryTile on the homepage. Untouched for every other filter,
  // where the pointer/focus handlers below keep driving the preview.
  useEffect(() => {
    if (!autoplayInView || !videoMedia || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          previewRequested.current = true;
          if (!video.getAttribute("src")) video.src = videoMedia.src;
          void video.play().catch(() => {
            // Keep the poster visible if the browser cannot start playback.
          });
        } else {
          previewRequested.current = false;
          video.pause();
        }
      },
      { threshold: 0, rootMargin: "200px" } // "in or near the viewport"
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [autoplayInView, videoMedia, reducedMotion]);

  return (
    <button
      type="button"
      className={styles.tile}
      style={{ width, height }}
      onPointerEnter={(event) => {
        if (!autoplayInView && event.pointerType !== "touch") startPreview();
      }}
      onPointerLeave={() => {
        if (!autoplayInView) stopPreview();
      }}
      onFocus={(event) => {
        if (!autoplayInView && event.currentTarget.matches(":focus-visible")) startPreview();
      }}
      onBlur={() => {
        if (!autoplayInView) stopPreview();
      }}
      onClick={() => {
        if (!autoplayInView) stopPreview();
        onOpen();
      }}
      data-playing={playing || undefined}
      aria-label={`Open ${item.title}`}
    >
      <span className="visually-hidden">
        {item.title} — {galleryCategoryLabels[item.category]}
      </span>
      <Image
        src={item.thumbnail}
        alt=""
        fill
        sizes={`${width}px`}
        className={styles.image}
        style={{ objectPosition: item.thumbnailPosition ?? "center" }}
      />
      {videoMedia ? (
        <>
          <video
            ref={videoRef}
            className={styles.preview}
            style={{ objectPosition: item.thumbnailPosition ?? "center" }}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => {
              if (previewRequested.current) setPlaying(true);
              else stopPreview();
            }}
            onError={stopPreview}
          />
          <span className={styles.playBadge} aria-hidden="true">▶</span>
        </>
      ) : null}
    </button>
  );
}
