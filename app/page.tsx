import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  {
    number: "01",
    title: "AURIC SIGNAL",
    tagline: "AI Portfolio Intelligence",
    description:
      "A decision-support experience that turns complex portfolio signals into clear, explainable actions.",
    disciplines: "Product Strategy · UX/UI · AI Experience",
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
    tagline: "Visible Permission",
    description:
      "A physical–digital system that makes data access visible, understandable, reversible, and controllable.",
    disciplines: "Experience Design · Product Design · Systems Thinking",
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
    title: "SMART PUPPY",
    tagline: "Connected Companion",
    description:
      "A robotic companion experience connecting expressive industrial design, behavior, motion, and a complete mobile app.",
    disciplines: "Industrial Design · UX/UI · Connected Experience",
    href: "/work/smart-puppy",
    image: "/work/smart-puppy/smart-puppy-hero.png",
    imageDark: undefined,
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "SMART PUPPY robotic companion beside its mobile app home interface.",
  },
  {
    number: "04",
    title: "PROFESSIONAL EXPERIENCE",
    tagline: "Products for Everyday Life",
    description:
      "A collection of commercial products designed across wellness, fitness, personal care, smart home, and lifestyle categories.",
    disciplines: "Industrial Design · Consumer Products · Product Development",
    href: "/work/professional-experience",
    image: "/work/professional-experience/professional-experience-hero.png",
    imageDark: undefined,
    imageWidth: 1915,
    imageHeight: 821,
    imageAlt:
      "A selection of commercial consumer products including a blender, adjustable dumbbells, robot vacuum, styling brush, and massage gun.",
    projectType: "Professional Work · 2021–2026",
  },
] as const;

const gallery = [
  { src: "/gallery/Watch Exploded View.png", alt: "Exploded view of a watch design." },
  { src: "/gallery/e-bike.png", alt: "Electric bicycle product concept." },
  {
    src: "/work/auric-signal/auric-primary-home.png",
    alt: "AURIC SIGNAL mobile app home screen with portfolio health and priority signals.",
  },
  { src: "/gallery/shoes sketch.png", alt: "Footwear design sketch exploration." },
  {
    src: "/work/trace/trace-organization-dashboard.png",
    alt: "TRACE organization dashboard showing requests, active sessions, and activity.",
  },
  { src: "/gallery/fitness dashboard.png", alt: "Fitness dashboard interface exploration." },
] as const;

export default function HomePage() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <p className={styles.kicker}>Industrial Designer · Experience Designer</p>
        <h1 id="home-title" className={styles.heroTitle}>
          Designing Products,
          <br />
          Connected Experiences,
          <br />
          and Systems.
        </h1>
        <div className={styles.heroBottom}>
          <p className={styles.heroIntro}>
            I&apos;m Ruxia Wang, a New York–based designer working across physical
            products, digital interfaces, and AI-assisted experiences.
          </p>
          <a href="#selected-work" className={styles.textLink}>
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="selected-work" className={styles.work} aria-labelledby="work-title">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionIndex}>Selected Work</p>
          <h2 id="work-title">Four projects. One design practice.</h2>
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
                <div>
                  <p className={styles.projectType}>
                    {"projectType" in project
                      ? project.projectType
                      : "Independent Concept Project · 2026"}
                  </p>
                  <h3>{project.title}</h3>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.disciplines}>{project.disciplines}</p>
                <Link href={project.href} className={styles.caseLink}>
                  View case study <span aria-hidden="true">↗</span>
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

      <section id="gallery" className={styles.gallery} aria-labelledby="gallery-title">
        <header className={styles.sectionHeaderCompact}>
          <p className={styles.sectionIndex}>Gallery</p>
          <h2 id="gallery-title">Selected explorations.</h2>
          <p>Form, interaction, visualization, and ideas in progress.</p>
        </header>
        <div className={styles.galleryGrid}>
          {gallery.map((item, index) => (
            <figure
              className={`${styles.galleryItem} ${index === 0 || index === 5 ? styles.galleryWide : ""}`}
              key={item.src}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 680px) 100vw, 50vw" />
            </figure>
          ))}
          <Link href="/gallery" className={styles.galleryCta} aria-label="View full gallery">
            <span>View full gallery</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="about" className={styles.about} aria-labelledby="about-title">
        <p className={styles.sectionIndex}>About</p>
        <div className={styles.aboutLead}>
          <h2 id="about-title">Designing across physical and digital.</h2>
          <p>
            I work from research and opportunity framing through form development,
            interface design, visualization, and production support—connecting the
            object, the interface, and the experience around it.
          </p>
        </div>
        <div className={styles.capabilities}>
          <div>
            <h3>Strategy</h3>
            <p>Research, opportunity framing, systems thinking, and design direction.</p>
          </div>
          <div>
            <h3>Design</h3>
            <p>Form, ergonomics, CMF, DFM, visualization, and production support.</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>UX flows, UI systems, service touchpoints, and intelligent behaviors.</p>
          </div>
        </div>
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
        <footer className={styles.footer}>
          <span>© 2026 Ruxia Wang</span>
          <span>New York, NY</span>
          <a href="#main-content">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
