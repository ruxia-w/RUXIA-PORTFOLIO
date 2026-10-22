import Link from "next/link";
import { projectOrder } from "@/lib/projectOrder";
import { projectRegistry } from "@/lib/projects/registry";
import styles from "./ProjectPagination.module.css";

/**
 * Previous/Next navigation computed from the central project order —
 * circular: the first project's Previous wraps to the last project, and
 * the last project's Next wraps to the first, so every project has both
 * links on every page. Renders nothing only if the current slug itself
 * isn't in projectOrder yet (e.g. a case study not migrated into it) or a
 * neighbor slug has no registry entry — no invented siblings in that case.
 */
export function ProjectPagination({ currentSlug }: { currentSlug: string }) {
  const index = projectOrder.indexOf(currentSlug as (typeof projectOrder)[number]);
  if (index === -1) return null;

  const total = projectOrder.length;
  const prevSlug = projectOrder[(index - 1 + total) % total];
  const nextSlug = projectOrder[(index + 1) % total];

  if (!prevSlug && !nextSlug) return null;

  const prev = prevSlug ? projectRegistry[prevSlug] : undefined;
  const next = nextSlug ? projectRegistry[nextSlug] : undefined;

  return (
    <nav aria-label="Project navigation" className={styles.nav}>
      {prev ? (
        <Link href={prev.href} className={styles.link}>
          <span className={styles.direction}>Previous</span>
          <span className={styles.projectTitle}>{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className={`${styles.link} ${styles.next}`}>
          <span className={styles.direction}>Next</span>
          <span className={styles.projectTitle}>{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
