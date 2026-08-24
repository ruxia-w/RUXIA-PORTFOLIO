"use client";

import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery/types";
import styles from "./GalleryTile.module.css";

type GalleryTileProps = {
  item: GalleryItem;
  width: number;
  height: number;
  onOpen: () => void;
};

export function GalleryTile({ item, width, height, onOpen }: GalleryTileProps) {
  return (
    <button
      type="button"
      className={styles.tile}
      style={{ width, height }}
      onClick={onOpen}
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
    </button>
  );
}
