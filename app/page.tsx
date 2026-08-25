import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HomeGalleryWall, type HomeGalleryImage } from "@/components/HomeGalleryWall";
import styles from "./page.module.css";

const projects = [
  {
    number: "01",
    title: "AURIC SIGNAL",
    tagline: "AI Portfolio Intelligence",
    disciplines: "Product Strategy · UX/UI · AI Experience",
    projectType: "Independent Project · 2026",
    href: "/work/auric-signal",
    // AURIC has approved light and dark hero compositions (same assets used
    // on its case-study page, see lib/projects/auric-signal.ts hero/heroDark).
    image: "/work/auric-signal/auric-hero-composition.png",
    imageDark: "/work/auric-signal/auric-hero-composition-dark.png",
    imageWidth: 1774,
    imageHeight: 887,
    imageAlt:
      "AURIC SIGNAL mobile interface surrounded by portfolio insights and decision-support modules.",
  },
  {
    number: "02",
    title: "TRACE",
    tagline: "Visible Permission System",
    disciplines: "Experience Design · Systems Thinking · Physical–Digital",
    projectType: "Independent Project · 2026",
    href: "/work/trace",
    // TRACE has only one approved hero asset (no heroDark in
    // lib/projects/trace.ts) — it stays the same image in both themes.
    image: "/work/trace/trace-hero.png",
    imageDark: undefined,
    imageWidth: 1774,
    imageHeight: 887,
    imageAlt:
      "TRACE credential and dock beside a mobile permission-control interface.",
  },
  {
    number: "03",
    title: "PROFESSIONAL EXPERIENCE",
    tagline: "Commercial Product Development",
    disciplines: "Product Design · Engineering Collaboration · Shipped Products",
    projectType: "Professional Work · 2021–2026",
    ctaLabel: "View work",
    href: "/work/professional-experience",
    image: "/work/professional-experience/professional-experience-hero.png",
    imageDark: undefined,
    imageWidth: 1915,
    imageHeight: 821,
    imageAlt:
      "A selection of commercial consumer products including a blender, adjustable dumbbells, robot vacuum, styling brush, and massage gun.",
  },
  {
    number: "04",
    title: "SMART PUPPY",
    tagline: "Award-Winning Robotic Companion",
    disciplines: "Industrial Design · UX/UI · Connected Experience",
    projectType: "Independent Project · 2021",
    awards: "IDA Silver · EPDA Honorable Mention · Rookie Awards Highly Commended",
    href: "/work/smart-puppy",
    image: "/work/smart-puppy/smart-puppy-hero.png",
    imageDark: undefined,
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "SMART PUPPY robotic companion beside its mobile app home interface.",
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
      src: "/gallery/headphone.png",
      alt: "Over-ear headphones in matte black with copper-toned ear cushions.",
      width: 1122,
      height: 1402,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22, 2026 at 10_30_07 PM (3).png",
      alt: "Autonomous drive history mobile interface staged on dark rock.",
      width: 1448,
      height: 1086,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22, 2026 at 10_50_45 PM (2).png",
      alt: "AI vision drone render with camera gimbal and folded rotor arms.",
      width: 1448,
      height: 1086,
    },
    {
      src: "/gallery/Precision Dial in Shadow.png",
      alt: "Macro detail of a black speaker's knurled volume dial in dramatic shadow.",
      width: 1254,
      height: 1254,
    },
  ],
  [
    {
      src: "/gallery/fitness dashboard.png",
      alt: "MotionPulse dashboard showing muscle load, performance readiness, and recovery balance on a tablet.",
      width: 3312,
      height: 2480,
    },
    {
      src: "/gallery/Watch Exploded View.png",
      alt: "Exploded construction view of the chronograph case, movement, and strap.",
      width: 1536,
      height: 1024,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22, 2026 at 10_50_48 PM (10).png",
      alt: "Handheld control device with a textured grip and blue-gray dial.",
      width: 1448,
      height: 1086,
    },
  ],
  [
    {
      src: "/gallery/Bike.png",
      alt: "Close-up of a bicycle seat post and frame detail with an integrated rear light.",
      width: 1086,
      height: 1448,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22, 2026 at 10_30_07 PM (6).png",
      alt: "LeaseFlow mobile app showing home search, rent overview, and a matched listing.",
      width: 1448,
      height: 1086,
    },
    {
      src: "/gallery/ChatGPT Image Aug 22, 2026 at 10_30_06 PM (1).png",
      alt: "Nova Vault file-management dashboard on a laptop staged on dark rock.",
      width: 1448,
      height: 1086,
    },
  ],
];

