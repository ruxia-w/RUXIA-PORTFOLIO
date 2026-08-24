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
      variant?: "screens";
    }
  | { type: "callout"; title: string; body: string }
  | { type: "comparison"; items: Array<{ title: string; body: string }> }
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
      columns: 3 | 4;
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
