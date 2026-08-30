"use client";

import Image from "next/image";
import { useRef } from "react";
import type { MediaAsset } from "@/lib/types";
import styles from "./ResponsiveMedia.module.css";

type Props = {
  media: MediaAsset;
  dense?: boolean;
  viewerLabel?: string;
};

export function ResponsiveMedia({ media, dense = false, viewerLabel }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const label = viewerLabel ?? `Open full-size image: ${media.alt}`;
  const useOriginalImage = media.src.startsWith("/work/sourcefold/");
  const dimInDark = media.src.includes("auric-early-exploration-directions") || media.src.includes("auric-core-user-flows");
  const imageClass = [dense ? styles.denseImage : styles.image, dimInDark ? styles.dimInDark : ""].filter(Boolean).join(" ");

  return (
    <figure className={styles.figure}>
      <button type="button" className={styles.trigger} onClick={() => dialogRef.current?.showModal()} aria-label={label}>
        <Image
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt}
          priority={media.priority}
          className={imageClass}
          sizes="(max-width: 900px) 100vw, 1120px"
          unoptimized={useOriginalImage}
        />
        <span className={styles.expandIcon} aria-hidden="true">↗</span>
      </button>
      {media.caption ? <figcaption className={styles.caption}>{media.caption}</figcaption> : null}

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={media.alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <button type="button" className={styles.close} onClick={() => dialogRef.current?.close()} aria-label="Close image viewer">×</button>
        <div className={styles.dialogImageWrap}>
          <Image src={media.src} width={media.width} height={media.height} alt={media.alt} className={styles.dialogImage} sizes="96vw" unoptimized={useOriginalImage} />
        </div>
      </dialog>
    </figure>
  );
}
