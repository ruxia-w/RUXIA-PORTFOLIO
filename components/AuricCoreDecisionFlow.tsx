"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, VConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricCoreDecisionFlow.module.css";

type NodeData = {
  label: string;
  ai?: boolean;
  decision?: boolean;
  edgeCase?: { label: string; note: string };
};

type NodeId =
  | "portfolioHealth"
  | "prioritySignal"
  | "movementDetail"
  | "aiExplanation"
  | "evidenceConfidence"
  | "personalImpact"
  | "scenario"
  | "compareOptions"
  | "riskTradeoffs"
  | "adjustInputs"
  | "review"
  | "humanDecision";

const nodes: Record<NodeId, NodeData> = {
  portfolioHealth: { label: "Portfolio Health" },
  prioritySignal: { label: "Priority Signal", ai: true },
  movementDetail: { label: "Movement Detail" },
  aiExplanation: { label: "AI Explanation", ai: true },
  evidenceConfidence: {
    label: "Evidence + Confidence",
    ai: true,
    edgeCase: { label: "Low confidence", note: "Uncertainty surfaced" },
  },
  personalImpact: {
    label: "Personal Impact",
    edgeCase: { label: "Missing context", note: "Clarify portfolio inputs" },
  },
  scenario: { label: "Scenario", ai: true },
  compareOptions: { label: "Compare Options", ai: true },
  riskTradeoffs: {
    label: "Risk + Trade-offs",
    edgeCase: { label: "Outside risk preference", note: "Reconsider scenario" },
  },
  adjustInputs: { label: "Adjust Inputs" },
  review: { label: "Review" },
  humanDecision: { label: "Human Decision", decision: true },
};

/**
 * AURIC SIGNAL's two connected decision flows, replacing the static
 * auric-core-user-flows.png with a responsive HTML/CSS/SVG diagram.
 *
 * Desktop/tablet render an editorial "system map": each stage folds into two
 * rows (left-to-right, then right-to-left) instead of one long horizontal
 * strip, sharing columns so the connectors stay simple straight lines.
 * Mobile renders a completely separate, deliberately simpler linear
 * sequence (never a scaled-down copy of the desktop map) from the same node
 * data, so both trees can never drift out of sync on content.
 *
 * AI is marked only on nodes where it actually proposes or interprets
 * something (Priority Signal, AI Explanation, Evidence + Confidence,
 * Scenario, Compare Options) via a small lime label — never a filled card.
 * Human Decision is the one node with a lime border, the strongest/only
 * accented endpoint, and its two outcomes (Take action / No action) are
 * styled identically so neither reads as the "correct" choice.
 */
