import type { GalleryItem } from "./types";

/**
 * Curated Motion (Animation) display order — independent of both the
 * Discover order below and `galleryItems`' array order in projects.ts.
 * Leads with the motion work most relevant to product/UX/UI design.
 * Reorder this list to change the Motion filter's sequence.
 */
export const motionOrder: string[] = [
  "motion-presentation-canvas",
  "motion-music-player-motion-playful-intro",
  "motion-parking",
  "motion-car",
  "motion-quote",
  "motion-bank-promotion",
  "motion-watch",
  "motion-machine",
  "motion-medical",
];

/**
 * Curated, art-directed Discover order. Hand-authored (not derived from
 * projects.ts array order, not randomized) so it stays stable across
 * refreshes while interleaving Motion, Product Design, and Industrial
 * Design work — strongest/most distinctive pieces lead, disciplines are
 * mixed throughout, and technical/exploded/sketch-only pieces sit near the
 * end. Reorder this list to change the Discover sequence.
 */
export const discoverOrder: string[] = [
  "leaseflow-wordmark-composition",
  "runway-road-bike",
  "airport-operations-dashboard",
  "motion-quote",
  "over-ear-headphones",
  "pulsecare-health-app",
  "motion-car",
  "portable-hydration-bottle",
  "reformer-training-system",
  "gateflow-airport-navigation",
  "motion-presentation-canvas",
  "ai-vision-drone",
  "skyway-airport-navigation",
  "drive-history",
  "motion-music-player-motion-playful-intro",
  "northbound",
  "chronograph-watch-study",
  "leopard-tracker",
  "motion-medical",
  "project-pulse",
  "modular-plant-stand-system",
  "nova-vault",
  "safebike",
  "motion-machine",
  "aureus-bank",
  "ai-vision-drone-detail",
  "northline-studio",
  "portable-speaker",
  "motion-watch",
  "health-insights",
  "bike-plus",
  "nexa",
  "transparent-mouse",
  "motion-parking",
  "northline-bank",
  "flexdeck-treadmill",
  "harbor-401k",
  "mobile-robotic-platform",
  "motion-bank-promotion",
  "offlow-smart-bell",
  "motionpulse-dashboard-alt",
  "mechanical-keyboard",
  "footwear-sketch-exploration",
  "chronograph-watch-exploded-view",
  "handheld-control-device",
  "orvyn-vaporizer",
  "footwear-sketch-exploration-sheet-two",
  "free-mind-sport-bottle",
  "studio-audio-interface",
  "ash-side-table",
];

/**
 * Ids hidden from the Discover feed only. The Gallery entry itself is kept
 * intact (still visible under its own Product Design / Industrial Design
 * category) — this only prevents it from also surfacing in Discover, e.g.
 * to resolve a near-duplicate image without deleting either entry.
 *
 * Necessary because orderItemsByIds' fallback re-appends any id missing
 * from `discoverOrder` at the end — simply omitting an id from that list
 * is not enough to hide it from Discover.
 */
export const discoverExcluded: string[] = [];

/**
 * Curated Product Design display order — independent of both the Discover
 * order above and `galleryItems`' array order in projects.ts. Leads with
 * the strongest complete digital-product experiences (multi-screen
 * compositions), alternates device type (phone / laptop / frameless
 * screen) so phone mockups don't cluster, and spreads light/dark UI work
 * across the sequence so no more than two dark pieces sit back to back.
 * Weaker single-screen/process-style pieces move later but stay included.
 * Reorder this list to change the Product Design filter's sequence.
 */
export const productDesignOrder: string[] = [
  "drive-history",
  "leaseflow-wordmark-composition",
  "northline-studio",
  "northline-bank",
  "airport-operations-dashboard",
  "pulsecare-health-app",
  "nova-vault",
  "gateflow-airport-navigation",
  "motionpulse-dashboard-alt",
  "nexa",
  "health-insights",
  "skyway-airport-navigation",
  "aureus-bank",
  "northbound",
  "leopard-tracker",
  "harbor-401k",
  "project-pulse",
];

/**
 * Curated Industrial Design display order — independent of both the
 * Discover and Product Design orders above and `galleryItems`' array order
 * in projects.ts. Leads with 7 specifically featured pieces (RUNWAY bike
 * detail first), then interleaves the rest so same-product families
 * (chronograph hero/exploded, drone hero/detail, the two footwear sketch
 * sheets) never sit adjacent, close-up detail shots are spaced apart
 * rather than clustered, portrait-oriented images never run consecutively,
 * and light/dark tone alternates. Weaker process/sketch pieces move to the
 * end but stay included. Reorder this list to change the Industrial
 * Design filter's sequence.
 */
export const industrialDesignOrder: string[] = [
  "runway-road-bike",
  "over-ear-headphones",
  "portable-hydration-bottle",
  "reformer-training-system",
  "safebike",
  "ai-vision-drone",
  "transparent-mouse",
  "modular-plant-stand-system",
  "chronograph-watch-study",
  "mechanical-keyboard",
  "mobile-robotic-platform",
  "handheld-control-device",
  "offlow-smart-bell",
  "bike-plus",
  "free-mind-sport-bottle",
  "ai-vision-drone-detail",
  "flexdeck-treadmill",
  "orvyn-vaporizer",
  "chronograph-watch-exploded-view",
  "portable-speaker",
  "studio-audio-interface",
  "ash-side-table",
  "footwear-sketch-exploration",
  "footwear-sketch-exploration-sheet-two",
];

/**
 * Reorders `items` to follow the id sequence in `order`. Any item whose id
 * isn't listed keeps its original relative order, appended at the end, so a
 * newly added gallery item never silently disappears while an order list is
 * still catching up.
 */
export function orderItemsByIds(items: GalleryItem[], order: string[]): GalleryItem[] {
  const byId = new Map(items.map((item) => [item.id, item]));
  const ordered = order
    .map((id) => byId.get(id))
    .filter((item): item is GalleryItem => Boolean(item));
  const orderedIds = new Set(ordered.map((item) => item.id));
  const remaining = items.filter((item) => !orderedIds.has(item.id));
  return [...ordered, ...remaining];
}
