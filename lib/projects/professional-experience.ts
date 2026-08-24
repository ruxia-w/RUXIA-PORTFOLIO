import type { CaseStudyProject, CaseStudySection, MediaAsset } from "@/lib/types";

const BASE = "/work/professional-experience";

const media = (
  filename: string,
  width: number,
  height: number,
  alt: string,
): MediaAsset => ({
  src: `${BASE}/${filename}`,
  width,
  height,
  alt,
});

export const professionalExperienceSections: CaseStudySection[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Designing consumer products for everyday life",
    blocks: [
      {
        type: "richText",
        body: "A selection of commercial products developed across wellness, fitness, personal care, smart home, and lifestyle categories. The work connects industrial design, user interaction, CMF, engineering collaboration, and production realities.\n\nThis page currently serves as a focused introduction to the breadth of that professional experience. Individual product stories and process details will be added as the collection develops.",
      },
      {
        type: "callout",
        title: "Professional focus",
        body: "Creating clear, approachable products where form, function, and everyday experience work together.",
      },
    ],
  },
  {
    id: "selected-products",
    label: "Selected Products",
    heading: "Commercial work across multiple product categories",
    intro:
      "A first selection of products representing fitness systems, human care, personal care, and smart home experience.",
    blocks: [
      {
        type: "mediaGroup",
        labels: ["Fitness", "Wellness", "Personal Care", "Smart Home"],
        media: [
          media(
            "fitrx-adjustable-dumbbells.png",
            2632,
            2632,
            "FitRx adjustable dumbbell system with black plates and red adjustment accents.",
          ),
          media(
            "slf-foot-massager.png",
            800,
            800,
            "SLF foot massager designed for at-home wellness and recovery.",
          ),
          media(
            "slf-ionic-dry-brush.png",
            800,
            800,
            "SLF ionic drying brush with integrated controls and black-and-red CMF.",
          ),
          media(
            "ionvac-smartclean.webp",
            1920,
            1920,
            "IonVac SmartClean robot vacuum in a dark technical finish.",
          ),
        ],
      },
    ],
  },
  {
    id: "design-scope",
    label: "Design Scope",
    heading: "A broad product practice, organized around human experience",
    blocks: [
      {
        type: "cardSet",
        columns: 2,
        items: [
          {
            title: "Human-Centered Wellness",
            body: "Recovery and wellness products shaped around comfort, ergonomics, and intuitive interaction.",
          },
          {
            title: "Fitness Ecosystems",
            body: "Modular equipment and product families balancing functional complexity with straightforward use.",
          },
          {
            title: "Personal Care Technology",
            body: "Personal devices where tactile details, usability, and thoughtful CMF define the experience.",
          },
          {
            title: "Smart Home Experience",
            body: "Connected household products designed to make everyday routines feel simpler and more seamless.",
          },
        ],
      },
    ],
  },
];

export const professionalExperienceProject: CaseStudyProject = {
  slug: "professional-experience",
  title: "PROFESSIONAL EXPERIENCE",
  subtitle:
    "A collection of commercial products designed across wellness, fitness, personal care, smart home, and lifestyle categories.",
  category: "Industrial Design · Consumer Products",
  role: ["Product Design", "Industrial Design", "Design Leadership"],
  year: "2021–2026",
  focus: ["Commercial Products", "Concept to Production"],
  status: "Professional Work",
  breadcrumb: ["Work", "Professional Experience"],
  hero: {
    ...media(
      "professional-experience-hero.png",
      1915,
      821,
      "A collection of consumer products spanning fitness, smart home, personal care, wellness, and lifestyle.",
    ),
    priority: true,
  },
  sections: professionalExperienceSections,
};
