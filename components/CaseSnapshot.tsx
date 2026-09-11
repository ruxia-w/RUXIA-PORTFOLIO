import type { CaseStudyProject } from "@/lib/types";
import styles from "./CaseSnapshot.module.css";

export function CaseSnapshot({ caseSnapshot }: { caseSnapshot: NonNullable<CaseStudyProject["caseSnapshot"]> }) {
  return (
    <section
      className={caseSnapshot.hideTopDivider ? `${styles.wrap} ${styles.wrapNoTopDivider}` : styles.wrap}
      aria-label="Case snapshot"
    >
      <p className={styles.eyebrow}>Case snapshot</p>
      <dl
        className={
          caseSnapshot.layout === "grid2x2"
            ? `${styles.grid} ${styles.gridTwoByTwo}`
            : caseSnapshot.layout === "grid3x2"
              ? `${styles.grid} ${styles.gridThreeTwo}`
              : styles.grid
        }
      >
        {caseSnapshot.groups.map((group) => (
          <div
            key={group.label}
            className={
              group.emphasis === "high"
                ? `${styles.item} ${styles.itemHigh}`
                : group.emphasis === "compact"
                  ? `${styles.item} ${styles.itemCompact}`
                  : styles.item
            }
          >
            <dt>{group.label}</dt>
            <dd>{group.body}</dd>
            {group.supporting ? <dd className={styles.supporting}>{group.supporting}</dd> : null}
          </div>
        ))}
      </dl>
    </section>
  );
}
