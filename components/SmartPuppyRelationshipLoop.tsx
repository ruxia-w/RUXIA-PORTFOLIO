"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./SmartPuppyRelationshipLoop.module.css";

type StageId = "discover" | "approach" | "connect" | "engage" | "personalize" | "return";

type Stage = {
  id: StageId;
  number: string;
  title: string;
  sub: string;
  accent?: boolean;
};

const stages: Stage[] = [
  { id: "discover", number: "01", title: "Discover", sub: "Notice · Understand" },
  { id: "approach", number: "02", title: "Approach", sub: "Curiosity · Confidence" },
  { id: "connect", number: "03", title: "Connect", sub: "First response", accent: true },
  { id: "engage", number: "04", title: "Engage", sub: "Play · Explore", accent: true },
  { id: "personalize", number: "05", title: "Personalize", sub: "Routine · Preference", accent: true },
  { id: "return", number: "06", title: "Return", sub: "Recognition · Continuity" },
];

const progression = ["Awareness", "Trust", "Familiarity", "Attachment"];

/**
 * Smart Puppy's Relationship Journey Loop — replaces the previous simple
 * linear "Discover → Approach → Connect → Engage → Personalize → Return"
 * relationship block with a journey that visibly continues rather than
 * terminates: a quiet return path runs from Return back to the
 * Connect/Engage portion of the row (deliberately NOT all the way back to
 * Discover — a returning user doesn't rediscover the product from zero),
 * labeled "growing familiarity". A second, quieter line beneath
 * (Awareness → Trust → Familiarity → Attachment) frames the same six
 * stages as an emotional progression, not just a navigation sequence.
 *
 * Connect, Engage, and Personalize — where the relationship actually
 * develops — carry the one restrained Smart Puppy accent dot; Discover,
 * Approach, and Return stay plain. The row sizes to its own content and
 * centers with whitespace on both sides, matching the Connected Experience
 * Architecture diagram's philosophy rather than the edge-to-edge Behavior
 * Communication Loop.
 */
export function SmartPuppyRelationshipLoop() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ Desktop (>1024px): single row + loop + progression ============ */}

      <div className={styles.desktopFlow}>
        <div className={styles.archGroup}>
          <div className={styles.stageRow}>
            {stages.flatMap((stage, i) => [
              <StageCard key={stage.id} stage={stage} />,
              i < stages.length - 1 ? (
                <div className={styles.connector} key={`c-${stage.id}`}>
                  <HConn />
                </div>
              ) : null,
            ])}
          </div>

          <ReturnLoop />
          <ProgressionLine />
        </div>
      </div>

      {/* ============ Tablet (721–1024px): 3 + 3 rows ============ */}

      <div className={styles.tabletFlow}>
        <div className={styles.archGroup}>
          <div className={styles.stageRow}>
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
          <div className={styles.stageRow}>
            {stages.slice(3, 6).flatMap((stage, i) => [
              <StageCard key={stage.id} stage={stage} />,
              i < 2 ? (
                <div className={styles.connector} key={`c-${stage.id}`}>
                  <HConn />
                </div>
              ) : null,
            ])}
          </div>

          <ReturnLoop />
          <ProgressionLine />
        </div>
      </div>

      {/* ============ Mobile (≤720px): vertical stack ============ */}

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
        <div className={styles.mobileReturn}>
          <MobileConn />
          <span className={styles.loopLabel}>growing familiarity</span>
        </div>
        <div className={styles.mobileProgression}>
          {progression.map((label, i) => (
            <span key={label} className={styles.progressionLabel}>
              {label}
              {i < progression.length - 1 ? <span className={styles.progressionSep}>→</span> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StageCard({ stage, mobile }: { stage: Stage; mobile?: boolean }) {
  return (
    <div className={`${styles.stageCard} ${mobile ? styles.mobileCard : ""}`}>
      <p className={styles.stageNumber}>{stage.number}</p>
      <p className={styles.stageTitle}>
        {stage.accent ? <span className={styles.accentDot} aria-hidden="true" /> : null}
        {stage.title}
      </p>
      <p className={styles.stageSub}>{stage.sub}</p>
    </div>
  );
}

function ReturnLoop() {
  return (
    <div className={styles.returnWrap}>
      <svg className={styles.returnSvg} viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true">
        <path
          className={styles.returnLine}
          d="M 980,0 V 30 H 380 V 10"
          strokeDasharray="700"
          strokeDashoffset="700"
        />
        <polygon className={styles.returnArrow} points="374,12 380,0 386,12" />
      </svg>
      <span className={styles.loopLabel}>growing familiarity</span>
    </div>
  );
}

function ProgressionLine() {
  return (
    <div className={styles.progressionWrap}>
      {progression.map((label, i) => (
        <span className={styles.progressionItem} key={label}>
          <span className={styles.progressionLabel}>{label}</span>
          {i < progression.length - 1 ? <span className={styles.progressionRule} aria-hidden="true" /> : null}
        </span>
      ))}
    </div>
  );
}

function HConn() {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M1,6 H18" strokeDasharray="17" strokeDashoffset="17" />
      <polygon className={styles.connectorArrow} points="18,2 22,6 18,10" />
    </svg>
  );
}

function VConn() {
  return (
    <svg width="10" height="20" viewBox="0 0 10 20" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M5,1 V14" strokeDasharray="13" strokeDashoffset="13" />
      <polygon className={styles.connectorArrow} points="1,14 5,19 9,14" />
    </svg>
  );
}

function MobileConn() {
  return (
    <svg width="10" height="20" viewBox="0 0 10 20" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M5,1 V14" strokeDasharray="13" strokeDashoffset="13" />
      <polygon className={styles.connectorArrow} points="1,14 5,19 9,14" />
    </svg>
  );
}
