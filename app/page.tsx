import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Footer } from "@/components/Footer";
import { HeroHeadline } from "@/components/HeroHeadline";
import { HomeGalleryWall, type HomeGalleryImage } from "@/components/HomeGalleryWall";
import { auricSignalProject } from "@/lib/projects/auric-signal";
import { traceProject } from "@/lib/projects/trace";
import { sourcefoldProject } from "@/lib/projects/sourcefold";
import { smartPuppyProject } from "@/lib/projects/smart-puppy";
import { professionalExperienceProject } from "@/lib/projects/professional-experience";
import styles from "./page.module.css";

// Image src/width/height come from each project's own centralized hero/
// heroDark definition (lib/projects/*.ts) — the same one the case-study
// page's <ProjectHeader> renders — so Home and the project detail page can
// never drift onto different hero assets. Only the alt text is Home-specific
// (a shorter, homepage-appropriate description).
const projects = [
  {
    number: "01",
    title: "AURIC SIGNAL",
    tagline: "AI-Assisted Investment Decision Support",
    disciplines: "Product Design · UX/UI · Prototyping",
    projectType: "Independent Project · 2026",
    href: "/work/auric-signal",
    image: auricSignalProject.hero!.src,
    imageDark: auricSignalProject.heroDark?.src,
    imageWidth: auricSignalProject.hero!.width,
    imageHeight: auricSignalProject.hero!.height,
    imageAlt:
      "AURIC SIGNAL mobile interface surrounded by portfolio insights and decision-support modules.",
  },
  {
    number: "02",
    title: "SOURCEFOLD",
    tagline: "AI-Assisted Content Operations Platform",
    disciplines: "Enterprise UX · Workflow Systems · AI",
    projectType: "Independent Project · 2026",
    href: "/work/sourcefold",
    image: sourcefoldProject.hero!.src,
    imageDark: sourcefoldProject.heroDark?.src,
    imageWidth: sourcefoldProject.hero!.width,
    imageHeight: sourcefoldProject.hero!.height,
    imageAlt:
      "SOURCEFOLD global content operations workspace shown in light and dark modes with human review, source-change impact, and publishing-readiness panels.",
  },
  {
    number: "03",
    title: "TRACE",
    tagline: "Connected Access & Identity Experience",
    disciplines: "Service Design · UX/UI · Connected Systems",
    projectType: "Independent Project · 2026",
    href: "/work/trace",
    image: traceProject.hero!.src,
    imageDark: traceProject.heroDark?.src,
    imageWidth: traceProject.hero!.width,
    imageHeight: traceProject.hero!.height,
    imageAlt:
      "TRACE credential and dock beside a mobile permission-control interface.",
  },
  {
    number: "04",
    title: "SMART PUPPY",
    tagline: "Connected Robotic Companion Experience",
    disciplines: "Connected Experience · UX/UI · Industrial Design",
    projectType: "Award-Winning Independent Project · 2021",
    awards: "IDA Silver · EPDA Honorable Mention · Rookie Awards Highly Commended",
    href: "/work/smart-puppy",
    image: smartPuppyProject.hero!.src,
    imageDark: smartPuppyProject.heroDark?.src,
    imageWidth: smartPuppyProject.hero!.width,
    imageHeight: smartPuppyProject.hero!.height,
    imageAlt:
      "SMART PUPPY robotic companion beside its mobile app home interface.",
  },
  {
    number: "05",
    title: "PROFESSIONAL EXPERIENCE",
    tagline: "Commercial Product Development & Design Leadership",
    disciplines: "Design Leadership · Engineering Collaboration · Shipped Products",
    projectType: "Professional Work · 2021–2026",
    ctaLabel: "View work",
    href: "/work/professional-experience",
    image: professionalExperienceProject.hero!.src,
    imageDark: professionalExperienceProject.heroDark?.src,
    imageWidth: professionalExperienceProject.hero!.width,
    imageHeight: professionalExperienceProject.hero!.height,
    imageAlt:
      "A selection of commercial consumer products including a blender, adjustable dumbbells, robot vacuum, styling brush, and massage gun.",
  },
] as const;