export default function HomePage() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <p className={styles.kicker}>Product Designer · Experience Designer</p>
        <h1 id="home-title" className={styles.heroTitle}>
          Designing Products,
          <br />
          Connected Experiences,
          <br />
          and Systems.
        </h1>
        <div className={styles.heroBottom}>
          <p className={styles.heroIntro}>
            New York–based product designer working across digital products,
            AI-assisted experiences, and connected physical–digital systems.
          </p>
          <a href="#selected-work" className={styles.textLink}>
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.heroCapabilities}>
          <div className={styles.heroCapability}>
            <p className={styles.heroCapabilityTitle}>01 — Connected Experiences</p>
            <p className={styles.heroCapabilityBody}>
              UX/UI, interaction design, user journeys, service systems, and physical–digital product ecosystems.
            </p>
          </div>
          <div className={styles.heroCapability}>
            <p className={styles.heroCapabilityTitle}>02 — Physical Product Design</p>
            <p className={styles.heroCapabilityBody}>
              Industrial design, form development, CMF, DFM, visualization, and production support.
            </p>
          </div>
          <div className={styles.heroCapability}>
            <p className={styles.heroCapabilityTitle}>03 — Design Leadership</p>
            <p className={styles.heroCapabilityBody}>
              Cross-functional collaboration, stakeholder alignment, design critique, and AI-assisted workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="selected-work" className={styles.work} aria-labelledby="work-title">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionIndex}>Selected Work</p>
          <h2 id="work-title">Across scales. One design practice.</h2>
          <p>
            Independent concepts and professional work across physical products,
            connected experiences, and intelligent systems.
          </p>
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
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <Link
                href={project.href}
                className={styles.projectMedia}
                aria-label={`View ${project.title} case study`}
              >
                <div className={styles.projectMediaLight}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    sizes="(max-width: 760px) 100vw, 72vw"
                  />
                </div>
                {project.imageDark ? (
                  <div className={styles.projectMediaDark}>
                    <Image
                      src={project.imageDark}
                      alt={project.imageAlt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      sizes="(max-width: 760px) 100vw, 72vw"
                    />
                  </div>
                ) : null}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="capabilities-title">
        <div className={styles.capabilitiesHeader}>
          <p className={styles.sectionIndex}>Capabilities</p>
          <h2 id="capabilities-title">Strategy, systems, and craft.</h2>
        </div>
        <div className={styles.capabilityColumns}>
          <div className={styles.capabilityGroup}>
            <p className={styles.capabilityNumber}>01</p>
            <h3>Product &amp; UX</h3>
            <ul>
              <li>Product Strategy</li>
              <li>UX/UI Design</li>
              <li>Interaction Design</li>
              <li>Information Architecture</li>
              <li>User Flows &amp; Journey Mapping</li>
              <li>Accessibility-Minded Design</li>
            </ul>
          </div>
          <div className={styles.capabilityGroup}>
            <p className={styles.capabilityNumber}>02</p>
            <h3>Systems &amp; Experience</h3>
            <ul>
              <li>Systems Thinking</li>
              <li>Service Design</li>
              <li>Physical–Digital Interaction</li>
              <li>Connected Experiences</li>
              <li>Multi-Touchpoint Experience</li>
              <li>Cross-Platform / Responsive Thinking</li>
            </ul>
          </div>
          <div className={styles.capabilityGroup}>
            <p className={styles.capabilityNumber}>03</p>
            <h3>Leadership &amp; Delivery</h3>
            <ul>
              <li>Cross-Functional Collaboration</li>
              <li>Stakeholder Alignment</li>
              <li>Project Coordination</li>
              <li>Design Critique</li>
              <li>Implementation Collaboration</li>
              <li>Production &amp; Delivery Continuity</li>
            </ul>
          </div>
          <div className={styles.capabilityGroup}>
            <p className={styles.capabilityNumber}>04</p>
            <h3>Prototyping &amp; Build</h3>
            <ul>
              <li>Interactive Prototyping</li>
              <li>AI-Assisted Prototyping</li>
              <li>Design-to-Code Iteration</li>
              <li>Responsive Web &amp; Mobile</li>
              <li>HTML/CSS</li>
            </ul>
            <p className={styles.capabilityTools}>Figma · Lovable · Claude Code</p>
          </div>
        </div>
      </section>

      <section id="selected-explorations" className={styles.gallery} aria-labelledby="gallery-title">
        <header className={styles.sectionHeaderCompact}>
          <p className={styles.sectionIndex}>Selected Explorations</p>
          <h2 id="gallery-title">Product design, in form and detail.</h2>
          <p>A closer look at product and interface design across physical and digital work.</p>
        </header>
        <HomeGalleryWall rows={explorationRows} cta={{ href: "/gallery", label: "View more" }} />
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.sectionIndex}>Contact</p>
        <div className={styles.contactRow}>
          <h2 id="contact-title">
            Let&apos;s create products people can understand, trust, and use.
          </h2>
          <div className={styles.contactLinks}>
            <a href="mailto:ruxiadesign@gmail.com">Email me ↗</a>
            <a href="https://www.linkedin.com/in/ruxiawang/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://www.behance.net/ruxiawangdesign" target="_blank" rel="noreferrer">
              Behance ↗
            </a>
            <a href="https://www.instagram.com/ruxia.art/" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
