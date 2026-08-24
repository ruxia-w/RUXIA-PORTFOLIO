# Reusable Case Study System Specification

## Goal

Upgrade project pages from undifferentiated image stacks into clear editorial narratives with product-documentation navigation. The shared system controls how content is read; each project controls what the story contains.

## Shared page anatomy

1. Global Navigation
2. Project Header and metadata
3. Desktop two-column Case Study body
4. Sticky chapter sidebar
5. Main content sections
6. Previous/Next project navigation

## Required components

- `CaseStudyLayout`
- `GlobalNavigation`
- `ProjectHeader`
- `ProjectMetadata`
- `CaseStudySidebar`
- `CaseStudySection`
- `ResponsiveMedia`
- `ImageViewer`
- `ReadingProgress`
- `ProjectPagination`
- `MobileContentsMenu`

## Architecture rules

- Sidebar and content sections read the same `sections` data source.
- Project pages are configuration-driven; do not duplicate a page template per project.
- Projects may use different chapter names and counts.
- Sidebar shows 5–15 primary chapters, not every image or subheading.
- Main content remains readable if sidebar JavaScript fails.
- Media remains content, not a CSS background, when it carries meaning.
- Previous/Next relationships are computed from one central project order.

## Semantic structure

```text
body
  skip link
  header > nav
  main
    project header
    case-study layout
      aside > nav
      article
        section#...
    project pagination
```

Use one page-level `h1`. Each primary section begins with `h2`; nested topics use `h3` in order.

## Desktop layout

- Sidebar target width: 180–220px.
- Main content receives the majority of available width.
- Keep a clear gap between navigation and content.
- Do not compress main media below a useful reading size.
- When space becomes insufficient, collapse the sidebar before shrinking content further.
- Sticky sidebar offset must account for the global navigation height.

## Do not do in this phase

- Do not redesign supplied project content.
- Do not decide a new global color or type system.
- Do not add decorative animation systems.
- Do not make every media item a sidebar chapter.
- Do not force all projects into identical chapter names.
- Do not create nonexistent prototypes, awards, validation results, or outcomes.
- Do not place AURIC-specific black/lime UI styling across the entire portfolio.

