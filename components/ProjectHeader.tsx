import { ResponsiveMedia } from "./ResponsiveMedia";
import type { CaseStudyProject } from "@/lib/types";
import styles from "./ProjectHeader.module.css";

export function ProjectHeader({ project }: { project: CaseStudyProject }) {
  const metadata = [
    { label: "Type", value: project.category },
    { label: "Role", value: project.role.join(" · ") },
    { label: "Timeline", value: [project.year, project.duration].filter(Boolean).join(" · ") },
    { label: "Focus", value: project.focus?.join(" · ") ?? "" },
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
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroLight}>
          <ResponsiveMedia media={project.hero} viewerLabel={`View full image: ${project.hero.alt}`} />
        </div>
        {project.heroDark ? (
          <div className={styles.heroDark}>
            <ResponsiveMedia media={project.heroDark} viewerLabel={`View full image: ${project.heroDark.alt}`} />
          </div>
        ) : null}
      </div>

      <dl className={styles.metadata}>
        {metadata.map((item) => (
          <div key={item.label} className={styles.metadataItem}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
