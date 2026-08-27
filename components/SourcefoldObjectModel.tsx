import styles from "./SourcefoldObjectModel.module.css";

/**
 * SOURCEFOLD's object model: Content -> Market -> Variant converge into a
 * traceable Version, which branches to a Review workflow (above) and a
 * Publication workflow (below) — kept deliberately separate so approval
 * never visually implies automatic publishing. A dashed "change impact"
 * connector signals that a source update affects Version without silently
 * overwriting it. System Context is a shared property layer underneath,
 * not a fifth/sixth primary object.
 *
 * Deliberately light on metadata — one subtitle and one concrete example per
 * object, not a field list — so the diagram reads at a glance, matching the
 * editorial simplicity of SourcefoldChallengeDiagram rather than a database
 * schema. Version keeps the same box recipe as Content/Market/Variant (no
 * extra height, no "central" qualifier in its tag) — its accent tint and its
 * position as the hub both objects branch from are enough to read as the
 * central object without looking like a selected UI state.
 */
export function SourcefoldObjectModel() {
  return (
    <div className={`${styles.wrap} ${styles.diagram}`}>
      <svg
        className={styles.svg}
        viewBox="0 0 1040 620"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="sf-object-model-title sf-object-model-desc"
      >
        <title id="sf-object-model-title">SOURCEFOLD object model</title>
        <desc id="sf-object-model-desc">
          Content flows into Market and Variant, converging into a traceable Version; Version branches to a Review
          workflow above and a Publication workflow below, with a dashed change-impact signal running from a source
          update to Version, and a shared System Context layer of lineage, ownership, readiness, and decision
          history beneath the whole model.
        </desc>

        <defs>
          <marker id="sf-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className={styles.arrow} />
          </marker>
        </defs>

        <rect width="100%" height="100%" className={styles.bg} />

        {/* ============ CONNECTORS (drawn before boxes) ============ */}

        {/* Content -> Market */}
        <line x1="252" y1="248" x2="284" y2="248" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />

        {/* Market -> Variant (carries AI-ASSISTED tag) */}
        <line x1="484" y1="248" x2="556" y2="248" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />
        <rect x="488" y="228" width="64" height="14" rx="2" className={styles.labelMask} />
        <text x="520" y="238" className={styles.labelText} textAnchor="middle">AI-ASSISTED</text>

        {/* Variant -> Version */}
        <line x1="756" y1="248" x2="788" y2="248" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />

        {/* Version <-> Review: two offset verticals */}
        <line x1="876" y1="176" x2="876" y2="136" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />
        <rect x="846" y="150" width="58" height="14" rx="2" className={styles.labelMask} />
        <text x="875" y="160" className={styles.labelText} textAnchor="middle">FLAGGED</text>

        <line x1="900" y1="136" x2="900" y2="176" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />
        <rect x="902" y="150" width="62" height="14" rx="2" className={styles.labelMask} />
        <text x="933" y="160" className={styles.labelText} textAnchor="middle">RESOLVED</text>

        {/* Version -> Publication */}
        <line x1="888" y1="320" x2="888" y2="360" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-arrow)" />

        {/* Dashed change-impact: Content bottom -> elbow -> elbow -> Version bottom (fanned attach) */}
        <path
          d="M 152,320 V 332 Q 152,340 160,340 H 840 Q 848,340 848,332 V 320"
          fill="none"
          className={styles.arrow}
          strokeWidth="1"
          strokeDasharray="4,3"
          markerEnd="url(#sf-arrow)"
        />
        <rect x="456" y="324" width="88" height="14" rx="2" className={styles.labelMask} />
        <text x="500" y="334" className={styles.labelText} textAnchor="middle">CHANGE IMPACT</text>

        {/* ============ LEVEL 1 — PRIMARY OBJECTS ============ */}

        {/* Content */}
        <rect x="52" y="176" width="200" height="144" rx="6" className={styles.box} strokeWidth="1" />
        <text x="68" y="198" className={styles.tag}>OBJECT</text>
        <text x="68" y="220" className={styles.name}>Content</text>
        <text x="68" y="236" className={styles.subtitle}>Master source</text>
        <rect x="68" y="248" width="164" height="22" rx="2" className={styles.exampleChip} />
        <text x="152" y="263" className={styles.exampleText} textAnchor="middle">Orbit Launch Campaign</text>
        <text x="152" y="298" className={styles.annotation} textAnchor="middle">Source v3 → Source v4</text>

        {/* Market */}
        <rect x="284" y="176" width="200" height="144" rx="6" className={styles.box} strokeWidth="1" />
        <text x="300" y="198" className={styles.tag}>OBJECT</text>
        <text x="300" y="220" className={styles.name}>Market</text>
        <text x="300" y="236" className={styles.subtitle}>Local operating context</text>
        <rect x="300" y="248" width="164" height="22" rx="2" className={styles.exampleChip} />
        <text x="384" y="263" className={styles.exampleText} textAnchor="middle">Japan · JA</text>
        <text x="384" y="298" className={styles.annotation} textAnchor="middle">Market ≠ Language</text>

        {/* Variant */}
        <rect x="556" y="176" width="200" height="144" rx="6" className={styles.box} strokeWidth="1" />
        <text x="572" y="198" className={styles.tag}>OBJECT</text>
        <text x="572" y="220" className={styles.name}>Variant</text>
        <text x="572" y="236" className={styles.subtitle}>Market-specific expression</text>
        <rect x="572" y="248" width="164" height="22" rx="2" className={styles.exampleChip} />
        <text x="656" y="263" className={styles.exampleText} textAnchor="middle">Japan Variant</text>

        {/* Version (focal) */}
        <rect x="788" y="176" width="200" height="144" rx="6" className={styles.boxFocal} strokeWidth="1.5" />
        <text x="804" y="198" className={styles.tagFocal}>OBJECT</text>
        <text x="804" y="220" className={styles.name}>Version</text>
        <text x="804" y="236" className={styles.subtitle}>Traceable content state</text>
        <rect x="804" y="248" width="164" height="22" rx="2" className={styles.exampleChipFocal} />
        <text x="888" y="263" className={styles.exampleText} textAnchor="middle">Variant v3 · Based on Source v4</text>

        {/* ============ LEVEL 2 — WORKFLOW OBJECTS ============ */}

        {/* Review */}
        <rect x="798" y="32" width="180" height="104" rx="6" className={styles.box} strokeWidth="1" />
        <text x="814" y="52" className={styles.tag}>WORKFLOW</text>
        <text x="814" y="72" className={styles.nameSmall}>Review</text>
        <text x="814" y="87" className={styles.subtitle}>Human decision workflow</text>
        <text x="888" y="110" className={styles.annotation} textAnchor="middle">AI flags exceptions</text>

        {/* Publication */}
        <rect x="798" y="360" width="180" height="104" rx="6" className={styles.box} strokeWidth="1" />
        <text x="814" y="380" className={styles.tag}>WORKFLOW</text>
        <text x="814" y="400" className={styles.nameSmall}>Publication</text>
        <text x="814" y="415" className={styles.subtitle}>Release state</text>
        <text x="888" y="438" className={styles.annotation} textAnchor="middle">Approved ≠ Published</text>

        {/* ============ LEVEL 3 — SYSTEM CONTEXT ============ */}

        <line x1="52" y1="504" x2="988" y2="504" className={styles.contextDivider} strokeWidth="0.8" />
        <text x="52" y="524" className={styles.contextHeader}>SYSTEM CONTEXT</text>

        <line x1="290" y1="528" x2="290" y2="596" className={styles.contextDivider} strokeWidth="0.8" />
        <line x1="524" y1="528" x2="524" y2="596" className={styles.contextDivider} strokeWidth="0.8" />
        <line x1="758" y1="528" x2="758" y2="596" className={styles.contextDivider} strokeWidth="0.8" />

        <text x="52" y="548" className={styles.contextLabel}>Lineage</text>
        <text x="52" y="566" className={styles.contextBody}>Where did this version</text>
        <text x="52" y="580" className={styles.contextBody}>come from?</text>

        <text x="306" y="548" className={styles.contextLabel}>Ownership</text>
        <text x="306" y="566" className={styles.contextBody}>Who owns the next</text>
        <text x="306" y="580" className={styles.contextBody}>action?</text>

        <text x="540" y="548" className={styles.contextLabel}>Readiness</text>
        <text x="540" y="566" className={styles.contextBody}>Can this market move</text>
        <text x="540" y="580" className={styles.contextBody}>forward?</text>

        <text x="774" y="548" className={styles.contextLabel}>Decision History</text>
        <text x="774" y="566" className={styles.contextBody}>What was decided</text>
        <text x="774" y="580" className={styles.contextBody}>previously?</text>
      </svg>

      <p className={styles.caption}>
        The product model connects content lineage, human review, and release state without collapsing them into a
        single translation status.
      </p>
    </div>
  );
}
