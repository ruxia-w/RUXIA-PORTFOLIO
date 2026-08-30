import type { CaseStudyProject, CaseStudySection, MediaAsset } from "@/lib/types";

const sourcefoldScreen = (file: string, alt: string): MediaAsset => ({
  src: `/work/sourcefold/screens/${file}.png`,
  width: 1440,
  height: 900,
  alt,
  crop: "none",
  maxDisplayWidth: 1020,
});

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
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "global-workspace",
          "SOURCEFOLD Global Workspace showing Orbit Launch market exceptions, owners, versions, publishing states, and next actions",
        ),
      },
      {
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "market-variant-detail",
          "France market variant detail showing Approved and Source Updated states with an explicit next action",
        ),
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
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "ai-review-suggested",
          "SOURCEFOLD AI Review workspace with an AI-suggested Japan adaptation awaiting human review",
        ),
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["AI Suggested", "Human Edited", "Human Approved"],
        media: [
          sourcefoldScreen("ai-review-suggested", "AI-suggested review state"),
          sourcefoldScreen("ai-review-human-edited", "Human-edited review state"),
          sourcefoldScreen("ai-review-approved", "Human-approved review state"),
        ],
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
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "source-change-impact",
          "SOURCEFOLD Source Change Impact overview showing field-level downstream effects across four markets",
        ),
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["France impact expanded", "Approved local variant preserved"],
        media: [
          sourcefoldScreen(
            "source-change-impact-france",
            "Expanded France source-change detail showing the promotional offer change from 20 percent to 25 percent",
          ),
          sourcefoldScreen(
            "market-variant-detail",
            "France market variant showing the approved local edit preserved after the source update",
          ),
        ],
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
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "version-resolution",
          "SOURCEFOLD Version Resolution workspace comparing the current France variant with the updated source",
        ),
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Current local version", "Updated source selected"],
        media: [
          sourcefoldScreen("version-resolution", "Current local version and updated source comparison"),
          sourcefoldScreen("version-resolution-update", "Update affected field resolution selected"),
        ],
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Update affected field", "Keep local version", "Review manually"],
        media: [
          sourcefoldScreen("version-resolution-update", "Update affected field decision state"),
          sourcefoldScreen("version-resolution-keep", "Keep Local Version decision state"),
          sourcefoldScreen("version-resolution-manual", "Manual Review decision state"),
        ],
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
        type: "media",
        layout: "full",
        media: sourcefoldScreen(
          "publishing-readiness",
          "SOURCEFOLD Publishing Readiness showing three of four markets ready and Brazil blocked from this release",
        ),
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Publish 3 markets", "3 live · 1 pending"],
        media: [
          sourcefoldScreen("publishing-confirmation", "Confirmation before publishing three eligible markets"),
          sourcefoldScreen("publishing-live", "Publishing result with three markets live and Brazil pending"),
        ],
      },

      // — Role-Based Experience —
      {
        type: "richText",
        heading: "One system, different responsibilities.",
        body: "SOURCEFOLD uses a shared content model, but the interface exposes different levels of complexity depending on the user's responsibility.\n\nA content manager needs global readiness and ownership.\n\nA market reviewer needs assigned decisions and supporting evidence.\n\nA program owner needs launch risk and unresolved dependencies.\n\nThe underlying system stays shared while each role sees only the information required to act.",
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Global Workspace", "My Reviews"],
        captions: [
          "Campaign-level readiness and ownership for the content manager.",
          "Assigned decisions and supporting context for the market reviewer.",
        ],
        media: [
          sourcefoldScreen("global-workspace", "SOURCEFOLD Global Workspace for a content manager"),
          sourcefoldScreen("review-queue-my-reviews", "SOURCEFOLD My Reviews queue for a market reviewer"),
        ],
      },

      // — Cross-Device Preview —
      {
        type: "richText",
        heading: "One content model, different interaction contexts.",
        body: "The approved market variant remains consistent across devices while interaction controls adapt to each environment.\n\nDesktop exposes more persistent context.\n\nMobile consolidates controls into touch-first patterns.\n\nTV prioritizes focus states, larger targets, and reduced navigation depth.",
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Desktop", "Mobile", "TV"],
        media: [
          sourcefoldScreen("market-preview", "SOURCEFOLD market preview in Desktop mode"),
          sourcefoldScreen("market-preview-mobile", "SOURCEFOLD market preview in Mobile mode"),
          sourcefoldScreen("market-preview-tv", "SOURCEFOLD market preview in TV mode"),
        ],
      },
      {
        type: "richText",
        heading: "One hierarchy, two visual environments.",
        body: "The interface adapts to light and dark environments while preserving the same hierarchy, operational states, and interaction patterns.",
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Light mode", "Dark mode"],
        media: [
          sourcefoldScreen("global-workspace", "SOURCEFOLD Global Workspace in light mode"),
          sourcefoldScreen("global-workspace-dark", "SOURCEFOLD Global Workspace in dark mode"),
        ],
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
        type: "sourcefoldOperationalStateDiagram",
        layout: "full",
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
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Exception overview", "Release readiness"],
        captions: [
          "Test whether the highest-risk markets and their next actions surface before routine status.",
          "Test whether ready, held, and excluded markets are distinguishable before publishing.",
        ],
        media: [
          sourcefoldScreen(
            "global-workspace",
            "SOURCEFOLD campaign workspace showing the attention queue and market readiness",
          ),
          sourcefoldScreen(
            "publishing-readiness",
            "SOURCEFOLD publishing readiness screen showing three ready markets and one held market",
          ),
        ],
      },
      {
        type: "richText",
        heading: "Iteration 02 — AI review comprehension",
        body: "Whether users understand why AI paused for review and what evidence supports it.",
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["AI Suggested", "Human Edited", "Human Approved"],
        captions: [
          "Test whether the provisional AI state and the reason for review are recognizable.",
          "Test whether human ownership and edited provenance remain clear after intervention.",
          "Test whether approval reads as a separate, explicit decision rather than an automatic state change.",
        ],
        media: [
          sourcefoldScreen("ai-review-suggested", "AI-suggested adaptation awaiting human review"),
          sourcefoldScreen("ai-review-human-edited", "Human-edited adaptation in the review workspace"),
          sourcefoldScreen("ai-review-approved", "Human-approved adaptation in the review workspace"),
        ],
      },
      {
        type: "richText",
        heading: "Iteration 03 — Source change / version resolution",
        body: "Whether users understand what a source change affects and how to resolve it.",
      },
      {
        type: "mediaGroup",
        variant: "screensFill",
        labels: ["Impact overview", "Affected market", "Resolution decision"],
        captions: [
          "Test whether users can identify which markets and fields a source update affects.",
          "Test whether France's approved local value is visibly protected while the source changes.",
          "Test whether keeping the local version communicates an intentional exception and its next state.",
        ],
        media: [
          sourcefoldScreen("source-change-impact", "Source-change impact overview across four markets"),
          sourcefoldScreen(
            "source-change-impact-france",
            "Expanded France impact state showing the affected promotional offer",
          ),
          sourcefoldScreen(
            "version-resolution-keep",
            "Version resolution screen with Keep local version selected",
          ),
        ],
      },
      {
        type: "callout",
        title: "Testing status",
        body: "These screens define the prototype scenarios and evaluation focus. Findings, evidence, and before/after results will be added only after real testing sessions; none of the visuals above represent completed study results.",
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
        type: "finalExperience",
        body: "",
        videoSrc: "/work/sourcefold/sourcefold-final-experience.webm",
        videoAriaLabel: "SOURCEFOLD final experience walkthrough from global workspace through review, version resolution, cross-device preview, and partial market release",
        presentation: "plain",
      },
      {
        type: "sourcefoldPrototypeLink",
        href: "/sourcefold-prototype/index.html",
        label: "Explore interactive prototype ↗",
        note: "Opens the complete SOURCEFOLD prototype in a new tab.",
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
  subtitle: "AI-assisted global content operations across markets",
  category: "Independent Product Design Concept",
  role: ["Product Design", "UX Strategy", "Interaction Design"],
  year: "2026",
  focus: ["Enterprise UX", "AI Workflows", "Systems Design"],
  scope: ["Product Strategy", "Information Architecture", "Prototyping", "Testing"],
  status: "Independent concept project",
  breadcrumb: ["Work", "Product Design", "SOURCEFOLD"],
  // Shared with the Home page's own project entry (see app/page.tsx, which
  // imports these exact src/width/height values) — one hero asset
  // definition instead of two independently-maintained copies, same
  // pattern as auric-signal.ts / trace.ts.
  hero: {
    src: "/work/sourcefold/sourcefold-hero-light-v3.png",
    width: 3548,
    height: 1774,
    alt: "SOURCEFOLD global content operations workspace shown in light and dark modes with human review, source-change impact, and publishing-readiness panels.",
    priority: true,
  },
  heroDark: {
    src: "/work/sourcefold/sourcefold-hero-dark-v3.png",
    width: 3548,
    height: 1774,
    alt: "SOURCEFOLD global content operations workspace shown in light and dark modes with human review, source-change impact, and publishing-readiness panels.",
    // Not `priority`: .heroDark starts `display: none` (see
    // ProjectHeader.module.css) and only becomes visible in dark theme, so
    // it shouldn't be eagerly fetched on every page view.
    priority: false,
  },
  sections: sourcefoldSections,
};
