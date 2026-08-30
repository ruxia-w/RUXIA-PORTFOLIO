import styles from "./AuricDiagramConnectors.module.css";

/**
 * Shared fixed-geometry SVG connector primitives for every AURIC case-study
 * diagram (AuricCoreDecisionFlow, AuricInformationArchitecture, …). Each
 * connector is small and independently placed via the caller's own grid/flex
 * layout — there's no dynamic position measurement — so the geometry here
 * only needs to know its own direction/length, never the diagram around it.
 */

export function HConn({ direction, style }: { direction: "left" | "right"; style?: React.CSSProperties }) {
  return (
    <div className={styles.connector} style={style}>
      <svg width="28" height="12" viewBox="0 0 28 12" aria-hidden="true">
        {direction === "right" ? (
          <>
            <path className={`${styles.connectorLine} ${styles.connectorPath}`} d="M1,6 H22" strokeDasharray="21" strokeDashoffset="21" />
            <polygon className={styles.connectorArrow} points="22,2 27,6 22,10" />
          </>
        ) : (
          <>
            <path className={`${styles.connectorLine} ${styles.connectorPath}`} d="M27,6 H6" strokeDasharray="21" strokeDashoffset="21" />
            <polygon className={styles.connectorArrow} points="6,2 1,6 6,10" />
          </>
        )}
      </svg>
    </div>
  );
}

export function VConn({ tall, style }: { tall?: boolean; style?: React.CSSProperties }) {
  const h = tall ? 40 : 24;
  return (
    <div className={styles.connector} style={style}>
      <svg width="12" height={h} viewBox={`0 0 12 ${h}`} aria-hidden="true">
        <path
          className={`${styles.connectorLine} ${styles.connectorPath}`}
          d={`M6,1 V${h - 6}`}
          strokeDasharray={h - 7}
          strokeDashoffset={h - 7}
        />
        <polygon className={styles.connectorArrow} points={`2,${h - 6} 6,${h - 1} 10,${h - 6}`} />
      </svg>
    </div>
  );
}

export function MobileConn() {
  return (
    <div className={styles.mobileConnector}>
      <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden="true">
        <path
          className={`${styles.connectorLine} ${styles.connectorPath}`}
          d="M6,1 V14"
          strokeDasharray="13"
          strokeDashoffset="13"
        />
        <polygon className={styles.connectorArrow} points="2,14 6,19 10,14" />
      </svg>
    </div>
  );
}

/**
 * Secondary "influences" connector — dotted, static (no draw-in animation,
 * just fades in with the rest of its tier). Used for cross-tier
 * relationships that orient the reader (e.g. product shell → core decision
 * architecture) without implying they're part of the primary flow.
 */
export function SecondaryVConn({ height = 28, style }: { height?: number; style?: React.CSSProperties }) {
  const h = height;
  return (
    <div className={styles.connector} style={style}>
      <svg width="12" height={h} viewBox={`0 0 12 ${h}`} aria-hidden="true">
        <path className={styles.connectorLineSecondary} d={`M6,1 V${h - 6}`} />
        <polygon className={styles.connectorArrow} points={`2,${h - 6} 6,${h - 1} 10,${h - 6}`} opacity="0.7" />
      </svg>
    </div>
  );
}
