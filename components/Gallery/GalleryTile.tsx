"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryTile.module.css";

type GalleryTileProps = {
  item: GalleryItem;
  width: number;
  height: number;
  onOpen: () => void;
};

export function GalleryTile({ item, width, height, onOpen }: GalleryTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRequested = useRef(false);
  const [playing, setPlaying] = useState(false);
  const videoMedia = item.media.find((media) => media.type === "video");

  function startPreview() {
    const video = videoRef.current;
    if (!video || !videoMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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

  return (
    <button
      type="button"
      className={styles.tile}
      style={{ width, height }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") startPreview();
      }}
      onPointerLeave={stopPreview}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) startPreview();
      }}
      onBlur={stopPreview}
      onClick={() => {
        stopPreview();
        onOpen();
      }}
      data-playing={playing || undefined}
      aria-label={`Open ${item.title}`}
    >
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
