"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import type { MediaAsset } from "@/lib/types";
import styles from "./ImageViewer.module.css";

type ImageViewerProps = {
  media: MediaAsset;
  open: boolean;
  onClose: () => void;
  /** Renders at native pixel size with scroll/native browser zoom, for dense diagrams. */
  dense?: boolean;
};

export function ImageViewer({ media, open, onClose, dense = false }: ImageViewerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, open, onClose);

  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={media.alt}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <div className={styles.imageWrap}>
          <Image
            src={media.src}
            width={media.width}
            height={media.height}
            alt={media.alt}
            className={dense ? styles.imageDense : styles.image}
            sizes={dense ? `${media.width}px` : "100vw"}
          />
        </div>
        {media.caption ? <p className={styles.caption}>{media.caption}</p> : null}
      </div>
    </div>
  );
}
