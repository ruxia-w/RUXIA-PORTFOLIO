"use client";

import { useDiagramReveal } from "./useDiagramReveal";
import styles from "./TraceServiceBlueprint.module.css";

type StageId = "arrive" | "recognize" | "request" | "review" | "access" | "control" | "close";

const stages: Array<{ id: StageId; label: string }> = [
  { id: "arrive", label: "Arrive" },
  { id: "recognize", label: "Recognize" },
  { id: "request", label: "Request" },
  { id: "review", label: "Review" },
  { id: "access", label: "Access" },
  { id: "control", label: "Control" },
  { id: "close", label: "Close" },
];

/** Stage header cells carrying a small handoff tick on their right edge. */
const handoffAfter: Partial<Record<StageId, string>> = {
  recognize: "Handoff 1 — Recognition creates context, not access",
  request: "Handoff 2 — Staff initiates; the individual decides",
  access: "Handoff 3 — Once active, control stays with the individual",
};

type LaneId = "individual" | "physical" | "app" | "sharedState" | "staff" | "dashboard";

const lanes: Array<{ id: LaneId; number: string; label: string }> = [
  { id: "individual", number: "01", label: "Individual" },
  { id: "physical", number: "02", label: "Physical Credential / Dock" },
  { id: "app", number: "03", label: "Personal App" },
  { id: "sharedState", number: "04", label: "Shared Permission State" },
  { id: "staff", number: "05", label: "Staff / Human Support" },
  { id: "dashboard", number: "06", label: "Organization Dashboard" },
];

const cells: Record<LaneId, Record<StageId, string | null>> = {
  individual: {
    arrive: "Arrive",
    recognize: null,
    request: null,
    review: "Review request",
    access: "Approve",
    control: "Pause / Resume",
    close: "End session",
  },
  physical: {
    arrive: "Presence detected",
    recognize: "Recognition feedback",
    request: "Physical confirmation",
    review: null,
    access: "Active feedback",
    control: "State feedback",
    close: "Session ended",
  },
  app: {
    arrive: null,
    recognize: "Context shown",
    request: "Request surfaced",
    review: "Review",
    access: "Confirm",
    control: "Control access",
    close: "Access record",
  },
  sharedState: {
    arrive: null,
    recognize: "Recognized",
    request: "Pending",
    review: "Pending",
    access: "Active",
    control: "Active ⇄ Paused",
    close: "Closed",
  },
  staff: {
    arrive: "Prepare interaction",
    recognize: "Observe",
    request: "Initiate request",
    review: "Assist if needed",
    access: "Support",
    control: "Respond to exceptions",
    close: "Confirm closure",
  },
  dashboard: {
    arrive: "Context",
    recognize: "Recognition context",
    request: "Pending request",
    review: "Pending request",
    access: "Active session",
    control: "Paused / Revoked",
    close: "History / record",
  },
};

/**
 * TRACE's Service Blueprint / Handoff Map — a multi-role service blueprint
 * (not a user journey) for the existing private-financial-consultation
 * scenario, showing how six roles/systems coordinate around one shared
 * permission state across seven service stages.
 *
 * Deliberately NOT a bordered spreadsheet: only the Shared Permission State
 * lane (the diagram's anchor, per its own brief) renders its states as
 * small pill markers; every other lane is plain compact text separated by
 * thin horizontal row rules, never per-cell boxes. Three handoff moments
 * (Recognition → Request, Request → Review, Access → Control) are marked
 * with a small blue tick on the stage header, never a drawn line crossing
 * the lanes — keeping the whole thing calm and architectural rather than a
 * dense table.
 *
 * Shares its self-contained token values (trace-blue, card radius, type
 * scale) with TraceSharedPermissionArchitecture and TracePermissionStateModel
 * so all three diagrams read as one system.
 */
export function TraceServiceBlueprint() {
  const { revealed, ref } = useDiagramReveal();
  const revealClass = revealed ? styles.revealed : "";

  return (
    <div ref={ref} className={`${styles.wrap} ${styles.diagram} ${revealClass}`}>
      {/* ============ DESKTOP / TABLET ============ */}

      <div className={styles.canvas}>
        <div className={styles.grid}>
          <span className={styles.cornerCell} aria-hidden="true" />
          {stages.map((stage) => (
            <p className={styles.stageHeader} key={stage.id}>
              {stage.label}
              {handoffAfter[stage.id] ? (
                <span className={styles.handoffTick} aria-hidden="true" title={handoffAfter[stage.id]} />
              ) : null}
              {stage.id === "request" ? (
                <span className={styles.systemRule}>Recognition does not grant access</span>
              ) : null}
            </p>
          ))}

          {lanes.map((lane) => (
            <div className={styles.laneRow} key={lane.id}>
              <p className={`${styles.laneLabel} ${lane.id === "sharedState" ? styles.laneLabelAnchor : ""}`}>
                <span className={styles.laneNumber}>{lane.number}</span> {lane.label}
              </p>
              {stages.map((stage) => (
                <LaneCell key={stage.id} laneId={lane.id} content={cells[lane.id][stage.id]} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ MOBILE: stacked stage groups ============ */}

      <div className={styles.mobileFlow}>
        {stages.map((stage, i) => (
          <div className={styles.mobileStageGroup} key={stage.id}>
            <p className={styles.mobileStageHeader}>{stage.label}</p>
            {stage.id === "request" ? <p className={styles.systemRuleMobile}>Recognition does not grant access.</p> : null}
            <div className={styles.mobileLaneList}>
              {lanes
                .filter((lane) => cells[lane.id][stage.id])
                .map((lane) => (
                  <div className={styles.mobileLaneItem} key={lane.id}>
                    <span className={`${styles.mobileLaneName} ${lane.id === "sharedState" ? styles.laneLabelAnchor : ""}`}>
                      {lane.label}
                    </span>
                    <LaneCell laneId={lane.id} content={cells[lane.id][stage.id]} mobile />
                  </div>
                ))}
            </div>
            {i < stages.length - 1 ? <div className={styles.mobileStageConnector} aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function LaneCell({
  laneId,
  content,
  mobile,
}: {
  laneId: LaneId;
  content: string | null;
  mobile?: boolean;
}) {
  if (!content) {
    return mobile ? null : <span className={styles.laneCellEmpty} aria-hidden="true">—</span>;
  }
  if (laneId === "sharedState") {
    return <span className={`${styles.laneCell} ${styles.stateChip}`}>{content}</span>;
  }
  return <span className={`${styles.laneCell} ${mobile ? styles.laneCellMobile : ""}`}>{content}</span>;
}
