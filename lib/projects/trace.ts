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
        body: "TRACE is a connected physical–digital access concept designed to make permission, identity, and service interactions clearer across personal and organizational touchpoints. The experience connects a tactile physical object with individual and staff-facing digital interfaces, creating a coordinated system for access, handoff, recovery, and support.\n\nRather than treating identity verification as the end of the experience, TRACE separates recognition from authorization and creates a shared permission state across every touchpoint.",
      },
      {
        type: "richText",
        heading: "One system, multiple touchpoints",
        body: "TRACE connects a tactile physical object with individual and organizational digital interfaces into one coordinated access system, spanning physical, digital, and service context.",
      },
      {
        type: "stateFlow",
        ariaLabel: "One system, multiple touchpoints: Physical Object, Personal App, Organization Dashboard, Service Touchpoints",
        steps: [
          { title: "Physical Object", connectorAfter: "↔" },
          { title: "Personal App", connectorAfter: "↔" },
          { title: "Organization Dashboard", connectorAfter: "↔" },
          { title: "Service Touchpoints" },
        ],
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media(
            "trace-key-product-experiences.png",
            1672,
            941,
            "TRACE Credential, Dock, and mobile interface illustrating identity, access choice, user control, and physical–digital continuity.",
            true,
          ),
          caption: "Conceptual product framing. Security-related wording embedded in the exploratory artwork is illustrative and is not a validated project claim.",
        },
      },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    heading: "Access breaks down when physical, digital, and service touchpoints are designed separately.",
    blocks: [
      {
        type: "richText",
        body: "The problem is not simply that existing products are inconvenient or inaccessible. Access depends on identity, authorization, permission, state, timing, and context — conditions that are not always equally visible or understandable to everyone involved, and accessibility has to be part of that system logic rather than a separate feature.",
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          {
            title: "01 — Fragmented Touchpoints",
            body: "Physical, personal digital, organizational, and service interactions may operate as disconnected moments. Users should not have to coordinate the system themselves.",
          },
          {
            title: "02 — Invisible Permissions",
            body: "Access depends on identity, authorization, permission, state, timing, and context — conditions that are not always equally visible or understandable to everyone involved.",
          },
          {
            title: "03 — Fragile Handoffs & Recovery",
            body: "The experience becomes most vulnerable when something changes, a permission becomes unavailable, a handoff is incomplete, or an interaction cannot continue normally without assistance.",
          },
        ],
      },
      {
        type: "callout",
        title: "Supporting principle",
        body: "Access should not depend on one mode of interaction.",
      },
    ],
  },
  {
    id: "research-strategy",
    label: "Research & Strategy",
    heading: "Design the system around continuity, not individual touchpoints.",
    blocks: [
      {
        type: "richText",
        heading: "Ecosystem",
        body: "TRACE is defined around roles rather than individual personas — the people and systems that participate in an access interaction, and what each of them needs from it.",
      },
      {
        type: "cardSet",
        heading: "Ecosystem roles",
        columns: 3,
        items: [
          {
            title: "Individual",
            body: "Needs visibility, control, confirmation, and understandable feedback, along with a way to recover when something goes wrong.",
          },
          {
            title: "Organization / Staff",
            body: "Needs authorization visibility, oversight, and shared context, along with the ability to assist or handle exceptions.",
          },
          {
            title: "Shared Access System",
            body: "Connects both roles through identity, permission, status, handoff, and recovery.",
          },
        ],
      },
      {
        type: "richText",
        heading: "End-to-end journey",
        body: "The experience is described as a lifecycle rather than an app flow — the stages an access interaction moves through regardless of which touchpoint is in front of someone.",
      },
      {
        type: "stateFlow",
        ariaLabel: "End-to-end journey: Prepare, Approach, Identify, Access, Confirm, Recover",
        steps: [
          { title: "Prepare", body: "Arrival and context before a request is made.", connectorAfter: "→" },
          { title: "Approach", body: "Recognition, without granting access.", connectorAfter: "→" },
          { title: "Identify", body: "A request is created and reviewed.", connectorAfter: "→" },
          { title: "Access", body: "Scoped permission becomes active and controllable.", connectorAfter: "→" },
          { title: "Confirm", body: "The session closes and a record is available.", connectorAfter: "→" },
          { title: "Recover", body: "Pause, resume, revoke, or get assistance when needed." },
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
          caption: "Early permission-flow exploration used to map the journey. Interface details shown are conceptual.",
        },
      },
      {
        type: "cardSet",
        heading: "Key insights",
        columns: 3,
        items: [
          {
            title: "01 — Shared Visibility",
            body: "Access works better when permission and state are legible to everyone involved — the response is one shared permission model across personal and organizational touchpoints.",
          },
          {
            title: "02 — Multimodal Feedback",
            body: "Critical states should not depend on a single sensory or interaction channel, so feedback is supported across physical, visual, digital, and assisted interactions.",
          },
          {
            title: "03 — Recovery Is Part of Access",
            body: "The quality of the experience depends on what happens when access does not proceed normally, so recovery and human support are designed as part of the primary experience.",
          },
        ],
      },
      {
        type: "cardSet",
        heading: "Design principles",
        columns: 2,
        items: [
          { title: "01 — Make Permission Visible", body: "Permission remains visible while access is active, instead of disappearing after approval." },
          { title: "02 — Support More Than One Mode", body: "Critical states are communicated in more than one way, so understanding does not depend on a single channel." },
          { title: "03 — Design the Handoff", body: "Physical and digital touchpoints are designed to reflect the same state, so moving between them feels continuous." },
          { title: "04 — Plan for Recovery", body: "Failure and alternate paths are designed as part of the product from the start, not added afterward." },
        ],
      },
    ],
  },
  {
    id: "ecosystem-architecture",
    label: "Ecosystem Architecture",
    heading: "One permission model, multiple touchpoints.",
    blocks: [
      {
        type: "richText",
        body: "TRACE is designed as one permission system expressed through multiple interfaces. The individual and the organization interact with different tools, but every touchpoint references the same underlying shared access state.",
      },
      {
        type: "relationship",
        ariaLabel: "Architecture layers: Individual Layer, Shared Access State, Organization Layer, Service / Human Layer",
        items: [
          { eyebrow: "Individual Layer", title: "Physical Access Interface · Personal App" },
          { eyebrow: "Shared Access State", title: "Identity · Permission · Session · Status · Handoff · Recovery" },
          { eyebrow: "Organization Layer", title: "Organization Access Dashboard" },
          { eyebrow: "Service / Human Layer", title: "Staff / Assisted Support" },
        ],
      },
      {
        type: "cardSet",
        heading: "The role of each touchpoint",
        columns: 2,
        items: [
          { title: "Physical Access Interface", body: "Tangible interaction, orientation, confirmation, and multimodal feedback." },
          { title: "Personal App", body: "Permission visibility, status, context, control, and recovery." },
          { title: "Organization Access Dashboard", body: "Authorization visibility, requests, active states, assistance, and organizational context." },
          { title: "Assisted Service", body: "Human support, exception handling, handoff, and recovery." },
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
        type: "richText",
        heading: "Shared state model",
        body: "The same permission/session state is referenced by every touchpoint, so a change made in one place is reflected everywhere else.",
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
        body: "Alternate paths can include **Pending → Declined → Closed**, **Active → Revoked → Closed**, and **Paused → Active**.",
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
    heading: "Translating system principles into physical interaction.",
    blocks: [
      {
        type: "richText",
        body: "The physical product was not designed only as an identity object. Its form and interaction were developed to make permission feel deliberate, legible, and controllable.",
      },
      {
        type: "cardSet",
        heading: "Interaction requirements",
        columns: 2,
        items: [
          { title: "Recognizable", body: "The physical interaction communicates orientation and use without relying entirely on a screen." },
          { title: "Tactile", body: "Important interactions provide physical cues rather than depending exclusively on visual information." },
          { title: "Confirmable", body: "State changes provide understandable feedback." },
          { title: "Recoverable", body: "The physical interaction remains understandable when something changes or assistance is required." },
        ],
      },
      {
        type: "richText",
        heading: "Exploring Form Through Interaction",
        body: "Loop, slide, and fold concepts explored different ways to express continuity, direction, and protection. Rotation provided the strongest balance of compact form, tactile feedback, and multi-state control, and became the clearest physical metaphor for changing state.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-physical-interaction-exploration.png", 1774, 760, "Loop, slide, and fold explorations beside the selected rotation direction for the TRACE Credential and Dock.", true),
      },
      {
        type: "richText",
        heading: "Physical interaction logic",
        body: "The Credential was sized and shaped for comfortable one-handed handling, visible orientation, and easy placement into the Dock — front grip, side thickness, in-palm scale, and Dock placement.\n\nRotation itself creates a deliberate physical action that can communicate transition without requiring a screen.",
      },
      {
        type: "media",
        layout: "wide",
        media: media("trace-ergonomics-hand-interaction.png", 2110, 745, "Four views showing front grip, side thickness, in-palm scale, and placement of the TRACE Credential into its Dock."),
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
      {
        type: "richText",
        heading: "Prototype & feasibility",
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
        heading: "Material & production considerations",
        body: "Material direction and component packaging were considered alongside the rotational mechanism and LED feedback, together with Dock relationship and physical scale. This remains a proposed development direction rather than a manufacturing-validated design.",
      },
      {
        type: "callout",
        title: "Feasibility boundary",
        body: "This work proposes a development direction; it does not represent completed engineering validation or a functioning hardware prototype.",
      },
    ],
  },
  {
    id: "digital-experience",
    label: "Digital Experience",
    heading: "Personal control, organizational visibility.",
    blocks: [
      {
        type: "richText",
        body: "TRACE extends the physical interaction into a role-based digital system. The personal app and organization dashboard provide different levels of visibility and control while sharing the same underlying permission and session states.",
      },
      {
        type: "richText",
        heading: "Personal app",
        body: "The interface prioritizes making state visible — what is active, what is changing, what requires attention, and what can happen next. The screens below show the conceptual state progression; interface times and durations are illustrative rather than one exact recorded session.",
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
        heading: "Beyond the core flow",
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
        heading: "Experience in context",
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
        heading: "Organization access dashboard",
        body: "The dashboard is the organizational side of the same access system, not a separate admin backend. While the individual controls what may be shared, staff need a clear operational view of requests, active sessions, exceptions, and access history.",
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
        type: "comparison",
        items: [
          { title: "Individual", body: "Visibility, control, confirmation, and recovery." },
          { title: "Organization / Staff", body: "Authorization, oversight, assistance, and history." },
        ],
      },
      {
        type: "richText",
        heading: "Same system, different responsibilities",
        body: "Three interactions carry most of the role-based experience: making permission visible at a glance, handing off session state between physical and digital touchpoints without losing context, and supporting assisted recovery when self-service is not enough.",
      },
      {
        type: "richText",
        heading: "Visual & Interaction System",
        body: "The digital system uses a shared visual and interaction language to keep permission, session state, and feedback consistent across personal and organizational interfaces.",
      },
      {
        type: "media",
        layout: "wide",
        media: {
          ...media(
            "trace-visual-component-system.png",
            1672,
            941,
            "TRACE visual and component system showing typography, color, buttons, status badges, a permission session card, and navigation patterns.",
            true,
          ),
          caption: "Conceptual interface system used to align hierarchy, controls, status language, and navigation across the TRACE app.",
        },
      },
      {
        type: "cardSet",
        columns: 3,
        items: [
          {
            title: "Shared Status Language",
            body: "States such as pending, active, paused, or closed use consistent badges and color so they remain understandable wherever they appear.",
          },
          {
            title: "Component Consistency",
            body: "Recurring patterns — status cards, permission modules, session information, and actions like Pause or End Session — repeat across the experience rather than being redesigned per screen.",
          },
          {
            title: "Role-Based Adaptation",
            body: "The Personal App and Organization Dashboard draw on the same underlying state logic while presenting the information and controls appropriate to each role.",
          },
        ],
      },
    ],
  },
  {
    id: "inclusive-design",
    label: "Inclusive Design",
    heading: "Access should not depend on a single mode of interaction.",
    blocks: [
      {
        type: "richText",
        body: "A permission system cannot depend on one interaction path or one ideal condition. TRACE explores alternate presentation modes, recovery states, and failure scenarios so control remains understandable across different users and contexts — accessibility is treated as part of the system logic, not as an added feature.",
      },
      {
        type: "cardSet",
        heading: "One state, multiple forms of feedback",
        columns: 2,
        items: [
          { title: "Physical", body: "Rotation and tactile cues communicate a state change without requiring a screen." },
          { title: "Visual", body: "High-contrast and reduced-visual-load presentations keep state legible when standard visuals are not enough." },
          { title: "Digital", body: "The app and dashboard reflect the same state through consistent status language." },
          { title: "Human Support", body: "Staff can assist when self-service interaction is not sufficient." },
        ],
      },
      {
        type: "richText",
        heading: "Accessibility states",
        body: "Standard · High Contrast / Reduced Visual Load · Guided State\n\nThese presentations support conditions such as reduced visual dependence and assisted interaction, without depending on a single ideal interaction path.",
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
        heading: "Key edge cases",
        body: "Each edge case is presented as a trigger, the resulting state change, the system's response, and the path back to a normal or closed state.",
      },
      {
        type: "cardSet",
        columns: 2,
        items: [
          { title: "Connection Lost", body: "When connectivity drops, the interface marks the affected state as disconnected and offers reconnection or an alternate path rather than failing silently." },
          { title: "Access Denied", body: "When a request falls outside current permission, the system explains the denial and directs the user toward requesting or reviewing access rather than a generic error." },
          { title: "Credential Expired", body: "When the physical Credential's session lapses, the system marks it as expired and guides the user toward re-recognition rather than treating it as still active." },
          { title: "New Device Detected", body: "When an unfamiliar device appears, the system flags it for review instead of silently extending existing trust." },
        ],
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
    id: "onboarding-service",
    label: "Onboarding & Service",
    heading: "TRACE across service touchpoints.",
    blocks: [
      {
        type: "richText",
        body: "TRACE is designed to operate within a service ecosystem rather than as an isolated device. The same permission model connects the individual, service staff, organization interface, physical environment, and service workflow.",
      },
      {
        type: "richText",
        heading: "Private financial consultation",
        body: "A client arrives for a private consultation. TRACE recognizes the client, but recognition does not grant access.\n\nThe advisor creates an access request. The client reviews the requester, purpose, requested information, and duration, then chooses what to share. Once approved, the session becomes Active across the Credential, Dock, mobile app, and organization dashboard. The client can Pause, Resume, or Revoke access while the advisor sees the same updated state.\n\nWhen the session ends, access closes and the client receives an Access Record.",
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
    id: "recovery-flow",
    label: "Recovery Flow",
    heading: "Designing the way back is part of designing access.",
    blocks: [
      {
        type: "richText",
        body: "Recovery is part of the permission experience, not a separate support layer. When something changes, the ecosystem needs to coordinate a way back without silently restoring access.",
      },
      {
        type: "stateFlow",
        ariaLabel: "Recovery flow: Normal State, Change or Breakdown, Action Required, Shared Context, Recovery, Continue or Close",
        steps: [
          { title: "Normal State", body: "Access is proceeding as expected.", connectorAfter: "→" },
          { title: "Change / Breakdown", body: "A permission becomes unavailable or a handoff doesn't complete.", connectorAfter: "→" },
          { title: "Action Required", body: "The system clearly marks that something needs attention.", connectorAfter: "→" },
          { title: "Shared Context", body: "The individual and staff see the same state and history.", connectorAfter: "→" },
          { title: "Recovery", body: "Self-service or assisted recovery restores continuity without silently restoring access.", connectorAfter: "→" },
          { title: "Continue or Close", body: "The session resumes, or closes clearly and safely." },
        ],
      },
      {
        type: "richText",
        heading: "Who's involved",
        body: "A recovery scenario spans the individual, the physical product, the shared digital state, and organization or staff support — each seeing the same breakdown and recovery path rather than resolving it in isolation.",
      },
      {
        type: "callout",
        title: "Recognition ≠ Authorization",
        body: "Re-verifying identity does not automatically recreate authorization.",
      },
      {
        type: "cardSet",
        heading: "Recovery principles",
        columns: 3,
        items: [
          { title: "Preserve Context", body: "Recovery keeps the individual and staff aligned around the same state and history, instead of restarting from zero." },
          { title: "Make State Explicit", body: "The system clearly explains what changed and what happens next, reducing ambiguity." },
          { title: "Provide a Clear Exit", body: "A safe, clear closure is a valid outcome — recovery does not have to end in restored access to be successful." },
        ],
      },
    ],
  },
  {
    id: "final-experience",
    label: "Final Experience",
    heading: "One connected experience across physical, digital, and human touchpoints.",
    blocks: [
      {
        type: "richText",
        body: "TRACE brings physical interaction, personal control, organizational visibility, and human support into one continuous access experience.",
      },
      {
        type: "media",
        layout: "medium",
        media: media("trace-rotation-interaction-detail.png", 1536, 1024, "Three-stage rotation interaction showing physical action, transition, and confirmation across the Credential, Dock, and app.", true),
      },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "Designing access as a system, not a single touchpoint.",
    blocks: [
      {
        type: "richText",
        body: "TRACE developed into a connected access concept spanning physical interaction, personal control, organizational visibility, and human support. By treating permission, state, handoff, accessibility, and recovery as shared system concerns, the project explores how physical and digital touchpoints can work together as one continuous experience.\n\nThe final system coordinates physical interaction, personal digital control, organizational visibility, assisted service, and edge cases and recovery.\n\nFurther development would focus on validating multimodal interaction, assisted recovery, and permission-state clarity across a broader range of real-world access scenarios.",
      },
    ],
  },
];

export const traceProject: CaseStudyProject = {
  slug: "trace",
  title: "TRACE",
  subtitle: "A connected access and service experience across physical, digital, and organizational touchpoints",
  category: "Independent Experience Concept",
  role: ["Product & Experience Design"],
  year: "2026",
  duration: "3 weeks",
  focus: ["Accessibility", "Systems", "Connected Experience"],
  status: "Independent experience concept",
  breadcrumb: ["Work", "Experience Design", "TRACE"],
  hero: {
    ...media("trace-hero.png", 1774, 887, "TRACE Credential standing in its Dock beside the mobile permission app in a service setting."),
    priority: true,
  },
  sections: traceSections,
};
