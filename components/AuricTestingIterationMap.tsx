"use client";

import Image from "next/image";
import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricTestingIterationMap.module.css";

const BASE = "/work/auric-signal";

type Iteration = {
  number: string;
  title: string;
  observed: string;
  changed: string;
  effect: string;
  crop: {
    src: string;
    alt: string;
    objectPosition: string;
  };
};

const iterations: Iteration[] = [
  {
    number: "01",
    title: "Signal Hierarchy",
    observed: "Participants were unsure which portfolio change deserved attention first.",
    changed: "The priority hierarchy was strengthened and competing information was reduced.",
    effect: "Priority Signal becomes the clear entry point.",
    crop: {
      src: `${BASE}/auric-ai-explanation-fullpage.png`,
      alt: "Top of the AI explanation screen, showing the priority and confidence indicators for a portfolio signal.",
      objectPosition: "50% 0%",
    },
  },
  {
    number: "02",
    title: "Explanation + Evidence",
    observed: "Participants looked for supporting evidence before trusting the explanation.",
    changed: "Evidence and confidence were moved closer to the AI explanation.",
    effect: "Explanation, evidence, confidence, and uncertainty now read as one connected system.",
    crop: {
      src: `${BASE}/auric-ai-explanation-fullpage.png`,
      alt: "Evidence section of the AI explanation screen, positioned directly alongside the explanation and drivers.",
      objectPosition: "50% 58%",
    },
  },
  {
    number: "03",
    title: "Scenario Framing",
    observed: "Some scenario outputs could be interpreted as predictions or recommendations.",
    changed: "Scenarios were reframed as estimates for comparison rather than expected outcomes.",
    effect: "Users can compare possibilities without treating AI output as a directive.",
    crop: {
      src: `${BASE}/auric-scenario-simulation-fullpage.png`,
      alt: "Top of the scenario simulation screen, labeled 'Estimate only' rather than a prediction.",
      objectPosition: "50% 0%",
    },
  },
];

/**
 * AURIC SIGNAL's Testing → Iteration Map — sits inside the existing Testing
 * section, after the testing setup/tasks copy, replacing the "Observed →
 * Changed" cardSet with the same three iterations plus a Product Effect
 * layer and real product crops (all reused from existing screenshots already
 * referenced elsewhere in this case study — no fabricated UI, no invented
 * before/after states, no metrics beyond what the case study already
 * states).
 *
 * Each iteration reads left-to-right as one reasoning path — Observed (plain,
 * quiet) → Changed (a left rule, slightly stronger) → Product Effect (the
 * strongest text plus a small outlined crop) — with visual weight
 * increasing across the row, never dwelling on the observed problem.
 */
export function AuricTestingIterationMap() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        {iterations.map((it) => (
          <div className={styles.iteration} key={it.number}>
            <p className={styles.iterationHeading}>
              <span className={styles.iterationNumber}>{it.number}</span>
              <span className={styles.iterationDash}>—</span>
              <span className={styles.iterationTitle}>{it.title}</span>
            </p>

            <div className={styles.row}>
              <div className={styles.cell}>
                <p className={styles.microLabel}>Observed</p>
                <p className={styles.observedText}>{it.observed}</p>
              </div>

              <div className={styles.connector}>
                <HConn direction="right" />
              </div>

              <div className={styles.cell}>
                <p className={styles.microLabel}>Changed</p>
                <p className={styles.changedText}>{it.changed}</p>
              </div>

              <div className={styles.connector}>
                <HConn direction="right" />
              </div>

              <div className={styles.cell}>
                <p className={styles.microLabel}>Product Effect</p>
                <p className={styles.effectText}>{it.effect}</p>
                <ProductCrop crop={it.crop} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============ MOBILE: STACKED ITERATIONS ============ */}

      <div className={styles.mobileFlow}>
        {iterations.map((it) => (
          <div className={styles.mobileIteration} key={it.number}>
            <p className={styles.iterationHeading}>
              <span className={styles.iterationNumber}>{it.number}</span>
              <span className={styles.iterationDash}>—</span>
              <span className={styles.iterationTitle}>{it.title}</span>
            </p>

            <p className={styles.microLabel}>Observed</p>
            <p className={styles.observedText}>{it.observed}</p>

            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>

            <p className={styles.microLabel}>Changed</p>
            <p className={styles.changedText}>{it.changed}</p>

            <div className={styles.mobileConnector}>
              <MobileConn />
            </div>

            <p className={styles.microLabel}>Product Effect</p>
            <p className={styles.effectText}>{it.effect}</p>
            <ProductCrop crop={it.crop} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCrop({ crop }: { crop: Iteration["crop"] }) {
  return (
    <div className={styles.cropFrame}>
      <Image
        src={crop.src}
        alt={crop.alt}
        fill
        className={styles.cropImage}
        style={{ objectPosition: crop.objectPosition }}
        sizes="180px"
      />
    </div>
  );
}
