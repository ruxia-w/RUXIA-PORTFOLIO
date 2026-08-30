import Image from "next/image";
import type { CSSProperties } from "react";
import { RichText } from "@/lib/richText";
import { ResponsiveMedia } from "./ResponsiveMedia";
import { PhoneMediaViewer } from "./PhoneMediaViewer";
import { FinalExperience } from "./FinalExperience";
import { CaseStudyPlaceholder } from "./CaseStudyPlaceholder";
import { SourcefoldOperationalStateDiagram } from "./SourcefoldOperationalStateDiagram";
import { SourcefoldObjectModel } from "./SourcefoldObjectModel";
import { SourcefoldChallengeDiagram } from "./SourcefoldChallengeDiagram";
import { SourcefoldWorkflowDiagram } from "./SourcefoldWorkflowDiagram";
import { SourcefoldKeyDecisions } from "./SourcefoldKeyDecisions";
import { SourcefoldPrototypeLink } from "./SourcefoldPrototypeLink";
import { AuricCoreDecisionFlow } from "./AuricCoreDecisionFlow";
import { AuricInformationArchitecture } from "./AuricInformationArchitecture";
import { AuricAiHumanControlModel } from "./AuricAiHumanControlModel";
import { AuricResearchTranslation } from "./AuricResearchTranslation";
import { AuricDecisionFrictionModel } from "./AuricDecisionFrictionModel";
import { AuricDecisionSupportJourney } from "./AuricDecisionSupportJourney";
import { AuricConceptSelectionMap } from "./AuricConceptSelectionMap";
import { AuricTestingIterationMap } from "./AuricTestingIterationMap";
import { TraceSharedPermissionArchitecture } from "./TraceSharedPermissionArchitecture";
import { TracePermissionStateModel } from "./TracePermissionStateModel";
import { TraceServiceBlueprint } from "./TraceServiceBlueprint";
import { TraceRecoveryStateModel } from "./TraceRecoveryStateModel";
import { TraceSystemAtAGlance } from "./TraceSystemAtAGlance";
import { TraceAccessJourney } from "./TraceAccessJourney";
import { SmartPuppyBehaviorLoop } from "./SmartPuppyBehaviorLoop";
import { SmartPuppyConnectedArchitecture } from "./SmartPuppyConnectedArchitecture";
import { SmartPuppyRelationshipLoop } from "./SmartPuppyRelationshipLoop";
import { SmartPuppyDigitalExperienceMap } from "./SmartPuppyDigitalExperienceMap";
import type { CaseStudySection as CaseStudySectionData, ContentBlock, MediaLayout } from "@/lib/types";
import styles from "./CaseStudySection.module.css";

function mediaClass(layout: MediaLayout | undefined) {
  if (layout === "wide" || layout === "full") return `${styles.mediaBlock} ${styles.mediaWide}`;
  if (layout === "medium") return `${styles.mediaBlock} ${styles.mediaMedium}`;
  return styles.mediaBlock;
}

