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
  category: string;
  role: string[];
  year: string;
  duration?: string;
  focus?: string[];
  collaborators?: string[];
  status: string;
  breadcrumb: string[];
  links?: ProjectLink[];
  hero: MediaAsset;
  heroDark?: MediaAsset;
  sections: CaseStudySection[];
};
