"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./SmartPuppyConnectedArchitecture.module.css";

type ModuleId = "human" | "smartPuppy" | "connectedApp";

type Module = {
  id: ModuleId;
  title: string;
  sub: string;
  accent?: boolean;
};

const modules: Module[] = [
  { id: "human", title: "Human", sub: "Presence · Touch · Voice · Routine" },
  { id: "smartPuppy", title: "Smart Puppy", sub: "Form · Behavior · Expression · Movement", accent: true },
  { id: "connectedApp", title: "Connected App", sub: "Status · Control · Care · Personalization" },
];

const sharedStates = "Available · Engaged · Playing · Resting · Needs Attention";

/**
 * Smart Puppy's Connected Experience Architecture — replaces the simple
 * "Human Presence → Smart Puppy → Connected App" relationship block with a
 * three-module system: Human and Connected App relate to Smart Puppy
 * through restrained bidirectional connectors (never a direct Human ↔ App
 * link, and never an equal-weight three-card row) — the robot stays the
 * visual and structural center, marked with the one Smart Puppy accent dot,
 * while the app is a supporting extension, not a dominant controller.
 *
 * A single Shared Companion State band sits beneath the module group —
 * deliberately not a fourth equal card, just a low, quiet layer that
 * happens to span the same width as the modules above it, implying (never
 * explaining) that the physical robot and the app both surface the same
 * underlying state.
 *
 * The whole group sizes to its own content and centers within the media
 * frame — generous outer whitespace is intentional here, unlike the fully
 * edge-to-edge Behavior Communication Loop diagram elsewhere in this case
 * study.
 */
export function SmartPuppyConnectedArchitecture() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ Desktop / tablet: horizontal row ============ */}

      <div className={styles.horizontalFlow}>
        <div className={styles.archGroup}>
          <div className={styles.moduleRow}>
            <ModuleCard module={modules[0]} />
            <div className={styles.connector}>
              <TwoWayConn />
            </div>
            <ModuleCard module={modules[1]} />
            <div className={styles.connector}>
              <TwoWayConn />
            </div>
            <ModuleCard module={modules[2]} />
          </div>

          <div className={styles.bandConnector}>
            <VConn />
          </div>

          <div className={styles.sharedBand}>
            <span className={styles.sharedLabel}>Shared Companion State</span>
            <span className={styles.sharedDivider} aria-hidden="true" />
            <span className={styles.sharedStates}>{sharedStates}</span>
          </div>
        </div>
      </div>

      {/* ============ Mobile: vertical stack ============ */}

      <div className={styles.mobileFlow}>
        {modules.map((module) => (
          <div key={module.id}>
            <ModuleCard module={module} mobile />
            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>
          </div>
        ))}
        <div className={styles.sharedBand}>
          <span className={styles.sharedLabel}>Shared Companion State</span>
          <span className={styles.sharedStates}>{sharedStates}</span>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ module, mobile }: { module: Module; mobile?: boolean }) {
  return (
    <div className={`${styles.moduleCard} ${mobile ? styles.mobileCard : ""}`}>
      <p className={styles.moduleTitle}>
        {module.accent ? <span className={styles.accentDot} aria-hidden="true" /> : null}
        {module.title}
      </p>
      <p className={styles.moduleSub}>{module.sub}</p>
    </div>
  );
}

function TwoWayConn() {
  return (
    <svg width="30" height="12" viewBox="0 0 30 12" aria-hidden="true" className={styles.connectorSvg}>
      <path className={styles.connectorLine} d="M9,6 H21" strokeDasharray="12" strokeDashoffset="12" />
      <polygon className={styles.connectorArrow} points="9,2 3,6 9,10" />
      <polygon className={styles.connectorArrow} points="21,2 27,6 21,10" />
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
