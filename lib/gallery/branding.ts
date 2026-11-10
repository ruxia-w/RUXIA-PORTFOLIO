import type { GalleryItem } from "./types";

/** Encodes the filename so spaces in source filenames resolve correctly. */
function asset(filename: string): string {
  return `/branding/${encodeURIComponent(filename)}`;
}

function brandingItem(id: string, title: string, filename: string, width: number, height: number): GalleryItem {
  const src = asset(filename);
  return {
    id: `branding-${id}`,
    title,
    category: "branding",
    description: `Brand identity artwork for ${title}.`,
    thumbnail: src,
    thumbnailWidth: width,
    thumbnailHeight: height,
    media: [{ src, alt: `${title} brand identity artwork.` }],
  };
}

/**
 * Branding filter on the Gallery page. This array's order is the Branding
 * filter's display order. Discover (order.ts) uses the same relative order
 * for these pieces. Dimensions are the files' real pixel sizes.
 */
export const brandingItems: GalleryItem[] = [
  brandingItem("offday", "OFFDAY", "OFFDAY.png", 1086, 1448),
  brandingItem("forme", "FORME", "Forme.png", 1254, 1254),
  brandingItem("aster-camp-club", "ASTER CAMP CLUB", "ASTER.png", 1254, 1254),
  brandingItem("natural-history", "NATURAL HISTORY", "Natural History.png", 1122, 1402),
  brandingItem("ocean-lab", "OCEAN LAB", "Ocean Club.png", 1448, 1086),
  brandingItem("aster-camp-club-card", "ASTER CAMP CLUB", "ASTER CAMP CLUB CARD.png", 1254, 1254),
  brandingItem("alter", "ALTER", "ALTER.png", 1122, 1402),
  brandingItem("novera", "NOVERA", "novera.png", 1448, 1086),
  brandingItem("nodal", "NODAL", "NODAL.png", 1086, 1448),
];
