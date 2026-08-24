import type { CaseStudyProject, CaseStudySection, MediaAsset } from "@/lib/types";

const BASE = "/work/smart-puppy";

const media = (filename: string, width: number, height: number, alt: string, dense = false): MediaAsset => ({
  src: `${BASE}/${filename}`,
  width,
  height,
  alt,
  dense,
});

const phone = (filename: string, alt: string): MediaAsset =>
  media(filename, 1179, 2556, alt);

export const smartPuppySections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "A connected companion, designed as one experience",
    blocks: [
      {
        type: "richText",
        body: "SMART PUPPY is an independent concept project exploring emotional companionship through expressive behavior, adaptive interaction, and thoughtful industrial design.\n\nThe project connects a robotic companion, a mobile interface, and everyday home routines into one coherent physical–digital experience—not a robotic product with an app added afterward.",
      },
      {
        type: "richText",
        heading: "Role",
        body: "**End-to-End Product & Experience Design**\n\nResearch · Concept Development · Industrial Design · Behavior & Interaction · UX/UI · Connected Experience",
      },
      {
        type: "callout",
        title: "Design intent",
        body: "Create an approachable robotic companion that communicates clearly, moves safely, and fits naturally into everyday life.",
      },
    ],
  },
  {
    id: "opportunity",
    label: "Opportunity",
    heading: "Emotional presence without the barriers of pet ownership",
    blocks: [
      {
        type: "richText",
        body: "People seek comfort, presence, and connection in daily life, but apartment restrictions, busy schedules, care responsibilities, and long-term unpredictability can make pet ownership difficult. Existing smart devices offer convenience, while many toy robots offer novelty; neither consistently creates a lasting sense of companionship.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Emotional Need", body: "People value companionship, comfort, and small moments of responsive presence." },
          { title: "Living Constraints", body: "Shared spaces, schedules, travel, and housing rules create practical barriers." },
          { title: "Care Burden", body: "Training, feeding, health, maintenance, and cost require ongoing commitment." },
        ],
      },
      {
        type: "comparison",
        items: [
          { title: "Live Pets", body: "Warm and emotionally present, but demanding and unpredictable." },
          { title: "Smart Devices", body: "Reliable and low-maintenance, but emotionally limited." },
          { title: "Toy Robots", body: "Interactive and accessible, but often shallow or short-lived." },
          { title: "SMART PUPPY", body: "A home-friendly companion balancing emotional expression, reliability, and low-friction care." },
        ],
      },
    ],
  },
  {
    id: "research-insights",
    label: "Research & Insights",
    heading: "Designing for comfort, routine, and lasting engagement",
    blocks: [
      {
        type: "richText",
        body: "The concept was informed by observations of companionship behaviors, everyday routines, apartment-living constraints, and a review of pet, toy, and smart-device experiences. The research focused on what makes a companion feel emotionally legible while remaining easy to live with.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Comfort over feature count", body: "Presence, responsiveness, and empathy build stronger attachment than isolated functions." },
          { title: "Routine fit matters", body: "Low effort, low mess, quiet behavior, and predictable care support long-term use." },
          { title: "Warmth and utility must coexist", body: "The strongest opportunity combines pet-like warmth with smart-device clarity and convenience." },
        ],
      },
      {
        type: "relationship",
        ariaLabel: "SMART PUPPY user journey",
        items: [
          { eyebrow: "01", title: "Quiet Moments", body: "A person feels disconnected at home." },
          { eyebrow: "02", title: "Seeking Connection", body: "They want companionship without a major lifestyle burden." },
          { eyebrow: "03", title: "Considering Options", body: "They compare pets, robots, and smart devices." },
          { eyebrow: "04", title: "Daily Use", body: "The companion integrates into routines." },
          { eyebrow: "05", title: "Ongoing Relationship", body: "Responsive behavior supports a lasting bond." },
        ],
      },
    ],
  },
  {
    id: "design-strategy",
    label: "Design Strategy",
    heading: "Four principles connect emotion, motion, and livability",
    blocks: [
      {
        type: "cardSet",
        items: [
          { title: "Readable Emotion", body: "Eye states, ear position, head angle, and posture communicate feeling quickly." },
          { title: "Approachable Interaction", body: "Touch, gestures, and controls remain natural, calm, and low-friction." },
          { title: "Safe Motion", body: "Stable proportions and constrained joints support predictable home-friendly movement." },
          { title: "Livable Presence", body: "Compact scale, quiet behavior, and low-maintenance routines help the companion fit daily life." },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Design strategy from expression to connected experience",
        steps: [
          { title: "Expression", body: "Face and posture", connectorAfter: "→" },
          { title: "Behavior", body: "Movement and response", connectorAfter: "→" },
          { title: "Interaction", body: "Touch and commands", connectorAfter: "→" },
          { title: "Awareness", body: "App status and care", connectorAfter: "→" },
          { title: "Continuity", body: "One connected relationship" },
        ],
      },
    ],
  },
  {
    id: "industrial-design",
    label: "Industrial Design",
    heading: "From expressive sketches to a balanced robotic form",
    blocks: [
      {
        type: "richText",
        body: "Development moved from early head and body sketches through proportion, stance, leg-length, center-of-gravity, and joint studies. Three form directions tested different balances of playfulness, mechanical character, and refinement before selecting the final direction.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-concept-development.png", 1672, 941, "SMART PUPPY concept development board showing early sketches, proportion and motion studies, three design directions, and the selected final form.", true),
          caption: "Early ideation → proportion and motion studies → direction comparison → selected final direction.",
        },
      },
      {
        type: "cardSet",
        columns: 2,
        items: [
          { title: "Expressive Face", body: "Large digital eyes and familiar facial features create immediate emotional readability." },
          { title: "Balanced Proportions", body: "A compact body, wide stance, and low center of gravity support stability and approachability." },
          { title: "Stable Movement", body: "Articulated joints are placed for smooth motion with clear limits." },
          { title: "Compact Footprint", body: "The companion is sized for apartment living and everyday proximity." },
        ],
      },
    ],
  },
  {
    id: "behavior-interaction",
    label: "Behavior & Interaction",
    heading: "A small language of readable signals",
    blocks: [
      {
        type: "richText",
        body: "SMART PUPPY expresses emotion through coordinated eye graphics, ear posture, head tilt, tail response, and whole-body motion. These cues are intentionally simple so the user can understand the companion without reading an interface.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Curious", body: "Open eyes, forward ears, and attentive posture invite engagement." },
          { title: "Affectionate", body: "Soft gaze, heart-shaped eyes, and a slight head tilt communicate warmth." },
          { title: "Playful", body: "Bright eyes, active posture, and quick tail motion signal energy." },
          { title: "Calm", body: "Relaxed eyes and neutral posture communicate a settled state." },
          { title: "Sleepy", body: "Closed eyes, lowered head, and relaxed ears transition toward rest." },
          { title: "Responsive", body: "Greeting, comfort, follow, and rest behaviors connect emotion to action." },
        ],
      },
      {
        type: "relationship",
        ariaLabel: "Behavior interaction logic",
        items: [
          { eyebrow: "01", title: "Sense", body: "Detect touch, voice, proximity, and environment." },
          { eyebrow: "02", title: "Interpret", body: "Combine context with the current personality and energy state." },
          { eyebrow: "03", title: "Respond", body: "Express the result through face, sound, posture, and motion." },
          { eyebrow: "04", title: "Confirm", body: "Reflect important state changes in the app." },
        ],
      },
    ],
  },
  {
    id: "app-experience",
    label: "App Experience",
    heading: "Awareness and control without replacing the relationship",
    blocks: [
      {
        type: "richText",
        body: "The app extends the physical relationship by making connection, health, activity, accessories, household access, and remote interaction understandable. The interface supports the companion; it does not become the companion.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-app-flowchart.png", 1672, 941, "SMART PUPPY app flowchart covering daily status review, live interaction, and asset and household management.", true),
          caption: "Three core flows: understand current state, interact remotely, and manage the connected system.",
        },
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-ui-design-system.png", 1536, 1024, "SMART PUPPY dark interface design system showing color, typography, icons, buttons, navigation, cards, controls, charts, settings patterns, accessories, and status indicators.", true),
          caption: "A dark, high-contrast system connects device status, care, control, and activity with a consistent cyan accent language.",
        },
      },
      {
        type: "richText",
        heading: "Primary Screens",
        body: "Home, Control, and Live Interaction form the primary experience. Home summarizes Luna’s current state; Control translates digital input into physical behavior; Live Interaction supports remote awareness and communication.",
      },
      {
        type: "appScreenSet",
        columns: 3,
        items: [
          {
            title: "Home",
            body: "The primary overview keeps Luna’s presence central while making connection, health, energy, and activity understandable at a glance.",
            media: phone("smart-puppy-app-home.png", "SMART PUPPY Home screen showing Luna, connection status, control access, and daily health summary."),
          },
          {
            title: "Control",
            body: "Remote commands translate digital input into clear physical behaviors with visible context and adjustable movement.",
            media: phone("smart-puppy-app-control.png", "SMART PUPPY Control screen showing directional commands, behavior actions, and movement speed."),
          },
          {
            title: "Live Interaction",
            body: "Live view supports remote awareness, communication, and small interaction moments when the user is away.",
            media: phone("smart-puppy-app-live.png", "SMART PUPPY Live screen with camera view, communication controls, interaction commands, and audio status."),
          },
        ],
      },
      {
        type: "richText",
        heading: "Second-level Screens",
        body: "Care, Activity, Assets, and Profile support the longer ownership relationship. They explain condition and maintenance, reveal daily patterns, manage the connected product ecosystem, and coordinate household preferences without competing with the core interaction surfaces.",
      },
      {
        type: "appScreenSet",
        columns: 4,
        items: [
          {
            title: "Care",
            body: "Care turns technical condition into reassuring, actionable information for everyday maintenance.",
            media: phone("smart-puppy-app-care.png", "SMART PUPPY Care screen showing overall health, energy, system condition, environment, and maintenance items."),
          },
          {
            title: "Activity",
            body: "Activity history reveals Luna’s daily rhythm across movement, play, exploration, interaction, and rest.",
            media: phone("smart-puppy-app-activity.png", "SMART PUPPY Activity screen with daily metrics, activity chart, and behavior breakdown."),
          },
          {
            title: "Assets",
            body: "The companion and its accessories appear as one manageable connected-product ecosystem.",
            media: phone("smart-puppy-app-assets.png", "SMART PUPPY Assets screen showing Luna, charging dock, smart collar, and carry harness."),
          },
          {
            title: "Profile & Household",
            body: "Household controls support shared access, routines, notification preferences, and quiet hours.",
            media: phone("smart-puppy-app-profile.png", "SMART PUPPY Profile screen showing household members, shared access, notifications, preferences, and quiet hours."),
          },
        ],
      },
    ],
  },
  {
    id: "connected-experience",
    label: "Connected Experience",
    heading: "One relationship across home, companion, and app",
    blocks: [
      {
        type: "richText",
        body: "The connected experience is organized around everyday moments rather than isolated features. Physical behavior creates presence at home, while the app provides awareness and control when additional context is needed.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-lifestyle-showcase.png", 1672, 941, "Four SMART PUPPY lifestyle moments showing greeting at home, play, remote app control, and quiet rest.", true),
          caption: "Greeting & check-in · Play & companionship · Remote awareness and control · Quiet & rest.",
        },
      },
      {
        type: "stateFlow",
        ariaLabel: "Connected companion state synchronization",
        steps: [
          { title: "Companion State", body: "Activity, battery, environment, mood", connectorAfter: "→" },
          { title: "App Awareness", body: "Status, controls, alerts, and history", connectorAfter: "→" },
          { title: "User Action", body: "Respond, customize, or check in", connectorAfter: "→" },
          { title: "Reassurance", body: "Continuity, safety, and peace of mind" },
        ],
      },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "A companion system with a coherent physical–digital language",
    blocks: [
      {
        type: "richText",
        body: "SMART PUPPY brings industrial design, expressive behavior, motion logic, app interaction, and connected-system thinking into one concept. The outcome demonstrates how an emotionally engaging product can remain understandable, controllable, and practical for everyday home life.",
      },
      {
        type: "finalExperience",
        body: "The prototype walkthrough demonstrates the core mobile experience and how the interface supports connection, care, activity, assets, household settings, and remote interaction.",
        videoSrc: `${BASE}/smart-puppy-prototype.mp4`,
        posterSrc: `${BASE}/smart-puppy-hero.png`,
        prototypeUrl: "https://id-preview--771ba87b-15ef-4ab0-b6b6-dea1e811bc65.lovable.app/prototype",
        videoAriaLabel: "SMART PUPPY mobile app prototype walkthrough",
        linkLabel: "Explore the Lovable Prototype ↗",
        note: "Interactive prototype built in Lovable.",
        presentation: "plain",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Physical Product", body: "A distinctive robotic form with readable expression and stable proportions." },
          { title: "Digital Experience", body: "A coherent app system for control, awareness, care, activity, and household management." },
          { title: "Connected System", body: "A shared experience linking companion state, app feedback, user action, and home context." },
        ],
      },
      {
        type: "awardSet",
        items: [
          {
            title: "IDA Design Awards",
            distinction: "Silver",
            year: "2021",
            media: media("smart-puppy-award-ida-silver.png", 2000, 2000, "IDA Design Awards Silver Winner 2021 badge."),
          },
          {
            title: "European Product Design Award",
            distinction: "Honorable Mention",
            year: "2021",
            media: media("smart-puppy-award-epda.png", 400, 250, "European Product Design Award 2021 badge."),
          },
          {
            title: "Rookie Awards",
            distinction: "Highly Commended",
            year: "2021",
            media: media("smart-puppy-award-rookie.png", 1200, 628, "Rookie Awards emblem."),
          },
        ],
      },
    ],
  },
];

export const smartPuppyProject: CaseStudyProject = {
  slug: "smart-puppy",
  title: "SMART PUPPY",
  subtitle: "A connected robotic companion experience combining industrial design, expressive behavior, motion, UX/UI, and physical–digital interaction.",
  category: "Connected Robotic Companion",
  role: ["Industrial Design", "Product Design", "UX/UI"],
  year: "2021",
  duration: "10 weeks",
  focus: ["Emotional Presence", "Connected Experience"],
  status: "Independent Personal Project",
  breadcrumb: ["Work", "SMART PUPPY"],
  hero: {
    ...media("smart-puppy-hero.png", 1672, 941, "SMART PUPPY robotic companion beside its dark mobile app home interface."),
    priority: true,
  },
  sections: smartPuppySections,
};
