"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricDecisionFrictionModel.module.css";

const informationItems = ["Market Movement", "Portfolio Performance", "News", "Asset Exposure", "Risk Context"];

const interpretationQuestions = ["What changed?", "Why does it matter?", "What should I examine next?"];

const decisionStates = ["Ignore", "Explore", "Adjust", "Wait"];

/**
 * The Problem section's core argument, made visual: information is already
 * available (quiet, boxless list) — the friction is in interpreting it (the
 * one bordered, lime-accented zone, and the only visual focus in the whole
 * diagram) — which is what actually produces the four decision states
 * (equally weighted outcome pills, none highlighted as "correct").
 *
 * Connectors run region-to-region only (Information → Interpretation →
 * Decision), never from every individual input to every question — that
 * would misrepresent the point being made (more inputs don't map 1:1 to
 * more clarity) as much as it would clutter the diagram.
 *
 * Shares reveal hook, connector primitives, and --lime tokens with the rest
 * of the AURIC diagram family; deliberately does not use three equal cards,
 * per this diagram's own brief.
 */
export function AuricDecisionFrictionModel() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          {/* Row 1 — the three section labels, all sharing one top baseline. */}
          <p className={`${styles.tierLabel} ${styles.region}`} style={{ gridArea: "h1" }}>
            01 — Information
          </p>
          <p className={`${styles.tierLabel} ${styles.region}`} style={{ gridArea: "h2" }}>
            02 — Interpretation Gap
          </p>
          <p className={`${styles.tierLabel} ${styles.region}`} style={{ gridArea: "h3" }}>
            03 — Decision State
          </p>

          {/* Row 2 — the three content blocks and both connectors, all
              vertically centered against the tallest block (the
              Interpretation Gap panel) via the grid's own align-items,
              never a hard-coded offset. */}
          <div className={styles.region} style={{ gridArea: "info" }}>
            <div className={styles.infoList}>
              {informationItems.map((item) => (
                <p className={styles.infoItem} key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.connector} style={{ gridArea: "c1" }}>
            <HConn direction="right" />
          </div>

          <div className={styles.region} style={{ gridArea: "panel" }}>
            <div className={styles.gapZone}>
              <p className={styles.gapLabel}>
                <span className={styles.gapDot} aria-hidden="true" />
                Decision Friction
              </p>
              {interpretationQuestions.map((question) => (
                <p className={styles.gapQuestion} key={question}>
                  {question}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.connector} style={{ gridArea: "c2" }}>
            <HConn direction="right" />
          </div>

          <div className={styles.region} style={{ gridArea: "decision" }}>
            <div className={styles.decisionGrid}>
              {decisionStates.map((state) => (
                <span className={styles.decisionPill} key={state}>
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.footnote}>More information ≠ more decision clarity.</p>
      </div>

      {/* ============ MOBILE: VERTICAL STACK ============ */}

      <div className={styles.mobileFlow}>
        <div className={styles.region}>
          <p className={styles.tierLabel}>01 — Information</p>
          <div className={styles.infoList}>
            {informationItems.map((item) => (
              <p className={styles.infoItem} key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.mobileSectionConnector}>
          <MobileConn />
        </div>

        <div className={styles.region}>
          <p className={styles.tierLabel}>02 — Interpretation Gap</p>
          <div className={styles.gapZone}>
            <p className={styles.gapLabel}>
              <span className={styles.gapDot} aria-hidden="true" />
              Decision Friction
            </p>
            {interpretationQuestions.map((question) => (
              <p className={styles.gapQuestion} key={question}>
                {question}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.mobileSectionConnector}>
          <MobileConn />
        </div>

        <div className={styles.region}>
          <p className={styles.tierLabel}>03 — Decision State</p>
          <div className={styles.mobileDecisionGrid}>
            {decisionStates.map((state) => (
              <span className={styles.decisionPill} key={state}>
                {state}
              </span>
            ))}
          </div>
        </div>

        <p className={styles.footnote}>More information ≠ more decision clarity.</p>
      </div>
    </div>
  );
}
