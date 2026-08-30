"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./SmartPuppyBehaviorLoop.module.css";

type StageId = "user" | "perception" | "internalState" | "expression" | "interpretation" | "nextInteraction";

type Stage = {
  id: StageId;
  title: string;
  sub: string;
  accent?: boolean;
};

const stages: Stage[] = [
  { id: "user", title: "User", sub: "Action / Presence" },
  { id: "perception", title: "Perception", sub: "Recognition" },
  { id: "internalState", title: "Internal State", sub: "Curious · Playful · Calm · Sleepy · Affectionate", accent: true },
  { id: "expression", title: "Expression", sub: "Face · Posture · Movement · Timing", accent: true },
  { id: "interpretation", title: "Interpretation", sub: "Attention · Readiness · Emotion · Response" },
  { id: "nextInteraction", title: "Next Interaction", sub: "" },
];

/**
 * Smart Puppy's Behavior Communication Loop — replaces the Behavior &
 * Expression section's two separate, overlapping linear flows ("State →
 * Behavior → Expression → User Interpretation" and "User Action →
 * Recognition → Acknowledgement → Response → User Interpretation → Next
 * Interaction") with one closed-loop diagram: the companion perceives the
 * user, resolves an internal state, expresses it through body/face/motion,
 * the user interprets that expression, and the next interaction begins —
 * a continuous relationship, not a one-shot command pipeline.
 *
 * Card widths are intentionally uneven — each sizes to its own content
 * (User/Perception stay compact; Internal State/Expression/Interpretation
 * carry more and read wider) — laid out with justify-content: space-between
 * so the row's natural card widths plus evenly-distributed gaps fill the
 * full media-safe width edge to edge, without stretching any single card.
 *
 * The feedback line beneath the row (Next Interaction back to User) is the
 * one new idea this diagram adds over the two flows it replaces — a
 * restrained closed loop, not a circular infographic.
 */
export function SmartPuppyBehaviorLoop() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP (>1024px): single row + feedback line ============ */}

      <div className={styles.desktopFlow}>
        <div className={styles.loopRow}>
          {stages.flatMap((stage, i) => [
            <StageCard key={stage.id} stage={stage} />,
            i < stages.length - 1 ? (
              <div className={styles.connector} key={`c-${stage.id}`}>
                <HConn />
              </div>
            ) : null,
          ])}
        </div>

        <FeedbackLoop />
      </div>

      {/* ============ TABLET (721–1024px): 3 + 3 rows ============ */}

      <div className={styles.tabletFlow}>
        <div className={styles.tabletRow}>
          {stages.slice(0, 3).flatMap((stage, i) => [
            <StageCard key={stage.id} stage={stage} />,
            i < 2 ? (
              <div className={styles.connector} key={`c-${stage.id}`}>
                <HConn />
              </div>
            ) : null,
          ])}
        </div>

        <div className={styles.tabletVConn}>
          <VConn />
        </div>

        <div className={styles.tabletRow}>
          {stages.slice(3, 6).flatMap((stage, i) => [
            <StageCard key={stage.id} stage={stage} />,
            i < 2 ? (
              <div className={styles.connector} key={`c-${stage.id}`}>
                <HConn />
              </div>
            ) : null,
          ])}
        </div>

        <FeedbackLoop />
      </div>

      {/* ============ MOBILE (≤720px): vertical stack ============ */}

      <div className={styles.mobileFlow}>
        {stages.map((stage, i) => (
          <div key={stage.id}>
            <StageCard stage={stage} mobile />
            {i < stages.length - 1 ? (
              <div className={styles.mobileConnector}>
                <MobileConn />
              </div>
            ) : null}
          </div>
        ))}
        <div className={styles.mobileLoopBack}>
          <MobileLoopConn />
          <span className={styles.loopLabel}>continued relationship</span>
        </div>
      </div>
    </div>
  );
}

function StageCard({ stage, mobile }: { stage: Stage; mobile?: boolean }) {
  return (
    <div className={`${styles.stageCard} ${mobile ? styles.mobileCard : ""}`}>
      <p className={styles.stageTitle}>
        {stage.accent ? <span className={styles.accentDot} aria-hidden="true" /> : null}
        {stage.title}
      </p>
      {stage.sub ? <p className={styles.stageSub}>{stage.sub}</p> : null}
    </div>
  );
}

function FeedbackLoop() {
  return (
    <div className={styles.feedbackWrap}>
      <svg
        className={styles.feedbackSvg}
        viewBox="0 0 1000 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.feedbackLine}
          d="M 985,0 V 40 H 15 V 12"
          strokeDasharray="1200"
          strokeDashoffset="1200"
        />
        <polygon className={styles.feedbackArrow} points="9,14 15,2 21,14" />
      </svg>
      <span className={styles.loopLabel}>continued relationship</span>
    </div>
  );
}

function HConn() {
  return (
    <svg width="26" height="12" viewBox="0 0 26 12" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M1,6 H22" strokeDasharray="21" strokeDashoffset="21" />
      <polygon className={styles.connectorArrow} points="22,2 26,6 22,10" />
    </svg>
  );
}

function VConn() {
  return (
    <svg width="12" height="24" viewBox="0 0 12 24" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M6,1 V18" strokeDasharray="17" strokeDashoffset="17" />
      <polygon className={styles.connectorArrow} points="2,18 6,23 10,18" />
    </svg>
  );
}

function MobileConn() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M6,1 V14" strokeDasharray="13" strokeDashoffset="13" />
      <polygon className={styles.connectorArrow} points="2,14 6,19 10,14" />
    </svg>
  );
}

function MobileLoopConn() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M6,1 V14" strokeDasharray="13" strokeDashoffset="13" />
      <polygon className={styles.connectorArrow} points="2,14 6,19 10,14" />
    </svg>
  );
}
