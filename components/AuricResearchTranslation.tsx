"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricResearchTranslation.module.css";

type Translation = {
  signal: string;
  principle: string;
  response: string;
};

/**
 * The four recurring research themes, each carried through to the design
 * principle and product decision it actually produced — synthesis, not a
 * quote-to-feature mapping. Wording matches the case study's own "Recurring
 * themes" / "Design principles" content exactly; nothing here is invented.
 */
const translations: Translation[] = [
  {
    signal: "Attention happens before analysis.",
    principle: "Prioritize before explaining.",
    response: "Priority Signal",
  },
  {
    signal: "Explanation builds confidence.",
    principle: "Explain, don't prescribe.",
    response: "Evidence + Confidence",
  },
  {
    signal: "People want to explore before committing.",
    principle: "Support reversible exploration.",
    response: "Scenario Comparison",
  },
  {
    signal: "Users want to retain judgment.",
    principle: "Keep AI authority bounded.",
    response: "Review + Human Decision",
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * A lighter, editorial companion to the other AURIC diagrams — a
 * three-column translation map (Research Signal → Design Principle →
 * Product Response) rather than another row of equally-weighted cards.
 * Column widths (~25/45/30) and visual treatment both deliberately make the
 * middle column the strongest: plain quiet text for the research
 * observation, a tinted/left-accented synthesis block for the design
 * principle (the conceptual bridge — never skippable), and a compact
 * outlined endpoint with the one lime dot for the product response. The
 * principle blocks' shared lime left edge doubles as a subtle "synthesis
 * spine" running through the four rows.
 *
 * Shares reveal hook, connector primitives, and --lime tokens with the
 * other AURIC diagrams; deliberately uses far fewer "cards" than they do,
 * per this diagram's own brief.
 */
export function AuricResearchTranslation() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET THREE-COLUMN MAP ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          <div className={styles.headerRow}>
            <span aria-hidden="true" />
            <p className={styles.colHeader}>01 — Research Signal</p>
            <span aria-hidden="true" />
            <p className={styles.colHeader}>
              <span className={styles.headerDot} aria-hidden="true" />
              02 — Synthesis / Design Principle
            </p>
            <span aria-hidden="true" />
            <p className={styles.colHeader}>03 — Product Response</p>
          </div>

          {translations.map((row, i) => (
            <div className={styles.row} key={row.response}>
              <span className={styles.rowIndex}>{pad(i + 1)}</span>
              <p className={styles.signalText}>{row.signal}</p>
              <div className={styles.rowConnector}>
                <HConn direction="right" />
              </div>
              <div className={styles.principleBlock}>
                <p className={styles.principleText}>{row.principle}</p>
              </div>
              <div className={styles.rowConnector}>
                <HConn direction="right" />
              </div>
              <span className={styles.responseNode}>
                <span className={styles.responseDot} aria-hidden="true" />
                {row.response}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ MOBILE: ONE GROUP PER TRANSLATION ============ */}

      <div className={styles.mobileFlow}>
        {translations.map((row, i) => (
          <div className={styles.mobileGroup} key={row.response}>
            <p className={styles.mobileRowIndex}>{pad(i + 1)}</p>

            <p className={styles.mobileColLabel}>Research Signal</p>
            <p className={styles.mobileSignalText}>{row.signal}</p>

            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>

            <p className={styles.mobileColLabel}>
              <span className={styles.headerDot} aria-hidden="true" />
              Synthesis / Design Principle
            </p>
            <div className={styles.principleBlock}>
              <p className={styles.mobilePrincipleText}>{row.principle}</p>
            </div>

            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>

            <p className={styles.mobileColLabel}>Product Response</p>
            <span className={`${styles.responseNode} ${styles.mobileResponse}`}>
              <span className={styles.responseDot} aria-hidden="true" />
              {row.response}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
