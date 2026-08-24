# Navigation, Scroll, and Responsive Behavior

## Global navigation

Expected items: RUXIA WANG, WORKS, GALLERY, ABOUT. It belongs to the whole portfolio. It may remain compactly fixed or reappear on upward scroll, but must not permanently consume excessive viewport space.

## Section anchors

- Each primary section uses a stable, human-readable `id`.
- Direct URLs such as `/work/auric-signal#experience` must work.
- On initial load with a hash, scroll after layout is stable and place the section heading below sticky navigation.
- Use `scroll-margin-top` rather than arbitrary JavaScript offsets where possible.
- Preserve the URL hash as sections change; use `history.replaceState`, not a new history entry on every scroll.

## Scroll spy

- Prefer `IntersectionObserver`.
- Use a stable activation band near the upper-middle reading area.
- Avoid rapid active-item flicker between adjacent sections.
- Set `aria-current="location"` on the active sidebar link.
- Do not continuously move focus while scrolling.
- If JavaScript fails, all anchor links still work.

## Smooth navigation

- Smooth scrolling is allowed for direct user-initiated anchor navigation.
- Disable smooth behavior for `prefers-reduced-motion: reduce`.
- After mobile menu navigation, close the menu and move programmatic focus to the target section heading using `tabindex="-1"` only when needed.

## Mobile Contents menu

Mobile order:

1. Global navigation
2. Project title and introduction
3. Metadata
4. Contents button
5. Main content
6. Previous/Next projects

Requirements:

- No fixed desktop sidebar.
- A clearly labeled Contents button opens a dialog, sheet, or compact menu.
- Minimum comfortable touch targets.
- Trap focus while modal UI is open.
- Escape and explicit close both work.
- Return focus to the Contents button when dismissed without navigation.
- After selecting a chapter, close the menu and focus the destination heading.

## Breakpoint behavior

Choose breakpoints based on available content width, not a device name. Hide/collapse the sidebar when the sidebar + gap would make primary media too small. Mobile is a single reading column.

## Local sticky journey

The AURIC Experience chapter may use a sticky narrative/UI pairing on large screens. It must:

- remain inside the Experience section;
- preserve linear DOM order;
- not break main scroll spy;
- reserve layout height before images load;
- become a standard vertical list on mobile;
- remove transforms and stacking in reduced motion;
- remain fully readable if sticky positioning is unsupported.

