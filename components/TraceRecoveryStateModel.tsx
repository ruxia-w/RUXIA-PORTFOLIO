"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TraceRecoveryStateModel.module.css";

type Tone = "entry" | "anchor" | "muted" | "checkpoint" | "terminal" | "neutral";

/**
 * TRACE's Recovery State Model — replaces the Recovery Flow section's
 * previous plain linear stateFlow (Normal State → Change/Breakdown → Action
 * Required → Shared Context → Recovery → Continue or Close) with a state
 * model that makes the branch explicit: Shared Context leads to a choice
 * between Self-Service and Assisted Recovery, both of which converge on one
 * Permission Recheck checkpoint before splitting again into Resume or
 * Close. Recovery restores continuity, never access, without a recheck.
 *
 * A single vertical spine (not two separate desktop/mobile trees, since
 * this diagram is vertical by nature already) — the two paired moments
 * (Self-Service/Assisted Recovery, Resume/Close) sit side by side on
 * desktop and stack on mobile. Shares the same self-contained token values,
 * card language, and connector style as the other TRACE diagrams
 * (Shared Permission Architecture, Permission State Model, Service
 * Blueprint).
 */
export function TraceRecoveryStateModel() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      <div className={styles.spine}>
        <StateCard label="Normal State" tone="entry" />
        <VConn />
        <StateCard label="Change / Failure" tone="neutral" />
        <VConn />
        <StateCard label="Action Required" tone="neutral" />
        <VConn />
        <StateCard label="Shared Context" tone="anchor" />
        <VConn />

        <div className={styles.pairRow}>
          <StateCard label="Self-Service Recovery" tone="muted" />
          <StateCard label="Assisted Recovery" tone="muted" />
        </div>

        <VConn />
        <StateCard label="Permission Recheck" tone="checkpoint" />
        <VConn />

        <div className={styles.pairRow}>
          <StateCard label="Resume" tone="neutral" />
          <StateCard label="Close" tone="terminal" />
        </div>
      </div>
    </div>
  );
}

function StateCard({ label, tone }: { label: string; tone: Tone }) {
  const toneClass =
    tone === "anchor"
      ? styles.toneAnchor
      : tone === "checkpoint"
        ? styles.toneCheckpoint
        : tone === "terminal"
          ? styles.toneTerminal
          : tone === "muted"
            ? styles.toneMuted
            : tone === "entry"
              ? styles.toneEntry
              : "";

  return (
    <div className={`${styles.stateCard} ${toneClass}`}>
      {tone === "anchor" || tone === "checkpoint" ? <span className={styles.accentDot} aria-hidden="true" /> : null}
      <span className={styles.stateLabel}>{label}</span>
    </div>
  );
}

function VConn() {
  return (
    <svg width="10" height="24" viewBox="0 0 10 24" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M5,1 V18" strokeDasharray="17" strokeDashoffset="17" />
      <polygon className={styles.connectorArrow} points="1,18 5,23 9,18" />
    </svg>
  );
}
