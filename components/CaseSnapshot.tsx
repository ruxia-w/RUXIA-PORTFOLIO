import type { CaseStudyProject } from "@/lib/types";
import styles from "./CaseSnapshot.module.css";

export function CaseSnapshot({ caseSnapshot }: { caseSnapshot: NonNullable<CaseStudyProject["caseSnapshot"]> }) {
  return (
    <section
      className={caseSnapshot.hideTopDivider ? `${styles.wrap} ${styles.wrapNoTopDivider}` : styles.wrap}
      aria-label="Case snapshot"
    >
      <p className={styles.eyebrow}>Case snapshot</p>
      <dl className={caseSnapshot.layout === "grid2x2" ? `${styles.grid} ${styles.gridTwoByTwo}` : styles.grid}>
        {caseSnapshot.groups.map((group) => (
          <div key={group.label} className={styles.item}>
            <dt>{group.label}</dt>
            <dd>{group.body}</dd>
            {group.supporting ? <dd className={styles.supporting}>{group.supporting}</dd> : null}
          </div>
        ))}
      </dl>
    </section>
  );
}
