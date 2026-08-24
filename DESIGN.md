---
name: Ruxia Wang Portfolio
description: A monochrome, ledger-structured portfolio for an industrial + experience designer, built on hairline dividers, numbered indices, and zero decorative color.
colors:
  ink: "#141413"
  paper: "#fbfbfa"
  graphite: "#6f6f6a"
  hairline: "#deded9"
  surface: "#ffffff"
  surface-soft: "#f0f0ed"
  stage-hero: "#eeeeeb"
  stage-experience: "#efefec"
typography:
  display:
    fontFamily: "'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3.35rem, 8.4vw, 8.35rem)"
    fontWeight: 650
    lineHeight: 0.91
    letterSpacing: "-0.072em"
  headline:
    fontFamily: "'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.4vw, 2.125rem)"
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: "-0.032em"
  title:
    fontFamily: "'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.55vw, 1.5rem)"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.026em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.008em"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "0.085em"
rounded:
  none: "0px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "28px"
  full: "999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  20: "5rem"
  24: "6rem"
components:
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "44px"
  button-icon-hover:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "44px"
  button-fab:
    backgroundColor: "#151515"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "50px"
  button-fab-hover:
    backgroundColor: "#2a2a2a"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "50px"
  card-flow:
    backgroundColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "16px"
---

# Design System: Ruxia Wang Portfolio

## Overview

**Creative North Star: "The Design Studio Ledger"**

The portfolio reads as a working ledger, not a showcase deck. Every page opens with a numbered index (01, 02, 03...), every section is separated by a 1px hairline rather than a box or a shadow, and metadata is set in tight uppercase labels the way a design studio would log a project number, a discipline, or a status. The tone is restrained and confident: precise negative letter-spacing that tightens as type gets larger, a near-zero-chroma neutral palette shared identically in light and dark mode, and motion that never exceeds a 500ms ease-out reveal. Nothing performs for attention; hierarchy comes from scale, weight, spacing, and rule-lines, never from color.

The system deliberately avoids the visual vocabulary of a template-generated portfolio: no gradients, no glassmorphism, no drop shadows on resting content, no accent color used decoratively. The one color the interface shell is permitted is the neutral scale itself — ink and paper, inverted per theme — plus the graphite/hairline tones that sit between them. **The shell carries zero hue.** The two real exceptions to "no color" are (1) the phone-device mockup's fixed dark bezel, which represents literal hardware and stays constant across themes, and (2) the case-study product screenshots and gallery artwork themselves, which are content and keep their authentic in-product colors (AURIC SIGNAL's own dark UI, TRACE's own palette).

**Key Characteristics:**
- Numbered section indices + hairline dividers as the primary structural device, not cards or shadows
- Strictly monochrome shell: ink, paper, and neutral grays only, driven by a single warm-neutral hue (~106°) at near-zero chroma in both themes
- Interactive state (focus, hover, selected, active) is always communicated via contrast, underline reveal, border weight, opacity, or full black/white inversion — never color
- Type tightens (more negative letter-spacing) as it scales up; uppercase labels use the opposite move — wide positive tracking at small size
- Flat at rest; radius and shadow are reserved for staged/framing surfaces and fully-round floating controls only

## Colors

The palette is a single warm-neutral hue (~106° in OKLCH, chroma effectively zero) stepped from near-black to near-white, mirrored between light and dark themes via `html[data-theme="dark"]`. There is no decorative accent; the system is Primary + Neutral, where "Primary" is simply the ink/paper contrast itself.

### Primary
- **Ink** (`#141413` light · `#f3f3ef` dark): primary text and foreground color (`--color-fg`). Also drives the global `:focus-visible` outline — the system's one "highlight," and it's monochrome by design.
- **Paper** (`#fbfbfa` light · `#0b0b0b` dark): page background (`--color-bg`).

### Neutral
- **Graphite** (`#6f6f6a` light · `#9f9f99` dark): muted text — labels, captions, secondary copy (`--color-muted`).
- **Hairline** (`#deded9` light · `#2a2a28` dark): the system's only border color (`--color-border`), used exclusively as 1px dividers, never as a boxed outline.
- **Surface** (`#ffffff` light · `#141414` dark): raised/panel background for the rare bounded card (`--color-surface`).
- **Surface Soft** (`#f0f0ed` light · `#1b1b1a` dark): tinted background for media placeholders and hover fills (`--color-surface-soft`).
- **Stage Hero / Stage Experience** (`#eeeeeb`/`#efefec` light · `#181818` dark, near-identical): the tinted "staging" background behind hero imagery and the phone-device mockup (`--hero-stage`, `--experience-stage`) — a slightly darker neutral than Surface Soft, used only to frame product photography.

### Named Rules
**The Monochrome Shell Rule.** The portfolio shell — navigation, buttons, links, focus rings, hovers, borders — uses only ink, paper, and the neutral scale above. No hue-based accent color anywhere in chrome. Focus, hover, selected, and active states are expressed through contrast, underline, border-weight, opacity, or black/white inversion (see BackToTop, which fully inverts fill and text color between themes) — never through color. Individual project imagery and embedded product UI (AURIC SIGNAL screens, TRACE screens, gallery artwork) are exempt: they keep their own authentic colors because they are content, not chrome.

