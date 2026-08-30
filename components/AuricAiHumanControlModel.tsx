"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, VConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricAiHumanControlModel.module.css";

type AiNodeId = "organize" | "prioritize" | "explain" | "surfaceEvidence" | "simulate" | "compare";

const aiNodes: Record<AiNodeId, { label: string }> = {
  organize: { label: "Organize" },
  prioritize: { label: "Prioritize" },
  explain: { label: "Explain" },
  surfaceEvidence: { label: "Surface Evidence" },
  simulate: { label: "Simulate" },
  compare: { label: "Compare" },
};

const understandOrder: AiNodeId[] = ["organize", "prioritize", "explain", "surfaceEvidence"];
const exploreOrder: AiNodeId[] = ["simulate", "compare"];

type JudgmentNodeId = "interpret" | "evaluate" | "decide";

const judgmentNodes: Record<JudgmentNodeId, { label: string }> = {
  interpret: { label: "Interpret" },
  evaluate: { label: "Evaluate" },
  decide: { label: "Decide" },
};

const judgmentOrder: JudgmentNodeId[] = ["interpret", "evaluate", "decide"];

/**
 * AURIC SIGNAL's AI Assistance / Human Control Model — a new diagram (no
 * static asset replaced) making the interaction boundary between AI
 * assistance and human decision-making visually explicit.
 *
 * Two tiers, deliberately asymmetric:
 *  01 — AI Assistance: smaller, lighter nodes across two conceptual groups
 *       (Understand: Organize → Prioritize → Explain → Surface Evidence;
 *       Explore: Simulate → Compare), each carrying a small lime "AI
 *       Assisted" tag — never a filled/colored card. A quiet, box-free Trust
 *       Signals rail (Evidence · Confidence · Uncertainty) sits directly
 *       beneath, textually captioned as accompanying Explain/Surface
 *       Evidence rather than drawn as a connector crossing the diagram.
 *  Human Control Boundary — a thin rule with a centered "AI Assists — Human
 *       Decides" label (the one deliberate lime marker on the boundary
 *       itself) and a small lime transition connector leading into it: the
 *       strongest conceptual moment in the diagram.
 *  02 — Human Judgment: larger, bolder, entirely neutral nodes (Interpret →
 *       Evaluate → Decide) branching into Take Action / No Action, styled
 *       identically so neither reads as preferred — authority communicated
 *       through size/weight, never color.
 *
 * User Oversight (Inspect · Question · Adjust · Exit) is deliberately last
 * in both the DOM and the visual flow, per the diagram's own accessibility
 * ordering: AI assistance → trust signals → boundary → human judgment →
 * outcomes → user oversight.
 *
 * Shares reveal hook, connector primitives, and --lime tokens with
 * AuricCoreDecisionFlow / AuricInformationArchitecture so all three read as
 * one diagram system.
 */
