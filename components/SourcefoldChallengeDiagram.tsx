import styles from "./SourcefoldChallengeDiagram.module.css";

/**
 * SOURCEFOLD's challenge, in one glance: one source campaign fans out to
 * four markets, each of which ends in a different operational state. State
 * markers vary by shape (not just color) so the difference reads without
 * relying on hue alone.
 */
export function SourcefoldChallengeDiagram() {
  return (
    <div className={`${styles.wrap} ${styles.diagram}`}>
      <svg
        className={styles.svg}
        viewBox="0 0 1040 360"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="sf-challenge-title sf-challenge-desc"
      >
        <title id="sf-challenge-title">SOURCEFOLD challenge diagram</title>
        <desc id="sf-challenge-desc">
          One source campaign, Orbit Launch Campaign, branches into four markets — United States, Japan, France, and
          Brazil — each of which ends in a different operational state: Ready, Review Required, Source Updated, and
          Blocked.
        </desc>

        <rect width="100%" height="100%" className={styles.bg} />

        {/* ============ CONNECTORS (drawn before nodes) ============ */}
        <line x1="520" y1="104" x2="520" y2="152" className={styles.connector} strokeWidth="1" />
        <line x1="160" y1="152" x2="880" y2="152" className={styles.connector} strokeWidth="1" />
        <line x1="160" y1="152" x2="160" y2="200" className={styles.connector} strokeWidth="1" />
        <line x1="400" y1="152" x2="400" y2="200" className={styles.connector} strokeWidth="1" />
        <line x1="640" y1="152" x2="640" y2="200" className={styles.connector} strokeWidth="1" />
        <line x1="880" y1="152" x2="880" y2="200" className={styles.connector} strokeWidth="1" />

        <line x1="160" y1="264" x2="160" y2="296" className={styles.connector} strokeWidth="1" />
        <line x1="400" y1="264" x2="400" y2="296" className={styles.connector} strokeWidth="1" />
        <line x1="640" y1="264" x2="640" y2="296" className={styles.connector} strokeWidth="1" />
        <line x1="880" y1="264" x2="880" y2="296" className={styles.connector} strokeWidth="1" />

        {/* ============ LEVEL 1 — SOURCE (focal) ============ */}
        <rect x="400" y="40" width="240" height="64" rx="6" className={styles.boxFocal} strokeWidth="1.5" />
        <text x="416" y="62" className={styles.tagFocal}>SOURCE</text>
        <text x="520" y="82" className={styles.nameFocal} textAnchor="middle">Orbit Launch Campaign</text>
        <text x="520" y="97" className={styles.subtitle} textAnchor="middle">One source</text>

        {/* ============ LEVEL 2 — MARKETS ============ */}
        <rect x="60" y="200" width="200" height="64" rx="6" className={styles.box} strokeWidth="1" />
        <text x="76" y="222" className={styles.tag}>MARKET</text>
        <text x="160" y="246" className={styles.name} textAnchor="middle">United States</text>

        <rect x="300" y="200" width="200" height="64" rx="6" className={styles.box} strokeWidth="1" />
        <text x="316" y="222" className={styles.tag}>MARKET</text>
        <text x="400" y="246" className={styles.name} textAnchor="middle">Japan</text>

        <rect x="540" y="200" width="200" height="64" rx="6" className={styles.box} strokeWidth="1" />
        <text x="556" y="222" className={styles.tag}>MARKET</text>
        <text x="640" y="246" className={styles.name} textAnchor="middle">France</text>

        <rect x="780" y="200" width="200" height="64" rx="6" className={styles.box} strokeWidth="1" />
        <text x="796" y="222" className={styles.tag}>MARKET</text>
        <text x="880" y="246" className={styles.name} textAnchor="middle">Brazil</text>

        {/* ============ LEVEL 3 — OPERATIONAL STATES ============ */}
        {/* Ready: solid dot */}
        <circle cx="160" cy="300" r="4" className={styles.markerReady} />
        <text x="160" y="328" className={styles.stateLabel} textAnchor="middle">Ready</text>

        {/* Review Required: ring dot */}
        <circle cx="400" cy="300" r="4" className={styles.markerReview} />
        <text x="400" y="328" className={styles.stateLabel} textAnchor="middle">Review Required</text>

        {/* Source Updated: dashed tick */}
        <line x1="632" y1="300" x2="648" y2="300" className={styles.markerUpdated} strokeDasharray="2,2" />
        <text x="640" y="328" className={styles.stateLabel} textAnchor="middle">Source Updated</text>

        {/* Blocked: filled square */}
        <rect x="876" y="296" width="8" height="8" className={styles.markerBlocked} />
        <text x="880" y="328" className={styles.stateLabel} textAnchor="middle">Blocked</text>
      </svg>

      <p className={styles.caption}>One source can create multiple operational states across markets.</p>
    </div>
  );
}
