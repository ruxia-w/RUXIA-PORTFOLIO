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
        body: "AURIC SIGNAL is an AI-assisted investment experience exploring how portfolio data can become more useful when connected to context, explanation, and possible next steps.\n\nThe project focuses on the gap between seeing what changed and understanding why it changed, what it means for an individual portfolio, and what actions might be worth exploring.\n\nThe experience connects portfolio health, AI-assisted explanations, scenario exploration, and rebalancing into one decision-support flow.",
      },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    heading: "From information to interpretation",
    blocks: [
      {
        type: "richText",
        body: "Investment and crypto platforms make it easy to see prices, charts, and portfolio performance. Understanding why something changed often requires moving between dashboards, news, search, and other sources.\n\nThe problem is not a lack of information, but fragmented interpretation. Each source offers another piece of the story while leaving the investor to connect market movement, personal exposure, and a possible response.",
      },
      {
        type: "callout",
        title: "How might we",
        body: "How might we help investors move from seeing portfolio changes to understanding what they mean—and exploring what to do next?",
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
        body: "I started by looking at how people around me checked their portfolios and made sense of market changes. I spoke with three participants who had experience with investing or crypto, and paired those conversations with a competitive review and product-pattern analysis.\n\nA recurring issue was not access to information, but interpretation. Participants could see when an asset moved, yet understanding why it moved—and deciding what to consider next—often meant piecing together information from several sources. This was a small, exploratory study intended to identify patterns, not produce statistically significant findings.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-research-synthesis.png`,
          width: 1536,
          height: 1024,
          alt: "Research synthesis combining three exploratory interviews, a six-product competitive review, affinity mapping, and four qualitative themes.",
          dense: true,
        },
      },
      {
        type: "richText",
        heading: "Key insights",
        body: "- **Performance does not explain cause** — Seeing a change does not explain what produced it or why it matters to a specific portfolio.\n- **More information can create more work** — Additional charts, alerts, and news can increase the effort required to form a coherent view.\n- **Decisions benefit from comparison** — Possible responses become more useful when users can compare outcomes and trade-offs.\n- **AI needs visible boundaries and supporting evidence** — Explanations should expose their basis and remain distinct from recommendations.",
      },
      {
        type: "richText",
        heading: "User needs",
        body: "Users need a clear priority, a plain-language explanation, evidence close to the explanation, portfolio-specific context, and a way to compare possible responses without losing control of the decision.",
      },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    heading: "A decision-support experience",
    blocks: [
      {
        type: "richText",
        body: "The research shifted AURIC away from being another portfolio tracker and toward a decision-support experience. The core sequence became: identify what matters, understand why it changed, explore possible responses, and keep the user in control.",
      },
      {
        type: "richText",
        heading: "Design principles",
        body: "- **Prioritize the signal** — Make the most relevant portfolio change easy to identify.\n- **Explain the movement** — Connect the change to drivers, evidence, and personal impact.\n- **Compare before acting** — Let users examine alternatives and trade-offs.\n- **Keep the user in control** — Treat consequential states as simulations, previews, or saved drafts.",
      },
      {
        type: "callout",
        title: "AI boundary",
        body: "AI explains and supports exploration. It does not predict outcomes or make financial decisions for the user.",
      },
    ],
  },
  {
    id: "exploration",
    label: "Exploration",
    heading: "Exploring four entry points",
    blocks: [
      {
        type: "richText",
        body: "Early layouts explored four ways to establish priority: a dashboard direction centered on overall status, an insight direction led by AI explanation, a portfolio direction anchored in holdings and allocation, and a daily-brief direction organized around current context. Comparing them clarified that the final experience needed the breadth of a dashboard with a more explicit signal-first path.",
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
    ],
  },
  {
    id: "core-user-flow",
    label: "Core User Flow",
    heading: "Two connected decision tasks",
    blocks: [
      {
        type: "richText",
        body: "Once the core product direction was defined, I mapped the experience around two connected tasks: understanding a meaningful portfolio change and evaluating a possible response. The flow keeps explanation, evidence, scenario exploration, and decision support connected so users can move forward without losing context.",
      },
      {
        type: "richText",
        heading: "Understand a portfolio change",
        body: "Portfolio Health → Priority Signal → Movement Detail → Explain This Movement → Evidence + Confidence → Personal Impact",
      },
      {
        type: "richText",
        heading: "Evaluate a possible action",
        body: "Personal Impact → Scenario Simulation → Compare Baseline + Options → Risk + Trade-offs → Adjust Option → Confirm / Save / Cancel",
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
        body: "With the core journey established, I expanded the experience into a broader product structure that separates monitoring, explanation, portfolio management, tracking, and personal controls while preserving a consistent path through the product.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          src: `${BASE}/auric-information-architecture.png`,
          width: 1448,
          height: 1086,
          alt: "AURIC information architecture organized across Home, Insights, Assets, Watchlist, Profile, and their detail states.",
          dense: true,
        },
      },
      {
        type: "richText",
        heading: "Primary Screens",
        body: "The primary navigation is organized around five top-level destinations—Home, Insights, Assets, Watchlist, and Profile—giving users clear entry points into monitoring, analysis, portfolio information, tracked activity, and account controls.",
      },
      {
        type: "mediaGroup",
        variant: "screens",
        labels: ["Home", "Insights", "Assets", "Watchlist", "Profile"],
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
        body: "Four connected experiences carry the decision-support journey from a high-level portfolio signal into explanation, simulation, and a non-executing response.",
      },
      {
        type: "feature",
        title: "Portfolio Health",
        body: "I designed Portfolio Health as a quick way to understand the overall condition of a portfolio before diving into individual metrics. Instead of presenting performance, allocation, and risk as separate pieces of information, the experience brings them together around a single health score and the factors contributing to it.\n\nThe deeper view explains where that score comes from—such as diversification, concentration, volatility, and liquidity—while connecting those factors back to allocation and performance. The goal was to help users move from a high-level signal into the specific conditions that may need attention.",
        focus: ["Start with overall portfolio condition", "Make contributing risk factors visible", "Connect health, allocation, and performance"],
        media: { src: `${BASE}/auric-portfolio-health-fullpage.png`, width: 1170, height: 4941, alt: "Full Portfolio Health screen with score, contributing factors, risk, allocation, and performance." },
      },
      {
        type: "feature",
        title: "AI Explanation",
        body: "I treated AI as an explanation layer rather than a source of automatic recommendations. When AURIC surfaces a portfolio signal, the experience first explains what changed and why it may have happened, then lets users inspect the drivers and supporting evidence behind that interpretation.\n\nConfidence and evidence are intentionally visible instead of hidden behind a single AI-generated answer. The experience also separates the market explanation from its impact on the user’s own portfolio, helping users understand both the broader context and why the signal may matter to them personally.",
        focus: ["Explain the change before suggesting a response", "Make evidence and confidence visible", "Connect market context to personal impact"],
        media: { src: `${BASE}/auric-ai-explanation-fullpage.png`, width: 1170, height: 6342, alt: "Full AI explanation screen showing what changed, drivers, evidence, portfolio impact, and considerations." },
      },
      {
        type: "feature",
        title: "Scenario Exploration",
        body: "Scenario Simulation gives users a way to explore a possible market change before deciding how they might respond. Rather than presenting the result as a prediction, the interface frames it as an estimate based on the portfolio’s current composition and the assumptions selected by the user.\n\nThe simulation shows how a scenario could affect portfolio value, health, risk exposure, individual holdings, and allocation. I also kept the reasoning behind the interpretation accessible so users can understand why AURIC is highlighting a particular risk instead of relying on the result as a black box.",
        focus: ["Frame outcomes as estimates, not predictions", "Show portfolio-wide consequences of a scenario", "Keep AI reasoning available for deeper inspection"],
        media: { src: `${BASE}/auric-scenario-simulation-fullpage.png`, width: 1170, height: 5952, alt: "Full scenario simulation screen estimating the portfolio impact of a Bitcoin decline." },
      },
      {
        type: "feature",
        title: "Rebalancing",
        body: "Rebalancing extends the scenario experience from understanding risk into exploring a possible response. The preview compares the current allocation with a suggested alternative and explains how the change relates to the user’s concentration risk, risk preference, and longer-term goals.\n\nI intentionally separated exploring a strategy from executing an action. Users can review the proposed allocation, inspect its potential impact, and save the strategy without placing a trade or moving any assets. AURIC supports the decision process while leaving the final action with the user.",
        focus: ["Compare current and suggested allocation clearly", "Explain why the proposed change may be relevant", "Separate decision support from trade execution"],
        media: { src: `${BASE}/auric-rebalancing-fullpage.png`, width: 1170, height: 3789, alt: "Full rebalancing preview comparing current and suggested allocation without executing a trade." },
      },
      {
        type: "richText",
        heading: "Visual & Component System",
        body: "I built AURIC around a restrained visual and component system designed to keep dense financial information readable and consistent across different product states. Reusable patterns for data, status, navigation, actions, and AI-related feedback help the interface maintain a shared language across the experience.",
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
        body: "I tested the interactive AURIC prototype with three participants who had experience with investing or crypto. Rather than walking them through individual screens, I asked them to complete several core tasks on their own—from checking portfolio health and investigating a priority signal to exploring a market scenario and reviewing a possible rebalancing strategy.\n\nI observed where participants paused, what information they looked for first, and which parts of the experience required additional interpretation. The goal was not statistical validation, but to identify friction in the hierarchy, AI explanation flow, and transition from understanding a signal to considering an action.",
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
        type: "richText",
        heading: "What I observed",
        body: "**Priority information needed to be immediately visible.** Participants tended to look for a clear indication of what required attention before exploring supporting portfolio metrics.\n\n**Supporting evidence needed to stay close to the explanation.** When reviewing AI-assisted explanations, participants looked for additional context before moving deeper into the decision flow.\n\n**Scenario framing needed clear boundaries.** Scenario outputs needed to communicate that they represented exploratory estimates rather than predictions.\n\n**Exploring and acting needed to feel distinct.** The transition from reviewing a possible strategy to taking an actual financial action required a clear boundary.",
      },
      {
        type: "richText",
        heading: "Refinements",
        body: "Based on these sessions, I strengthened the priority hierarchy, kept supporting evidence closer to AI explanations, clarified the estimated nature of scenario outcomes, and made the boundary between strategy exploration and execution more explicit.",
      },
    ],
  },
  {
    id: "final-experience",
    label: "Final Experience",
    heading: "Final Experience",
    blocks: [
      {
        type: "finalExperience",
        body: "The final prototype brings the core journey together in one continuous experience—from identifying a portfolio signal to understanding its context, exploring a possible scenario, and reviewing a potential response. The interaction is designed to keep AI in a supporting role while the user remains in control of the final decision.",
        videoSrc: `${BASE}/auric-final-experience.mp4`,
        posterSrc: `${BASE}/auric-primary-home-fullpage.png`,
        prototypeUrl: PROTOTYPE,
      },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "Outcome",
    blocks: [
      {
        type: "richText",
        body: "AURIC SIGNAL began as an exploration of how portfolio information could become more useful when it is connected to context, explanation, and possible next steps. The final experience brings portfolio health, AI-assisted interpretation, scenario exploration, and rebalancing into one connected decision-support flow.\n\nThe project pushed me to think beyond individual screens and focus on how information architecture, interaction, and AI behavior work together across a complete product journey. It also reinforced an important principle for me: AI should help users understand and explore decisions, not replace their judgment.\n\nThe most valuable part of the project was designing the space between information and action—helping users move from “What changed?” to “What could I consider next?” without turning AI assistance into automatic decision-making.",
      },
      {
        type: "richText",
        heading: "Capabilities",
        body: "Product Strategy · Information Architecture · UX/UI Design · AI Interaction Patterns · Interactive Prototyping · Usability Testing",
      },
    ],
  },
];