// Compact, hand-authored (no icon-library dependency for four glyphs): small
// monochrome stroke icons, one per capability card. See .capabilityIcon.
function IconLayout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line className={styles.iconLayoutDivider} x1="9" y1="3" x2="9" y2="21" />
    </svg>
  );
}

function IconNetwork({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle className={styles.iconNetworkNodeA} cx="6" cy="6" r="2.4" />
      <circle className={styles.iconNetworkNodeB} cx="18" cy="6" r="2.4" />
      <circle className={styles.iconNetworkNodeC} cx="12" cy="18" r="2.4" />
      <line x1="8.1" y1="7.3" x2="10.3" y2="16" />
      <line x1="15.9" y1="7.3" x2="13.7" y2="16" />
      <line x1="8.4" y1="6" x2="15.6" y2="6" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g className={styles.iconUsersLeft}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      </g>
      <g className={styles.iconUsersRight}>
        <circle cx="17.5" cy="7.5" r="2.3" />
        <path d="M14.9 13.3c2.7.3 4.6 2.3 4.6 5.2" />
      </g>
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline className={styles.iconCodeLeft} points="8 6 3 12 8 18" />
      <polyline className={styles.iconCodeRight} points="16 6 21 12 16 18" />
    </svg>
  );
}

const capabilities = [
  {
    number: "01",
    title: "Product & UX",
    Icon: IconLayout,
    skills: [
      "Product Strategy",
      "UX/UI Design",
      "Interaction Design",
      "Information Architecture",
      "User Flows & Journey Mapping",
      "Accessibility-Minded Design",
    ],
  },
  {
    number: "02",
    title: "Systems & Experience",
    Icon: IconNetwork,
    skills: [
      "Systems Thinking",
      "Service Design",
      "Physical–Digital Interaction",
      "Connected Experiences",
      "Multi-Touchpoint Experience",
      "Cross-Platform / Responsive Thinking",
    ],
  },
  {
    number: "03",
    title: "Leadership & Delivery",
    Icon: IconUsers,
    skills: [
      "Cross-Functional Collaboration",
      "Stakeholder Alignment",
      "Design Direction",
      "Design Critique",
      "Implementation Collaboration",
      "Production & Delivery Continuity",
    ],
  },
  {
    number: "04",
    title: "Prototyping & Build",
    Icon: IconCode,
    skills: [
      "Interactive Prototyping",
      "AI-Assisted Prototyping",
      "Design-to-Code Iteration",
      "Responsive Web & Mobile",
      "HTML/CSS",
      "Figma / Lovable / Claude Code",
    ],
  },
] as const;

