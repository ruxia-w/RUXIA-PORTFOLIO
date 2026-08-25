/** Single source of truth for gap and target row heights, shared by layout math and CSS. */
export const GALLERY_GAP = 8;
export const GALLERY_TARGET_HEIGHT_DESKTOP = 340;
export const GALLERY_TARGET_HEIGHT_TABLET = 260;
export const GALLERY_TARGET_HEIGHT_MOBILE = 170;
/** Below this measured container width, fall back to a simple natural-width,
 * same-height, uncropped flex-wrap instead of the justified algorithm. */
export const GALLERY_MOBILE_MAX_CONTAINER_WIDTH = 560;
export const GALLERY_TABLET_MAX_CONTAINER_WIDTH = 820;

export type JustifiedRow<T> = {
  height: number;
  items: Array<{ item: T; width: number }>;
};

type Ratioed = { thumbnailWidth: number; thumbnailHeight: number };

function ratioOf(item: Ratioed): number {
  return item.thumbnailWidth / item.thumbnailHeight;
}

function heightFor(sumRatios: number, count: number, containerWidth: number, gap: number): number {
  const totalGap = gap * Math.max(count - 1, 0);
  return (containerWidth - totalGap) / sumRatios;
}

/**
 * Classic justified-gallery row solver: fills each row with variable-width,
 * same-height images so the row's combined width (plus gaps) fills the
 * container, closing each row once its height settles near targetHeight.
 * The last row in the whole set is capped at targetHeight and left-aligned
 * rather than stretched to fill (per spec — no forced full-width last row).
 */
export function computeJustifiedRows<T extends Ratioed>(
  items: T[],
  containerWidth: number,
  targetHeight: number,
  gap: number = GALLERY_GAP
): JustifiedRow<T>[] {
  if (containerWidth <= 0 || items.length === 0) return [];

  const rows: JustifiedRow<T>[] = [];
  let row: T[] = [];
  let sumRatios = 0;

  function finalizeRow(rowItems: T[], height: number, stretchToFill: boolean) {
    const rounded = Math.round(height);
    const widths = rowItems.map((item) => Math.round(ratioOf(item) * rounded));

    if (stretchToFill) {
      const totalGap = gap * (rowItems.length - 1);
      const usedWidth = widths.reduce((sum, w) => sum + w, 0) + totalGap;
      const diff = containerWidth - usedWidth;
      widths[widths.length - 1] += diff;
    }

    rows.push({
      height: rounded,
      items: rowItems.map((item, i) => ({ item, width: widths[i] })),
    });
  }

  for (const item of items) {
    row.push(item);
    sumRatios += ratioOf(item);

    const candidateHeight = heightFor(sumRatios, row.length, containerWidth, gap);
    if (candidateHeight <= targetHeight) {
      if (row.length > 1) {
        const withoutLast = heightFor(sumRatios - ratioOf(item), row.length - 1, containerWidth, gap);
        const overshoot = Math.abs(candidateHeight - targetHeight);
        const undershoot = Math.abs(withoutLast - targetHeight);
        if (undershoot < overshoot) {
          row.pop();
          sumRatios -= ratioOf(item);
          finalizeRow(row, withoutLast, true);
          row = [item];
          sumRatios = ratioOf(item);
          continue;
        }
      }
      finalizeRow(row, candidateHeight, true);
      row = [];
      sumRatios = 0;
    }
  }

  if (row.length > 0) {
    const finalHeight = Math.min(heightFor(sumRatios, row.length, containerWidth, gap), targetHeight);
    finalizeRow(row, finalHeight, false);
  }

  return rows;
}

/**
 * Forces every item into exactly one row, sized so the row's combined width
 * (plus gaps) fills containerWidth exactly — proportional per-item widths
 * from each item's own aspect ratio, with the last item absorbing the small
 * rounding remainder. Used where row membership is curated/locked (e.g. a
 * fixed editorial layout) rather than solved by computeJustifiedRows' own
 * row-breaking heuristic.
 */
export function computeFixedRow<T extends Ratioed>(items: T[], containerWidth: number, gap: number = GALLERY_GAP): JustifiedRow<T> {
  if (items.length === 0 || containerWidth <= 0) return { height: 0, items: [] };

  const sumRatios = items.reduce((sum, item) => sum + ratioOf(item), 0);
  const height = Math.round(heightFor(sumRatios, items.length, containerWidth, gap));
  const widths = items.map((item) => Math.round(ratioOf(item) * height));

  const totalGap = gap * (items.length - 1);
  const usedWidth = widths.reduce((sum, w) => sum + w, 0) + totalGap;
  widths[widths.length - 1] += containerWidth - usedWidth;

  return { height, items: items.map((item, i) => ({ item, width: widths[i] })) };
}

/**
 * Sizes each item's width from its own ratio at a fixed row height, with no
 * fill-to-container adjustment — for a row where a trailing non-image tile
 * (a CTA) is meant to flex-grow and absorb whatever width these items don't
 * use, rather than the images themselves being stretched to fill.
 */
export function computeRowAtHeight<T extends Ratioed>(items: T[], height: number): Array<{ item: T; width: number }> {
  return items.map((item) => ({ item, width: Math.round(ratioOf(item) * height) }));
}