function Block({ block, sectionId }: { block: ContentBlock; sectionId: string }) {
  switch (block.type) {
    case "richText":
      return (
        <div className={styles.richText}>
          {block.heading ? <h3>{block.heading}</h3> : null}
          <RichText body={block.body} />
        </div>
      );

    case "media":
      return (
        <div
          className={mediaClass(block.layout)}
          style={
            block.media.maxDisplayWidth
              ? ({
                  width: `min(100%, ${block.media.maxDisplayWidth}px)`,
                  maxWidth: `${block.media.maxDisplayWidth}px`,
                } as CSSProperties)
              : undefined
          }
        >
          <ResponsiveMedia media={block.media} dense={block.media.dense} />
        </div>
      );

    case "mediaGroup":
      return (
        <div
          className={
            block.variant === "screens" || block.variant === "screensFill"
              ? `${styles.screenGroup} ${block.variant === "screensFill" ? styles.screenGroupFill : ""}`
              : block.variant === "equalHeight"
                ? styles.equalHeightGroup
                : styles.mediaGroup
          }
          style={
            block.variant === "equalHeight"
              ? ({ "--grid-cols": block.media.map((m) => `${m.width / m.height}fr`).join(" ") } as CSSProperties)
              : undefined
          }
        >
          {block.media.map((media, i) => (
            <figure
              key={media.src}
              className={styles.groupItem}
              style={
                block.variant === "equalHeight"
                  ? ({ "--aspect": media.width / media.height } as CSSProperties)
                  : undefined
              }
            >
              <ResponsiveMedia media={media} />
              {block.labels?.[i] ? (
                <figcaption>
                  <span className={styles.groupLabel}>{block.labels[i]}</span>
                  {block.captions?.[i] ? (
                    <span className={styles.groupCaption}>{block.captions[i]}</span>
                  ) : null}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      );

    case "callout":
      return (
        <aside className={styles.callout}>
          <p className={styles.calloutTitle}>{block.title}</p>
          <p>{block.body}</p>
        </aside>
      );

    case "comparison":
      return (
        <div className={`${styles.comparison} ${block.emphasis === "wideFirst" ? styles.comparisonWideFirst : ""}`}>
          {block.items.map((item) => (
            <div key={item.title} className={styles.comparisonItem}>
              <p className={styles.comparisonTitle}>{item.title}</p>
              <RichText body={item.body} />
            </div>
          ))}
        </div>
      );

    case "cardSet":
      return (
        <div className={styles.cardSetWrap}>
          {block.heading ? <h3 className={styles.blockHeading}>{block.heading}</h3> : null}
          <div
            className={
              block.variant === "content"
                ? styles.cardSetContent
                : `${styles.cardSet} ${block.columns === 3 ? styles.cardSetThree : ""}`
            }
          >
            {block.items.map((item) => (
              <article
                key={item.title}
                className={block.variant === "content" ? styles.cardItemContent : styles.cardItem}
              >
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      );

    case "stateFlow":
      return (
        <ol className={styles.stateFlow} aria-label={block.ariaLabel}>
          {block.steps.map((step) => (
            <li key={step.title} className={styles.stateFlowStep}>
              <div
                className={
                  step.body
                    ? styles.stateFlowContent
                    : `${styles.stateFlowContent} ${styles.stateFlowContentShortLabel}`
                }
              >
                <span className={styles.stateFlowTitle}>{step.title}</span>
                {step.body ? <span className={styles.stateFlowBody}>{step.body}</span> : null}
              </div>
              {step.connectorAfter ? <span className={styles.stateFlowConnector} aria-hidden="true">{step.connectorAfter}</span> : null}
            </li>
          ))}
        </ol>
      );

    case "relationship":
      return (
        <ol className={styles.relationship} aria-label={block.ariaLabel}>
          {block.items.map((item, index) => (
            <li key={`${item.title}-${index}`} className={styles.relationshipItem}>
              {item.eyebrow ? <span className={styles.relationshipEyebrow}>{item.eyebrow}</span> : null}
              <span className={styles.relationshipTitle}>{item.title}</span>
              {item.body ? <span className={styles.relationshipBody}>{item.body}</span> : null}
            </li>
          ))}
        </ol>
      );

    case "screenJourney":
      return (
        <ol className={styles.screenJourney}>
          {block.steps.map((step) => (
            <li key={step.number} className={styles.screenJourneyStep}>
              <div className={styles.screenJourneyHeader}>
                <span className={styles.screenJourneyNumber}>{step.number}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.body}</p>
              <p className={styles.screenJourneyMessage}>{step.keyMessage}</p>
              <div className={styles.screenJourneyMedia}>
                <ResponsiveMedia media={step.media} />
              </div>
            </li>
          ))}
        </ol>
      );

    case "awardSet":
      return (
        <div className={styles.awardSet} aria-label="Project awards">
          {block.items.map((item) => (
            <article key={item.title} className={styles.awardItem}>
              <div className={styles.awardLogo}>
                <Image
                  src={item.media.src}
                  alt={item.media.alt}
                  width={item.media.width}
                  height={item.media.height}
                  className={styles.awardLogoImage}
                  sizes="96px"
                />
              </div>
              <p className={styles.awardYear}>{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.distinction}</p>
            </article>
          ))}
        </div>
      );

    case "appScreenSet":
      return (
        <div
          className={`${styles.appScreenSet} ${
            block.columns === 4 ? styles.appScreenSetFour : block.columns === 2 ? styles.appScreenSetTwo : styles.appScreenSetThree
          }`}
          aria-label="SMART PUPPY app screens"
        >
          {block.items.map((item) => (
            <article key={item.title} className={styles.appScreenItem}>
              <div className={styles.appScreenText}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.focus?.length ? (
                  <ul>{item.focus.map((focus) => <li key={focus}>{focus}</li>)}</ul>
                ) : null}
              </div>
              <div className={styles.appScreenMedia}>
                <ResponsiveMedia media={item.media} />
              </div>
            </article>
          ))}
        </div>
      );

    case "journey":
      return (
        <ol className={styles.journey}>
          {block.steps.map((step, i) => (
            <li key={step.title} className={styles.journeyStep} id={`${sectionId}-step-${i + 1}`}>
              <div className={styles.journeyText}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              {step.media ? (
                <div className={styles.journeyMedia}>
                  <ResponsiveMedia media={step.media} />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      );

    case "feature":
      return (
        <section className={styles.feature} aria-labelledby={`${sectionId}-${block.title.toLowerCase().replaceAll(" ", "-")}`}>
          <div className={styles.featureText}>
            <h3 id={`${sectionId}-${block.title.toLowerCase().replaceAll(" ", "-")}`}>{block.title}</h3>
            <RichText body={block.body} />
            <p className={styles.focusLabel}>Design focus</p>
            <ul className={styles.focusList}>
              {block.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <PhoneMediaViewer media={block.media} />
        </section>
      );

    case "finalExperience":
      return <FinalExperience {...block} />;

    case "sourcefoldPrototypeLink":
      return <SourcefoldPrototypeLink href={block.href} label={block.label} note={block.note} />;

    case "placeholder":
      return (
        <div className={mediaClass(block.layout)}>
          <CaseStudyPlaceholder
            label={block.label}
            items={block.items}
            groups={block.groups}
            aspectRatio={block.aspectRatio}
            caption={block.caption}
            details={block.details}
          />
        </div>
      );

    case "sourcefoldOperationalStateDiagram":
      return (
        <div className={mediaClass(block.layout)}>
          <SourcefoldOperationalStateDiagram />
        </div>
      );

    case "sourcefoldObjectModel":
      return (
        <div className={mediaClass(block.layout)}>
          <SourcefoldObjectModel />
        </div>
      );

    case "sourcefoldChallengeDiagram":
      return (
        <div className={mediaClass(block.layout)}>
          <SourcefoldChallengeDiagram />
        </div>
      );

    case "sourcefoldWorkflowDiagram":
      return (
        <div className={mediaClass(block.layout)}>
          <SourcefoldWorkflowDiagram />
        </div>
      );

    case "sourcefoldKeyDecisions":
      return (
        <div className={mediaClass(block.layout)}>
          <SourcefoldKeyDecisions />
        </div>
      );

    case "auricCoreDecisionFlow":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricCoreDecisionFlow />
        </div>
      );

    case "auricInformationArchitecture":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricInformationArchitecture />
        </div>
      );

    case "auricAiHumanControlModel":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricAiHumanControlModel />
        </div>
      );

    case "auricResearchTranslation":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricResearchTranslation />
        </div>
      );

    case "auricDecisionFrictionModel":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricDecisionFrictionModel />
        </div>
      );

    case "auricDecisionSupportJourney":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricDecisionSupportJourney />
        </div>
      );

    case "auricConceptSelectionMap":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricConceptSelectionMap />
        </div>
      );

    case "auricTestingIterationMap":
      return (
        <div className={mediaClass(block.layout)}>
          <AuricTestingIterationMap />
        </div>
      );

    case "traceSharedPermissionArchitecture":
      return (
        <div className={mediaClass(block.layout)}>
          <TraceSharedPermissionArchitecture />
        </div>
      );

    case "tracePermissionStateModel":
      return (
        <div className={mediaClass(block.layout)}>
          <TracePermissionStateModel />
        </div>
      );

    case "traceServiceBlueprint":
      return (
        <div className={mediaClass(block.layout)}>
          <TraceServiceBlueprint />
        </div>
      );

    case "traceRecoveryStateModel":
      return (
        <div className={mediaClass(block.layout)}>
          <TraceRecoveryStateModel />
        </div>
      );

    case "traceSystemAtAGlance":
      return (
        <div className={mediaClass(block.layout)}>
          <TraceSystemAtAGlance />
        </div>
      );

    case "traceAccessJourney":
      return (
        <div className={mediaClass(block.layout)}>
          <TraceAccessJourney />
        </div>
      );

    case "smartPuppyBehaviorLoop":
      return (
        <div className={mediaClass(block.layout)}>
          <SmartPuppyBehaviorLoop />
        </div>
      );

    case "smartPuppyConnectedArchitecture":
      return (
        <div className={mediaClass(block.layout)}>
          <SmartPuppyConnectedArchitecture />
        </div>
      );

    case "smartPuppyRelationshipLoop":
      return (
        <div className={mediaClass(block.layout)}>
          <SmartPuppyRelationshipLoop />
        </div>
      );

    case "smartPuppyDigitalExperienceMap":
      return (
        <div className={mediaClass(block.layout)}>
          <SmartPuppyDigitalExperienceMap />
        </div>
      );

    default:
      return null;
  }
}

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  return (
    <section id={section.id} className={styles.section} aria-labelledby={`${section.id}-heading`}>
      <h2 id={`${section.id}-heading`} className={styles.heading}>{section.heading}</h2>
      {section.intro ? <p className={styles.intro}>{section.intro}</p> : null}
      <div className={styles.blocks}>
        {section.blocks.map((block, i) => <Block key={i} block={block} sectionId={section.id} />)}
      </div>
    </section>
  );
}
