import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const capabilities = [
  {
    title: "Team Leadership",
    body: "Lead a five-person China-based 3D design team through project assignments, design reviews, technical guidance, quality standards, mentoring, and performance feedback.",
  },
  {
    title: "Program Coordination",
    body: "Coordinate concurrent programs across New York and China, aligning priorities, schedules, design milestones, factory feedback, dependencies, and delivery risks.",
  },
  {
    title: "Quality & Workflow",
    body: "Establish and reinforce modeling, rendering, file-management, review, and AI-assisted workflow standards to improve consistency, communication, and delivery quality.",
  },
  {
    title: "Physical Product Design",
    body: "I develop physical products through research, form exploration, ergonomics, CMF, visualization, DFM, and production thinking. My goal is to balance user needs, visual clarity, feasibility, and manufacturing reality.",
  },
  {
    title: "Connected Experiences",
    body: "I think beyond the object itself, connecting physical products with interfaces, services, environments, and user journeys to create coherent end-to-end experiences.",
  },
  {
    title: "AI-Augmented Design",
    body: "I integrate AI into the design process to expand exploration, accelerate iteration, improve visualization, and communicate ideas more effectively. Creative direction, evaluation, system logic, and final design decisions remain designer-led.",
  },
] as const;

export const metadata: Metadata = {
  title: "About — Ruxia Wang",
  description:
    "Ruxia Wang is a New York–based industrial designer and global 3D leader working across products, experiences, and systems.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image
          className={styles.portrait}
          src="/about/ruxia-wang-portrait.png"
          alt="Portrait of Ruxia Wang"
          width={547}
          height={711}
          priority
        />
        <div className={styles.heroCopy}>
          <h1 id="about-title">ABOUT</h1>
          <p className={styles.eyebrow}>Hello</p>
          <h2>Designing across products, experiences, and systems.</h2>
          <p>
            I&apos;m Ruxia Wang, a New York–based industrial designer and global 3D
            leader working across commercial product development, connected
            experiences, team leadership, and AI-assisted design workflows.
          </p>
          <p>
            I combine hands-on design experience with systems thinking,
            cross-functional collaboration, and production knowledge to create
            thoughtful, buildable, and clearly communicated solutions.
          </p>
          <div className={styles.inlineLinks}>
            <a href="mailto:ruxiadesign@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/ruxiawang/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <section className={styles.background} aria-labelledby="background-title">
        <p className={styles.sectionIndex}>01 / Background</p>
        <div className={styles.backgroundIntro}>
          <h2 id="background-title">Professional background.</h2>
          <div className={styles.backgroundText}>
            <div>
              <p>
                My background is rooted in end-to-end product development across
                consumer electronics, fitness, wellness, and connected products.
                Over five years at Tzumi Electronics, I progressed from Industrial
                Designer to Senior Industrial Designer and Global 3D Leader.
              </p>
              <p>
                I have worked across research, concept development, 3D design, CMF,
                visualization, packaging, factory coordination, sample review,
                production support, and launch communication.
              </p>
            </div>
            <p>
              Alongside hands-on design work, I lead a five-person China-based 3D
              design team and collaborate with New York designers and creative
              leadership to coordinate priorities, review quality, resolve delivery
              challenges, and support concurrent commercial programs.
            </p>
          </div>
        </div>
        <Image
          className={styles.studioImage}
          src="/about/design-studio-wall.png"
          alt="Industrial design studio wall filled with product sketches and prototypes"
          width={1492}
          height={525}
        />
      </section>

      <section className={styles.expertise} aria-labelledby="expertise-title">
        <header className={styles.expertiseHeader}>
          <p className={styles.sectionIndex}>02 / Practice</p>
          <h2 id="expertise-title">Across products, teams, and systems.</h2>
        </header>
        <div className={styles.capabilityGrid}>
          {capabilities.map((capability, index) => (
            <article className={styles.capability} key={capability.title}>
              <p className={styles.capabilityNumber}>{String(index + 1).padStart(2, "0")}</p>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.sectionIndex}>03 / Contact</p>
        <div className={styles.contactRow}>
          <h2 id="contact-title">
            Let&apos;s create products people can understand, trust, and use.
          </h2>
          <div className={styles.contactAside}>
            <p>
              Open to industrial design, product design, and connected experience
              opportunities.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:ruxiadesign@gmail.com">Email me ↗</a>
              <a href="https://www.linkedin.com/in/ruxiawang/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://www.behance.net/ruxiawangdesign" target="_blank" rel="noreferrer">Behance ↗</a>
              <a href="https://www.instagram.com/ruxia.art/" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
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
