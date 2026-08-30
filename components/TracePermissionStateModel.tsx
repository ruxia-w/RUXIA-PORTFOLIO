"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TracePermissionStateModel.module.css";

/**
 * TRACE's Permission State Model — a compact state map (not a user journey,
 * not a linear process) answering "how does permission change over time?",
 * the companion question to the Shared Permission Architecture diagram's
 * "where does permission live?". Shares the same card radius, border
 * weight, typography scale, connector styling, and TRACE blue accent.
 *
 * The main path (Recognized → Pending → Active → Closed) runs down a
 * single center spine. Declined and Revoked are drawn as short side
 * branches off Pending/Active — never routed all the way down to Closed as
 * a literal line (that would force long connectors to cross through the
 * Paused/Active/Revoked row) — instead each carries a small "→ Closed"
 * caption, the same technique used for secondary relationships in the
 * Shared Permission Architecture diagram. Paused is a short bidirectional
 * branch off Active (Pause / Resume). Recognized → Pending is the one
 * transition carrying the system's central rule, annotated in TRACE blue:
 * recognition alone must never create active access.
 */
export function TracePermissionStateModel() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          <StateCard label="Recognized" tone="entry" area="recognized" />

          <div className={styles.vGapAnnotated} style={{ gridArea: "vgap1" }}>
            <VConn />
            <span className={styles.annotation}>Authorization required</span>
          </div>

          <StateCard label="Pending" tone="pending" area="pending" />

          <div className={styles.hGap} style={{ gridArea: "hgapD" }}>
            <HConn />
            <span className={styles.transitionLabel}>Decline</span>
          </div>

          <StateCard label="Declined" tone="muted" size="exception" caption="→ Closed" area="declined" />

          <div className={styles.vGap} style={{ gridArea: "vgap2" }}>
            <VConn />
            <span className={styles.transitionLabel}>Approve</span>
          </div>

          <StateCard label="Paused" tone="muted" area="paused" />

          <div className={styles.hGap} style={{ gridArea: "hgapP" }}>
            <HConn twoWay />
            <span className={`${styles.transitionLabel} ${styles.transitionLabelWrap}`}>Pause · Resume</span>
          </div>

          <StateCard label="Active" tone="active" area="active" />

          <div className={styles.hGap} style={{ gridArea: "hgapR" }}>
            <HConn />
            <span className={styles.transitionLabel}>Revoke</span>
          </div>

          <StateCard label="Revoked" tone="muted" size="exception" caption="→ Closed" area="revoked" />

          <div className={styles.vGap} style={{ gridArea: "vgap3" }}>
            <VConn />
            <span className={styles.transitionLabel}>End session</span>
          </div>

          <StateCard label="Closed" tone="terminal" area="closed" />
        </div>
      </div>

      {/* ============ MOBILE: vertical state model ============ */}

      <div className={styles.mobileFlow}>
        <StateCard label="Recognized" tone="entry" mobile />

        <div className={styles.mobileVGapAnnotated}>
          <MobileConn />
          <span className={styles.annotation}>Authorization required</span>
        </div>

        <StateCard label="Pending" tone="pending" mobile />

        <div className={styles.mobileBranch}>
          <MobileBranchConn />
          <span className={styles.transitionLabel}>Decline</span>
          <StateCard label="Declined" tone="muted" size="exception" caption="→ Closed" mobile compact />
        </div>

        <div className={styles.mobileVGap}>
          <MobileConn />
          <span className={styles.transitionLabel}>Approve</span>
        </div>

        <StateCard label="Active" tone="active" mobile />

        <div className={styles.mobileBranch}>
          <MobileBranchConn />
          <span className={styles.transitionLabel}>Pause · Resume</span>
          <StateCard label="Paused" tone="muted" mobile compact />
        </div>

        <div className={styles.mobileBranch}>
          <MobileBranchConn />
          <span className={styles.transitionLabel}>Revoke</span>
          <StateCard label="Revoked" tone="muted" size="exception" caption="→ Closed" mobile compact />
        </div>

        <div className={styles.mobileVGap}>
          <MobileConn />
          <span className={styles.transitionLabel}>End session</span>
        </div>

        <StateCard label="Closed" tone="terminal" mobile />
      </div>
    </div>
  );
}

type Tone = "entry" | "pending" | "active" | "muted" | "terminal";

function StateCard({
  label,
  tone,
  size = "primary",
  caption,
  area,
  mobile,
  compact,
}: {
  label: string;
  tone: Tone;
  size?: "primary" | "exception";
  caption?: string;
  area?: string;
  mobile?: boolean;
  compact?: boolean;
}) {
  const toneClass =
    tone === "pending"
      ? styles.tonePending
      : tone === "active"
        ? styles.toneActive
        : tone === "terminal"
          ? styles.toneTerminal
          : tone === "muted"
            ? styles.toneMuted
            : styles.toneEntry;
  const sizeClass = size === "exception" ? styles.sizeException : styles.sizePrimary;

  return (
    <div
      className={`${styles.stateCard} ${toneClass} ${sizeClass} ${mobile ? styles.mobileCard : ""} ${compact ? styles.compactCard : ""}`}
      style={area ? { gridArea: area } : undefined}
    >
      {tone === "pending" || tone === "active" ? <span className={styles.accentDot} aria-hidden="true" /> : null}
      <span className={styles.stateLabel}>{label}</span>
      {caption ? <span className={styles.stateCaption}>{caption}</span> : null}
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

function HConn({ twoWay }: { twoWay?: boolean }) {
  return (
    <svg width="26" height="10" viewBox="0 0 26 10" aria-hidden="true" className={styles.connectorSvg}>
      {twoWay ? (
        <>
          <path className={styles.connectorLine} d="M8,5 H18" strokeDasharray="10" strokeDashoffset="10" />
          <polygon className={styles.connectorArrow} points="8,1 3,5 8,9" />
          <polygon className={styles.connectorArrow} points="18,1 23,5 18,9" />
        </>
      ) : (
        <>
          <path className={styles.connectorLine} d="M1,5 H17" strokeDasharray="16" strokeDashoffset="16" />
          <polygon className={styles.connectorArrow} points="17,1 25,5 17,9" />
        </>
      )}
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

function MobileBranchConn() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M2,1 V8 H14" strokeDasharray="19" strokeDashoffset="19" />
      <polygon className={styles.connectorArrow} points="14,4 19,8 14,12" />
    </svg>
  );
}
