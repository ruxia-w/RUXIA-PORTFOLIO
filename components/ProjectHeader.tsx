import { ViewTransition } from "react";
import { ResponsiveMedia } from "./ResponsiveMedia";
import { CaseStudyPlaceholder } from "./CaseStudyPlaceholder";
import type { CaseStudyProject } from "@/lib/types";
import styles from "./ProjectHeader.module.css";

export function ProjectHeader({ project }: { project: CaseStudyProject }) {
  const metadata = [
    { label: "Type", value: project.category },
    { label: "Role", value: project.role.join(" · ") },
    { label: "Timeline", value: [project.year, project.duration].filter(Boolean).join(" · ") },
    { label: "Focus", value: project.focus?.join(" · ") ?? "" },
    { label: "Scope", value: project.scope?.join(" · ") ?? "" },
  ].filter((item) => item.value);

  return (
    <header className={styles.header}>
      <nav aria-label="Breadcrumb">
        <ol className={styles.breadcrumb}>
          {project.breadcrumb.map((crumb, i) => {
            const isLast = i === project.breadcrumb.length - 1;
            return (
              <li key={crumb}>
                <span aria-current={isLast ? "page" : undefined}>{crumb}</span>
                {!isLast ? <span aria-hidden="true"> / </span> : null}
              </li>
            );
          })}
        </ol>
      </nav>

      <div className={styles.intro}>
        {project.eyebrow ? <p className={styles.eyebrow}>{project.eyebrow}</p> : null}
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        {project.description ? <p className={styles.description}>{project.description}</p> : null}
      </div>

      <div className={styles.hero}>
        {project.hero ? (
          /* Same name as the matching Home project image (see app/page.tsx) —
             the browser morphs that image into this one on arrival. No
             wrapper div around the light/dark pair: a display:contents
             wrapper was tried first and confirmed (via instrumenting
             document.getAnimations()) to silently break the named pair from
             ever forming. */
          <ViewTransition
            name={`project-hero-${project.slug}`}
            share="project-morph"
            default="none"
          >
            <div className={styles.heroLight}>
              <ResponsiveMedia media={project.hero} viewerLabel={`View full image: ${project.hero.alt}`} />
            </div>
            {project.heroDark ? (
              <div className={styles.heroDark}>
                <ResponsiveMedia media={project.heroDark} viewerLabel={`View full image: ${project.heroDark.alt}`} />
              </div>
            ) : null}
          </ViewTransition>
        ) : project.heroPlaceholder ? (
          <CaseStudyPlaceholder
            label={project.heroPlaceholder.label}
            details={project.heroPlaceholder.details}
            aspectRatio={project.heroPlaceholder.aspectRatio}
          />
        ) : null}
      </div>

      <ViewTransition enter="hero-meta-fade" default="none">
        <dl className={styles.metadata}>
          {metadata.map((item) => (
            <div key={item.label} className={styles.metadataItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </ViewTransition>
    </header>
  );
}
