import styles from "./SourcefoldKeyDecisions.module.css";

type Decision = {
  number: string;
  title: string;
  question: [string, string];
  rejectedTitle: string;
  rejectedExample?: string;
  rejectedRationale: string;
  chosenTitle: string;
  chosenExample: [string] | [string, string];
  chosenRationale: string;
  takeaway: string;
};

const decisions: Decision[] = [
  {
    number: "DECISION 01",
    title: "AI Communication",
    question: ["How should AI output", "be communicated?"],
    rejectedTitle: "Numeric Confidence Score",
    rejectedExample: "74% · 82% · 91%",
    rejectedRationale: "Looks precise, not actionable",
    chosenTitle: "Actionable Review State",
    chosenExample: ["Ready · Review Required ·", "Escalated · Blocked"],
    chosenRationale: "Tells users what to do next",
    takeaway: "Users need next-action clarity more than decorative AI precision.",
  },
  {
    number: "DECISION 02",
    title: "Source Synchronization",
    question: ["What happens when source", "changes after approval?"],
    rejectedTitle: "Auto Sync / Overwrite",
    rejectedRationale: "Can erase approved local work",
    chosenTitle: "Human-Edit Preservation",
    chosenExample: ["Update affected field ·", "Keep local version · Review manually"],
    chosenRationale: "Preserves approved local decisions",
    takeaway: "Source updates should trigger review, not silently replace approved local work.",
  },
  {
    number: "DECISION 03",
    title: "Publishing Model",
    question: ["How should global", "publishing be controlled?"],
    rejectedTitle: "All-or-Nothing Release",
    rejectedRationale: "One blocked market delays all",
    chosenTitle: "Market-Level Release",
    chosenExample: ["Publish ready markets while", "holding unresolved markets."],
    chosenRationale: "Follows market readiness, not uniformity",
    takeaway: "Publishing decisions should follow market readiness, not global uniformity.",
  },
];

const MODULE_HEIGHT = 112;
const MODULE_GAP = 184; // top-to-top spacing between modules
const TOP = 32;

/**
 * SOURCEFOLD's three key product decisions, presented as one coherent
 * comparison system rather than three unrelated graphics: a shared column
 * layout (question / rejected / chosen / takeaway) repeats for each
 * decision, separated only by a hairline divider. The chosen direction
 * always carries the accent border + tint (the same "focal" treatment used
 * for Version in the object model and Source in the challenge diagram) so
 * it reads as unambiguously stronger than the rejected direction without
 * relying on color alone — border weight and fill do that work too.
 */
export function SourcefoldKeyDecisions() {
  const viewBoxHeight = TOP + decisions.length * MODULE_GAP - (MODULE_GAP - MODULE_HEIGHT) + 56;

  return (
    <div className={`${styles.wrap} ${styles.diagram}`}>
      <svg
        className={styles.svg}
        viewBox={`0 0 960 ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="sf-keydecisions-title sf-keydecisions-desc"
      >
        <title id="sf-keydecisions-title">SOURCEFOLD key decisions diagram</title>
        <desc id="sf-keydecisions-desc">
          Three stacked decision modules — AI Communication, Source Synchronization, and Publishing Model — each
          contrasting a rejected direction against SOURCEFOLD&apos;s chosen direction, with a one-line takeaway per
          decision.
        </desc>

        <rect width="100%" height="100%" className={styles.bg} />

        {decisions.map((d, i) => {
          const y = TOP + i * MODULE_GAP;
          return (
            <g key={d.number}>
              {/* Left question column — widened slightly, with more room
                  between the quiet DECISION tag, the title, and the
                  question */}
              <text x="40" y={y + 18} className={styles.tag}>{d.number}</text>
              <text x="40" y={y + 44} className={styles.decisionTitle}>{d.title}</text>
              <text x="40" y={y + 68} className={styles.question}>{d.question[0]}</text>
              <text x="40" y={y + 82} className={styles.question}>{d.question[1]}</text>

              {/* Rejected box — same width as Chosen; the visual distinction
                  is border weight + fill, not size */}
              <rect x="300" y={y} width="290" height={MODULE_HEIGHT} rx="6" className={styles.boxRejected} strokeWidth="1" />
              <text x="316" y={y + 20} className={styles.tagRejected}>REJECTED</text>
              <text x="316" y={y + 44} className={styles.titleRejected}>{d.rejectedTitle}</text>
              {d.rejectedExample ? (
                <text x="316" y={y + 64} className={styles.exampleRejected}>{d.rejectedExample}</text>
              ) : null}
              <text x="316" y={y + 100} className={styles.rationaleRejected}>{d.rejectedRationale}</text>

              {/* VS */}
              <text x="610" y={y + 56} className={styles.vsLabel} textAnchor="middle">VS</text>

              {/* Chosen box (focal) */}
              <rect x="630" y={y} width="290" height={MODULE_HEIGHT} rx="6" className={styles.boxChosen} strokeWidth="1.4" />
              <text x="646" y={y + 20} className={styles.tagChosen}>CHOSEN</text>
              <text x="646" y={y + 44} className={styles.titleChosen}>{d.chosenTitle}</text>
              <text x="646" y={y + 64} className={styles.exampleChosen}>{d.chosenExample[0]}</text>
              {d.chosenExample[1] ? (
                <text x="646" y={y + 78} className={styles.exampleChosen}>{d.chosenExample[1]}</text>
              ) : null}
              <text x="646" y={y + 100} className={styles.rationaleChosen}>{d.chosenRationale}</text>

              {/* Takeaway */}
              <text x="40" y={y + MODULE_HEIGHT + 32} className={styles.takeaway}>{d.takeaway}</text>

              {/* Divider (skip after the last module) */}
              {i < decisions.length - 1 ? (
                <line x1="40" y1={y + MODULE_GAP - 20} x2="920" y2={y + MODULE_GAP - 20} className={styles.divider} strokeWidth="0.8" />
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
