# AURIC SIGNAL Section Configuration

```ts
export const auricSignalSections = [
  { id: "overview", label: "Overview", heading: "From market movement to an informed next step" },
  { id: "context", label: "Context & Opportunity", heading: "The interpretation gap" },
  { id: "research", label: "Research & Insights", heading: "Exploratory foundation" },
  { id: "strategy", label: "Product Strategy", heading: "A traceable decision journey" },
  { id: "development", label: "Design Development", heading: "From four entry points to signal-first" },
  { id: "experience", label: "System & Experience", heading: "Understand, explore, evaluate, decide" },
  { id: "trust", label: "Trust & Validation", heading: "Trust through visible boundaries" },
  { id: "outcome", label: "Outcome & Reflection", heading: "A complete concept, with clear limits" },
] as const;
```

## Sidebar rule

Use exactly these eight items for AURIC SIGNAL. Do not add screenshot names, process-board names, or minor subheadings to the sidebar.

## Project metadata draft

```ts
export const auricSignalProject = {
  slug: "auric-signal",
  title: "AURIC SIGNAL",
  subtitle:
    "An AI-assisted portfolio decision-support concept connecting market movement, evidence, personal impact, and scenario evaluation.",
  category: "Product Design / UX/UI",
  role: ["Solo Product Designer"],
  year: "2026",
  duration: "3 weeks",
  status: "Functional interactive concept prototype",
  breadcrumb: ["Work", "Product Design", "AURIC SIGNAL"],
  links: [
    {
      label: "View Interactive Prototype",
      url: "https://auric-signal-insight.lovable.app/",
      type: "prototype",
    },
  ],
  sections: auricSignalSections,
};
```

