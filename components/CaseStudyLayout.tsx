import { ProjectHeader } from "./ProjectHeader";
import { ProjectPagination } from "./ProjectPagination";
import { CaseStudySidebar } from "./CaseStudySidebar";
import { MobileContentsMenu } from "./MobileContentsMenu";
import { CaseStudySection } from "./CaseStudySection";
import { ReadingProgress } from "./ReadingProgress";
import { InitialHashScroll } from "./InitialHashScroll";
import type { CaseStudyProject } from "@/lib/types";
import styles from "./CaseStudyLayout.module.css";

export function CaseStudyLayout({ project }: { project: CaseStudyProject }) {
  const chapters = project.sections.map(({ id, label }) => ({ id, label }));
  const articleId = `${project.slug}-article`;

  return (
    <>
      <InitialHashScroll />
      <ReadingProgress targetId={articleId} />
      <ProjectHeader project={project} />
      <MobileContentsMenu sections={chapters} />
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <CaseStudySidebar sections={chapters} />
        </aside>
        <article id={articleId} className={styles.article}>
          {project.sections.map((section) => (
            <CaseStudySection key={section.id} section={section} />
          ))}
        </article>
      </div>
      <ProjectPagination currentSlug={project.slug} />
    </>
  );
}
