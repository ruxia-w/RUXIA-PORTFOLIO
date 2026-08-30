"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./SmartPuppyDigitalExperienceMap.module.css";

type PrimaryId = "care" | "control" | "live";

const primaryAreas: Record<PrimaryId, { title: string; sub: string }> = {
  care: { title: "Care", sub: "Wellbeing · Energy · Maintenance" },
  control: { title: "Control", sub: "Movement · Behavior · Commands" },
  live: { title: "Live", sub: "Presence · Remote awareness · Interaction" },
};

const primaryOrder: PrimaryId[] = ["care", "control", "live"];

const ownershipModules = "Activity · Assets · Household";

/**
 * Smart Puppy's Core Digital Experience Map — replaces the dense
 * screen-by-screen app flowchart image with a strategic structure diagram:
 * Home (current companion state) branches into the three primary
 * experience areas (Care, Control, Live), which connect down to one quiet
 * "Long-term ownership" layer (Activity, Assets, Household) — never every
 * screen-to-screen transition, since the detailed app screens later in
 * this section already show that.
 *
 * Deliberately structural rather than arrow-heavy: one small tree
 * connector from Home into the three equal-width primary cards, and one
 * single line down into the ownership band — not "arrow → arrow → arrow,"
 * which is what the diagram it replaces looked like.
 */
export function SmartPuppyDigitalExperienceMap() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ Desktop / tablet: hierarchical tree ============ */}

      <div className={styles.horizontalFlow}>
        <div className={styles.archGroup}>
          <p className={styles.microLabel}>Entry</p>
          <div className={styles.homeCard}>
            <p className={styles.homeTitle}>Home</p>
            <p className={styles.homeSub}>Current Companion State</p>
          </div>

          <BranchConn />

          <p className={styles.microLabel}>Primary experiences</p>
          <div className={styles.primaryRow}>
            {primaryOrder.map((id) => (
              <div className={styles.primaryCard} key={id}>
                <p className={styles.primaryTitle}>{primaryAreas[id].title}</p>
                <p className={styles.primarySub}>{primaryAreas[id].sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.bandConnector}>
            <VConn />
          </div>

          <div className={styles.ownershipBand}>
            <span className={styles.ownershipLabel}>Long-term ownership</span>
            <span className={styles.ownershipDivider} aria-hidden="true" />
            <span className={styles.ownershipModules}>{ownershipModules}</span>
          </div>
        </div>
      </div>

      {/* ============ Mobile: vertical stack ============ */}

      <div className={styles.mobileFlow}>
        <div className={styles.homeCard}>
          <p className={styles.homeTitle}>Home</p>
          <p className={styles.homeSub}>Current Companion State</p>
        </div>

        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>

        {primaryOrder.map((id, i) => (
          <div key={id}>
            {i > 0 ? <div className={styles.mobileConnectorTight} /> : null}
            <div className={styles.primaryCard}>
              <p className={styles.primaryTitle}>{primaryAreas[id].title}</p>
              <p className={styles.primarySub}>{primaryAreas[id].sub}</p>
            </div>
          </div>
        ))}

        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>

        <div className={`${styles.ownershipBand} ${styles.mobileBand}`}>
          <span className={styles.ownershipLabel}>Long-term ownership</span>
          <span className={styles.ownershipModules}>{ownershipModules}</span>
        </div>
      </div>
    </div>
  );
}

function BranchConn() {
  return (
    <svg className={styles.branchSvg} viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
      <path
        className={styles.branchLine}
        d="M 500,0 V 15 H 167 V 32 M 500,15 V 32 M 500,15 H 833 V 32"
        strokeDasharray="500"
        strokeDashoffset="500"
      />
      <polygon className={styles.branchArrow} points="162,26 167,36 172,26" />
      <polygon className={styles.branchArrow} points="495,26 500,36 505,26" />
      <polygon className={styles.branchArrow} points="828,26 833,36 838,26" />
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
