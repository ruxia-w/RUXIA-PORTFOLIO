"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import { HConn, VConn, SecondaryVConn, MobileConn } from "./AuricDiagramConnectors";
import connectorStyles from "./AuricDiagramConnectors.module.css";
import tokens from "./AuricDiagramTokens.module.css";
import styles from "./AuricInformationArchitecture.module.css";

type CoreRailId = "scenario" | "compare" | "review";

const coreRailNodes: Record<CoreRailId, { label: string }> = {
  scenario: { label: "Scenario" },
  compare: { label: "Compare" },
  review: { label: "Review" },
};

const coreRailOrder: CoreRailId[] = ["scenario", "compare", "review"];

type SupportId =
  | "notifications"
  | "savedSignals"
  | "watchlistActivity"
  | "riskPreferences"
  | "portfolioConnections"
  | "accountSettings";

const supportNodes: Record<SupportId, { label: string; caption?: string }> = {
  notifications: { label: "Notifications" },
  savedSignals: { label: "Saved Signals" },
  watchlistActivity: { label: "Watchlist" },
  riskPreferences: { label: "Risk Preferences", caption: "→ influences Scenario · Compare" },
  portfolioConnections: { label: "Portfolio Connections", caption: "→ influences Portfolio Context" },
  accountSettings: { label: "Account Settings" },
};

const supportOrder: SupportId[] = [
  "notifications",
  "savedSignals",
  "watchlistActivity",
  "riskPreferences",
  "portfolioConnections",
  "accountSettings",
];

/**
 * AURIC SIGNAL's Core Decision Architecture — a layered system map, not a
 * flowchart. Three visual tiers under one "02 — Core Decision Architecture"
 * heading plus "03 — Supporting System" below:
 *
 *  Decision context — Portfolio Context, Priority Signal + Explanation
 *  (paired), Evidence + Confidence, and Personal Impact all live inside one
 *  grouped panel, separated by quiet internal rules rather than drawn as
 *  four independent boxes chained by arrows. This is interpreted context
 *  becoming ready for a decision, not a sequence of steps.
 *
 *  Core decision rail — Scenario → Compare → Review, deliberately the
 *  largest, most present nodes in the diagram (more padding, not larger
 *  type) and the one part of the diagram styled as a strong horizontal
 *  rail. This is the diagram's focal point.
 *
 *  Supporting system — six lighter modules inside one dashed-outline field,
 *  reading as a single grouped strip rather than primary feature cards,
 *  connected to the architecture above by one quiet secondary connector
 *  (never a primary flowchart arrow).
 *
 * Shares its reveal hook, connector primitives, and --lime tokens with
 * AuricCoreDecisionFlow so the two diagrams read as one system. The one
 * lime accent (Priority Signal) is unchanged from the previous version.
 */
export function AuricInformationArchitecture() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? `${styles.revealed} ${connectorStyles.revealed}` : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${tokens.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.desktopOnly}>
        <div className={styles.tier}>
          <p className={styles.tierLabel}>02 — Core Decision Architecture</p>

          <ContextPanel />

          <div className={styles.contextToCoreConnector}>
            <VConn tall />
          </div>

          <div className={styles.coreRail}>
            <CoreRailNode id="scenario" />
            <div className={styles.coreRailConnector}>
              <HConn direction="right" />
            </div>
            <CoreRailNode id="compare" />
            <div className={styles.coreRailConnector}>
              <HConn direction="right" />
            </div>
            <CoreRailNode id="review" />
          </div>
        </div>

        <div className={styles.bridge}>
          <SecondaryVConn />
        </div>

        <div className={styles.tier}>
          <p className={styles.tierLabel}>03 — Supporting System</p>
          <div className={styles.supportField}>
            <div className={styles.supportGrid}>
              {supportOrder.map((id) => (
                <SupportNode key={id} id={id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ MOBILE LINEAR SEQUENCE ============ */}

      <div className={styles.mobileFlow}>
        <p className={styles.tierLabel}>02 — Core Decision Architecture</p>

        <ContextPanel />

        <div className={styles.mobileConnector}>
          <MobileConn />
        </div>

        <div className={styles.mobileCoreRail}>
          {coreRailOrder.map((id, i) => (
            <div key={id}>
              {i > 0 ? <MobileConn /> : null}
              <CoreRailNode id={id} />
            </div>
          ))}
        </div>

        <p className={styles.tierLabel} style={{ marginTop: "1.5rem" }}>
          03 — Supporting System
        </p>
        <div className={styles.supportField}>
          <div className={styles.mobileSupportGrid}>
            {supportOrder.map((id) => (
              <SupportNode key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Decision context, presented as one grouped composition — Portfolio
 * Context, the Priority Signal / Explanation pair, Evidence + Confidence,
 * and Personal Impact, separated by quiet dividers inside a single panel
 * rather than four independent boxes. Shared between the desktop and
 * mobile trees since its own layout is already compact and full-width safe.
 */
function ContextPanel() {
  return (
    <div className={styles.contextPanel}>
      <div className={styles.contextRow}>
        <span className={styles.contextLabel}>Portfolio Context</span>
      </div>
      <div className={styles.contextPairRow}>
        <span className={styles.contextLabel}>
          <span className={styles.contextAccentDot} aria-hidden="true" />
          Priority Signal
        </span>
        <span className={styles.contextPairDivider} aria-hidden="true" />
        <span className={styles.contextLabel}>Explanation</span>
      </div>
      <div className={styles.contextRow}>
        <span className={styles.contextLabel}>Evidence + Confidence</span>
      </div>
      <div className={styles.contextRow}>
        <span className={styles.contextLabel}>Personal Impact</span>
      </div>
    </div>
  );
}

function CoreRailNode({ id }: { id: CoreRailId }) {
  const data = coreRailNodes[id];
  return (
    <div className={styles.coreRailNode}>
      <span className={styles.coreRailNodeLabel}>{data.label}</span>
    </div>
  );
}

function SupportNode({ id }: { id: SupportId }) {
  const data = supportNodes[id];
  return (
    <div className={styles.supportNode}>
      <span className={styles.supportNodeLabel}>{data.label}</span>
      {data.caption ? <span className={styles.supportCaption}>{data.caption}</span> : null}
    </div>
  );
}
