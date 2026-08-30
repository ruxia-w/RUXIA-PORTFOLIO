"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TraceSystemAtAGlance.module.css";

type TouchpointId = "personalApp" | "physicalCredential" | "organizationDashboard" | "humanSupport";

const touchpoints: Record<TouchpointId, { title: string; description: string }> = {
  personalApp: { title: "Personal App", description: "Visibility and permission control." },
  physicalCredential: { title: "Physical Credential", description: "Personal, tactile access interface." },
  organizationDashboard: {
    title: "Organization Dashboard",
    description: "Operational context and request visibility.",
  },
  humanSupport: { title: "Human Support", description: "Assistance and exception recovery." },
};

/**
 * TRACE's "System at a Glance" — the Overview section's lightweight
 * introduction to the ecosystem, replacing the previous plain
 * "Physical Object ↔ Personal App ↔ Organization Dashboard ↔ Service
 * Touchpoints" text row. Deliberately the simplest and lightest of the five
 * TRACE diagrams: four compact touchpoints around one Shared Permission
 * hub, no state logic, no Recognition ≠ Authorization explanation, no
 * request/recovery detail — those all belong to the later diagrams. A
 * recruiter should understand the shape of the system in a few seconds.
 *
 * Shares the same card language, connector style, and TRACE blue accent as
 * the other four TRACE diagrams, but at a smaller scale and a narrower
 * canvas — this one should read as noticeably lighter than all of them.
 */
export function TraceSystemAtAGlance() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET: hub and spoke ============ */}

      <div className={styles.canvas}>
        <p className={styles.contextLabel}>Individual Experience</p>

        <div className={styles.grid}>
          <TouchpointCard id="personalApp" area="top" />

          <div className={styles.vConn} style={{ gridArea: "vgap1" }}>
            <VConn />
          </div>

          <TouchpointCard id="physicalCredential" area="left" />

          <div className={styles.hConn} style={{ gridArea: "hgap1" }}>
            <HConn />
          </div>

          <div className={styles.centralCard} style={{ gridArea: "center" }}>
            <p className={styles.centralTitle}>Shared Permission</p>
            <p className={styles.centralSupport}>Identity · Access · Session · Control</p>
          </div>

          <div className={styles.hConn} style={{ gridArea: "hgap2" }}>
            <HConn />
          </div>

          <TouchpointCard id="organizationDashboard" area="right" />

          <div className={styles.vConn} style={{ gridArea: "vgap2" }}>
            <VConn />
          </div>

          <TouchpointCard id="humanSupport" area="bottom" />
        </div>

        <p className={styles.contextLabel}>Service / Organization</p>
      </div>

      {/* ============ MOBILE: stacked composition ============ */}

      <div className={styles.mobileFlow}>
        <p className={styles.contextLabel}>Individual Experience</p>

        <TouchpointCard id="personalApp" mobile />

        <div className={styles.mobileConn}>
          <MobileConn />
        </div>

        <div className={styles.mobileMiddleRow}>
          <TouchpointCard id="physicalCredential" mobile compact />
          <div className={`${styles.centralCard} ${styles.mobileCard}`}>
            <p className={styles.centralTitle}>Shared Permission</p>
            <p className={styles.centralSupport}>Identity · Access · Session · Control</p>
          </div>
          <TouchpointCard id="organizationDashboard" mobile compact />
        </div>

        <div className={styles.mobileConn}>
          <MobileConn />
        </div>

        <TouchpointCard id="humanSupport" mobile />

        <p className={styles.contextLabel}>Service / Organization</p>
      </div>
    </div>
  );
}

function TouchpointCard({
  id,
  area,
  mobile,
  compact,
}: {
  id: TouchpointId;
  area?: string;
  mobile?: boolean;
  compact?: boolean;
}) {
  const data = touchpoints[id];
  return (
    <div
      className={`${styles.touchpointCard} ${mobile ? styles.mobileCard : ""} ${compact ? styles.compactCard : ""}`}
      style={area ? { gridArea: area } : undefined}
    >
      <p className={styles.touchpointTitle}>{data.title}</p>
      <p className={styles.touchpointDescription}>{data.description}</p>
    </div>
  );
}

function VConn() {
  return (
    <svg width="2" height="22" viewBox="0 0 2 22" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="1" y2="21" strokeDasharray="20" strokeDashoffset="20" />
    </svg>
  );
}

function HConn() {
  return (
    <svg width="22" height="2" viewBox="0 0 22 2" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="21" y2="1" strokeDasharray="20" strokeDashoffset="20" />
    </svg>
  );
}

function MobileConn() {
  return (
    <svg width="2" height="18" viewBox="0 0 2 18" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="1" y2="17" strokeDasharray="16" strokeDashoffset="16" />
    </svg>
  );
}
