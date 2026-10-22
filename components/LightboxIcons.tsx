// Shared, hand-authored stroke icons for the two native-<dialog> lightboxes
// (ResponsiveMedia's image zoom, Gallery/GalleryViewer) — kept in one place
// so neither file duplicates the same SVG markup. Same convention already
// used elsewhere in this codebase for small single-purpose icons (compact,
// no icon-library dependency): viewBox 0 0 24 24, stroke="currentColor",
// fill="none", explicit width/height on the <svg> itself for the requested
// visual size.

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function ChevronIcon({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  const points = direction === "left" ? "15 6 9 12 15 18" : "9 6 15 12 9 18";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points={points} />
    </svg>
  );
}