## Typography

**Display Font:** Avenir Next (with Helvetica Neue, Arial, sans-serif fallback)
**Body Font:** system UI stack (-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif)

**Character:** Avenir Next carries every headline, index number, and label with a confident geometric weight; the system stack keeps paragraph copy fast-rendering and neutral. The pairing reads as "studio tool," not "editorial magazine" — display type is heavy and tight, body type is light and open.

### Hierarchy
- **Display** (650, `clamp(3.35rem, 8.4vw, 8.35rem)`, line-height 0.91, letter-spacing −0.072em): the single hero headline per page (homepage, About). Appears once.
- **Headline** (650, `clamp(1.75rem, 2.4vw, 2.125rem)`, line-height 1.16, letter-spacing −0.032em): this is the base global `h2` rule in `globals.css` — the system's default section-opening heading, used the most across the site (every case-study subsection: Overview, Problem, Research, Strategy, ...). A marquee **override variant** (650, `clamp(2.2rem, 4.8vw, 4.75rem)`, line-height 0.98, letter-spacing −0.052em) appears only on the homepage's and About's top-level `##/Section` headers (`.sectionHeader h2`, `.aboutLead h2`, `.contact h2`) — reserve that larger size for those marketing-style section openers only; case-study and default content should use the base `h2`.
- **Title** (650, `clamp(1.25rem, 1.55vw, 1.5rem)`, line-height 1.25, letter-spacing −0.026em): component and card-level headings (global `h3`; case-study feature titles run larger at up to 2.8rem but share this same weight/tracking logic).
- **Body** (400, 0.9375rem, line-height 1.55, letter-spacing −0.008em): all paragraph copy; case-study body copy caps at a ~940px measure.
- **Label** (650, 0.7rem, line-height 1.35, letter-spacing 0.085em, uppercase): kickers, section indices ("01 / Selected Work"), project type/discipline tags, metadata terms, footer copy.

### Named Rules
**The Tightening Rule.** Letter-spacing moves in opposite directions by size: display/headline type gets *tighter* as it gets *bigger* (−0.072em at hero scale down to −0.008em at body scale), while the Label role runs the opposite way — small size, wide *positive* tracking (0.085em+), always uppercase. These are the system's only two typographic registers; don't invent a third.

## Layout

Content is capped at `--content-max-width: 1440px`, centered, with a fluid outer gutter (`clamp(1.25rem, 4vw, 4.5rem)`). Case-study prose narrows further to an `--article-max-width` (1020px) / `940px` block measure, and long-form paragraphs cap at `--reading-max-width: 59ch`. A sticky in-page sidebar (`--sidebar-width: 188px`) appears only ≥900px, with a left-border active-state indicator.

Section rhythm is driven by a `--space-*` scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96px) and by fluid `clamp()` vertical padding at major breakpoints (`clamp(5rem, 10vw, 9rem)` between top-level sections). Every top-level section opens with a two-part header: a Label-role index ("01 / Selected Work") paired with a Headline, then a 1px hairline (`--color-border`) as the section's top boundary — hairlines do the separating work that boxes or shadows would do in most systems.

Grids are used sparingly and asymmetrically: a `0.32fr 1fr 0.65fr`-style column split for section headers (index / title / description), collapsing to a single column below 680px. The gallery is a dense 3-column grid with occasional 2-column-span "wide" tiles; below 680px it drops to 2 columns.

Responsive breakpoints observed: 900px (sidebar/grid collapse), 760px, 680px/640px (mobile layout, single-column grids, reduced gutter to 1rem), 480px (compact device-frame staging), 620px (nav/icon-button sizing).

## Elevation & Depth

Flat by default. Content surfaces — buttons-as-links, project tiles, gallery tiles, nav, case-study cards — carry no shadow at rest; depth is implied by the hairline/label system, not by layering. The only two exceptions are literal floating/physical objects:

### Shadow Vocabulary
- **Floating control** (`box-shadow: 0 8px 24px rgb(0 0 0 / 16%)`): the fixed Back-to-Top button, which genuinely floats above scrolling content.
- **Device chrome** (`box-shadow: 0 14px 32px rgb(0 0 0 / 18%)`): the phone-device mockup bezel in case studies, representing real hardware resting on the stage surface.

### Named Rules
**The Flat-By-Default Rule.** Nothing gets a shadow just for being a card or a button. Shadow is reserved for things that are conceptually floating (fixed-position controls) or conceptually physical (the device mockup). Everything else stays flush with the page.

## Shapes

Two registers, deliberately far apart: **sharp** for content, **rounded/round** for staged surfaces and floating controls.

