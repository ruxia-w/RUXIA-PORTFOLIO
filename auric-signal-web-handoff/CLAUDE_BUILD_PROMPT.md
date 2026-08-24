# Claude Code Build Prompt

Copy the prompt below into Claude Code from the root of the portfolio repository.

---

Build a reusable Portfolio Case Study system and implement AURIC SIGNAL as the first project using the handoff package in this repository.

## Read first

Read every Markdown file in `auric-signal-web-handoff/` before editing code. Treat these files as the source of truth, especially:

- `00_READ_ME_FIRST.md`
- `content/03_PROJECT_FACTS.md`
- `content/01_CONTENT_MASTER.md`
- `content/02_PAGE_STRUCTURE.md`
- `specs/CASE_STUDY_SYSTEM_SPEC.md`
- `specs/NAVIGATION_SCROLL_RESPONSIVE.md`
- `specs/MEDIA_ACCESSIBILITY.md`
- `projects/auric-signal/ASSET_MANIFEST.md`
- `QA_CHECKLIST.md`

## First action

Inspect the existing repository, routes, stack, content model, styling approach, and current portfolio pages. Preserve existing content and visual assets. This is a migration and structural upgrade, not a redesign.

If the repository already has a working framework, routing system, CSS architecture, image component, or design tokens, integrate with them. Do not migrate frameworks or install large dependencies without a demonstrated need.

If starting from an empty repository, use Next.js App Router, TypeScript, and CSS Modules or well-structured native CSS. Keep content separate from presentation.

## Build scope

Create reusable components for:

- CaseStudyLayout
- GlobalNavigation
- ProjectHeader
- ProjectMetadata
- CaseStudySidebar
- CaseStudySection
- ResponsiveMedia
- ImageViewer
- ReadingProgress
- ProjectPagination
- MobileContentsMenu

Create a data-driven route for `/work/auric-signal`. Sidebar navigation and rendered sections must use the same section configuration.

Implement:

- Semantic page structure
- Desktop sticky chapter navigation
- Mobile Contents menu
- Anchor links and direct hash loading
- Stable scroll spy with `aria-current`
- Smooth user-initiated navigation with reduced-motion fallback
- Responsive images with intrinsic dimensions
- Priority loading only for the primary hero
- Lazy loading below the fold
- Accessible fullscreen viewer for dense diagrams
- Previous/Next project navigation computed from a central project order
- Skip to Content
- Visible keyboard focus
- Correct focus management

## Content rules

Use `content/01_CONTENT_MASTER.md` for public copy. Do not OCR old case-study boards or invent text.

Do not claim:

- formal user interviews or usability tests;
- participant numbers or user quotes;
- improved trust or increased confidence as measured outcomes;
- real AI model accuracy;
- live financial data;
- broker or exchange integration;
- trade execution;
- business or adoption metrics;
- launch, award, or production status;
- financial advice.

Present research statements as exploratory observations or design hypotheses. Present simulation values as static sample estimates.

## Asset rules

Use only assets allowed by `ASSET_MANIFEST.md`.

- Do not display `assets/reference-only/03-refined-hierarchy.png` in full because it contains unverified testing claims.
- Do not publish `assets/reference-only/05-sketch.png` unless the owner confirms authenticity.
- Keep `05-profile.png` small because it is lower resolution.
- Do not use old complete case-study boards as the final webpage.
- Do not repeat the same Hero screen at large scale in multiple sections.
- Preserve aspect ratio and important content.
- If a limited crop is used, keep the full asset available through ImageViewer.

## Visual boundary

Do not decide or replace the global portfolio color and typography system in this phase. AURIC’s black/lime app UI is project content, not the global website theme. Use the repository’s existing site system around the supplied assets.

Avoid decorative scroll effects. A local sticky journey is allowed only inside the Experience section and must degrade to normal vertical content on mobile and reduced motion.

## Implementation sequence

1. Audit repository and report the integration plan.
2. Build the shared page skeleton.
3. Build the single-source section and anchor system.
4. Implement AURIC content and assets.
5. Add responsive behavior and mobile Contents.
6. Add accessibility and media behavior.
7. Add Previous/Next infrastructure without inventing missing project slugs.
8. Run available lint, type, build, and test commands.
9. Check the full `QA_CHECKLIST.md`.

## Completion report

Return:

- Files created or changed
- Architecture summary
- Routes implemented
- Test/build results
- Accessibility checks completed
- Any remaining placeholders requiring owner input
- Any deviation from the handoff and the reason

Do not deploy, publish, change external services, or modify the Lovable prototype unless explicitly requested.

