import { ProjectHeader } from "./ProjectHeader";
import { ProjectPagination } from "./ProjectPagination";
import { CaseStudySidebar } from "./CaseStudySidebar";
import { CaseSnapshot } from "./CaseSnapshot";
import { MobileContentsMenu } from "./MobileContentsMenu";
import { CaseStudySection } from "./CaseStudySection";
import { ReadingProgress } from "./ReadingProgress";
import { InitialHashScroll } from "./InitialHashScroll";
import { Footer } from "./Footer";
import type { CaseStudyProject } from "@/lib/types";
import styles from "./CaseStudyLayout.module.css";
// Imported only for its hashed classname strings, to target the same
// elements in the <noscript> fallback below — CaseStudySection owns all of
// its own actual styling/JSX.
import sectionStyles from "./CaseStudySection.module.css";

export function CaseStudyLayout({ project }: { project: CaseStudyProject }) {
  const chapters = project.sections.map(({ id, label }) => ({ id, label }));
  const articleId = `${project.slug}-article`;

  return (
    <>
      {/* Scroll-reveal fallback (same pattern as app/page.tsx's own): every
          ScrollReveal-wrapped element across every CaseStudySection on this
          page only ever reveals because that component's client-side
          IntersectionObserver effect flips data-revealed="true" once
          scrolled into view. If JavaScript never runs at all, that effect
          never fires and data-revealed stays absent forever — forcing every
          reveal target in every chapter back to its fully visible,
          non-offset, non-clipped resting state here, once, rather than
          needing this in every chapter's own markup. */}
      <noscript>
        <style>{`
          .${sectionStyles.heading}, .${sectionStyles.intro}, .${sectionStyles.richText}, .${sectionStyles.imageReveal} {
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
          }
        `}</style>
      </noscript>
      <InitialHashScroll />
      <ReadingProgress targetId={articleId} />
      <ProjectHeader project={project} />
      {project.caseSnapshot ? <CaseSnapshot caseSnapshot={project.caseSnapshot} /> : null}
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
      <Footer />
    </>
  );
}
