import styles from "./SourcefoldOperationalStateDiagram.module.css";

type Category = {
  name: string;
  states: string[];
};

const categories: Category[] = [
  { name: "Workflow", states: ["Ready", "Review Required", "Source Updated", "Blocked"] },
  { name: "Review / provenance", states: ["AI Suggested", "Human Edited", "Human Approved", "Escalated"] },
  { name: "Version", states: ["Current", "Affected", "Needs Re-approval", "Approved Exception"] },
  { name: "Publishing", states: ["Not Ready", "Ready", "Scheduled", "Live"] },
];

/**
 * SOURCEFOLD's Operational State diagram: four independent state families,
 * each shown as a category label beside a neutral rail carrying its four
 * states. Deliberately not a lifecycle — no arrowheads, no per-state accent
 * — since these are classification groups, not a mandatory sequence. One
 * responsive markup: mobile reflows the same rows and states via CSS
 * (block stacking, states drop to a 2-column grid) rather than rendering a
 * second, separately-hidden copy.
 */
export function SourcefoldOperationalStateDiagram() {
  return (
    <div className={styles.wrap}>
      <p className="visually-hidden">
        Four SOURCEFOLD operational state families. Workflow: Ready, Review Required, Source Updated, Blocked.
        Review / provenance: AI Suggested, Human Edited, Human Approved, Escalated. Version: Current, Affected,
        Needs Re-approval, Approved Exception. Publishing: Not Ready, Ready, Scheduled, Live.
      </p>

      {categories.map((category) => (
        <div key={category.name} className={styles.row}>
          <p className={styles.categoryLabel}>
            <span className={styles.categoryAnchor} aria-hidden="true" />
            {category.name}
          </p>

          <div className={styles.states}>
            <div className={styles.rail} aria-hidden="true" />
            {category.states.map((state) => (
              <div key={state} className={styles.state}>
                <span className={styles.marker} aria-hidden="true" />
                <span className={styles.stateLabel}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