- **Sharp (0px radius):** nav, project list rows, project media, gallery tiles, filter tabs, sidebar links, footer — anything that is "just content" sits flush-cornered against the hairline grid.
- **Small radius (4–12px):** framing surfaces only — the ImageViewer lightbox dialog (4px), the mobile contents sheet (12px top corners), the case-study hero "stage" background (12px), the state-flow diagram card (8px).
- **Large radius (28px):** the FinalExperience stage background that hosts the phone-device mockup.
- **Full round (999px / 50%):** exclusively fully-round floating controls — the circular Back-to-Top button, pill-shaped video controls, pill zoom/expand affordances. Never used for text-labeled buttons or chips.
- **Device bezel (30–42px):** the phone-device mockup's own hardware-accurate corner radii (device case vs. screen), scoped to that one signature component — not part of the general rounded scale.

### Named Rules
**The Flat Content Rule.** If it holds content a visitor reads or clicks through, it has zero radius. If it stages or frames something (a hero image, a modal, a device), it gets radius. If it floats free of the page, it goes fully round.

## Components

### Buttons
There is no filled/pill CTA button anywhere in the shell. Primary actions are underlined text links with a directional glyph (↗ external/case-study, ↓ scroll, ↑ back-to-top): `border-bottom: 1px solid currentColor`, no background, no radius.
- **Icon Button** (nav/theme toggle): 44×44px (40×40 ≤620px), transparent at rest, `{rounded.sm}` (8px), fills to Surface Soft on hover, `color: currentColor` throughout — no accent tint.
- **Floating Action (Back-to-Top):** 50×50px, `{rounded.full}`, filled `#151515`/white icon in light mode, **fully inverted** to `#ededeb`/dark icon in dark mode — the system's clearest example of "state via inversion, not color." Carries the one persistent shadow on a resting element (see Elevation).

### Filters (chip-analog)
- **Style:** plain text tabs, no background or border at rest; `graphite` color, switching to `ink` + weight 650 when `aria-current="true"`.
- **State:** an animated underline (`transform: scaleX`) reveals on hover/focus/current — the same underline-reveal mechanism used by nav links and case-study links. No pill background, no color fill.

### Cards / Containers
Most "cards" in this system are actually ruled list items (`border-top: 1px solid var(--color-border)`, no side/bottom border, no radius) — comparison items, focus-list rows, relationship items, screen-journey steps. The one true bounded card is the **state-flow node**: `{rounded.sm}` (8px), 1px hairline border, `Surface` background, used only inside the process-diagram block type. Don't introduce boxed/shadowed cards elsewhere; the ruled-row pattern is the default.

### Navigation
Sticky top bar, 68px (`--nav-height`), translucent Paper background (`color-mix(... 92%, transparent)`) with `backdrop-filter: blur(16px)` and a hairline bottom border. Nav links use the underline-reveal mechanism (transform: scaleX, left-to-right on enter). In-page case-study navigation is a sticky left sidebar (≥900px only) using a left-border indicator (not a background fill or color change) for the active section — 1px transparent border becomes `ink` on the active link.

### Gallery Tile
Full-bleed, zero radius, zero border. Hover/focus response is `opacity: 0.86` + `scale(1.015)` on the image only — dimming, not tinting.

### Device Frame (signature component)
The one skeuomorphic element in the system: a phone-shaped bezel (`#171717` body, `#3a3a3a` 1px border, hardware-accurate corner radii, persistent drop shadow) staged on a `stage-experience`/`stage-hero` background. It represents real hardware displaying a case-study prototype and is intentionally exempt from the flat/monochrome-chrome rules that govern the rest of the shell — it's product photography, not UI.

## Do's and Don'ts

### Do:
- **Do** keep the shell strictly monochrome — build hierarchy with scale, weight, spacing, and hairlines, never with color.
- **Do** drive every interactive state (focus, hover, selected, active) with contrast, underline-reveal, border-weight, opacity, or full black/white inversion, per the Monochrome Shell Rule.
- **Do** use the `--space-*` scale for all spacing; reach for `clamp()` only for the fluid type/section-padding cases already established.
- **Do** use a Label-style index ("0X / Section Name") plus a top hairline to open a new top-level section — the system's default structural device.
- **Do** reserve border-radius for staged/framing surfaces (hero stage, modal, state-flow card) and fully-round floating controls only; content stays sharp-cornered.
- **Do** let the device-frame mockup keep its fixed dark bezel and shadow regardless of theme — it's hardware, not chrome.
- **Do** let case-study screenshots, prototypes, and gallery artwork keep their own authentic colors; the monochrome rule governs the shell around them, not the content inside them.

### Don't:
- **Don't** introduce a decorative accent hue anywhere in navigation, buttons, links, or focus states — the removed `--color-focus` blue is not coming back; focus now inherits `--color-fg`.
- **Don't** add a filled or pill-shaped CTA button. Primary actions are underlined text links with a directional glyph.
- **Don't** add a drop shadow to any at-rest content surface (button, tile, card, row). Shadow is reserved for the fixed floating control and the device-frame chrome only.
- **Don't** box ordinary list content in bordered/shadowed cards — use the ruled-row pattern (`border-top` only) unless it's specifically the state-flow diagram node.
- **Don't** restyle the uppercase Label convention (0.7rem, weight 650, 0.085em+ tracking) — it's the system's only "eyebrow," and it's used consistently for indices, kickers, metadata terms, and the footer.
