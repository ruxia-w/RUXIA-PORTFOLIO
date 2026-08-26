import type { CaseStudyProject, CaseStudySection } from "@/lib/types";

const BASE = "/work/auric-signal";
const PROTOTYPE = "https://auric-signal-insight.lovable.app/";

export const auricSignalSections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        type: "richText",
        body: "AURIC SIGNAL is an AI-assisted investment decision-support concept designed to help self-directed investors move from portfolio changes to clearer understanding. It brings together prioritized signals, contextual explanation, and scenario exploration so users can understand what changed, why it may matter, and what they may want to explore next — without handing the final judgment to AI.",
      },
      {
        type: "stateFlow",
        ariaLabel: "AURIC's central experience logic",
        steps: [
          { title: "What changed?", connectorAfter: "→" },
          { title: "Why does it matter?", connectorAfter: "→" },
          { title: "What can I do?" },
        ],
      },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    heading: "Knowing what changed is not the same as knowing what it means.",
    blocks: [
      {
        type: "richText",
        body: "The challenge is not access to more financial information. Portfolio changes, market signals, performance data, and financial context can create more noise than clarity.\n\nUsers may be able to see what moved without understanding:\n- what caused the change\n- how relevant it is to their portfolio\n- whether it deserves attention\n- whether they should explore a possible response\n\nAURIC explores how AI-assisted interpretation can organize these signals into clearer decision context while keeping judgment and action with the user.",
      },
      {
        type: "stateFlow",
        ariaLabel: "From fragmented information to decision uncertainty",
        steps: [
          { title: "Fragmented Information", connectorAfter: "→" },
          { title: "Interpretation Gap", connectorAfter: "→" },
          { title: "Decision Uncertainty" },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research & Insights",
    heading: "Research & Insights",
    blocks: [
      {
        type: "richText",
        body: "I looked at how people around me check their portfolios and make sense of market changes, through semi-structured conversations with three participants who had experience investing or trading crypto. This was a small, exploratory study intended to surface recurring themes and patterns — not to produce statistically validated findings.",
      },
      {
        type: "callout",
        title: "Research question",
        body: "How do people decide which portfolio changes deserve attention — and what information helps them feel confident enough to explore a possible action?",
      },
      {
        type: "richText",
        heading: "Research context",
        body: "- **Format:** Exploratory research, semi-structured interviews\n- **Participants:** 3\n- **Focus:** Recurring themes and patterns, not statistical validation",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-research-synthesis.png`,
          width: 1536,
          height: 1024,
          alt: "Research synthesis combining three exploratory interviews, a lightweight competitive review, affinity mapping, and recurring themes.",
          dense: true,
        },
      },
      {
        type: "cardSet",
        heading: "Recurring themes",
        columns: 3,
        items: [
          {
            title: "01 — Attention Before Analysis",
            body: "Not every portfolio change deserves equal attention — design should prioritize meaningful signals instead of presenting more data with equal visual weight.",
          },
          {
            title: "02 — Explanation Builds Confidence",
            body: "A signal is only useful when its reasoning is understandable, so AI-assisted interpretation needs to be paired with context, supporting evidence, and visible uncertainty.",
          },
          {
            title: "03 — Explore Before Acting",
            body: "People need room to explore a possible response before committing, which points to a scenario layer between understanding and decision-making.",
          },
        ],
      },
      {
        type: "richText",
        heading: "Primary user",
        body: "Self-directed investor — someone who manages their own portfolio and understands basic financial information, but is not necessarily a professional analyst.",
      },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    heading: "From information to informed action.",
    blocks: [
      {
        type: "richText",
        body: "The research shifted AURIC away from being another portfolio tracker and toward a decision-support experience — helping users move from noticing a change to acting on it with confidence.",
      },
      {
        type: "stateFlow",
        ariaLabel: "AURIC experience model: Signal, Understand, Explore, Decide",
        steps: [
          { title: "Signal", body: "Surface what deserves attention", connectorAfter: "→" },
          { title: "Understand", body: "Explain what changed and why it matters", connectorAfter: "→" },
          { title: "Explore", body: "Test possible responses before committing", connectorAfter: "→" },
          { title: "Decide", body: "Keep the final judgment with the user" },
        ],
      },
      {
        type: "cardSet",
        heading: "Design principles",
        columns: 3,
        items: [
          {
            title: "01 — Prioritize, Don't Overload",
            body: "Surface what deserves attention instead of presenting every available signal with equal weight.",
          },
          {
            title: "02 — Explain, Don't Prescribe",
            body: "Use AI to clarify context, evidence, and uncertainty rather than presenting opaque recommendations.",
          },
          {
            title: "03 — Explore Before Committing",
            body: "Give users space to test possible actions and understand consequences before making a decision.",
          },
        ],
      },
      {
        type: "callout",
        title: "Human control",
        body: "AURIC supports interpretation and exploration; the user retains control over the final decision.",
      },
    ],
  },
  {
    id: "exploration",
    label: "Exploration",
    heading: "Exploring Where Decision Support Should Begin",
    blocks: [
      {
        type: "richText",
        body: "Early layouts explored several ways to establish priority in the experience — from a dashboard-first overview to an AI-led explanation and a signal-first structure. Comparing these directions clarified which one created the clearest bridge between monitoring and decision-making.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-early-exploration-directions.png`,
          width: 1672,
          height: 941,
          alt: "Four early interface directions comparing dashboard, insight, portfolio, and daily brief entry points.",
          dense: true,
        },
      },
      {
        type: "cardSet",
        heading: "Three conceptual directions",
        columns: 3,
        items: [
          {
            title: "01 — Dashboard-Led",
            body: "Portfolio overview first. Strong context and a familiar financial-product mental model, though it risks recreating the information overload of traditional financial dashboards.",
          },
          {
            title: "02 — AI Brief-Led",
            body: "Explanation first. Reduces information-processing burden and directly surfaces what may matter, but places too much trust and product dependency on a single AI layer.",
          },
          {
            title: "03 — Signal-Led",
            body: "Attention, then explanation, then exploration. Creates a clearer bridge between portfolio monitoring and decision support.",
          },
        ],
      },
      {
        type: "callout",
        title: "Direction selected",
        body: "Signal-led decision support. This direction created the clearest bridge between monitoring and decision-making — it keeps portfolio context accessible while introducing AI selectively where explanation and interpretation add value.",
      },
    ],
  },
  {
    id: "core-user-flow",
    label: "Core User Flow",
    heading: "Two connected decision tasks",
    intro: "Two core flows translate AURIC's decision-support strategy into concrete user tasks: understanding a meaningful portfolio change and evaluating a possible response.",
    blocks: [
      {
        type: "richText",
        heading: "Flow 01 — Understand a Portfolio Change",
        body: "**From signal to understanding**\n\nHome / Portfolio Context → Signal → Signal Detail → AI-Assisted Explanation → Evidence / Context → Portfolio Relevance → Understand / Exit\n\nNo action is a valid, fully supported outcome — AURIC does not push users toward a response.",
      },
      {
        type: "richText",
        heading: "Flow 02 — Evaluate a Possible Action",
        body: "**From understanding to exploration**\n\nSignal / Insight → Explore Scenario → Adjust Possible Response → Preview Portfolio Impact → Compare Current vs. Proposed → Review → Decide / Exit\n\nAURIC supports scenario simulation and review. It does not execute trades or move assets.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-core-user-flows.png`,
          width: 1672,
          height: 941,
          alt: "Two core user flows covering understanding a portfolio change and evaluating a possible action, including edge conditions.",
          dense: true,
        },
      },
      {
        type: "richText",
        heading: "Key edge cases",
        body: "- Low-confidence explanation\n- Conflicting signals\n- Insufficient portfolio context\n- No-action outcome\n- Scenario with negative impact",
      },
    ],
  },
  {
    id: "product-design",
    label: "Product Design",
    heading: "Product Design",
    blocks: [
      {
        type: "richText",
        heading: "Information Architecture",
        body: "AURIC's architecture is organized around the user's decision journey — moving from portfolio context and prioritized signals into explanation, exploration, and review.\n\nSupporting navigation, including watchlist activity and account settings, sits alongside this path without interrupting it. AI-assisted explanation stays embedded in the broader workflow rather than becoming a separate chat destination.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-information-architecture.png`,
          width: 1448,
          height: 1086,
          alt: "AURIC SIGNAL information architecture diagram showing the app structure across Home, Insights, Assets, Watchlist, and Profile.",
          dense: true,
        },
      },
      {
        type: "relationship",
        ariaLabel: "AURIC information architecture organized around the decision journey",
        items: [
          { eyebrow: "Portfolio Context", title: "Portfolio Health · Holdings · Exposure" },
          { eyebrow: "Signals", title: "Priority Signals · Daily Brief" },
          { eyebrow: "Explanation", title: "Context · Evidence · Confidence / Uncertainty" },
          { eyebrow: "Scenario Exploration", title: "Scenario · Compare · Impact" },
          { eyebrow: "Decision / Review", title: "Review · Save · Exit" },
        ],
      },
      {
        type: "richText",
        heading: "Primary Screens",
        body: "The primary navigation is organized around five top-level destinations, carrying users from portfolio context and signals through explanation, tracking, and account controls.",
      },
      {
        type: "mediaGroup",
        variant: "screens",
        labels: ["Home", "Insights", "Assets", "Watchlist", "Profile"],
        captions: [
          "Portfolio context and the signals that currently deserve attention.",
          "AI-assisted explanation and evidence behind a selected signal.",
          "Holdings, allocation, and exposure across the portfolio.",
          "Tracked assets and their recent movement.",
          "Account, preferences, and personal settings.",
        ],
        media: [
          { src: `${BASE}/auric-primary-home.png`, width: 1320, height: 2868, alt: "AURIC Home viewport." },
          { src: `${BASE}/auric-primary-insights.png`, width: 1320, height: 2868, alt: "AURIC Insights viewport." },
          { src: `${BASE}/auric-primary-assets.png`, width: 1320, height: 2868, alt: "AURIC Assets viewport." },
          { src: `${BASE}/auric-primary-watchlist.png`, width: 1320, height: 2868, alt: "AURIC Watchlist viewport." },
          { src: `${BASE}/auric-primary-profile.png`, width: 1320, height: 2868, alt: "AURIC Profile viewport." },
        ],
      },
      {
        type: "richText",
        heading: "Key Product Experiences",
        body: "Four key experiences carry the decision-support journey from a prioritized signal into explanation, simulation, and a non-executing response.",
      },
      {
        type: "feature",
        title: "Prioritized Signals",
        body: "**What deserves my attention?**\n\nAURIC prioritizes meaningful portfolio changes instead of presenting every movement with equal weight. A single health score brings performance, allocation, and risk together, so users can see overall condition before diving into individual metrics.\n\nThe deeper view explains where that score comes from — diversification, concentration, volatility, and liquidity — connecting those factors back to allocation and performance so users can move from a high-level signal into the specific conditions that may need attention.",
        focus: ["Prioritize meaningful signals over equal-weight data", "Make contributing risk factors visible", "Connect health, allocation, and performance"],
        media: { src: `${BASE}/auric-portfolio-health-fullpage.png`, width: 1170, height: 4941, alt: "Full Portfolio Health screen with score, contributing factors, risk, allocation, and performance." },
      },
      {
        type: "feature",
        title: "Explainable AI",
        body: "**Why does this matter?**\n\nI treated AI as an explanation layer rather than a source of automatic recommendations. When AURIC surfaces a portfolio signal, the experience first explains what changed and why it may have happened, then lets users inspect the drivers and supporting evidence behind that interpretation.\n\nConfidence and evidence are intentionally visible instead of hidden behind a single AI-generated answer. The experience also separates the market explanation from its impact on the user's own portfolio, helping users understand both the broader context and why the signal may matter to them personally.",
        focus: ["Explain the change before suggesting a response", "Make evidence and confidence visible", "Connect market context to personal impact"],
        media: { src: `${BASE}/auric-ai-explanation-fullpage.png`, width: 1170, height: 6342, alt: "Full AI explanation screen showing what changed, drivers, evidence, portfolio impact, and considerations." },
      },
      {
        type: "feature",
        title: "Scenario Exploration",
        body: "**What could happen if I respond?**\n\nScenario Simulation gives users a way to explore a possible market change before deciding how they might respond. Rather than presenting the result as a prediction, the interface frames it as an estimate based on the portfolio's current composition and the assumptions selected by the user.\n\nThe simulation shows how a scenario could affect portfolio value, health, risk exposure, individual holdings, and allocation. I also kept the reasoning behind the interpretation accessible so users can understand why AURIC is highlighting a particular risk instead of relying on the result as a black box.",
        focus: ["Frame outcomes as estimates, not predictions", "Show portfolio-wide consequences of a scenario", "Keep AI reasoning available for deeper inspection"],
        media: { src: `${BASE}/auric-scenario-simulation-fullpage.png`, width: 1170, height: 5952, alt: "Full scenario simulation screen estimating the portfolio impact of a Bitcoin decline." },
      },
      {
        type: "feature",
        title: "Compare Before Deciding",
        body: "**What changes before I make a judgment?**\n\nThis view extends the scenario experience from understanding risk into exploring a possible response. The preview compares the current allocation with a suggested alternative and explains how the change relates to the user's concentration risk, risk preference, and longer-term goals.\n\nI intentionally separated exploring a strategy from executing an action. Users can review the proposed allocation, inspect its potential impact, and save the strategy without placing a trade or moving any assets. AURIC keeps the current and proposed states visible side by side so consequences stay clear before the user decides.",
        focus: ["Compare current and suggested allocation clearly", "Explain why the proposed change may be relevant", "Separate decision support from trade execution"],
        media: { src: `${BASE}/auric-rebalancing-fullpage.png`, width: 1170, height: 3789, alt: "Full rebalancing preview comparing current and suggested allocation without executing a trade." },
      },
      {
        type: "richText",
        heading: "Visual & Component System",
        body: "AURIC is built around a restrained visual and component system designed to keep dense financial information readable and consistent across product states.",
      },
      {
        type: "cardSet",
        heading: "Organizing the system",
        columns: 2,
        items: [
          {
            title: "Visual Hierarchy",
            body: "Priority signals, confidence indicators, and financial data are weighted so the most consequential information reads first, even in a dense, numbers-heavy interface.",
          },
          {
            title: "State & Semantic Language",
            body: "Consistent color, iconography, and typography communicate confidence, risk, and status, so evidence, uncertainty, and warnings stay legible at a glance.",
          },
          {
            title: "Reusable Components",
            body: "Signal cards, an evidence and confidence module, scenario controls, and comparison panels repeat across the product with a shared visual language.",
          },
          {
            title: "Consistency & Scale",
            body: "The system was designed mobile-first, matching how self-directed investors most often check a portfolio, with patterns built to extend consistently as the product grows.",
          },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-visual-component-system.png`,
          width: 1532,
          height: 836,
          alt: "AURIC visual system showing color, type, buttons, status, metrics, allocation, and shared patterns.",
          dense: true,
        },
      },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    heading: "Testing the connected journey",
    blocks: [
      {
        type: "richText",
        body: "I conducted moderated usability sessions to evaluate whether users could understand a portfolio signal, interpret the AI-supported explanation, and explore a possible response without losing context or control.",
      },
      {
        type: "richText",
        heading: "Testing setup",
        body: "- **Participants:** 3\n- **Format:** Moderated usability testing\n- **Prototype:** Interactive high-fidelity app\n- **Focus:** Hierarchy · Comprehension · Scenario clarity · User control",
      },
      {
        type: "richText",
        heading: "Tasks",
        body: "1. Check portfolio health.\n2. Investigate a priority signal.\n3. Review explanation and evidence.\n4. Evaluate a scenario.\n5. Review rebalancing.",
      },
      {
        type: "cardSet",
        heading: "Observed → Changed",
        columns: 3,
        items: [
          {
            title: "01 — Signal Hierarchy",
            body: "Participants looked for a clear indication of what required attention before exploring supporting metrics — the priority hierarchy was strengthened in response.",
          },
          {
            title: "02 — Explanation & Evidence",
            body: "When reviewing AI-assisted explanations, participants looked for supporting context before moving deeper into the decision flow — evidence was kept closer to the explanation.",
          },
          {
            title: "03 — Scenario Comparison",
            body: "Scenario outputs needed to clearly read as exploratory estimates rather than predictions — the framing was clarified in response.",
          },
        ],
      },
    ],
  },
  {
    id: "final-experience",
    label: "Final Experience",
    heading: "From signal to informed decision.",
    blocks: [
      {
        type: "finalExperience",
        body: "AURIC brings portfolio context, AI-assisted explanation, and scenario exploration into one continuous decision-support experience. The system helps users understand what changed, explore possible responses, and retain control over the final judgment.",
        videoSrc: `${BASE}/auric-final-experience.mp4`,
        posterSrc: `${BASE}/auric-primary-home-fullpage.png`,
        prototypeUrl: PROTOTYPE,
      },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "Designing AI to support judgment, not replace it.",
    blocks: [
      {
        type: "richText",
        body: "AURIC evolved into a responsive decision-support experience that connects portfolio monitoring, AI-assisted explanation, scenario exploration, and review within one coherent journey. Rather than positioning AI as an automated decision-maker, the final concept uses it selectively to support interpretation while keeping evidence, uncertainty, and user control visible throughout the experience.",
      },
      {
        type: "richText",
        heading: "Capabilities",
        body: "Product Strategy · Information Architecture · UX/UI Design · AI Interaction Patterns · Interactive Prototyping · Usability Testing",
      },
      {
        type: "cardSet",
        heading: "Next steps",
        columns: 3,
        items: [
          {
            title: "01 — Broader Validation",
            body: "Test the decision-support model with a broader range of investment experience levels and financial behaviors.",
          },
          {
            title: "02 — Trust & AI Calibration",
            body: "Explore how confidence, evidence quality, conflicting signals, and incomplete information should be communicated across different AI-assisted states.",
          },
          {
            title: "03 — Deeper Scenario Evaluation",
            body: "Evaluate how users compare multiple scenarios, interpret trade-offs, and decide when taking no action is the most appropriate outcome.",
          },
        ],
      },
    ],
  },
];

export const auricSignalProject: CaseStudyProject = {
  slug: "auric-signal",
  title: "AURIC SIGNAL",
  subtitle: "AI-assisted investment decision support for self-directed investors",
  category: "Independent Product Concept",
  role: ["Product & Experience Design"],
  year: "2026",
  duration: "3 weeks",
  focus: ["AI", "Fintech", "Decision Support"],
  status: "Independent concept project",
  breadcrumb: ["Work", "Product Design", "AURIC SIGNAL"],
  links: [{ label: "Explore the Interactive Prototype", url: PROTOTYPE, type: "prototype" }],
  // Same light/dark hero pair as the Home page's project card for this
  // project (see app/page.tsx's `projects` array, which now imports these
  // exact src/width/height values) — one shared asset definition instead of
  // two independently-maintained hero images.
  hero: {
    src: `${BASE}/auric-hero-light.png`,
    width: 1774,
    height: 887,
    alt: "AURIC SIGNAL hero composition with one primary mobile screen and supporting portfolio, signal, market, insight, allocation, and action modules.",
    priority: true,
  },
  heroDark: {
    src: `${BASE}/auric-hero-dark.png`,
    width: 1774,
    height: 887,
    alt: "AURIC SIGNAL hero composition with one primary mobile screen and supporting portfolio, signal, market, insight, allocation, and action modules.",
    // Not `priority`: .heroDark starts `display: none` (see ProjectHeader.module.css)
    // and only becomes visible in dark theme. A non-priority (lazy) image inside a
    // display:none container is not fetched by the browser until it's shown, so this
    // avoids eagerly double-loading both hero variants on every page view.
    priority: false,
  },
  sections: auricSignalSections,
};
