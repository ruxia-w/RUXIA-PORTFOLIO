"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricDecisionSupportJourney.module.css";

type Stage = {
  number: string;
  title: string;
  question: string;
};

const stages: Stage[] = [
  { number: "01", title: "Signal", question: "What changed?" },
  { number: "02", title: "Understand", question: "Why does it matter?" },
  { number: "03", title: "Explore", question: "What could I do?" },
  { number: "04", title: "Decide", question: "What do I choose?" },
];

/**
 * AURIC SIGNAL's executive-level overview diagram — the simplest and
 * fastest-to-read diagram in the case study, meant to be understood in 2-3
 * seconds. Deliberately card-free: each stage is just a small outlined
 * number marker, a title, and its one-line question, connected by the same
 * short HConn arrows used elsewhere in the AURIC family.
 *
 * The AI Assistance rule sits above Signal/Understand/Explore only and ends
 * before Decide; a small lime-bordered marker plus a quiet "Human Judgment"
 * caption under Decide carries the diagram's one point: AI assists, the
 * human decides. Shares tokens/connectors/reveal hook with the rest of the
 * AURIC diagrams but intentionally uses none of their card/border-heavy
 * vocabulary — this one is meant to look different.
 */
export function AuricDecisionSupportJourney() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          <div className={styles.aiBar} style={{ gridArea: "aibar" }}>
            <span className={styles.aiBarLabel}>AI Assistance</span>
          </div>

          <StageBlock stage={stages[0]} area="s1" />
          <div className={styles.connector} style={{ gridArea: "c1" }}>
            <HConn direction="right" />
          </div>
          <StageBlock stage={stages[1]} area="s2" />
          <div className={styles.connector} style={{ gridArea: "c2" }}>
            <HConn direction="right" />
          </div>
          <StageBlock stage={stages[2]} area="s3" />
          <div className={styles.connector} style={{ gridArea: "c3" }}>
            <HConn direction="right" />
          </div>
          <StageBlock stage={stages[3]} area="s4" decide />

          <p className={styles.humanJudgment} style={{ gridArea: "hj" }}>
            <span className={styles.humanArrow} aria-hidden="true">↑</span>
            Human Judgment
          </p>
        </div>

        <p className={styles.footnote}>
          AURIC supports interpretation and exploration while final judgment remains with the user.
        </p>
      </div>

      {/* ============ MOBILE: VERTICAL STACK ============ */}

      <div className={styles.mobileFlow}>
        <div className={styles.mobileAiGroup}>
          <span className={styles.mobileAiBarLabel}>AI Assistance</span>
          <div className={styles.mobileAiRail}>
            <MobileStageBlock stage={stages[0]} />
            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>
            <MobileStageBlock stage={stages[1]} />
            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>
            <MobileStageBlock stage={stages[2]} />
          </div>
        </div>

        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>

        <MobileStageBlock stage={stages[3]} decide />
        <p className={styles.humanJudgment}>
          <span className={styles.humanArrow} aria-hidden="true">↑</span>
          Human Judgment
        </p>

        <p className={styles.footnote}>
          AURIC supports interpretation and exploration while final judgment remains with the user.
        </p>
      </div>
    </div>
  );
}

function StageBlock({ stage, area, decide }: { stage: Stage; area: string; decide?: boolean }) {
  return (
    <div className={styles.stage} style={{ gridArea: area }}>
      <span className={`${styles.stageMarker} ${decide ? styles.stageMarkerDecide : ""}`}>{stage.number}</span>
      <p className={styles.stageTitle}>{stage.title}</p>
      <p className={styles.stageQuestion}>{stage.question}</p>
    </div>
  );
}

function MobileStageBlock({ stage, decide }: { stage: Stage; decide?: boolean }) {
  return (
    <div className={styles.stage}>
      <span className={`${styles.stageMarker} ${decide ? styles.stageMarkerDecide : ""}`}>{stage.number}</span>
      <p className={styles.stageTitle}>{stage.title}</p>
      <p className={styles.stageQuestion}>{stage.question}</p>
    </div>
  );
}
