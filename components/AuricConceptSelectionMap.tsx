"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricConceptSelectionMap.module.css";

type Level = 1 | 2 | 3;

const levelLabel: Record<Level, string> = { 1: "Low", 2: "Medium", 3: "High" };

type Direction = {
  name: string;
  selected?: boolean;
  clarity: Level;
  context: Level;
  aiDependence: Level;
  continuity: Level;
};

const directions: Direction[] = [
  { name: "Dashboard-Led", clarity: 2, context: 3, aiDependence: 1, continuity: 1 },
  { name: "AI Brief-Led", clarity: 3, context: 1, aiDependence: 3, continuity: 2 },
  { name: "Portfolio-Led", clarity: 1, context: 3, aiDependence: 1, continuity: 2 },
  { name: "Signal-Led", selected: true, clarity: 3, context: 2, aiDependence: 2, continuity: 3 },
];

const criteria: Array<{ key: keyof Pick<Direction, "clarity" | "context" | "aiDependence" | "continuity">; label: string }> = [
  { key: "clarity", label: "Decision Clarity" },
  { key: "context", label: "Personal Context" },
  { key: "aiDependence", label: "AI Dependence" },
  { key: "continuity", label: "Decision Continuity" },
];

/**
 * AURIC SIGNAL's Concept Selection / Direction Trade-off Map — explains the
 * decision logic behind advancing the Signal-led direction, sitting after
 * the existing early-exploration screenshot and cardSet (which show what the
 * four directions looked like) and before the "Direction selected" callout.
 *
 * All four criteria use the same neutral three-tick scale — including AI
 * Dependence, deliberately not color-coded as good/bad, since these are
 * descriptive trade-offs rather than a single optimization score. Signal-led
 * carries a restrained row-level accent (a lime dot, "Selected" label, and a
 * thin lime row outline) but its own ticks are exactly as neutral as every
 * other row, and it does not score High on every criterion — the point is
 * balance, not superiority.
 */
export function AuricConceptSelectionMap() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          <span aria-hidden="true" />
          {criteria.map((c) => (
            <p className={styles.colHeader} key={c.key}>
              {c.label}
            </p>
          ))}

          {directions.map((d) => (
            <div className={styles.row} key={d.name}>
              <div className={`${styles.nameCell} ${d.selected ? styles.selectedCell : ""}`}>
                <p className={styles.name}>
                  {d.selected ? <span className={styles.selectedDot} aria-hidden="true" /> : null}
                  {d.name}
                </p>
                {d.selected ? <span className={styles.selectedLabel}>Selected</span> : null}
              </div>
              {criteria.map((c) => (
                <div className={`${styles.scaleCell} ${d.selected ? styles.selectedCell : ""}`} key={c.key}>
                  <ScaleIndicator level={d[c.key]} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className={styles.legend}>Low · Medium · High — a qualitative design comparison, not a measured research score.</p>
        <p className={styles.rationale}>
          Signal-led offered the strongest balance of attention, context, and decision continuity without making AI the
          primary authority.
        </p>
      </div>

      {/* ============ MOBILE: STACKED GROUPS ============ */}

      <div className={styles.mobileFlow}>
        {directions.map((d) => (
          <div className={`${styles.mobileGroup} ${d.selected ? styles.mobileGroupSelected : ""}`} key={d.name}>
            <p className={styles.name}>
              {d.selected ? <span className={styles.selectedDot} aria-hidden="true" /> : null}
              {d.name}
              {d.selected ? <span className={styles.selectedLabel}>Selected</span> : null}
            </p>
            {criteria.map((c) => (
              <div className={styles.mobileCriterionRow} key={c.key}>
                <p className={styles.mobileCriterionLabel}>{c.label}</p>
                <ScaleIndicator level={d[c.key]} />
              </div>
            ))}
          </div>
        ))}

        <p className={styles.legend}>Low · Medium · High — a qualitative design comparison, not a measured research score.</p>
        <p className={styles.rationale}>
          Signal-led offered the strongest balance of attention, context, and decision continuity without making AI the
          primary authority.
        </p>
      </div>
    </div>
  );
}

function ScaleIndicator({ level }: { level: Level }) {
  return (
    <span className={styles.scale}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={`${styles.tick} ${i <= level ? styles.tickFilled : ""}`} aria-hidden="true" />
      ))}
      <span className={styles.srOnly}>{levelLabel[level]}</span>
    </span>
  );
}