export function AuricCoreDecisionFlow() {
  const { revealed, ref } = useDiagramReveal();

  return (
    <div
      ref={ref}
      className={`${styles.wrap} ${tokens.diagram} ${revealed ? `${styles.revealed} ${connectorStyles.revealed}` : ""}`}
    >
      {/* ============ DESKTOP / TABLET SYSTEM MAP ============ */}

      <div className={styles.canvas}>
      <div className={styles.stage}>
        <p className={styles.stageLabel}>01 — Understand a Change</p>
        <div className={`${styles.desktopGrid} ${styles.gridUnderstand}`}>
          <Node id="portfolioHealth" style={{ gridColumn: 1, gridRow: 1 }} />
          <HConn direction="right" style={{ gridColumn: 2, gridRow: 1 }} />
          <Node id="prioritySignal" style={{ gridColumn: 3, gridRow: 1 }} />
          <HConn direction="right" style={{ gridColumn: 4, gridRow: 1 }} />
          <Node id="movementDetail" style={{ gridColumn: 5, gridRow: 1 }} />

          <VConn style={{ gridColumn: 5, gridRow: 2 }} />

          <Node id="personalImpact" style={{ gridColumn: 1, gridRow: 3 }} />
          <HConn direction="left" style={{ gridColumn: 2, gridRow: 3 }} />
          <Node id="evidenceConfidence" style={{ gridColumn: 3, gridRow: 3 }} />
          <HConn direction="left" style={{ gridColumn: 4, gridRow: 3 }} />
          <Node id="aiExplanation" style={{ gridColumn: 5, gridRow: 3 }} />
        </div>
      </div>

      <div className={styles.desktopBridge}>
        <VConn tall />
      </div>

      <div className={styles.stage}>
        <p className={styles.stageLabel}>02 — Explore a Decision</p>
        <div className={`${styles.desktopGrid} ${styles.gridExplore}`}>
          <Node id="scenario" style={{ gridColumn: 1, gridRow: 1 }} />
          <HConn direction="right" style={{ gridColumn: 2, gridRow: 1 }} />
          <Node id="compareOptions" style={{ gridColumn: 3, gridRow: 1 }} />
          <HConn direction="right" style={{ gridColumn: 4, gridRow: 1 }} />
          <Node id="riskTradeoffs" style={{ gridColumn: 5, gridRow: 1 }} />

          <VConn style={{ gridColumn: 5, gridRow: 2 }} />

          <Node id="humanDecision" style={{ gridColumn: 1, gridRow: 3 }} />
          <HConn direction="left" style={{ gridColumn: 2, gridRow: 3 }} />
          <Node id="review" style={{ gridColumn: 3, gridRow: 3 }} />
          <HConn direction="left" style={{ gridColumn: 4, gridRow: 3 }} />
          <Node id="adjustInputs" style={{ gridColumn: 5, gridRow: 3 }} />
        </div>
        <div className={styles.desktopBranch}>
          <VConn />
          <div className={styles.branchOutcomes}>
            <span className={styles.outcome}>Take action</span>
            <span className={styles.outcome}>No action</span>
          </div>
        </div>
      </div>
      </div>

      {/* ============ MOBILE LINEAR SEQUENCE ============ */}

      <div className={styles.mobileFlow}>
        <p className={styles.stageLabel}>01 — Understand a Change</p>
        {(
          [
            "portfolioHealth",
            "prioritySignal",
            "movementDetail",
            "aiExplanation",
            "evidenceConfidence",
            "personalImpact",
          ] as NodeId[]
        ).map((id, i) => (
          <div key={id}>
            {i > 0 ? <MobileConn /> : null}
            <Node id={id} />
          </div>
        ))}

        <p className={styles.stageLabel} style={{ marginTop: "1.5rem" }}>
          02 — Explore a Decision
        </p>
        {(
          [
            "scenario",
            "compareOptions",
            "riskTradeoffs",
            "adjustInputs",
            "review",
            "humanDecision",
          ] as NodeId[]
        ).map((id) => (
          <div key={id}>
            <MobileConn />
            <Node id={id} />
          </div>
        ))}
        <div className={styles.mobileBranch}>
          <MobileConn />
          <div className={styles.mobileOutcomes}>
            <span className={styles.outcome}>Take action</span>
            <span className={styles.outcome}>No action</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({ id, style }: { id: NodeId; style?: React.CSSProperties }) {
  const data = nodes[id];
  const heightClass = data.edgeCase ? styles.nodeAnnotated : data.ai ? styles.nodeAi : "";
  const widthClass = data.edgeCase ? styles.wAnnotated : styles.wStandard;
  return (
    <div
      className={`${styles.node} ${widthClass} ${heightClass} ${data.decision ? styles.nodeDecision : ""}`}
      style={style}
    >
      {data.ai ? <span className={styles.aiTag}>AI Assisted</span> : null}
      <span className={styles.nodeLabel}>
        {data.decision ? <span className={styles.decisionDot} aria-hidden="true" /> : null}
        {data.label}
      </span>
      {data.edgeCase ? (
        <div className={styles.edgeCase}>
          <span className={styles.edgeCaseMarker} aria-hidden="true">
            ↳
          </span>
          <span className={styles.edgeCaseText}>
            <span className={styles.edgeCaseLabel}>{data.edgeCase.label}</span>
            <span className={styles.edgeCaseNote}>{data.edgeCase.note}</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}