// Curated for the homepage only, in a strictly locked editorial order across
// three explicit rows — alternates physical/industrial and digital/UX work
// deliberately (never grouped by discipline, never re-sorted) so the practice
// reads as spanning both. Row membership and order are intentional composition
// choices, not derived data — see HomeGalleryWall for how each row is laid out.
// See lib/gallery/projects.ts for the full, browsable set at /gallery.
const explorationRows: HomeGalleryImage[][] = [
  [
    {
      src: "/gallery/motion/presentation-canvas.jpg",
      video: "/gallery/motion/presentation-canvas.mp4",
      alt: "SAYO real-time translation app shown across three phone screens.",
      width: 1600,
      height: 1200,
    },
    {
      src: "/gallery/airport-operations-dashboard.png",
      alt: "Airport terminal operations dashboard with real-time gate, flight, passenger flow, and ground service monitoring",
      width: 5670,
      height: 4259,
    },
    {
      src: "/gallery/headphone.png",
      alt: "Over-ear headphones with a brushed metal headband and contrasting cushion lining.",
      width: 1122,
      height: 1402,
    },
  ],
  [
    {
      src: "/gallery/Bike.png",
      alt: "Runway road bike frame and seatpost detail showing an integrated LED taillight.",
      width: 1086,
      height: 1448,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22 2026 at 10_30_07 PM (3).png",
      alt: "Drive History screen showing an autonomous trip route, distance, and weekly driving performance.",
      width: 1448,
      height: 1086,
    },
    {
      src: "/gallery/motion/music-player-motion-playful-intro.jpg",
      video: "/gallery/motion/music-player-motion-playful-intro.mp4",
      alt: "Midnight Drift music player interface with the tagline \"Play this mood.\"",
      width: 1600,
      height: 1200,
    },
  ],
  [
    {
      src: "/gallery/fitness dashboard.png",
      alt: "MotionPulse dashboard showing muscle load, performance readiness, and recovery balance on a tablet.",
      width: 3312,
      height: 2480,
      widthGroup: "row3-left",
      matchGroupWidthTo: ["/gallery/headphone.png", "/gallery/ChatGPT Image Aug 22 2026 at 10_30_07 PM (3).png"],
    },
    {
      src: "/gallery/motion/quote.jpg",
      video: "/gallery/motion/quote.mp4",
      alt: "Blue athletic training graphic with the headline \"Progress feels different here.\"",
      width: 1200,
      height: 1600,
      widthGroup: "row3-left",
    },
    {
      src: "/gallery/bottle.png",
      alt: "Portable hydration bottle in slate blue with an orange loop strap, held in hand.",
      width: 1024,
      height: 1536,
    },
  ],
];

