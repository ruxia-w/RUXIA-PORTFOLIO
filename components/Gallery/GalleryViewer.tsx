"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategoryLabels } from "@/lib/gallery/projects";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryViewer.module.css";

type GalleryViewerProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function GalleryViewer({ item, onClose }: GalleryViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  // Reset to the first image whenever a different project opens, adjusting
  // state during render rather than in an effect (avoids an extra render).
  const [lastItemId, setLastItemId] = useState(item?.id);
  if (item?.id !== lastItemId) {
    setLastItemId(item?.id);
    setMediaIndex(0);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item && !dialog.open) {
      dialog.showModal();
    } else if (!item && dialog.open) {
      dialog.close();
    }
  }, [item]);

  // Sync back to React state however the dialog closes (Close button,
  // backdrop click, or the browser's native Escape handling). A native
  // listener is used because the dialog's `close`/`cancel` events don't
  // reliably reach React's onClose/onCancel props.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleNativeClose() {
      onClose();
    }

    dialog.addEventListener("close", handleNativeClose);
    dialog.addEventListener("cancel", handleNativeClose);
    return () => {
      dialog.removeEventListener("close", handleNativeClose);
      dialog.removeEventListener("cancel", handleNativeClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock background scroll while the viewer is open.
  useEffect(() => {
    if (!item) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [item]);

  const mediaCount = item?.media.length ?? 0;

  useEffect(() => {
    if (!item) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setMediaIndex((i) => (i - 1 + mediaCount) % mediaCount);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setMediaIndex((i) => (i + 1) % mediaCount);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [item, mediaCount]);

  const media = item?.media[mediaIndex];

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={item ? `${item.title} viewer` : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {item && media ? (
        <div className={styles.content}>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close viewer">
            ×
          </button>

          <div className={styles.mediaWrap}>
            <div className={styles.mediaFrame}>
              <Image
                key={media.src}
                src={media.src}
                alt={media.alt}
                fill
                sizes="(min-width: 900px) 70vw, 92vw"
                className={styles.image}
                priority
              />
            </div>

            {mediaCount > 1 ? (
              <>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={() => setMediaIndex((i) => (i - 1 + mediaCount) % mediaCount)}
                  aria-label={`Previous image: ${item.title}`}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={() => setMediaIndex((i) => (i + 1) % mediaCount)}
                  aria-label={`Next image: ${item.title}`}
                >
                  ›
                </button>
                <p className={styles.position} aria-live="polite">
                  {mediaIndex + 1} / {mediaCount}
                </p>
              </>
            ) : null}
          </div>

          <div className={styles.info}>
            <p className={styles.category}>{galleryCategoryLabels[item.category]}</p>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
