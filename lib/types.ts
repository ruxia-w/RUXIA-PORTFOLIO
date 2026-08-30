export type ProjectLink = {
  label: string;
  url: string;
  type: "prototype" | "video" | "external";
};

export type MediaAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  priority?: boolean;
  crop?: "none" | "limited";
  maxDisplayWidth?: number;
  dense?: boolean;
};

export type MediaLayout = "narrow" | "medium" | "wide" | "full";

export type ContentBlock =
  | { type: "richText"; heading?: string; body: string }
  | { type: "media"; media: MediaAsset; layout?: MediaLayout }
  | {
      type: "mediaGroup";
      media: MediaAsset[];
      labels?: string[];
      /** Optional one-sentence purpose per item, shown under each label. */
      captions?: string[];
      /** "equalHeight": both media items share one visible frame height
       * (natural aspect ratio preserved, no cropping) instead of the default
       * equal-width/bottom-aligned grid — for image pairs whose source
       * aspect ratios differ enough that equal-width columns produce
       * visibly mismatched heights. */
      variant?: "screens" | "screensFill" | "equalHeight";
    }
  | { type: "callout"; title: string; body: string }
  | {
      type: "comparison";
      /** "wideFirst" gives the first item more width (~60/40) for an asymmetric two-up, e.g. a closing statement beside a compact list. Omit for the default equal-width columns. */
      emphasis?: "wideFirst";
      items: Array<{ title: string; body: string }>;
    }
  | {
      type: "cardSet";
      heading?: string;
      columns?: 2 | 3;
      /** "content": intrinsic/flexible widths for cards whose text length
       * varies substantially (avoids forcing equal columns that leave one
       * card mostly empty). Omit for the default equal-width grid — most
       * cardSet items are comparable in length and read better even. */
      variant?: "content";
      items: Array<{ title: string; body: string }>;
    }
  | {
      type: "stateFlow";
      ariaLabel: string;
      steps: Array<{ title: string; body?: string; connectorAfter?: string }>;
    }
  | {
      type: "relationship";
      ariaLabel: string;
      items: Array<{ eyebrow?: string; title: string; body?: string }>;
    }
  | {
      type: "screenJourney";
      steps: Array<{
        number: string;
        title: string;
        body: string;
        keyMessage: string;
        media: MediaAsset;
      }>;
    }
  | {
      type: "awardSet";
      items: Array<{
        title: string;
        distinction: string;
        year: string;
        media: MediaAsset;
      }>;
    }
  | {
      type: "appScreenSet";
      columns: 2 | 3 | 4;
      items: Array<{
        title: string;
        body: string;
        focus?: string[];
        media: MediaAsset;
      }>;
    }
  | {
      type: "journey";
      steps: Array<{ title: string; body: string; media?: MediaAsset }>;
    }
  | {
      type: "feature";
      title: string;
      body: string;
      focus: string[];
      media: MediaAsset;
    }
  | {
      type: "finalExperience";
      body: string;
      videoSrc: string;
      posterSrc?: string;
      prototypeUrl?: string;
      videoAriaLabel?: string;
      linkLabel?: string;
      note?: string;
      presentation?: "device" | "plain";
    }
  | {
      type: "sourcefoldPrototypeLink";
      href: string;
      label: string;
      note?: string;
    }
  | {
      /** A clearly-labeled stand-in for a diagram/UI/video asset that hasn't
       * been produced yet — used while a case study's copy and structure are
       * final but its visuals are not. Never a substitute for real media once
       * that media exists. See components/CaseStudyPlaceholder. */
      type: "placeholder";
      label?: string;
      /** A row of small labeled boxes (e.g. per-market crops) instead of one
       * large single-label box. */
      items?: string[];
      /** Content grouped into labeled clusters (e.g. a state system divided
       * into categories), each rendered as a title with its own item chips. */
      groups?: Array<{ title: string; items: string[] }>;
      aspectRatio?: string;
      caption?: string;
      /** Short lines describing what the future asset will contain. */
      details?: string[];
      layout?: MediaLayout;
    }
  | {
      /** SOURCEFOLD-specific: renders
       * components/SourcefoldOperationalStateDiagram, replacing the System
       * States section's "SOURCEFOLD Operational State System" placeholder
       * with a four-row state matrix — Workflow, Review / provenance,
       * Version, and Publishing — each a neutral rail carrying its four
       * states. Deliberately not a lifecycle diagram: no arrowheads, no
       * per-state accent, since these are independent classification
       * groups rather than a mandatory sequence. */
      type: "sourcefoldOperationalStateDiagram";
      layout?: MediaLayout;
    }
  | {
      /** SOURCEFOLD-specific: renders components/SourcefoldObjectModel, the
       * one finished diagram in that case study's System Architecture
       * section. Bespoke rather than data-driven, same precedent as
       * "awardSet" (SMART PUPPY-only) and "appScreenSet" elsewhere in this
       * file. */
      type: "sourcefoldObjectModel";
      layout?: MediaLayout;
    }
  | {
      /** SOURCEFOLD-specific: renders components/SourcefoldChallengeDiagram,
       * the finished diagram in that case study's Challenge section. */
      type: "sourcefoldChallengeDiagram";
      layout?: MediaLayout;
    }
  | {
      /** SOURCEFOLD-specific: renders components/SourcefoldWorkflowDiagram,
       * the finished diagram in that case study's Workflow section. */
      type: "sourcefoldWorkflowDiagram";
      layout?: MediaLayout;
    }
  | {
      /** SOURCEFOLD-specific: renders components/SourcefoldKeyDecisions,
       * the finished diagram in that case study's Key Decisions section. */
      type: "sourcefoldKeyDecisions";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricCoreDecisionFlow,
       * replacing the static auric-core-user-flows.png in the Core User
       * Flow section with a responsive HTML/CSS/SVG diagram. */
      type: "auricCoreDecisionFlow";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricInformationArchitecture,
       * replacing the static auric-information-architecture.png in the
       * Information Architecture section with a responsive HTML/CSS/SVG
       * diagram. */
      type: "auricInformationArchitecture";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricAiHumanControlModel,
       * a new diagram (no static asset replaced) communicating the
       * interaction boundary between AI assistance and human decision-making. */
      type: "auricAiHumanControlModel";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricResearchTranslation,
       * a new diagram (no static asset replaced) — a lightweight editorial
       * three-column map showing how research signals were synthesized into
       * design principles and then into concrete product responses. */
      type: "auricResearchTranslation";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricDecisionFrictionModel,
       * replacing the Problem section's plain "Fragmented Information →
       * Interpretation Gap → Decision Uncertainty" stateFlow with a diagram
       * that makes the interpretation gap the visual focus. */
      type: "auricDecisionFrictionModel";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricDecisionSupportJourney,
       * replacing the Overview section's plain "What changed? → Why does it
       * matter? → What can I do?" stateFlow with a compact, card-free
       * four-stage executive summary of the whole product model. */
      type: "auricDecisionSupportJourney";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricConceptSelectionMap,
       * a new diagram (no static asset replaced) explaining the decision
       * logic behind advancing the Signal-led direction — sits after the
       * existing early-exploration screenshot/cardSet and before the
       * "Direction selected" callout, without duplicating either. */
      type: "auricConceptSelectionMap";
      layout?: MediaLayout;
    }
  | {
      /** AURIC SIGNAL-specific: renders components/AuricTestingIterationMap,
       * replacing the Testing section's "Observed → Changed" cardSet with the
       * same three iterations plus a Product Effect layer and real product
       * screenshot crops (reused, not fabricated). */
      type: "auricTestingIterationMap";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TraceSharedPermissionArchitecture,
       * a new diagram (no static asset replaced) in the Ecosystem
       * Architecture section — a hub-and-spoke system map showing Personal
       * App, Physical Credential, Organization Dashboard, and Human Support
       * all referencing one central Shared Permission State, rather than a
       * linear chain. */
      type: "traceSharedPermissionArchitecture";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TracePermissionStateModel, a new
       * diagram (no static asset replaced) in the Ecosystem Architecture
       * section, right after traceSharedPermissionArchitecture — a compact
       * state model (Recognized/Pending/Active/Paused/Closed plus the
       * Declined/Revoked exception states) replacing the section's previous
       * plain stateFlow + alternate-paths prose. */
      type: "tracePermissionStateModel";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TraceServiceBlueprint, a new
       * diagram (no static asset replaced) in the Onboarding & Service
       * section — a multi-role service blueprint (Individual, Physical
       * Credential/Dock, Personal App, Shared Permission State, Staff,
       * Organization Dashboard) across seven service stages for the
       * existing financial-consultation scenario. */
      type: "traceServiceBlueprint";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TraceRecoveryStateModel,
       * replacing the Recovery Flow section's plain linear stateFlow with a
       * branching state model (Normal State → ... → Shared Context →
       * Self-Service/Assisted Recovery → Permission Recheck → Resume/Close). */
      type: "traceRecoveryStateModel";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TraceSystemAtAGlance, replacing
       * the Overview section's plain "Physical Object ↔ Personal App ↔
       * Organization Dashboard ↔ Service Touchpoints" stateFlow with a
       * lightweight hub-and-spoke overview diagram — deliberately simpler
       * than the later Shared Permission Architecture diagram. */
      type: "traceSystemAtAGlance";
      layout?: MediaLayout;
    }
  | {
      /** TRACE-specific: renders components/TraceAccessJourney, replacing
       * the Research & Strategy section's plain "End-to-end journey"
       * stateFlow with a lightweight two-layer (User / System) journey
       * strip across the same six stages. */
      type: "traceAccessJourney";
      layout?: MediaLayout;
    }
  | {
      /** SMART PUPPY-specific: renders components/SmartPuppyBehaviorLoop,
       * replacing the Behavior & Expression section's two separate linear
       * stateFlow blocks ("State → Behavior → Expression → User
       * Interpretation" and "User Action → Recognition → Acknowledgement →
       * Response → User Interpretation → Next Interaction") with one closed
       * behavior-communication-loop diagram. */
      type: "smartPuppyBehaviorLoop";
      layout?: MediaLayout;
    }
  | {
      /** SMART PUPPY-specific: renders
       * components/SmartPuppyConnectedArchitecture, replacing the simple
       * "Human → Smart Puppy → Connected App" relationship block with a
       * fuller connected-experience architecture (bidirectional Human ↔
       * Smart Puppy ↔ Connected App plus a Shared Companion State layer). */
      type: "smartPuppyConnectedArchitecture";
      layout?: MediaLayout;
    }
  | {
      /** SMART PUPPY-specific: renders components/SmartPuppyRelationshipLoop,
       * replacing the Research & Journey section's linear "relationship"
       * block (Discover → Approach → Connect → Engage → Personalize →
       * Return) with a journey loop — a quiet return path from Return back
       * to Connect/Engage (never all the way to Discover) plus a subtle
       * Awareness → Trust → Familiarity → Attachment progression layer. */
      type: "smartPuppyRelationshipLoop";
      layout?: MediaLayout;
    }
  | {
      /** SMART PUPPY-specific: renders
       * components/SmartPuppyDigitalExperienceMap, replacing the dense
       * screen-by-screen app flowchart image with a strategic structure
       * diagram (Home → Care/Control/Live → Activity/Assets/Household). */
      type: "smartPuppyDigitalExperienceMap";
      layout?: MediaLayout;
    };

export type CaseStudySection = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  blocks: ContentBlock[];
};

export type CaseStudyProject = {
  slug: string;
  title: string;
  subtitle: string;
  /** Optional small label above the title (e.g. "INDEPENDENT PRODUCT DESIGN
   * CONCEPT · 2026"). Most projects omit it and rely on the breadcrumb alone. */
  eyebrow?: string;
  /** Optional one-paragraph project summary shown under the subtitle. */
  description?: string;
  category: string;
  role: string[];
  year: string;
  duration?: string;
  focus?: string[];
  /** Optional third hero metadata column alongside Role/Focus. */
  scope?: string[];
  collaborators?: string[];
  status: string;
  breadcrumb: string[];
  links?: ProjectLink[];
  /** Real hero media. Omit (with heroPlaceholder set instead) for a project
   * whose final hero composition hasn't been produced yet. */
  hero?: MediaAsset;
  heroDark?: MediaAsset;
  /** Renders a labeled placeholder box in the hero slot instead of `hero`,
   * at the same width/spacing. Ignored if `hero` is set. */
  heroPlaceholder?: {
    label: string;
    details?: string[];
    aspectRatio?: string;
  };
  sections: CaseStudySection[];
};
