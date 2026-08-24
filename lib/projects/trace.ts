import type { CaseStudyProject, CaseStudySection, MediaAsset } from "@/lib/types";

const BASE = "/work/trace";

const media = (filename: string, width: number, height: number, alt: string, dense = false): MediaAsset => ({
  src: `${BASE}/${filename}`,
  width,
  height,
  alt,
  dense,
});

export const traceSections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        type: "richText",
        body: "TRACE is a physical–digital permission system designed to make personal data access visible, understandable, and reversible across everyday service interactions.\n\nRather than treating identity verification as the end of the experience, TRACE separates recognition from authorization and creates a shared permission state across the Credential, Dock, mobile app, and organization dashboard.\n\nThe project explores how a physical object, user interface, organization interface, and service workflow can work together to give people clearer context and more meaningful control over access.",
      },
      {
        type: "richText",
        heading: "Role",
        body: "**End-to-End Product & Experience Design**\n\nExperience Strategy · Interaction Design · Industrial Design · UX/UI · Service Design · System Thinking · Prototyping",
      },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    heading: "Permission should not disappear after approval",
    blocks: [
      {
        type: "richText",
        body: "Permission is often treated as a one-time action.\n\nA user confirms access, the interface disappears, and the service continues in the background. What happens afterward is often difficult to see, understand, or change.\n\nTRACE reframes permission as an ongoing experience state rather than a single confirmation moment.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Visibility", body: "Is access active right now?" },
          { title: "Context", body: "Who is requesting access, what are they requesting, and why?" },
          { title: "Control", body: "Can access be changed after approval?" },
          { title: "Continuity", body: "Do the physical and digital touchpoints reflect the same state?" },
          { title: "Recovery", body: "What happens when the normal interaction fails?" },
        ],
      },
      {
        type: "callout",
        title: "How might we",
        body: "How might we make permission visible and controllable across both physical and digital service environments?",
      },
    ],
  },
  {
    id: "research-insights",
    label: "Research & Insights",
    heading: "Research & Insights",
    blocks: [
      {
        type: "richText",
        heading: "Research Exploration / Analysis",
        body: "I mapped the permission journey to understand where clarity and control tend to disappear.\n\nThe analysis focused on the moments before, during, and after access—not only on the initial verification step.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Permission journey from request to access record",
        steps: [
          { title: "Request", connectorAfter: "→" },
          { title: "Review", connectorAfter: "→" },
          { title: "Approve", connectorAfter: "→" },
          { title: "Active", connectorAfter: "→" },
          { title: "Pause / Resume", connectorAfter: "→" },
          { title: "End", connectorAfter: "→" },
          { title: "Record" },
        ],
      },
      {
        type: "cardSet",
        heading: "Key insights and design responses",
        items: [
          { title: "Permission becomes invisible after approval", body: "Maintain a persistent Active state." },
          { title: "Recognition can be mistaken for consent", body: "Separate Recognition and Authorization." },
          { title: "Permission needs context", body: "Show requester, purpose, requested information, and duration." },
          { title: "Approval should not eliminate control", body: "Support Pause, Resume, and Revoke." },
          { title: "Multiple devices can conflict", body: "Use one shared state architecture." },
          { title: "Failure is part of the experience", body: "Design recovery and alternate paths from the beginning." },
        ],
      },
      {
        type: "relationship",
        ariaLabel: "How research translates into product decisions",
        items: [
          { eyebrow: "01", title: "Insight", body: "Identify where context or control disappears." },
          { eyebrow: "02", title: "Experience Principle", body: "Define the behavior the system must preserve." },
          { eyebrow: "03", title: "Product Decision", body: "Express that behavior across every touchpoint." },
        ],
      },
      {
        type: "cardSet",
        heading: "Design principles",
        items: [
          { title: "Visible by Design", body: "Permission remains visible while access is active." },
          { title: "Control by Default", body: "Users retain control after approval." },
          { title: "Recognition Is Not Permission", body: "Identity recognition does not create access." },
          { title: "Multiple Paths, One State", body: "Different interactions reflect the same state." },
          { title: "Recovery Is Part of the Experience", body: "Failure states are designed as part of the product." },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media(
            "trace-app-access-flow-wireframe.png",
            1672,
            941,
            "Early monochrome exploration of the TRACE permission flow from request through active, paused, ended, and recorded states.",
            true,
          ),
          caption: "Early permission-flow exploration. Interface details shown are conceptual.",
        },
      },
    ],
  },
  {
    id: "experience-architecture",
    label: "Experience Architecture",
    heading: "Multiple interfaces. One shared state.",
    blocks: [
      {
        type: "richText",
        body: "TRACE is designed as one permission system expressed through multiple interfaces.\n\nThe user and the organization interact with different tools, but both sides reference the same underlying session state.",
      },
      {
        type: "cardSet",
        heading: "Experience actors",
        columns: 3,
        items: [
          { title: "Primary User", body: "Understands the request, chooses scope, and remains in control while access is active." },
          { title: "Service Staff", body: "Creates an appropriate request, sees the shared state, and assists without overriding authorization." },
          { title: "Organization / Admin", body: "Coordinates requests, workflows, policy, history, assistance, and recovery." },
        ],
      },
      {
        type: "stateFlow",
        ariaLabel: "Shared permission state",
        steps: [
          { title: "Recognized", body: "Identity is known.", connectorAfter: "→" },
          { title: "Pending", body: "A request awaits a decision.", connectorAfter: "→" },
          { title: "Active", body: "Scoped access is visible.", connectorAfter: "↔" },
          { title: "Paused", body: "Sharing is temporarily suspended.", connectorAfter: "→" },
          { title: "Closed", body: "The session no longer grants access." },
        ],
      },
      {
        type: "richText",
        body: "Additional paths can include **Pending → Declined → Closed**, **Active → Revoked → Closed**, and **Paused → Active**.",
      },
      {
        type: "cardSet",
        heading: "User-side touchpoints",
        columns: 3,
        items: [
          { title: "TRACE Credential", body: "Physical recognition and deliberate confirmation." },
          { title: "TRACE Dock", body: "Ambient visibility of permission state." },
          { title: "Mobile App", body: "Context, detailed control, permission management, and access history." },
        ],
      },
      {
        type: "cardSet",
        heading: "Organization-side touchpoints",
        items: [
          { title: "Organization Dashboard", body: "Creates and reviews requests, monitors sessions, and supports exceptions within user permission." },
          { title: "Staff Experience", body: "Coordinates and assists with the service interaction without silently overriding authorization." },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media(
            "trace-physical-digital-ecosystem.png",
            1672,
            941,
            "TRACE Credential, Dock, and mobile app connected through physical action, ambient feedback, and digital control.",
            true,
          ),
          caption: "The Credential, Dock, and mobile app express different parts of one shared permission experience.",
        },
      },
      {
        type: "comparison",
        items: [
          { title: "Recognition", body: "Who are you?" },
          { title: "Authorization", body: "What may be accessed, by whom, why, and for how long?" },
        ],
      },
      {
        type: "callout",
        title: "Recognition ≠ Authorization",
        body: "Recognition must never automatically create permission.",
      },
    ],
  },
  {
    id: "physical-interaction-design",
    label: "Physical Interaction Design",
    heading: "Making permission deliberate and legible",
    blocks: [
      {
        type: "richText",
        body: "The physical product was not designed only as an identity object.\n\nIts form and interaction were developed to make permission feel deliberate, legible, and controllable. I explored several interaction directions before selecting rotation as the clearest physical metaphor for changing state.",
      },
      {
        type: "richText",
        heading: "Interaction Exploration",
        body: "Loop, slide, and fold concepts explored different ways to express continuity, direction, and protection. Rotation provided the strongest balance of compact form, tactile feedback, and multi-state control.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-physical-interaction-exploration.png", 1774, 760, "Loop, slide, and fold explorations beside the selected rotation direction for the TRACE Credential and Dock.", true),
      },
      {
        type: "richText",
        heading: "Ergonomics",
        body: "The Credential was sized and shaped for comfortable one-handed handling, visible orientation, and easy placement into the Dock.\n\nFront grip · Side thickness · In-palm scale · Dock placement",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-ergonomics-hand-interaction.png", 2110, 745, "Four views showing front grip, side thickness, in-palm scale, and placement of the TRACE Credential into its Dock."),
      },
      {
        type: "richText",
        heading: "Rotation Interaction",
        body: "Rotation creates a deliberate physical action that can communicate transition without requiring a screen.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-rotation-interaction-detail.png", 1536, 1024, "Three-stage rotation interaction showing physical action, transition, and confirmation across the Credential, Dock, and app.", true),
      },
      {
        type: "relationship",
        ariaLabel: "Physical interaction logic",
        items: [
          { eyebrow: "01", title: "Physical Action", body: "The user deliberately rotates the Credential." },
          { eyebrow: "02", title: "State Transition", body: "The shared permission state changes." },
          { eyebrow: "03", title: "System Confirmation", body: "Physical and digital touchpoints reflect the update." },
        ],
      },
    ],
  },
  {
    id: "core-experience",
    label: "Core Experience",
    heading: "One lifecycle, seen from both sides",
    blocks: [
      {
        type: "richText",
        body: "The core TRACE experience is a permission lifecycle shared between the user and the organization.\n\nThe user decides what can be accessed. The organization requests and manages the service interaction. Neither side operates independently of the shared permission state.",
      },
      {
        type: "richText",
        heading: "User Permission Flow",
        body: "The screens below show the conceptual state progression. Their interface times and durations are illustrative rather than one exact recorded session.",
      },
      {
        type: "screenJourney",
        steps: [
          {
            number: "01",
            title: "Request",
            body: "The user receives a contextual request showing the requester, purpose, requested information, and duration.",
            keyMessage: "Context before consent.",
            media: media("trace-app-permission-request.png", 851, 1847, "Permission Request screen showing a conceptual healthcare requester, purpose, duration, requested information, and review action."),
          },
          {
            number: "02",
            title: "Review",
            body: "The user selects what they are comfortable sharing.",
            keyMessage: "Permission has scope.",
            media: media("trace-app-review-request.png", 852, 1846, "Review Request screen with selectable information categories and approve or decline actions."),
          },
          {
            number: "03",
            title: "Active",
            body: "Once approved, access remains visible with requester, status, shared items, remaining time, and controls.",
            keyMessage: "Permission should never disappear after approval.",
            media: media("trace-app-active-session.png", 852, 1846, "Active Session screen showing conceptual shared items and pause, end, and detail controls."),
          },
          {
            number: "04",
            title: "Pause",
            body: "The user can temporarily suspend access without restarting the entire session.",
            keyMessage: "Control continues after approval.",
            media: media("trace-app-paused-session.png", 852, 1847, "Paused Session screen showing suspended sharing with resume and end controls."),
          },
          {
            number: "05",
            title: "End",
            body: "The user can explicitly stop access and close the shared session state.",
            keyMessage: "Ending access closes the shared session state.",
            media: media("trace-app-session-ended.png", 852, 1847, "Session Ended screen confirming the conceptual access session is closed and a record is available."),
          },
          {
            number: "06",
            title: "Record",
            body: "The user can review the requester, scope, session timing, and events after the interaction.",
            keyMessage: "Permission remains accountable after the interaction ends.",
            media: media("trace-app-access-record.png", 852, 1846, "Access Record screen summarizing a conceptual completed session, shared information, and event timeline."),
          },
        ],
      },
      {
        type: "richText",
        heading: "Organization Access Dashboard",
        body: "The other side of TRACE is the organization interface.\n\nWhile the user controls what may be shared, staff need a clear operational view of requests, active sessions, exceptions, and access history. The dashboard is designed to support the service—not bypass the user.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Requests", body: "Create and review access requests." },
          { title: "Active Sessions", body: "See Pending, Active, Paused, and Closed states." },
          { title: "Session Context", body: "Understand requester, purpose, duration, and requested information." },
          { title: "Assistance", body: "Support users when the normal interaction fails." },
          { title: "History", body: "Review the conceptual session record after access ends." },
          { title: "Policy Management", body: "Manage proposed organization-side permissions and service rules." },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-organization-dashboard.png", 1536, 1024, "Conceptual TRACE organization dashboard showing requests, active sessions, activity, and operational context.", true),
          caption: "Conceptual organization interface. Metrics and compliance-related values shown in the artwork are illustrative.",
        },
      },
      {
        type: "callout",
        title: "A shared boundary",
        body: "Staff can manage the service relationship, but they cannot silently override user permission.",
      },
      {
        type: "richText",
        heading: "Beyond the Core Flow",
        body: "The root navigation connects Home, Access, Activity, People, and Profile. Within Access, Assets brings together connected services, systems, devices, credentials, and related permissions.",
      },
      {
        type: "mediaGroup",
        variant: "screens",
        labels: ["Home", "Assets", "Activity", "People", "Profile"],
        media: [
          media("trace-app-home.png", 853, 1844, "TRACE Home screen showing a conceptual active permission session, pending request, credential status, and recent activity."),
          media("trace-app-assets.png", 849, 1851, "TRACE Assets screen showing conceptual connected services, categories, and permissions. Security values are illustrative."),
          media("trace-app-activity.png", 852, 1846, "TRACE Activity screen showing conceptual access events and session summary."),
          media("trace-app-people.png", 847, 1846, "TRACE People screen showing conceptual trusted people and connected organizations."),
          media("trace-app-profile.png", 851, 1847, "TRACE Profile screen showing authentication, permissions, devices, preferences, and support."),
        ],
      },
      {
        type: "richText",
        heading: "Experience in Context",
        body: "The same permission state is carried from the core interface into everyday use, helping active access and connected areas remain visible in context.",
      },
      {
        type: "mediaGroup",
        media: [
          {
            ...media("trace-app-home-lifestyle.png", 1199, 1312, "TRACE Home interface shown on a phone in a domestic setting."),
            caption: "Home keeps the active session, pending request, Credential status, and recent activity visible in one place.",
          },
          {
            ...media("trace-app-assets-in-hand.png", 1448, 1086, "User holding a phone displaying the conceptual TRACE Assets interface."),
            caption: "Assets, within the Access area, brings connected services, systems, devices, and permissions together. Interface values are illustrative.",
          },
        ],
      },
      {
        type: "richText",
        heading: "Visual and Component System",
        body: "I used a shared set of interface patterns to keep permission state, controls, navigation, and supporting information consistent across the app experience.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-visual-component-system.png", 1672, 941, "TRACE visual and component system showing typography, color, buttons, icons, status patterns, inputs, and navigation.", true),
          caption: "Conceptual interface system used to align hierarchy, controls, status language, and navigation across the TRACE app.",
        },
      },
      {
        type: "cardSet",
        heading: "Key Product Experiences",
        items: [
          { title: "Context Before Permission", body: "Show who is requesting access, what they need, why, and for how long." },
          { title: "Persistent Active State", body: "Permission remains visible while access is active." },
          { title: "Control After Approval", body: "Pause, Resume, and Revoke remain available after approval." },
          { title: "Physical–Digital Continuity", body: "Credential, Dock, mobile app, and dashboard reflect the same session." },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-key-product-experiences.png", 1672, 941, "TRACE Credential, Dock, and mobile interface illustrating identity, access choice, user control, and physical–digital continuity."),
          caption: "Conceptual product framing. Security-related wording embedded in the exploratory artwork is illustrative and is not a validated project claim.",
        },
      },
    ],
  },
  {
    id: "inclusive-interaction-edge-cases",
    label: "Inclusive Interaction & Edge Cases",
    heading: "Inclusive Interaction & Edge Cases",
    blocks: [
      {
        type: "richText",
        body: "A permission system cannot depend on one interaction path or one ideal condition.\n\nTRACE explores alternate presentation modes, recovery states, and failure scenarios so control remains understandable across different users and contexts.",
      },
      {
        type: "richText",
        heading: "Accessibility States",
        body: "Standard · High Contrast / Reduced Visual Load · Guided State",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-ui-accessibility-states.png", 1535, 1024, "Three conceptual TRACE interface presentations: standard, high contrast with reduced visual load, and guided state."),
          caption: "Accessibility considerations were informed by WCAG principles and should be validated through formal testing. Security values shown in the UI are illustrative.",
        },
      },
      {
        type: "richText",
        heading: "Failure States",
        body: "Connection Lost · Access Denied · Credential Expired · New Device Detected",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-edge-cases-failure-states.png", 1672, 941, "Four conceptual failure states for connection loss, access denial, an expired Credential, and a newly detected device.", true),
      },
      {
        type: "callout",
        title: "Explain the change",
        body: "The system should explain what changed, what it means, and what the user can do next.",
      },
    ],
  },
  {
    id: "prototyping-feasibility",
    label: "Prototyping & Feasibility",
    heading: "A proposed path toward prototyping",
    blocks: [
      {
        type: "richText",
        body: "The physical concept was explored through form, component, and interaction studies to understand how the device might move from visual concept toward a buildable system.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-prototyping-workbench.png", 1672, 941, "Proposed TRACE hardware workbench with form studies, the Credential and Dock, internal components, sketches, and measurement tools."),
          caption: "The workbench explores a proposed path from form study toward interaction and hardware prototyping.",
        },
      },
      {
        type: "stateFlow",
        ariaLabel: "Proposed prototyping progression",
        steps: [
          { title: "Form Study", connectorAfter: "→" },
          { title: "Interaction Study", connectorAfter: "→" },
          { title: "Component Architecture", connectorAfter: "→" },
          { title: "CMF Refinement", connectorAfter: "→" },
          { title: "Prototype Direction" },
        ],
      },
      {
        type: "richText",
        heading: "Focus areas",
        body: "Physical scale · Rotational interaction · Dock relationship · LED feedback · Component packaging · Material direction",
      },
      {
        type: "callout",
        title: "Feasibility boundary",
        body: "This work proposes a development direction; it does not represent completed engineering validation or a functioning hardware prototype.",
      },
    ],
  },
  {
    id: "service-ecosystem",
    label: "Service Ecosystem",
    heading: "Designed for a service ecosystem",
    blocks: [
      {
        type: "richText",
        body: "TRACE is designed to operate within a service ecosystem rather than as an isolated device.\n\nThe same permission model connects the user, service staff, organization interface, physical environment, and service workflow.",
      },
      {
        type: "richText",
        heading: "Private Financial Consultation",
        body: "A client arrives for a private consultation. TRACE recognizes the client, but recognition does not grant access.\n\nThe advisor creates an access request. The client reviews the requester, purpose, requested information, and duration, then chooses what to share. Once approved, the session becomes Active across the Credential, Dock, mobile app, and organization dashboard. The client can Pause, Resume, or Revoke access while the advisor sees the same updated state.\n\nWhen the session ends, access closes and the client receives an Access Record.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Private financial consultation permission journey",
        steps: [
          { title: "Arrival", connectorAfter: "→" },
          { title: "Recognition", connectorAfter: "→" },
          { title: "Request", connectorAfter: "→" },
          { title: "Scoped Authorization", connectorAfter: "→" },
          { title: "Active Control", connectorAfter: "→" },
          { title: "Session End", connectorAfter: "→" },
          { title: "Access Record" },
        ],
      },
      {
        type: "cardSet",
        heading: "Secondary context explorations",
        items: [
          { title: "Healthcare", body: "Sensitive information and temporary service access." },
          { title: "Workplace", body: "Role- and task-based permission conditions." },
          { title: "Hospitality", body: "Time-bounded access across a service stay." },
          { title: "Events", body: "Temporary credentials across changing environments." },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media("trace-dashboard-lifestyle.png", 1518, 1036, "Two staff members viewing the conceptual TRACE organization dashboard on a large display."),
          caption: "A conceptual healthcare organization context showing how the shared permission state may appear in a staff environment.",
        },
      },
      {
        type: "callout",
        title: "Context, not deployment",
        body: "The supplied interface visuals show one conceptual healthcare application of this shared model. They do not represent deployment or industry validation.",
      },
    ],
  },
  {
    id: "recovery-experience",
    label: "Recovery Experience",
    heading: "Recovery without silently restoring access",
    blocks: [
      {
        type: "richText",
        body: "Recovery is part of the permission experience—not a separate support layer.\n\nWhen something goes wrong, the system needs to restore service continuity without silently restoring access.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Recovery flow",
        steps: [
          { title: "Issue Detected", connectorAfter: "→" },
          { title: "Assistance", connectorAfter: "→" },
          { title: "Verify Identity", connectorAfter: "→" },
          { title: "Resolve", connectorAfter: "→" },
          { title: "Confirm" },
        ],
      },
      {
        type: "callout",
        title: "Recognition ≠ Authorization",
        body: "Re-verifying identity does not automatically recreate authorization.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          { title: "Guided", body: "Explain the next step and reduce ambiguity." },
          { title: "Secure by intention", body: "Restore continuity without bypassing the permission boundary." },
          { title: "Continuous", body: "Keep the user and staff aligned around the same state." },
          { title: "Human when needed", body: "Provide assistance when self-service is insufficient." },
          { title: "Accountable", body: "Make the proposed recovery sequence reviewable without claiming a validated audit system." },
        ],
      },
    ],
  },
  {
    id: "final-experience-reflection",
    label: "Final Experience & Reflection",
    heading: "From identity object to permission system",
    blocks: [
      {
        type: "richText",
        body: "TRACE began as a physical identity Credential and evolved into a shared permission system.\n\nThe project became less about proving who someone is and more about helping people understand and control what happens after recognition.",
      },
      {
        type: "cardSet",
        heading: "What the Design Demonstrates",
        columns: 3,
        items: [
          { title: "Physical–Digital Integration", body: "One experience across object, environment, mobile, and dashboard." },
          { title: "Persistent Control", body: "Permission remains visible after approval." },
          { title: "Shared State Architecture", body: "User and organization reference the same session state." },
          { title: "Inclusive Interaction", body: "The system supports alternate paths and presentation modes." },
          { title: "Recovery Thinking", body: "Failure states are treated as part of the product experience." },
          { title: "Service-System Design", body: "TRACE connects both sides of the interaction rather than designing only one interface." },
        ],
      },
      {
        type: "richText",
        heading: "Reflection",
        body: "Designing TRACE shifted my focus from identity verification to permission visibility. The strongest design opportunity was not simply making access more secure, but making the system easier to understand while access is happening.\n\nThe project also reinforced the importance of designing both sides of a service interaction. User control only works when the organization interface respects the same state, scope, and duration.",
      },
      {
        type: "cardSet",
        heading: "What I Would Validate Next",
        items: [
          { title: "State Comprehension", body: "Can users distinguish Recognized, Pending, Active, Paused, and Closed?" },
          { title: "Permission Scope", body: "Do users understand exactly what they are sharing?" },
          { title: "Physical Interaction", body: "Does rotation feel intentional and understandable?" },
          { title: "Cross-Device Continuity", body: "Do Credential, Dock, mobile app, and dashboard feel like one system?" },
          { title: "Staff Workflow", body: "Can staff manage requests without creating pressure or confusion?" },
          { title: "Accessibility", body: "Can important state changes be understood without relying only on color or light?" },
          { title: "Recovery", body: "Can users and staff recover without accidentally restoring permission?" },
        ],
      },
    ],
  },
];

export const traceProject: CaseStudyProject = {
  slug: "trace",
  title: "TRACE",
  subtitle: "Visible permission across physical and digital service interactions",
  category: "Experience Design / Product Design",
  role: ["End-to-End Product & Experience Design"],
  year: "2026",
  duration: "3 weeks",
  focus: ["Experience Strategy", "Interaction Design", "UX/UI", "Service Design", "Prototyping"],
  status: "Personal concept project",
  breadcrumb: ["Work", "Experience Design", "TRACE"],
  hero: {
    ...media("trace-hero.png", 1774, 887, "TRACE Credential standing in its Dock beside the mobile permission app in a service setting."),
    priority: true,
  },
  sections: traceSections,
};