export function AuricAiHumanControlModel() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.desktopOnly}>
        <div className={styles.tier}>
          <p className={styles.tierLabel}>01 — AI Assistance</p>

          <p className={styles.subLabel}>Understand</p>
          <div className={styles.aiRow}>
            <AiNode id="organize" className={styles.aiRowNode} />
            <div className={styles.aiRowConnector}>
              <HConn direction="right" />
            </div>
            <AiNode id="prioritize" className={styles.aiRowNode} />
            <div className={styles.aiRowConnector}>
              <HConn direction="right" />
            </div>
            <AiNode id="explain" className={styles.aiRowNode} />
            <div className={styles.aiRowConnector}>
              <HConn direction="right" />
            </div>
            <AiNode id="surfaceEvidence" className={styles.aiRowNode} />
          </div>

          <div className={styles.aiVConn}>
            <VConn />
          </div>

          <p className={styles.subLabel}>Explore</p>
          <div className={styles.aiRow}>
            <AiNode id="simulate" className={styles.aiRowNode} />
            <div className={styles.aiRowConnector}>
              <HConn direction="right" />
            </div>
            <AiNode id="compare" className={styles.aiRowNode} />
          </div>

          <div className={styles.trustRail}>
            <p className={styles.trustLabel}>
              <span className={styles.trustDot} aria-hidden="true" />
              Trust Signals
            </p>
            <p className={styles.trustItems}>Evidence · Confidence · Uncertainty</p>
            <p className={styles.trustCaption}>→ accompanies Explain · Surface Evidence</p>
          </div>
        </div>

        <TransitionMarker />

        <div className={styles.boundary}>
          <span className={styles.boundaryLine} aria-hidden="true" />
          <span className={styles.boundaryLabel}>
            <span className={styles.boundaryDot} aria-hidden="true" />
            AI Assists — Human Decides
          </span>
        </div>

        <div className={styles.tier}>
          <p className={styles.tierLabel}>02 — Human Judgment</p>
          <div className={styles.judgmentRow}>
            <JudgmentNode id="interpret" className={styles.judgmentRowNode} />
            <div className={styles.judgmentRowConnector}>
              <HConn direction="right" />
            </div>
            <JudgmentNode id="evaluate" className={styles.judgmentRowNode} />
            <div className={styles.judgmentRowConnector}>
              <HConn direction="right" />
            </div>
            <JudgmentNode id="decide" className={styles.judgmentRowNode} />
          </div>
          <div className={styles.judgmentVConn}>
            <VConn />
          </div>
          <div className={styles.outcomes}>
            <span className={styles.outcome}>Take Action</span>
            <span className={styles.outcome}>No Action</span>
          </div>
        </div>

        <div className={styles.oversight}>
          <p className={styles.oversightLabel}>User Oversight</p>
          <p className={styles.oversightItems}>Inspect · Question · Adjust · Exit</p>
        </div>
      </div>

      {/* ============ MOBILE LINEAR SEQUENCE ============ */}

      <div className={styles.mobileFlow}>
        <p className={styles.tierLabel}>01 — AI Assistance</p>
        {understandOrder.map((id, i) => (
          <div key={id}>
            {i > 0 ? <MobileConn /> : null}
            <AiNode id={id} />
          </div>
        ))}
        {exploreOrder.map((id) => (
          <div key={id}>
            <MobileConn />
            <AiNode id={id} />
          </div>
        ))}

        <div className={styles.trustRail}>
          <p className={styles.trustLabel}>
            <span className={styles.trustDot} aria-hidden="true" />
            Trust Signals
          </p>
          <p className={styles.trustItems}>Evidence · Confidence · Uncertainty</p>
          <p className={styles.trustCaption}>→ accompanies Explain · Surface Evidence</p>
        </div>

        <TransitionMarker />

        <div className={styles.boundary}>
          <span className={styles.boundaryLine} aria-hidden="true" />
          <span className={styles.boundaryLabel}>
            <span className={styles.boundaryDot} aria-hidden="true" />
            AI Assists — Human Decides
          </span>
        </div>

        <p className={styles.tierLabel}>02 — Human Judgment</p>
        {judgmentOrder.map((id, i) => (
          <div key={id}>
            {i > 0 ? <MobileConn /> : null}
            <JudgmentNode id={id} />
          </div>
        ))}
        <div className={styles.mobileOutcomes}>
          <span className={styles.outcome}>Take Action</span>
          <span className={styles.outcome}>No Action</span>
        </div>

        <div className={styles.oversight}>
          <p className={styles.oversightLabel}>User Oversight</p>
          <p className={styles.oversightItems}>Inspect · Question · Adjust · Exit</p>
        </div>
      </div>
    </div>
  );
}

function AiNode({ id, className }: { id: AiNodeId; className?: string }) {
  const data = aiNodes[id];
  return (
    <div className={`${styles.aiNode} ${className ?? ""}`}>
      <span className={styles.aiTag}>AI Assisted</span>
      <span className={styles.aiNodeLabel}>{data.label}</span>
    </div>
  );
}

function JudgmentNode({ id, className }: { id: JudgmentNodeId; className?: string }) {
  const data = judgmentNodes[id];
  return (
    <div className={`${styles.judgmentNode} ${className ?? ""}`}>
      <span className={styles.judgmentNodeLabel}>{data.label}</span>
    </div>
  );
}

/** The one "selected transition marker" lime accent (section 10) — a small
 * lime-stroked connector leading into the Human Control Boundary, fading in
 * with the rest of the tier rather than drawing in like the primary flow. */
function TransitionMarker() {
  return (
    <div className={styles.transitionMarker} aria-hidden="true">
      <svg width="12" height="22" viewBox="0 0 12 22">
        <path d="M6,1 V16" stroke="var(--lime)" strokeWidth="1" fill="none" />
        <polygon points="2,16 6,21 10,16" fill="var(--lime)" />
      </svg>
    </div>
  );
}
