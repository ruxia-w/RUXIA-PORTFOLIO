export type GalleryCategory = "product-design" | "industrial-design" | "animation";

export type GalleryMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  thumbnail: string;
  /** Intrinsic pixel dimensions of `thumbnail`, used by the justified-row layout to size each tile. */
  thumbnailWidth: number;
  thumbnailHeight: number;
  /** CSS object-position for the thumbnail crop only (e.g. "center 35%"). Defaults to "center". Never affects the Viewer, which always shows the full, uncropped media. */
  thumbnailPosition?: string;
  media: GalleryMedia[];
};
