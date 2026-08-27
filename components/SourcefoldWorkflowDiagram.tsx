import styles from "./SourcefoldWorkflowDiagram.module.css";

/**
 * SOURCEFOLD's workflow across four lanes: Content Manager, AI / System,
 * Market Reviewer, and Program Owner. The path zigzags between lanes at
 * each handoff — that back-and-forth is the point, not a flaw, since the
 * diagram exists to show handoffs and exception routing, not a smooth
 * linear pipeline. The one accent-colored connector (Adapt -> Review) marks
 * the single most important moment: where the system hands a decision to a
 * human — its sentence-case label ("Human judgment required") is
 * deliberately the only non-uppercase handoff, so it reads as distinct from
 * the routine handoffs around it. Track Changes closes the loop with one
 * dashed, deliberately quiet return path back to Adapt (thinner stroke,
 * lower opacity, sparser dashes than every other connector) rather than a
 * large circular arrow — publishing is not drawn as the end, but the loop
 * never competes with the primary workflow for attention.
 */
export function SourcefoldWorkflowDiagram() {
  return (
    <div className={`${styles.wrap} ${styles.diagram}`}>
      <svg
        className={styles.svg}
        viewBox="0 0 1068 560"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="sf-workflow-title sf-workflow-desc"
      >
        <title id="sf-workflow-title">SOURCEFOLD workflow diagram</title>
        <desc id="sf-workflow-desc">
          Swimlane diagram across Content Manager, AI/System, Market Reviewer, and Program Owner lanes: Create hands
          off to Adapt, which detects exceptions and hands off to Review for human judgment, whose decision updates
          readiness and assigns the next action back to Publish; Program Owner monitors throughout; and Track
          Changes after publishing can trigger a dashed Source Change return path back to Adapt.
        </desc>

        <defs>
          <marker id="sf-wf-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className={styles.arrow} />
          </marker>
          <marker id="sf-wf-arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className={styles.arrowAccent} />
          </marker>
          <marker id="sf-wf-arrow-loop" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className={styles.loopArrow} />
          </marker>
        </defs>

        <rect width="100%" height="100%" className={styles.bg} />

        {/* Lane dividers */}
        <line x1="40" y1="32" x2="1028" y2="32" className={styles.laneDividerStrong} strokeWidth="1" />
        <line x1="40" y1="136" x2="1028" y2="136" className={styles.laneDivider} strokeWidth="0.8" />
        <line x1="40" y1="264" x2="1028" y2="264" className={styles.laneDivider} strokeWidth="0.8" />
        <line x1="40" y1="368" x2="1028" y2="368" className={styles.laneDivider} strokeWidth="0.8" />
        <line x1="40" y1="472" x2="1028" y2="472" className={styles.laneDividerStrong} strokeWidth="1" />
        <line x1="140" y1="32" x2="140" y2="472" className={styles.laneDividerStrong} strokeWidth="1" />

        {/* Lane labels */}
        <text x="48" y="87" className={styles.laneLabel}>CONTENT MANAGER</text>
        <text x="48" y="203" className={styles.laneLabel}>AI / SYSTEM</text>
        <text x="48" y="319" className={styles.laneLabel}>MARKET REVIEWER</text>
        <text x="48" y="423" className={styles.laneLabel}>PROGRAM OWNER</text>

        {/* ============ CONNECTORS (drawn before nodes) ============ */}

        {/* Create -> Adapt */}
        <line x1="272" y1="122" x2="284" y2="152" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-wf-arrow)" />
        <rect x="240" y="130" width="76" height="14" rx="2" className={styles.labelMask} />
        <text x="278" y="140" className={styles.labelText} textAnchor="middle">START ADAPT</text>

        {/* Adapt -> Review (critical handoff, accent, sentence case) */}
        <line x1="412" y1="248" x2="424" y2="278" className={styles.arrowAccent} strokeWidth="1.4" markerEnd="url(#sf-wf-arrow-accent)" />
        <rect x="352" y="256" width="132" height="14" rx="2" className={styles.labelMask} />
        <text x="418" y="266" className={styles.labelTextAccent} textAnchor="middle">Human judgment required</text>

        {/* Review -> Update Readiness */}
        <line x1="544" y1="278" x2="556" y2="238" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-wf-arrow)" />
        <rect x="504" y="251" width="92" height="14" rx="2" className={styles.labelMask} />
        <text x="550" y="261" className={styles.labelText} textAnchor="middle">UPDATES READY</text>

        {/* Update Readiness -> Publish */}
        <line x1="736" y1="162" x2="748" y2="122" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-wf-arrow)" />
        <rect x="700" y="135" width="84" height="14" rx="2" className={styles.labelMask} />
        <text x="742" y="145" className={styles.labelText} textAnchor="middle">NEXT ACTION</text>

        {/* Publish -> Track Changes (within-lane) */}
        <line x1="860" y1="84" x2="872" y2="84" className={styles.arrow} strokeWidth="1" markerEnd="url(#sf-wf-arrow)" />

        {/* Track Changes -> Adapt dashed loop (Source Change) — quiet, thin, sparse */}
        <path
          d="M 942,122 V 500 Q 942,508 934,508 H 356 Q 348,508 348,500 V 248"
          fill="none"
          className={styles.loopArrow}
          strokeWidth="0.8"
          strokeDasharray="3,4"
          markerEnd="url(#sf-wf-arrow-loop)"
        />
        <rect x="596" y="502" width="98" height="14" rx="2" className={styles.labelMask} />
        <text x="645" y="512" className={styles.labelTextLoop} textAnchor="middle">SOURCE CHANGE</text>

        {/* ============ NODES ============ */}

        {/* Create (Content Manager) */}
        <rect x="160" y="46" width="112" height="76" rx="6" className={styles.box} strokeWidth="1" />
        <text x="216" y="70" className={styles.name} textAnchor="middle">Create</text>
        <text x="216" y="88" className={styles.subtitle} textAnchor="middle">Source · Markets ·</text>
        <text x="216" y="102" className={styles.subtitle} textAnchor="middle">Adaptation</text>

        {/* Adapt (AI / System) */}
        <rect x="284" y="152" width="128" height="96" rx="6" className={styles.box} strokeWidth="1" />
        <text x="348" y="174" className={styles.name} textAnchor="middle">Adapt</text>
        <text x="348" y="190" className={styles.subtitle} textAnchor="middle">Analyze ·</text>
        <text x="348" y="204" className={styles.subtitle} textAnchor="middle">Adapt · Detect</text>
        <text x="348" y="226" className={styles.annotation} textAnchor="middle">Status · Reason · Owner ·</text>
        <text x="348" y="238" className={styles.annotation} textAnchor="middle">Next Action</text>

        {/* Review (Market Reviewer) */}
        <rect x="424" y="278" width="120" height="76" rx="6" className={styles.box} strokeWidth="1" />
        <text x="484" y="302" className={styles.name} textAnchor="middle">Review</text>
        <text x="484" y="320" className={styles.subtitle} textAnchor="middle">Accept · Edit ·</text>
        <text x="484" y="334" className={styles.subtitle} textAnchor="middle">Revert · Escalate</text>

        {/* Update Readiness (AI / System) */}
        <rect x="556" y="162" width="180" height="76" rx="6" className={styles.box} strokeWidth="1" />
        <text x="646" y="186" className={styles.name} textAnchor="middle">Update Readiness</text>
        <text x="646" y="204" className={styles.subtitle} textAnchor="middle">Dependencies ·</text>
        <text x="646" y="218" className={styles.subtitle} textAnchor="middle">History · Ownership</text>

        {/* Publish (Content Manager) */}
        <rect x="748" y="46" width="112" height="76" rx="6" className={styles.box} strokeWidth="1" />
        <text x="804" y="70" className={styles.name} textAnchor="middle">Publish</text>
        <text x="804" y="88" className={styles.subtitle} textAnchor="middle">Exceptions →</text>
        <text x="804" y="102" className={styles.subtitle} textAnchor="middle">Preview → Live</text>

        {/* Track Changes (Content Manager) */}
        <rect x="872" y="46" width="140" height="76" rx="6" className={styles.box} strokeWidth="1" />
        <text x="942" y="70" className={styles.name} textAnchor="middle">Track Changes</text>
        <text x="942" y="88" className={styles.subtitle} textAnchor="middle">Source · Market ·</text>
        <text x="942" y="102" className={styles.subtitle} textAnchor="middle">Publication Changes</text>

        {/* Program Owner: lightweight monitoring band, no cards — spans the
            middle-to-late workflow (Review through Track Changes) since this
            role monitors rather than performs */}
        <line x1="424" y1="406" x2="1012" y2="406" className={styles.laneDivider} strokeWidth="0.8" />
        <text x="428" y="428" className={styles.ownerNote}>Monitor readiness · blockers · ownership · launch risk</text>
      </svg>

      <p className={styles.caption}>
        AI generates, detects, and assigns. Humans retain judgment, escalation, approval, and publishing.
      </p>
    </div>
  );
}
