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
      variant?: "screens";
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
