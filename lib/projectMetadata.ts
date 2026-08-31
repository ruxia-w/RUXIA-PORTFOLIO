import type { Metadata } from "next";
import type { CaseStudyProject } from "@/lib/types";

export function createProjectMetadata(project: CaseStudyProject): Metadata {
  const title = `${project.title} — Ruxia Wang`;
  const description = project.subtitle;
  const url = `/work/${project.slug}`;
  const image = project.hero
    ? {
        url: project.hero.src,
        width: project.hero.width,
        height: project.hero.height,
        alt: project.hero.alt,
      }
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: image ? [image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image.url] : [],
    },
  };
}