export const auricSignalProject: CaseStudyProject = {
  slug: "auric-signal",
  title: "AURIC SIGNAL",
  subtitle: "AI-assisted portfolio intelligence for clearer investment decisions",
  category: "Product Design / UX/UI",
  role: ["Solo Product Designer"],
  year: "2026",
  duration: "3 weeks",
  focus: ["Research", "Strategy", "UX/UI", "Prototyping"],
  status: "Independent concept project",
  breadcrumb: ["Work", "Product Design", "AURIC SIGNAL"],
  links: [{ label: "Explore the Interactive Prototype", url: PROTOTYPE, type: "prototype" }],
  hero: {
    src: `${BASE}/auric-hero-composition.png`,
    width: 1774,
    height: 887,
    alt: "AURIC SIGNAL hero composition with one primary mobile screen and supporting portfolio, signal, market, insight, allocation, and action modules.",
    priority: true,
  },
  heroDark: {
    src: `${BASE}/auric-hero-composition-dark.png`,
    width: 1536,
    height: 864,
    alt: "AURIC SIGNAL hero composition with one primary mobile screen and supporting portfolio, signal, market, insight, allocation, and action modules.",
    // Not `priority`: .heroDark starts `display: none` (see ProjectHeader.module.css)
    // and only becomes visible in dark theme. A non-priority (lazy) image inside a
    // display:none container is not fetched by the browser until it's shown, so this
    // avoids eagerly double-loading both hero variants on every page view.
    priority: false,
  },
  sections: auricSignalSections,
};
