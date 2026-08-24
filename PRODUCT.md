# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters, hiring managers, and design leads evaluating Ruxia Wang for full-time industrial design, product design, and connected-experience roles. They are time-constrained and are scanning a portfolio site among many others to judge design judgment, range, and credibility.

## Product Purpose

A portfolio site presenting Ruxia Wang's design practice across physical products, digital interfaces, and AI-assisted experiences, in support of an active full-time job search.

## Positioning

Bridges physical industrial design (form, ergonomics, CMF, DFM, production/manufacturing reality) with digital UX/UI and AI-assisted decision-support experience design, backed by real cross-functional and team-leadership experience (five-person China-based 3D team, NY/China program coordination) — a combination of hands-on physical craft, systems/experience thinking, and design leadership that a single-discipline portfolio would not credibly claim.

## Operating Context

Reviewed by recruiters and hiring managers, typically scanning quickly across many candidates' portfolios. Structure: a homepage introducing the practice and surfacing selected work and gallery highlights; two in-depth case studies (`/work/auric-signal`, `/work/trace`) each walking through problem, research, strategy, exploration, product design, testing, and outcome; a gallery (`/gallery`) of shorter product/UX explorations; and an About page with professional background, stated capabilities, and contact links. Contact happens via email, LinkedIn, Behance, and Instagram.

## Capabilities and Constraints

Next.js (App Router) site with case-study content authored as structured data (`lib/projects/*.ts`, rendered through `CaseStudyLayout`/`CaseStudySection`) and gallery content authored in `lib/gallery/projects.ts` with a justified-layout grid. Images are served from `public/`.

Tzumi Electronics production/commercial work (five years, Industrial Designer → Senior Industrial Designer and Global 3D Leader) is described in the About page's prose but is not currently shown as visual case-study evidence. This is an open item — not a confirmed confidentiality constraint — so future work should not assume it is permanently excluded, but should also not fabricate production-work visuals to fill the gap.

## Brand Commitments

Name: Ruxia Wang. Location: New York, NY. Contact: `ruxiadesign@gmail.com`, LinkedIn (`linkedin.com/in/ruxiawang`), Behance (`behance.net/ruxiawangdesign`), Instagram (`instagram.com/ruxia.art`). Footer copyright: "© 2026 Ruxia Wang".

## Evidence on Hand

- **AURIC SIGNAL** (`lib/projects/auric-signal.ts`) — an independent concept project: an AI-assisted investment/portfolio decision-support app, with real research framing (3 exploratory interviews, competitive review), design principles, information architecture, primary screens, four key product experiences, usability testing (3 participants) and refinements, and a live interactive prototype link.
- **TRACE** (`lib/projects/trace.ts`) — an independent concept project: a physical–digital permission system (Credential, Dock, mobile app, organization dashboard) making data access visible and reversible.
- A curated gallery (`public/gallery`, `lib/gallery/projects.ts`) of shorter product design and UX/UI exploration images spanning industrial design (watches, e-bike, speaker, footwear) and product/app design (fitness dashboard, travel app, etc.).
- About page portrait (`public/about/ruxia-wang-portrait.png`) and a studio-wall photo of sketches/prototypes (`public/about/design-studio-wall.png`).
- State absence explicitly: no Tzumi/commercial production work is shown as case-study evidence yet (see Capabilities and Constraints); do not fabricate client names, metrics, testimonials, or production photography to fill that gap.

## Product Principles

1. Physical and digital design are one continuous practice here, not two portfolios stitched together — case studies and the About page should keep making that connection explicit rather than separating "industrial design" from "UX/UI."
2. Case studies earn credibility by showing process and judgment (research → strategy → exploration → product design → testing → outcome), not just final screens.
3. AI is positioned consistently as an explanation/support layer for design decisions, never as the author of them — true both inside the AURIC SIGNAL product and in how Ruxia describes her own AI-augmented design practice.
4. The audience is a time-constrained evaluator, so clarity, scannability, and credibility outrank spectacle for its own sake.
