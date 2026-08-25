import type { CaseStudyProject, CaseStudySection, MediaAsset } from "@/lib/types";

const BASE = "/work/professional-experience";

const media = (
  filename: string,
  width: number,
  height: number,
  alt: string,
): MediaAsset => ({
  src: `${BASE}/${filename}`,
  width,
  height,
  alt,
});

export const professionalExperienceSections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "From concept to production across real-world product programs.",
    blocks: [
      {
        type: "richText",
        body: "A selection of professional consumer-product work developed across multidisciplinary teams — from early opportunity framing and concept exploration through prototyping, refinement, implementation, and production.",
      },
      {
        type: "richText",
        body: "Over time, that role expanded from hands-on industrial design into broader design leadership — guiding product direction, reviewing work across a distributed team, and aligning design decisions with engineering, product, marketing, packaging, and manufacturing partners.",
      },
      {
        type: "cardSet",
        heading: "Core professional signals",
        columns: 2,
        items: [
          { title: "Product Development", body: "Concept → Prototype → Refinement → Production" },
          { title: "Design Leadership", body: "Direction → Critique → Alignment → Team Support" },
          { title: "Cross-Functional Collaboration", body: "Product · Engineering · Packaging · Marketing · Production" },
          { title: "Execution", body: "CAD · CMF · DFM · Tooling · Samples · Manufacturing Handoff" },
        ],
      },
      {
        type: "mediaGroup",
        labels: ["FitRx Adjustable Dumbbells", "IonVac SmartClean", "SLF Foot Massager", "SLF Ionic Dry Brush"],
        media: [
          media("fitrx-adjustable-dumbbells.png", 2632, 2632, "FitRx adjustable dumbbell system with black plates and red adjustment accents."),
          media("ionvac-smartclean.webp", 1920, 1920, "IonVac SmartClean robot vacuum in a dark technical finish."),
          media("slf-foot-massager.png", 800, 800, "SLF foot massager designed for at-home wellness and recovery."),
          media("slf-ionic-dry-brush.png", 800, 800, "SLF ionic drying brush with integrated controls and black-and-red CMF."),
        ],
      },
    ],
  },
  {
    id: "product-development",
    label: "Product Development",
    heading: "Turning product direction into production reality.",
    blocks: [
      {
        type: "richText",
        body: "Commercial product development required different decisions at every stage — not a single linear handoff from research to manufacturing, but a continuous responsibility for direction, feasibility, and quality as a product moved toward production.",
      },
      {
        type: "relationship",
        ariaLabel: "Five stages of professional product development",
        items: [
          {
            eyebrow: "01 — Frame",
            title: "Define the product direction.",
            body: "Product direction balanced user and customer needs, market context, business requirements, technical constraints, cost, and schedule. Design participation began before styling — shaping what the product needed to be, not just how it would look.",
          },
          {
            eyebrow: "02 — Explore",
            title: "Create and evaluate possibilities.",
            body: "Sketching, form exploration, CAD, and CMF exploration turned direction into comparable options, evaluated against feasibility, manufacturability, and the intended product experience.",
          },
          {
            eyebrow: "03 — Align",
            title: "Align design across disciplines.",
            body: "Design decisions were weighed against product, engineering, packaging, marketing, and production requirements — balancing experience and visual intent with feasibility, cost, and schedule.",
          },
          {
            eyebrow: "04 — Refine",
            title: "Resolve design through iteration.",
            body: "Prototypes and physical samples were reviewed and adjusted across form, usability, CMF, assembly, and manufacturing constraints until the design held up under real production conditions.",
          },
          {
            eyebrow: "05 — Deliver",
            title: "Protect design intent through production.",
            body: "Design did not end at approval. Continued review through tooling, development samples, factory samples, and manufacturing handoff helped keep the final product consistent with the original design intent.",
          },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Overall product development model",
        steps: [
          { title: "Frame", body: "Define direction", connectorAfter: "→" },
          { title: "Explore", body: "Create possibilities", connectorAfter: "→" },
          { title: "Align", body: "Coordinate decisions", connectorAfter: "→" },
          { title: "Refine", body: "Resolve through iteration", connectorAfter: "→" },
          { title: "Deliver", body: "Carry intent into production" },
        ],
      },
    ],
  },
  {
    id: "leadership",
    label: "Leadership & Collaboration",
    heading: "Leading design through direction, critique, and alignment.",
    blocks: [
      {
        type: "richText",
        body: "Design leadership here was not limited to people management. It meant setting direction, running critique, making decisions, aligning work across disciplines, and maintaining quality as a product moved between teams and stages — while remaining hands-on in the work itself.",
      },
      {
        type: "callout",
        title: "Hands-on designer + design leadership",
        body: "Hands-on design contribution continued alongside broader design leadership — the two ran concurrently, not in sequence.",
      },
      {
        type: "relationship",
        ariaLabel: "Six dimensions of design leadership",
        items: [
          {
            eyebrow: "01 — Set Direction",
            title: "Turn ambiguity into clear design priorities.",
            body: "Broader product and business inputs were translated into priorities, design criteria, and exploration directions — giving a team clarity on what needed to be solved and a consistent standard to design against.",
          },
          {
            eyebrow: "02 — Design Critique",
            title: "Use critique to improve the work, not simply approve it.",
            body: "Critique moved work from an early direction through comparison and decision into a refined direction, rather than serving as a single approval gate.",
          },
          {
            eyebrow: "03 — Cross-Functional Alignment",
            title: "Design decisions rarely belong to design alone.",
            body: "Design connected with product, engineering, packaging, marketing, and production — aligning competing constraints while protecting the core design intent.",
          },
          {
            eyebrow: "04 — Distributed Collaboration",
            title: "Coordinate design across a distributed team.",
            body: "Direction, review, visual communication, and iteration carried a five-person distributed 3D design team through delivery, keeping design intent consistent across time zones and disciplines.",
          },
          {
            eyebrow: "05 — Decision Making",
            title: "Reduce possibilities into a decision.",
            body: "Multiple directions were narrowed through constraint and tradeoff review into a selected direction, then carried forward through refinement rather than settled by default.",
          },
          {
            eyebrow: "06 — Quality Ownership",
            title: "Maintain coherence as work moves between stages.",
            body: "Continuity from concept through CAD, prototype, sample, tooling, and production required ongoing review to keep design quality consistent as work passed between disciplines.",
          },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Critique model",
        steps: [
          { title: "Intent", connectorAfter: "→" },
          { title: "Critique", connectorAfter: "→" },
          { title: "Decision", connectorAfter: "→" },
          { title: "Iteration" },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Decision-making model",
        steps: [
          { title: "Multiple Directions", connectorAfter: "→" },
          { title: "Constraint / Tradeoff Review", connectorAfter: "→" },
          { title: "Selected Direction", connectorAfter: "→" },
          { title: "Refinement" },
        ],
      },
    ],
  },
  {
    id: "selected-work",
    label: "Selected Work",
    heading: "Designing across products, constraints, and production realities.",
    intro: "A closer look at two commercial products, alongside supporting work from the same personal-care line.",
    blocks: [
      {
        type: "richText",
        heading: "Featured — FitRx Adjustable Dumbbells",
        body: "A space-saving adjustable dumbbell system designed to make strength training approachable at home — resolving weight-selection mechanics, grip comfort, and a compact footprint into a single confident product form.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("fitrx-adjustable-dumbbells.png", 2632, 2632, "FitRx adjustable dumbbell system with black plates and red adjustment accents."),
      },
      {
        type: "richText",
        body: "**Contribution:** Industrial Design · CMF · Engineering Collaboration",
      },
      {
        type: "richText",
        heading: "Featured — IonVac SmartClean",
        body: "A connected robot vacuum developed for a competitive smart-home category, balancing sensor and battery packaging, serviceability, and a confident technical CMF language within tight cost and schedule constraints.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("ionvac-smartclean.webp", 1920, 1920, "IonVac SmartClean robot vacuum in a dark technical finish."),
      },
      {
        type: "richText",
        body: "**Contribution:** Industrial Design · CMF · Production Collaboration",
      },
      {
        type: "richText",
        heading: "Supporting Work — SLF Personal Care",
        body: "Two personal-care products developed within the same product family, sharing a consistent CMF and interaction language.",
      },
      {
        type: "mediaGroup",
        labels: ["SLF Foot Massager", "SLF Ionic Dry Brush"],
        captions: ["Personal care · Industrial Design · CMF", "Personal care · Industrial Design · CMF"],
        media: [
          media("slf-foot-massager.png", 800, 800, "SLF foot massager designed for at-home wellness and recovery."),
          media("slf-ionic-dry-brush.png", 800, 800, "SLF ionic drying brush with integrated controls and black-and-red CMF."),
        ],
      },
      {
        type: "richText",
        body: "All four products shown are commercial, manufactured releases — carried from concept through production rather than remaining as concepts or prototypes.",
      },
    ],
  },
  {
    id: "production-quality",
    label: "Production & Quality",
    heading: "Protecting design intent through production.",
    blocks: [
      {
        type: "richText",
        body: "Maintaining design quality required continued attention beyond initial approval — through prototypes, samples, and production decisions that could otherwise drift from the original intent.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Design intent through production",
        steps: [
          { title: "Design Intent", connectorAfter: "→" },
          { title: "Development Sample", connectorAfter: "→" },
          { title: "Final Manufactured Product" },
        ],
      },
      {
        type: "cardSet",
        heading: "Designing with manufacturing in mind",
        columns: 2,
        items: [
          { title: "Part Strategy", body: "Considering how a design breaks into parts shaped assembly, cost, and manufacturability from early development." },
          { title: "Assembly", body: "Component fit, tolerance, and assembly sequence were considered alongside form, not resolved after it." },
          { title: "CMF", body: "Color, material, and finish decisions were evaluated against real production processes and cost, not only visual intent." },
          { title: "Tooling / Manufacturing", body: "Tooling and manufacturing constraints informed design decisions early enough to protect the intended product experience." },
        ],
      },
      {
        type: "callout",
        title: "Quality ownership",
        body: "Reviewing prototypes and production samples helped maintain continuity between the intended design and the manufactured result.",
      },
      {
        type: "richText",
        heading: "Balancing constraints",
        body: "Not every constraint required compromise in the same place. The goal was identifying which elements carried the core product experience, and protecting them through implementation — across design intent, feasibility, cost, schedule, and quality.",
      },
    ],
  },
  {
    id: "impact",
    label: "Professional Impact",
    heading: "Designing beyond the artifact.",
    blocks: [
      {
        type: "richText",
        body: "Working across concept development, design leadership, engineering collaboration, and manufacturing shaped a design practice that considers not only the artifact itself, but the systems, constraints, people, and decisions required to bring it into the world.",
      },
      {
        type: "cardSet",
        columns: 2,
        items: [
          { title: "Systems Thinking", body: "See relationships beyond the individual artifact." },
          { title: "Design Leadership", body: "Create clarity and move teams toward decisions." },
          { title: "Cross-Functional Collaboration", body: "Translate design intent across disciplines." },
          { title: "Execution", body: "Carry ideas from concept into real-world implementation." },
        ],
      },
    ],
  },
];

export const professionalExperienceProject: CaseStudyProject = {
  slug: "professional-experience",
  title: "PROFESSIONAL EXPERIENCE",
  subtitle:
    "A collection of commercial products designed across wellness, fitness, personal care, smart home, and lifestyle categories.",
  category: "Commercial Product Development",
  role: ["Industrial Design", "Design Leadership"],
  year: "2021–2026",
  focus: ["Cross-Functional Collaboration", "Concept to Production"],
  status: "Professional Work",
  breadcrumb: ["Work", "Professional Experience"],
  hero: {
    ...media(
      "professional-experience-hero.png",
      1915,
      821,
      "A collection of consumer products spanning fitness, smart home, personal care, wellness, and lifestyle.",
    ),
    priority: true,
  },
  sections: professionalExperienceSections,
};
