import type { CaseStudyProject, CaseStudySection } from "@/lib/types";

export const sourcefoldSections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "A global content operations system for managing change across markets.",
    blocks: [
      {
        type: "richText",
        body: "SOURCEFOLD explores how global content teams can adapt, review, and publish one source across multiple markets without losing visibility into ownership, version history, or human decisions.\n\nThe concept focuses on the operational moments that become difficult at scale: when AI should pause for review, how local edits survive source updates, and how markets can move independently without fragmenting global oversight.",
      },
      {
        type: "cardSet",
        variant: "content",
        items: [
          { title: "Role", body: "Product Design · UX Strategy · Interaction Design" },
          { title: "Timeline", body: "Independent Concept · 2026" },
          { title: "Focus", body: "Enterprise UX · AI Workflows · Systems Design" },
          { title: "Scope", body: "Strategy · Information Architecture · Interaction Design · Prototype · Testing" },
        ],
      },
      {
        type: "placeholder",
        layout: "medium",
        label: "Overview — Orbit Launch Campaign",
        details: [
          "One source",
          "→ United States — Ready",
          "→ Japan — Review Required",
          "→ France — Source Updated",
          "→ Brazil — Blocked",
        ],
      },
    ],
  },
  {
    id: "challenge",
    label: "Challenge",
    heading: "Global content gets complicated quickly.",
    blocks: [
      {
        type: "richText",
        body: "A single campaign can become dozens of market-specific versions across languages, reviewers, accessibility requirements, channels, and publishing states.\n\nThe challenge is not simply generating localized content. It is maintaining control as that content changes across a distributed workflow.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          {
            title: "Fragmented ownership",
            body: "Teams need to know who owns the next decision when content moves across global and local workflows.",
          },
          {
            title: "Version uncertainty",
            body: "A source update can affect multiple markets differently, especially when local teams have already approved or edited content.",
          },
          {
            title: "Automation without enough visibility",
            body: "AI can accelerate adaptation, but teams still need to understand what changed, why it matters, and when human judgment is required.",
          },
        ],
      },
      {
        type: "sourcefoldChallengeDiagram",
        layout: "full",
      },
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    heading: "The hardest moments happen between teams and tools.",
    blocks: [
      {
        type: "richText",
        body: "I mapped the workflow from source creation through adaptation, local review, approval, and publishing to identify where visibility and ownership begin to break down.\n\nThe critical problems were not isolated screens. They were handoffs between people and system states.",
      },
      {
        type: "sourcefoldWorkflowDiagram",
        layout: "full",
      },
      {
        type: "callout",
        title: "Supporting principle",
        body: "Every exception should expose **status, reason, owner, and next action**.",
      },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    heading: "Manage exceptions, not every variation.",
    blocks: [
      {
        type: "richText",
        body: "Global teams do not need to inspect every market equally.\n\nThey need to know what changed, why it matters, who owns the next action, and whether the issue requires human judgment.\n\nThis led to an exception-driven product model where normal states stay quiet and meaningful changes rise to the surface.",
      },
      {
        type: "cardSet",
        columns: 2,
        items: [
          {
            title: "Surface attention",
            body: "Prioritize unresolved exceptions instead of treating every market as equally urgent.",
          },
          {
            title: "Explain impact",
            body: "Show the downstream consequence of a change without exposing unnecessary system complexity.",
          },
          {
            title: "Clarify ownership",
            body: "Every exception has a status, reason, owner, and next action.",
          },
          {
            title: "Preserve human decisions",
            body: "AI can accelerate adaptation, but approved local work is never silently overwritten.",
          },
        ],
      },
      {
        type: "callout",
        title: "Key statement",
        body: "AI reduces the work users need to inspect, not the control they retain.",
      },
    ],
  },
  {
    id: "system-architecture",
    label: "System Architecture",
    heading: "A content model designed for change.",
    blocks: [
      {
        type: "richText",
        body: "Instead of treating each localization as an isolated file, I structured SOURCEFOLD around connected objects that preserve source relationships, local decisions, review history, and release state.",
      },
      {
        type: "sourcefoldObjectModel",
        layout: "full",
      },
      {
        type: "richText",
        body: "**A market is not simply a language.**\n\nIt also carries its own review requirements, publishing conditions, accessibility needs, and local context.\n\nThis distinction allows SOURCEFOLD to treat each market as a traceable operational state instead of a static localization file.",
      },
      {
        type: "callout",
        title: "Reading the model",
        body: "Approved does not equal Published.\n\nAI appears as a supporting system capability, not as the central object in the architecture.",
      },
    ],
  },
  {
    id: "key-decisions",
    label: "Key Decisions",
    heading: "Designing the rules before refining the interface.",
    intro:
      "The most important design work happened around system behavior: when automation should proceed, when it should stop, and how local decisions should survive future source changes.",
    blocks: [
      {
        type: "sourcefoldKeyDecisions",
        layout: "full",
      },
    ],
  },
  {
    id: "product-experience",
    label: "Product Experience",
    heading: "Product Experience",
    blocks: [
      {
        type: "richText",
        body: "I focused the product around one campaign — Orbit Launch — across four markets with different operational states.\n\nThe product experience focuses on the moments where users need to understand, decide, and resolve — not every screen in the platform.",
      },
      {
        type: "relationship",
        ariaLabel: "Orbit Launch campaign markets and status",
        items: [
          { title: "United States", body: "Ready" },
          { title: "Japan", body: "Review Required" },
          { title: "France", body: "Source Updated" },
          { title: "Brazil", body: "Blocked" },
        ],
      },

      // — Journey Strip — a fast, light overview of the end-to-end
      // sequence before the detailed subsections below walk through each
      // moment individually.
      {
        type: "stateFlow",
        ariaLabel: "Orbit Launch end-to-end journey",
        steps: [
          { title: "Create", body: "Source campaign", connectorAfter: "→" },
          { title: "Select Markets", body: "US · Japan · France · Brazil", connectorAfter: "→" },
          { title: "Adapt", body: "AI-assisted variants", connectorAfter: "→" },
          { title: "Review", body: "Human judgment", connectorAfter: "→" },
          { title: "Resolve", body: "Source / version changes", connectorAfter: "→" },
          { title: "Preview", body: "Market + device context", connectorAfter: "→" },
          { title: "Publish", body: "Ready markets" },
        ],
      },

      // — Global Workspace —
      {
        type: "richText",
        heading: "Know what needs attention.",
        body: "The Global Workspace is organized around exceptions rather than generic dashboard metrics.\n\nEach market exposes the information needed to act:\n\n- Status\n- Reason\n- Owner\n- Version relationship\n- Publishing state\n- Next action\n\nThis allows the content manager to understand campaign readiness without opening every market individually.",
      },
      {
        type: "placeholder",
        layout: "full",
        label: "Global Workspace — Flagship UI",
      },
      {
        type: "placeholder",
        items: ["Japan — Review Required", "France — Source Updated", "Brazil — Blocked", "Owner + Next Action"],
      },
      {
        type: "callout",
        title: "Design decision",
        body: "Normal states recede. Exceptions surface.",
      },

      // — AI Review —
      {
        type: "richText",
        heading: "Give reviewers evidence, not a confidence score.",
        body: "When SOURCEFOLD detects a market-specific issue that requires judgment, it pauses automation and brings the reviewer into a focused decision workspace.\n\nThe review experience separates three layers:",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Source", body: "What the original content says." },
          { title: "Adapted Variant", body: "What AI proposed for the market." },
          { title: "Review Context", body: "Why the system believes human judgment is required." },
        ],
      },
      {
        type: "richText",
        body: "The reviewer can edit, approve, or escalate while the system preserves who changed what and why.",
      },
      {
        type: "placeholder",
        layout: "full",
        label: "AI Review Workspace — Flagship UI",
      },
      {
        type: "placeholder",
        items: ["AI Suggested", "Human Edited", "Human Approved"],
      },
      {
        type: "callout",
        title: "Design decision",
        body: "AI proposes. Humans decide. The system preserves the decision.",
      },

      // — Source Change Impact —
      {
        type: "richText",
        heading: "Show downstream impact before changing local work.",
        body: "When the source offer changes from 20% to 25%, SOURCEFOLD does not mark every market as outdated.\n\nInstead, the system evaluates which variants are actually affected.",
      },
      {
        type: "relationship",
        ariaLabel: "Source change impact by market",
        items: [
          { title: "United States", body: "Safe to Update" },
          { title: "Japan", body: "No Action Needed" },
          { title: "France", body: "Review Required" },
          { title: "Brazil", body: "Safe to Update" },
        ],
      },
      {
        type: "richText",
        body: "France requires attention because its approved local variant still references the previous offer.",
      },
      {
        type: "placeholder",
        layout: "full",
        label: "Source Change Impact — Flagship UI",
      },
      {
        type: "placeholder",
        items: ["20% → 25%", "France", "Human Edited · Approved"],
      },
      {
        type: "callout",
        title: "Note",
        body: "This approved local edit will not be overwritten automatically.",
      },
      {
        type: "callout",
        title: "Design decision",
        body: "Affected does not automatically mean actionable.",
      },

      // — Version Resolution —
      {
        type: "richText",
        heading: "Preserve local decisions without losing source alignment.",
        body: "When approved local content conflicts with a new source version, SOURCEFOLD makes the trade-off explicit instead of forcing synchronization.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Update affected field", body: "Apply the source change while preserving unrelated local edits." },
          { title: "Keep local version", body: "Record an intentional market exception." },
          { title: "Review manually", body: "Create a new human-edited version before approval." },
        ],
      },
      {
        type: "placeholder",
        layout: "full",
        label: "Version Resolution — Flagship UI",
      },
      {
        type: "placeholder",
        items: ["Current Local Version", "vs.", "Updated Source"],
      },
      {
        type: "placeholder",
        items: ["Update affected field", "Keep local version", "Review manually"],
      },
      {
        type: "callout",
        title: "Design decision",
        body: "Local divergence can be intentional. The system should record it, not erase it.",
      },

      // — Publishing Readiness —
      {
        type: "richText",
        heading: "Publish independently without losing global visibility.",
        body: "Approval and publishing are intentionally separate.\n\nBefore release, users can see which version of each market will go live, which markets are excluded, and why.\n\nThis allows approved markets to move forward even if another market remains blocked.",
      },
      {
        type: "placeholder",
        layout: "full",
        label: "Publishing Readiness",
        details: [
          "3 of 4 markets ready",
          "United States — Ready",
          "Japan — Approved",
          "France — Approved Exception",
          "Brazil — Blocked / Excluded",
          "Primary action: Publish 3 Markets",
        ],
      },
      {
        type: "placeholder",
        items: ["France — Approved Exception", "Brazil — Blocked / Excluded", "Publish 3 Markets"],
      },

      // — Role-Based Experience —
      {
        type: "richText",
        heading: "One system, different responsibilities.",
        body: "SOURCEFOLD uses a shared content model, but the interface exposes different levels of complexity depending on the user's responsibility.\n\nA content manager needs global readiness and ownership.\n\nA market reviewer needs assigned decisions and supporting evidence.\n\nA program owner needs launch risk and unresolved dependencies.\n\nThe underlying system stays shared while each role sees only the information required to act.",
      },
      {
        type: "placeholder",
        layout: "medium",
        items: ["Global Workspace", "My Reviews"],
        caption: "Shared state model, role-specific working views.",
      },

      // — Cross-Device Preview —
      {
        type: "richText",
        heading: "One content model, different interaction contexts.",
        body: "The approved market variant remains consistent across devices while interaction controls adapt to each environment.\n\nDesktop exposes more persistent context.\n\nMobile consolidates controls into touch-first patterns.\n\nTV prioritizes focus states, larger targets, and reduced navigation depth.",
      },
      {
        type: "placeholder",
        layout: "medium",
        label: "Desktop + Mobile + TV Preview",
      },
    ],
  },
  {
    id: "system-states",
    label: "System States",
    heading: "Designing the states between the screens.",
    blocks: [
      {
        type: "richText",
        body: "SOURCEFOLD is defined not only by its primary screens, but by the operational states that connect them.",
      },
      {
        type: "placeholder",
        layout: "full",
        label: "SOURCEFOLD Operational State System",
        groups: [
          { title: "Workflow states", items: ["Ready", "Review Required", "Source Updated", "Blocked"] },
          { title: "Review / provenance states", items: ["AI Suggested", "Human Edited", "Human Approved", "Escalated"] },
          { title: "Version states", items: ["Current", "Affected", "Needs Re-approval", "Approved Exception"] },
          { title: "Publishing states", items: ["Not Ready", "Ready", "Scheduled", "Live"] },
        ],
      },
      {
        type: "richText",
        body: "These states drive tables, review panels, version logic, publishing behavior, and notifications across the product.",
      },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    heading: "Testing the system model, not visual preference.",
    blocks: [
      {
        type: "richText",
        body: "The prototype is designed to test whether users can understand and act on SOURCEFOLD's operational states:\n\n- what needs attention\n- why AI paused for review\n- what a source update affects\n- whether approved local work is protected\n- which markets will actually publish",
      },
      {
        type: "richText",
        heading: "Iteration 01 — Attention hierarchy",
        body: "Whether users notice what needs attention before anything else.",
      },
      {
        type: "placeholder",
        layout: "medium",
        items: ["Before", "Evidence", "Design Decision", "After"],
      },
      {
        type: "richText",
        heading: "Iteration 02 — AI review comprehension",
        body: "Whether users understand why AI paused for review and what evidence supports it.",
      },
      {
        type: "placeholder",
        layout: "medium",
        items: ["Before", "Evidence", "Design Decision", "After"],
      },
      {
        type: "richText",
        heading: "Iteration 03 — Source change / version resolution",
        body: "Whether users understand what a source change affects and how to resolve it.",
      },
      {
        type: "placeholder",
        layout: "medium",
        items: ["Before", "Evidence", "Design Decision", "After"],
      },
      {
        type: "callout",
        title: "Developer note",
        body: "These placeholders will be populated only after real prototype testing sessions have been completed. No findings, evidence, or before/after results should be treated as final until then.",
      },
    ],
  },
  {
    id: "final-experience",
    label: "Final Experience",
    heading: "From global overview to local decision.",
    blocks: [
      {
        type: "richText",
        body: "The final prototype follows Orbit Launch through the moments where operational complexity becomes visible:",
      },
      {
        type: "stateFlow",
        ariaLabel: "Final experience walkthrough sequence",
        steps: [
          { title: "Global Workspace", connectorAfter: "→" },
          { title: "Japan Review", connectorAfter: "→" },
          { title: "Human Edit & Approval", connectorAfter: "→" },
          { title: "France Source Change", connectorAfter: "→" },
          { title: "Version Resolution", connectorAfter: "→" },
          { title: "Publishing Readiness", connectorAfter: "→" },
          { title: "Cross-device Preview", connectorAfter: "→" },
          { title: "Partial Market Release" },
        ],
      },
      {
        type: "placeholder",
        layout: "full",
        aspectRatio: "16 / 9",
        label: "SOURCEFOLD Final Experience Video",
        details: [
          "Global Workspace",
          "Japan review",
          "Edit and approve",
          "France source update",
          "Version resolution",
          "Publishing readiness",
          "Preview",
          "Publish three markets",
          "Final live / pending state",
        ],
      },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "Designing for global scale means designing for change.",
    blocks: [
      {
        type: "richText",
        body: "SOURCEFOLD explores how AI-assisted content workflows can scale without hiding the human decisions that make global content trustworthy.",
      },
      {
        type: "richText",
        heading: "What the concept demonstrates",
        body: "- Exception-driven enterprise workflows\n- AI-assisted review with human control\n- Content lineage and version awareness\n- Explicit ownership\n- Intentional local exceptions\n- Market-level publishing\n- Scalable operational states",
      },
      {
        type: "richText",
        heading: "What I learned",
        body: "**Automation needs boundaries.**\n\nThe value of AI is not maximizing automatic changes, but reducing repetitive work while making judgment points explicit.\n\n**Versioning is a user experience problem.**\n\nUsers should understand what changed and what it affects without needing to think like engineers.\n\n**Exceptions are part of the system, not failures of it.**\n\nA scalable global product needs to support intentional divergence, partial readiness, and unresolved work without losing clarity.",
      },
      {
        type: "richText",
        heading: "What I would explore next",
        body: "- Permissions and governance\n- Localization memory based on previous human decisions\n- Team-defined automation policies\n- Broader content types and channels",
      },
      {
        type: "callout",
        title: "Closing statement",
        body: "One source. Many contexts. Human decisions stay visible.",
      },
    ],
  },
];

export const sourcefoldProject: CaseStudyProject = {
  slug: "sourcefold",
  title: "SOURCEFOLD",
  subtitle: "One source. Many contexts.",
  eyebrow: "Independent Product Design Concept · 2026",
  description:
    "An AI-assisted content operations platform for adapting, reviewing, and publishing experiences across markets—while keeping ownership, version history, and human decisions visible.",
  category: "Independent Product Design Concept",
  role: ["Product Design", "UX Strategy", "Interaction Design"],
  year: "2026",
  focus: ["Enterprise UX", "AI Workflows", "Systems Design"],
  scope: ["Product Strategy", "Information Architecture", "Prototyping", "Testing"],
  status: "Independent concept project",
  breadcrumb: ["Work", "Product Design", "SOURCEFOLD"],
  heroPlaceholder: {
    label: "SOURCEFOLD Hero Composition",
    details: [
      "Global Workspace as primary layer",
      "AI Review Workspace as secondary layer",
      "Source Change / version impact as supporting detail",
    ],
  },
  sections: sourcefoldSections,
};
