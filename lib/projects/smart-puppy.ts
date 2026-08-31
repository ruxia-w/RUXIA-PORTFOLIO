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
    heading: "A connected robotic companion, designed as one experience",
    blocks: [
      {
        type: "richText",
        body: "Smart Puppy explores how a robotic companion can feel expressive, understandable, and approachable through the relationship between physical form, motion, behavior, and a connected mobile experience. The project brings industrial design and digital interaction together as one coordinated product experience — not a robotic product with an app added afterward.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Four dimensions of the experience: Form, Behavior, Interaction, Digital",
        steps: [
          { title: "Form", connectorAfter: "→" },
          { title: "Behavior", connectorAfter: "→" },
          { title: "Interaction", connectorAfter: "→" },
          { title: "Digital" },
        ],
      },
      {
        type: "callout",
        title: "Recognition",
        body: "Smart Puppy received three international design awards, including an IDA Silver in the Robotic Toy category.",
      },
    ],
  },
  {
    id: "opportunity",
    label: "Opportunity",
    heading: "A companion needs to communicate, not just function",
    blocks: [
      {
        type: "richText",
        body: "Robotic companions are often designed around functions — move, respond, follow a command — without a clear language for communicating what the product is doing or why. Treated as a product-design and interaction opportunity rather than a market gap, the question became how a physical companion could stay legible, expressive, and connected without depending on a screen to explain itself.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          {
            title: "01 — Legible Behavior",
            body: "How might a robotic companion communicate intention and state through movement and feedback?",
          },
          {
            title: "02 — Expressive Interaction",
            body: "How might expression create personality while also making interaction easier to understand?",
          },
          {
            title: "03 — Connected Continuity",
            body: "How might digital control extend the experience without weakening the physical relationship?",
          },
        ],
      },
      {
        type: "callout",
        title: "From robotic function to understandable behavior",
        body: "Emotional expression should help users understand the product, not simply decorate it.",
      },
    ],
  },
  {
    id: "research-journey",
    label: "Research & Journey",
    heading: "Understanding the human–robot relationship",
    blocks: [
      {
        type: "richText",
        body: "The concept was informed by observations of companionship behaviors, everyday routines, and a review of pet, toy, and smart-device experiences — focused less on formal user research and more on the interaction questions a companion product raises.",
      },
      {
        type: "cardSet",
        heading: "Research focus",
        columns: 3,
        items: [
          {
            title: "Interaction Expectations",
            body: "How a user understands whether the companion is listening, responding, waiting, or available.",
          },
          {
            title: "Behavior & Feedback",
            body: "How movement, expression, posture, and feedback communicate state.",
          },
          {
            title: "Connected Control",
            body: "When direct physical interaction is enough, and when digital control can extend the experience.",
          },
        ],
      },
      {
        type: "richText",
        heading: "Relationship journey",
        body: "Rather than a single task-completion flow, the experience was mapped as an ongoing relationship that deepens over repeated use.",
      },
      {
        type: "smartPuppyRelationshipLoop",
        layout: "wide",
      },
      {
        type: "richText",
        heading: "Design criteria",
        body: "Legible · Responsive · Expressive · Approachable · Connected",
      },
    ],
  },
  {
    id: "industrial-design",
    label: "Industrial Design",
    heading: "Designing character through form and proportion",
    blocks: [
      {
        type: "richText",
        body: "Development moved from early head and body sketches through proportion, stance, leg-length, center-of-gravity, and joint studies. Three form directions tested different balances of playfulness, mechanical character, and refinement before selecting the final direction.",
      },
      {
        type: "cardSet",
        heading: "Physical design criteria",
        columns: 2,
        items: [
          { title: "Approachable", body: "Friendly without becoming visually arbitrary." },
          { title: "Expressive", body: "The physical form supports recognizable behavior and personality." },
          { title: "Balanced", body: "Proportions support both stability and mobility." },
          { title: "Interactive", body: "Important interaction and expression areas remain visually understandable." },
        ],
      },
      {
        type: "richText",
        heading: "Exploring Character Through Form",
        body: "Early ideation explored silhouette, head-to-body proportion, and leg geometry before narrowing toward three directions for further development.",
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
        heading: "From concept to form",
        columns: 3,
        items: [
          {
            title: "Proportion Development",
            body: "Early directions tested different balances of playfulness and mechanical character. The selected form reduced visual complexity and clarified leg geometry, arriving at a compact body, wide stance, and low center of gravity.",
          },
          {
            title: "The Face as Interface",
            body: "Large digital eyes and familiar facial features were treated as both a character-defining element and a communication surface, giving the companion immediate emotional readability.",
          },
          {
            title: "Designing Around Movement",
            body: "Articulated joints are placed to support smooth, constrained motion — balancing mechanical function with a silhouette that still reads as approachable.",
          },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Form refinement: Sketch, 3D Volume, Proportion Refinement, Surface Development, Final Form",
        steps: [
          { title: "Sketch", connectorAfter: "→" },
          { title: "3D Volume", connectorAfter: "→" },
          { title: "Proportion Refinement", connectorAfter: "→" },
          { title: "Surface Development", connectorAfter: "→" },
          { title: "Final Form" },
        ],
      },
      {
        type: "richText",
        heading: "Final Industrial Design",
        body: "The final form balances a compact robotic structure with a softer visual language, using proportion, stance, and facial expression to make the product feel more approachable and behaviorally legible.",
      },
    ],
  },
  {
    id: "behavior-expression",
    label: "Behavior & Expression",
    heading: "Behavior is part of the interface",
    blocks: [
      {
        type: "richText",
        body: "Smart Puppy uses movement, posture, facial expression, and feedback to communicate state and intention without requiring the user to constantly reference a screen.",
      },
      {
        type: "smartPuppyBehaviorLoop",
        layout: "wide",
      },
      {
        type: "cardSet",
        heading: "Expression as communication",
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
        type: "callout",
        title: "Multimodal behavior cue",
        body: "Expression, motion, and posture combine into one behavior cue — the companion does not rely on the eyes alone to communicate.",
      },
      {
        type: "richText",
        heading: "Motion as feedback",
        body: "Movement is not only locomotion. Orientation, posture, response timing, and movement communicate attention, acknowledgement, response, and engagement.",
      },
      {
        type: "richText",
        heading: "Personality through behavior",
        body: "Personality emerges through repeated patterns of movement, expression, and response rather than through appearance alone.",
      },
    ],
  },
  {
    id: "ergonomics-motion",
    label: "Ergonomics & Motion",
    heading: "Designing movement around interaction",
    blocks: [
      {
        type: "richText",
        body: "Beyond its silhouette, the physical architecture — scale, joint placement, and stance — was considered as part of how the companion supports interaction and behavior.",
      },
      {
        type: "richText",
        heading: "Human–robot scale",
        body: "The companion is sized for apartment living and everyday proximity — compact enough for close, frequent interaction without dominating the space it shares with its owner.",
      },
      {
        type: "richText",
        heading: "Motion architecture",
        body: "Head, body, and leg relationships were considered together: articulated joints are placed for smooth motion with clear limits, supporting a wide stance and low center of gravity.",
      },
      {
        type: "richText",
        heading: "Posture as interaction",
        body: "The companion's physical posture functions as an interaction state — head angle, ear position, and stance communicate readiness, attention, or rest without relying on the face alone.",
      },
      {
        type: "richText",
        heading: "Stability & balance",
        body: "The compact body, wide stance, and low center of gravity were intended to support both physical stability and a visually approachable silhouette — proportions considered for balance at a concept level, not validated through engineering testing.",
      },
    ],
  },
  {
    id: "product-development",
    label: "Product Development",
    heading: "Connecting physical behavior with digital control",
    blocks: [
      {
        type: "richText",
        body: "Smart Puppy is structured as an experience architecture rather than a technical one — the companion stays at the center, with the app extending it.",
      },
      {
        type: "callout",
        title: "Design principle",
        body: "The digital layer extends the relationship rather than replacing it.",
      },
      {
        type: "richText",
        heading: "Physical product architecture & production considerations",
        body: "Component relationships, joint placement, and body volume were considered as part of the overall form, balancing internal packaging awareness with the compact proportions established during industrial design development. Material and finish direction supported a soft, approachable character alongside more structural areas of the body — considerations at a concept level rather than a production-validated specification.",
      },
    ],
  },
  {
    id: "connected-experience",
    label: "Connected Experience",
    heading: "Extending the relationship beyond the physical product",
    blocks: [
      {
        type: "richText",
        body: "The connected app provides additional control, customization, and visibility while keeping direct interaction with Smart Puppy at the center of the experience. Physical behavior creates presence at home; the app closes the loop with status, control, and personalization when more context is needed — not a one-directional command sequence.",
      },
      {
        type: "smartPuppyConnectedArchitecture",
        layout: "wide",
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
        type: "smartPuppyDigitalExperienceMap",
        layout: "wide",
      },
      {
        type: "richText",
        heading: "Primary Screens",
        body: "Home, Control, and Live Interaction form the primary experience. Home summarizes Luna's current state; Control translates digital input into physical behavior; Live Interaction supports remote awareness and communication.",
      },
      {
        type: "appScreenSet",
        columns: 3,
        items: [
          {
            title: "Home",
            body: "The primary overview keeps Luna's presence central while making connection, health, energy, and activity understandable at a glance.",
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
        body: "Care, Activity, Assets, and Profile support the longer ownership relationship without competing with the core interaction surfaces above.",
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
            body: "Activity history reveals Luna's daily rhythm across movement, play, exploration, interaction, and rest.",
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
      {
        type: "cardSet",
        heading: "Cross-touchpoint moments",
        columns: 3,
        items: [
          { title: "Recognition", body: "Robot behavior signals awareness while the app reflects the same state." },
          { title: "Response", body: "Physical behavior pairs with digital feedback or control when more context is needed." },
          { title: "Personalization", body: "A digital choice, like a routine or preference, carries through to physical behavior over time." },
        ],
      },
      {
        type: "richText",
        heading: "Visual & Component System",
        body: "A shared visual system brings product status, controls, navigation, and feedback into a consistent digital language across the connected experience.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-ui-design-system.png", 1536, 1024, "SMART PUPPY dark interface design system showing color, typography, icons, buttons, navigation, cards, controls, charts, settings patterns, accessories, and status indicators.", true),
          caption: "A dark, high-contrast system connects device status, care, control, and activity with a consistent cyan accent language.",
        },
      },
    ],
  },
  {
    id: "final-experience",
    label: "Final Experience",
    heading: "A companion defined by how it looks, moves, and responds",
    blocks: [
      {
        type: "richText",
        body: "Smart Puppy brings physical form, expressive behavior, motion, and connected control together as one companion experience. Rather than treating personality as a visual layer, the final design uses movement, expression, and response to make interaction more understandable and engaging.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("smart-puppy-lifestyle-showcase.png", 1672, 941, "Four SMART PUPPY lifestyle moments showing greeting at home, play, remote app control, and quiet rest.", true),
          caption: "One continuous relationship, not five separate deliverables.",
        },
      },
      {
        type: "finalExperience",
        body: "The prototype walkthrough shows the connected app experience — how the interface supports connection, care, activity, assets, household settings, and remote interaction alongside the physical companion.",
        videoSrc: `${BASE}/smart-puppy-prototype.mp4`,
        prototypeUrl: "https://id-preview--771ba87b-15ef-4ab0-b6b6-dea1e811bc65.lovable.app/prototype",
        videoAriaLabel: "SMART PUPPY mobile app prototype walkthrough",
        linkLabel: "Explore the Interactive Prototype ↗",
        note: "Interactive prototype built in Lovable.",
        presentation: "plain",
      },
      {
        type: "richText",
        heading: "Outcome",
        body: "**Designing personality through interaction.**\n\nSmart Puppy developed into a connected robotic companion where industrial design, movement, expression, and digital interaction work together as one product experience. The project demonstrates how character can emerge not only through appearance, but through the way a physical product acknowledges, responds to, and builds familiarity with the user.",
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
  category: "Independent Product Concept",
  role: ["Industrial & Experience Design"],
  year: "2021",
  duration: "10 weeks",
  focus: ["Physical Product", "Behavior", "Mobile Experience"],
  status: "Independent Personal Project",
  breadcrumb: ["Work", "SMART PUPPY"],
  // Same light/dark hero pair as the Home page's project card for SMART
  // PUPPY (see app/page.tsx's `projects` array) — one shared asset
  // definition. 1774x887 matches the actual asset dimensions (the previous
  // 1672x941 here didn't match the real file).
  hero: {
    ...media("smart-puppy-hero-light.webp", 1774, 887, "SMART PUPPY robotic companion beside its dark mobile app home interface."),
    priority: true,
  },
  heroDark: {
    ...media("smart-puppy-hero-dark.webp", 1774, 887, "SMART PUPPY robotic companion beside its dark mobile app home interface."),
  },
  sections: smartPuppySections,
};
