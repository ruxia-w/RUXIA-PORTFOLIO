# Case Study Data Schema

Recommended TypeScript shape. Adapt naming to the existing repository, but preserve the single-source relationship between sidebar and content.

```ts
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
};

export type ContentBlock =
  | { type: "richText"; body: string }
  | { type: "media"; media: MediaAsset }
  | { type: "mediaGroup"; media: MediaAsset[] }
  | { type: "callout"; title: string; body: string }
  | { type: "comparison"; items: Array<{ title: string; body: string }> }
  | { type: "journey"; steps: Array<{ title: string; body: string; media?: MediaAsset }> };

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
  collaborators?: string[];
  status: string;
  breadcrumb: string[];
  links?: ProjectLink[];
  hero: MediaAsset;
  sections: CaseStudySection[];
};
```

## Central project order

```ts
export const projectOrder = [
  // Populate once all portfolio project slugs are confirmed.
  "auric-signal",
];
```

Do not hard-code previous/next links inside each project file.

