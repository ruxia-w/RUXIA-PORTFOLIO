"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TraceSharedPermissionArchitecture.module.css";

type PeripheralId = "personalApp" | "physicalCredential" | "organizationDashboard" | "humanSupport";

const peripheralNodes: Record<PeripheralId, { title: string; items: string[] }> = {
  personalApp: { title: "Personal App", items: ["Visibility", "Permission control", "Session context"] },
  physicalCredential: {
    title: "Physical Credential",
    items: ["Tactile action", "Ambient feedback", "Local confirmation"],
  },
  organizationDashboard: {
    title: "Organization Dashboard",
    items: ["Requests", "Shared visibility", "Operational status"],
  },
  humanSupport: { title: "Human Support", items: ["Assistance", "Exception handling", "Recovery"] },
};

const stateFields = ["Identity", "Permission", "Session", "Status", "Handoff", "Recovery"];

/**
 * TRACE's Shared Permission Architecture — the system-thinking diagram for
 * the Ecosystem Architecture section. Deliberately a hub-and-spoke map, not
 * a linear chain: Personal App, Physical Credential, Organization
 * Dashboard, and Human Support each connect directly and only to the
 * central Shared Permission State — never to each other — because every
 * touchpoint references the same underlying state rather than passing
 * control along a chain.
 *
 * The central card is only modestly larger than the four peripheral cards
 * (~1.2x) and carries the one "Recognition ≠ Authorization" line in TRACE
 * blue — the only accent color in the diagram. Connectors are plain thin
 * lines (no arrowheads): these are relationships to a shared state, not a
 * sequence of steps.
 */
export function TraceSharedPermissionArchitecture() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET: cross composition ============ */}

      <div className={styles.canvas}>
        <p className={styles.sectionLabel}>Individual Experience</p>

        <div className={styles.grid}>
          <PeripheralCard id="personalApp" area="top" />

          <div className={styles.vConnector} style={{ gridArea: "vgap1" }}>
            <VConn />
          </div>

          <PeripheralCard id="physicalCredential" area="left" />

          <div className={styles.hConnector} style={{ gridArea: "hgap1" }}>
            <HConn />
          </div>

          <CentralCard />

          <div className={styles.hConnector} style={{ gridArea: "hgap2" }}>
            <HConn />
          </div>

          <PeripheralCard id="organizationDashboard" area="right" />

          <div className={styles.vConnector} style={{ gridArea: "vgap2" }}>
            <VConn />
          </div>

          <PeripheralCard id="humanSupport" area="bottom" />
        </div>

        <p className={styles.sectionLabel}>Organization / Service Experience</p>
      </div>

      {/* ============ MOBILE: vertical architecture ============ */}

      <div className={styles.mobileFlow}>
        <p className={styles.sectionLabel}>Individual Experience</p>

        <PeripheralCard id="personalApp" mobile />
        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>

        <div className={styles.mobileMiddleRow}>
          <PeripheralCard id="physicalCredential" mobile />
          <CentralCard mobile />
          <PeripheralCard id="organizationDashboard" mobile />
        </div>

        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>
        <PeripheralCard id="humanSupport" mobile />

        <p className={styles.sectionLabel}>Organization / Service Experience</p>
      </div>
    </div>
  );
}

function PeripheralCard({ id, area, mobile }: { id: PeripheralId; area?: string; mobile?: boolean }) {
  const data = peripheralNodes[id];
  return (
    <div
      className={`${styles.peripheralCard} ${mobile ? styles.mobileCard : ""}`}
      style={area ? { gridArea: area } : undefined}
    >
      <p className={styles.peripheralTitle}>{data.title}</p>
      <ul className={styles.peripheralList}>
        {data.items.map((item) => (
          <li key={item} className={styles.peripheralItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CentralCard({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${styles.centralCard} ${mobile ? styles.mobileCard : ""}`}
      style={!mobile ? { gridArea: "center" } : undefined}
    >
      <p className={styles.centralTitle}>Shared Permission State</p>
      <div className={styles.stateFieldGrid}>
        {stateFields.map((field) => (
          <span key={field} className={styles.stateField}>
            {field}
          </span>
        ))}
      </div>
      <div className={styles.centralRule}>
        <span className={styles.centralRuleText}>Recognition ≠ Authorization</span>
      </div>
    </div>
  );
}

function VConn() {
  return (
    <svg width="2" height="28" viewBox="0 0 2 28" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="1" y2="27" strokeDasharray="26" strokeDashoffset="26" />
    </svg>
  );
}

function HConn() {
  return (
    <svg width="28" height="2" viewBox="0 0 28 2" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="27" y2="1" strokeDasharray="26" strokeDashoffset="26" />
    </svg>
  );
}

function MobileConn() {
  return (
    <svg width="2" height="20" viewBox="0 0 2 20" aria-hidden="true" className={styles.connectorSvg}>
      <line className={styles.connectorLine} x1="1" y1="1" x2="1" y2="19" strokeDasharray="18" strokeDashoffset="18" />
    </svg>
  );
}
