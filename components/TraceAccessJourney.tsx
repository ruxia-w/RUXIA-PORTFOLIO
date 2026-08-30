"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TraceAccessJourney.module.css";

type Stage = {
  number: string;
  title: string;
  user: string;
  system: string;
  annotation?: string;
};

const stages: Stage[] = [
  { number: "01", title: "Prepare", user: "Understand context", system: "Context established" },
  { number: "02", title: "Approach", user: "Enter environment", system: "Presence detected" },
  { number: "03", title: "Identify", user: "Recognition begins", system: "Recognition created" },
  {
    number: "04",
    title: "Access",
    user: "Review + control",
    system: "Permission active",
    annotation: "Recognition ≠ Authorization",
  },
  { number: "05", title: "Confirm", user: "Verify outcome", system: "Session recorded" },
  { number: "06", title: "Recover", user: "Resolve exception", system: "Recovery context" },
];

/**
 * TRACE's End-to-End Access Journey — the Research & Strategy section's
 * lightweight lifecycle diagram, replacing the previous plain stateFlow
 * (Prepare → Approach → Identify → Access → Confirm → Recover) with a
 * two-layer journey strip: one light USER row and one lighter SYSTEM row
 * beneath it, each system item aligned directly under its user stage.
 *
 * Deliberately NOT another Service Blueprint — no staff/dashboard/physical
 * lanes, just USER + SYSTEM. Deliberately NOT boxed cards — thin vertical
 * dividers between stages, one quiet horizontal timeline rule, and the
 * single Recognition ≠ Authorization annotation (the one TRACE-blue
 * moment) sitting on the Identify → Access transition. Shares typography,
 * connector weight, and TRACE blue with the other TRACE diagrams, but
 * reads as one of the lightest of the set.
 */
export function TraceAccessJourney() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET: horizontal strip ============ */}

      <div className={styles.canvas}>
        <div className={styles.timeline} aria-hidden="true" />

        <div className={styles.userRow}>
          {stages.map((stage) => (
            <div className={styles.stageCluster} key={stage.number}>
              {stage.annotation ? <p className={styles.annotation}>{stage.annotation}</p> : null}
              <p className={styles.stageMeta}>
                <span className={styles.stageNumber}>{stage.number}</span>
                <span className={styles.stageTitle}>{stage.title}</span>
              </p>
              <p className={styles.userText}>{stage.user}</p>
            </div>
          ))}
        </div>

        <div className={styles.systemDivider}>
          <span className={styles.systemLabel}>System</span>
        </div>

        <div className={styles.systemRow}>
          {stages.map((stage) => (
            <p className={styles.systemText} key={stage.number}>
              {stage.system}
            </p>
          ))}
        </div>
      </div>

      {/* ============ MOBILE: vertical journey ============ */}

      <div className={styles.mobileFlow}>
        {stages.map((stage, i) => (
          <div className={styles.mobileStage} key={stage.number}>
            {stage.annotation ? <p className={styles.annotation}>{stage.annotation}</p> : null}
            <p className={styles.stageMeta}>
              <span className={styles.stageNumber}>{stage.number}</span>
              <span className={styles.stageTitle}>{stage.title}</span>
            </p>
            <p className={styles.mobileLine}>
              <span className={styles.mobileLineLabel}>User</span>
              {stage.user}
            </p>
            <p className={styles.mobileLine}>
              <span className={styles.mobileLineLabel}>System</span>
              {stage.system}
            </p>
            {i < stages.length - 1 ? <div className={styles.mobileConnector} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
