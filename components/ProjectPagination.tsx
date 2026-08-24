import Link from "next/link";
import { projectOrder } from "@/lib/projectOrder";
import { projectRegistry } from "@/lib/projects/registry";
import styles from "./ProjectPagination.module.css";

/**
 * Previous/Next navigation computed from the central project order.
 * Renders nothing for links that don't exist yet — no invented siblings,
 * no disabled placeholder controls.
 */
export function ProjectPagination({ currentSlug }: { currentSlug: string }) {
  const index = projectOrder.indexOf(currentSlug as (typeof projectOrder)[number]);
  if (index === -1) return null;

  const prevSlug = index > 0 ? projectOrder[index - 1] : undefined;
  const nextSlug = index < projectOrder.length - 1 ? projectOrder[index + 1] : undefined;

  if (!prevSlug && !nextSlug) return null;

  const prev = prevSlug ? projectRegistry[prevSlug] : undefined;
  const next = nextSlug ? projectRegistry[nextSlug] : undefined;

  return (
    <nav aria-label="Project navigation" className={styles.nav}>
      {prev ? (
        <Link href={prev.href} className={styles.link}>
          <span className={styles.direction}>Previous</span>
          <span>{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className={`${styles.link} ${styles.next}`}>
          <span className={styles.direction}>Next</span>
          <span>{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
