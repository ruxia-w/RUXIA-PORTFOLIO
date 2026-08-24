# Media and Accessibility Requirements

## Images

- Preserve intrinsic aspect ratio.
- Supply explicit `width` and `height` or CSS `aspect-ratio` from known dimensions.
- Prioritize the first meaningful hero image only.
- Lazy-load below-the-fold media.
- Generate responsive `srcset`/sizes through the repository’s image system when available.
- Do not download the same large source multiple times for repeated decorative use.
- Do not crop important UI content. Limited presentation crops are allowed only when the full image remains available in ImageViewer.
- Decorative images use empty alt text.
- Meaningful screenshots receive concise alt text describing the design decision, not every visible word.
- A failed image must not collapse the section or remove its text explanation.

## ImageViewer

- Open from a semantic button, not an image-only click target.
- Provide an accessible name such as “View full user-flow diagram.”
- Trap focus, support Escape, and restore focus on close.
- Support zoom/pan only where useful for dense diagrams.
- Do not intercept normal page scrolling until the viewer is intentionally opened.

## Video

- Do not autoplay with sound.
- Provide controls and a poster.
- Avoid loading multiple high-resolution videos together.
- Preserve aspect ratio on mobile.
- Supply a static alternative where motion is not required.

## General accessibility

- Skip to Content link
- Correct heading hierarchy
- Semantic `nav`, `main`, `aside`, `article`, and `section`
- Visible keyboard focus
- Keyboard-operable navigation, viewer, and mobile menu
- `aria-current` for current chapter
- Reduced-motion support
- No content conveyed by color alone
- Sufficient text and control contrast
- No sticky element covering a focused heading or control

## AURIC screenshot alt-text pattern

Good: “Signal Detail connects a technology-exposure change to drivers, evidence, portfolio impact, and considerations.”

Avoid: “Image of an app screen.”

Avoid duplicating every visible numeric value in alt text when the adjacent prose already explains it.