export default function HomePage() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <h1 id="home-title" className={styles.heroTitle}>
          <HeroHeadline />
        </h1>
        <div className={styles.heroBottom}>
          <a href="#selected-work" className={styles.textLink}>
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
          <div className={styles.heroBottomContent}>
            <p className={styles.heroIntro}>
              New York–based product designer bringing 5+ years of commercial
              design experience to digital products, AI-assisted systems, and
              connected physical–digital experiences.
            </p>
            <div className={styles.heroCapabilities}>
              <p className={styles.heroCapability}>Product Design</p>
              <p className={styles.heroCapability}>AI & Systems</p>
              <p className={styles.heroCapability}>Connected Experiences</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="work-title">
        <header id="selected-work" className={styles.sectionHeader}>
          <p className={styles.sectionIndex}>Selected Work</p>
          <div className={styles.sectionHeading}>
            <h2 id="work-title">Across scales. One design practice.</h2>
            <p className={styles.sectionHeadingSupporting}>
              Independent concepts and professional work across physical products,
              connected experiences, and intelligent systems.
            </p>
          </div>
        </header>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <div className={styles.projectInfo}>
                <p className={styles.projectNumber}>{project.number}</p>
                <div className={styles.projectIdentity}>
                  <h3>{project.title}</h3>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                </div>
                <div className={styles.projectMeta}>
                  <p className={styles.projectType}>{project.projectType}</p>
                  <p className={styles.disciplines}>{project.disciplines}</p>
                  {"awards" in project ? (
                    <p className={styles.projectAwards}>{project.awards}</p>
                  ) : null}
                </div>
                <Link href={project.href} className={styles.caseLink}>
                  {"ctaLabel" in project ? project.ctaLabel : "View case study"}{" "}
                  <span aria-hidden="true" className={styles.linkArrow}>↗</span>
                </Link>
              </div>
              <Link
                href={project.href}
                className={styles.projectMedia}
                aria-label={`View ${project.title} case study`}
              >
                {/* Named to match components/ProjectHeader.tsx's own hero
                    ViewTransition (same "project-hero-<slug>" name) — the
                    browser morphs this image into the case-study hero image
                    on click. No wrapper div around the light/dark pair here:
                    a display:contents wrapper was tried first and confirmed
                    (via instrumenting document.getAnimations()) to silently
                    break the named pair from ever forming — ViewTransition
                    needs to sit directly on the pair's own DOM, not behind an
                    intermediate contents box. */}
                <ViewTransition
                  name={`project-hero-${project.href.split("/").pop()}`}
                  share="project-morph"
                  default="none"
                >
                  {"image" in project ? (
                    <>
                      <div className={styles.projectMediaLight}>
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          width={project.imageWidth}
                          height={project.imageHeight}
                        />
                      </div>
                      {project.imageDark ? (
                        // No `sizes`: with it, Chromium never resolves the
                        // srcset for whichever variant becomes visible via the
                        // data-theme/:has() CSS toggle above (confirmed by
                        // isolated testing — img.currentSrc stays permanently
                        // empty after a live theme-toggle click, on both a fresh
                        // load and a runtime toggle). Dropping `sizes` here is
                        // what actually makes the theme switch work; Next still
                        // serves a responsive srcset, the browser just assumes
                        // 100vw when picking a candidate.
                        <div className={styles.projectMediaDark}>
                          <Image
                            src={project.imageDark}
                            alt={project.imageAlt}
                            width={project.imageWidth}
                            height={project.imageHeight}
                          />
                        </div>
                      ) : null}
                    </>
                  ) : (
                    // No final cover yet — a restrained text placeholder in
                    // the exact same media box (same position/overflow/
                    // background/aspect-ratio as every other project's
                    // cover), not a missing-image state.
                    <div className={styles.projectMediaPlaceholder}>
                      <span className={styles.projectMediaPlaceholderLabel} aria-hidden="true">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </ViewTransition>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="capabilities-title">
        <div className={styles.capabilitiesHeader}>
          <p className={styles.sectionIndex}>Capabilities</p>
          <div className={styles.capabilitiesHeading}>
            <h2 id="capabilities-title">Strategy, systems, and craft.</h2>
            <p className={styles.capabilitiesSubtitle}>
              Designing across products, experiences, and systems — from strategy and interaction to delivery.
            </p>
          </div>
        </div>
        <div className={styles.capabilityCards}>
          {capabilities.map(({ number, title, Icon, skills }) => (
            <div className={styles.capabilityCard} key={number}>
              <div className={styles.capabilityCardHead}>
                <Icon className={styles.capabilityIcon} />
                <span className={styles.capabilityNumber}>{number}</span>
              </div>
              <h3>{title}</h3>
              <p className={styles.capabilitySkills}>{skills.join(" / ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="selected-explorations" className={styles.gallery} aria-labelledby="gallery-title">
        <header className={styles.sectionHeaderCompact}>
          <p className={styles.sectionIndex}>Selected Explorations</p>
          <h2 id="gallery-title">Product design, in form and detail.</h2>
          <p>A closer look at product and interface design across physical and digital work.</p>
        </header>
        <HomeGalleryWall
          rows={explorationRows}
          cta={{ href: "/gallery", label: "View more", arrowClassName: styles.linkArrow }}
        />
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.contactRow}>
          <h2 id="contact-title">Let&apos;s create products people can understand, trust, and use.</h2>
          <div className={styles.contactInfo}>
            <p className={styles.contactAvailability}>
              Open to product design, experience design, and design leadership / project coordination opportunities.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:ruxiadesign@gmail.com">
                Email me <span aria-hidden="true" className={styles.linkArrow}>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/ruxiawang/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true" className={styles.linkArrow}>↗</span>
              </a>
              <a href="https://www.behance.net/ruxiawangdesign" target="_blank" rel="noreferrer">
                Behance <span aria-hidden="true" className={styles.linkArrow}>↗</span>
              </a>
              <a href="https://www.instagram.com/ruxia.art/" target="_blank" rel="noreferrer">
                Instagram <span aria-hidden="true" className={styles.linkArrow}>↗</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
