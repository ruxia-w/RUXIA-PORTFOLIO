import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import styles from "./page.module.css";

const howIWork = [
  {
    title: "Think in Systems",
    body: "I look beyond individual screens to understand the relationships between people, information, touchpoints, and technology. Mapping flows, states, dependencies, and edge cases helps me shape experiences that work coherently across the larger product system.",
  },
  {
    title: "Design Through Constraints",
    body: "I treat constraints as part of the design problem, not something to resolve after the design is finished. I weigh user needs, business goals, technical feasibility, and implementation realities to make deliberate trade-offs and move ideas toward viable solutions.",
  },
  {
    title: "Prototype Toward Reality",
    body: "I use prototyping to move ideas beyond static screens and test how an experience actually works. By combining design tools with AI-assisted design-to-code workflows, I build interactive prototypes, explore implementation possibilities, and iterate with a clearer understanding of how design decisions translate into working experiences.",
  },
] as const;

const education = [
  {
    name: "Savannah College of Art and Design (SCAD)",
    line1: "MFA, Industrial Design",
    line2: "United States",
  },
  {
    name: "Yancheng Institute of Technology",
    line1: "BFA, Industrial Design",
    line2: "China",
  },
  {
    name: "International Study — Florence, Italy",
    line1: "Università degli Studi di Firenze & Polimoda",
    line2: "Industrial Design · Graphic Design · Fashion Design",
  },
] as const;

const recognition = [
  { name: "IDA Silver", line1: "Robotic Toy · 2021" },
  { name: "European Product Design Award", line1: "Honorable Mention · 2021" },
  { name: "Rookie Awards", line1: "Highly Commended · 2021" },
] as const;

export const metadata: Metadata = {
  title: "About — Ruxia Wang",
  description:
    "Ruxia Wang is a New York–based Product and Experience Designer working across digital products, connected experiences, and emerging technologies.",
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
          <p className={styles.heroHello}>hello</p>
          <p className={styles.heroStatement}>
            Designing across products, experiences, and systems.
          </p>
          <p className={styles.heroBody}>
            I&apos;m a Product and Experience Designer based in New York, working
            across digital products, connected experiences, and emerging
            technologies.
          </p>
          <p className={styles.heroBody}>
            My background in industrial design shapes how I approach product
            problems — with an understanding of systems, physical interaction,
            real-world constraints, and how ideas move from concept toward
            implementation. Today, I bring that perspective into digital
            product design, combining product thinking, interaction design,
            visual craft, and prototyping to make complex experiences feel
            clear and considered.
          </p>
          <div className={styles.heroContactLinks}>
            <a href="mailto:ruxiadesign@gmail.com" className={styles.heroLink}>
              Email <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ruxiawang/"
              target="_blank"
              rel="noreferrer"
              className={styles.heroLink}
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.background} aria-labelledby="background-title">
        <p className={styles.sectionIndex}>01 / Background</p>
        <div className={styles.backgroundIntro}>
          <h2 id="background-title">Professional background.</h2>
          <div>
            <div className={styles.backgroundText}>
              <div>
                <p>
                  Before expanding my practice into digital product and
                  experience design, I built a strong foundation in commercial
                  product development, working across the full process from
                  early concepts and prototyping through implementation and
                  production.
                </p>
                <p>
                  Over the past five years, I&apos;ve also taken on increasing
                  design leadership — guiding design work, supporting teams
                  through critique and iteration, and collaborating across
                  product, engineering, marketing, production, and other
                  disciplines. These experiences taught me to balance user
                  needs, business goals, technical feasibility, and execution
                  while building alignment around design decisions.
                </p>
              </div>
              <p>
                Today, I bring that perspective into digital product and
                experience design — combining systems thinking, cross-functional
                collaboration, and hands-on craft to move complex ideas toward
                clear, viable experiences.
              </p>
            </div>
          </div>
        </div>
        <Image
          className={styles.studioImage}
          src="/about/design-studio-wall.png"
          alt="Design studio wall filled with product sketches, dimensioned drawings, and prototypes"
          width={1492}
          height={525}
        />
      </section>

      <section className={styles.expertise} aria-labelledby="how-i-work-title">
        <header className={styles.expertiseHeader}>
          <p className={styles.sectionIndex}>02 / How I Work</p>
          <h2 id="how-i-work-title">Systems, trade-offs, and craft.</h2>
        </header>
        <div className={styles.capabilityGrid}>
          {howIWork.map((item, index) => (
            <article className={styles.capability} key={item.title}>
              <p className={styles.capabilityNumber}>{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.education} aria-labelledby="education-title">
        <p className={styles.sectionIndex}>03 / Education &amp; Recognition</p>
        <h2 id="education-title">Education and recognition.</h2>
        <div className={styles.educationGrid}>
          <div>
            <p className={styles.sectionIndex}>Education</p>
            <div className={styles.entryList}>
              {education.map((entry) => (
                <div className={styles.entry} key={entry.name}>
                  <h3>{entry.name}</h3>
                  <p>{entry.line1}</p>
                  <p>{entry.line2}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.sectionIndex}>Recognition</p>
            <div className={styles.entryList}>
              {recognition.map((entry) => (
                <div className={styles.entry} key={entry.name}>
                  <h3>{entry.name}</h3>
                  <p>{entry.line1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.sectionIndex}>04 / Get in Touch</p>
        <div className={styles.contactRow}>
          <div className={styles.contactHeading}>
            <p className={styles.contactSubtitle}>
              I&apos;m always interested in thoughtful collaborations, complex
              product challenges, and opportunities to shape meaningful
              experiences across digital and physical systems.
            </p>
            <h2 id="contact-title">Get in Touch</h2>
          </div>
          <div className={styles.contactAside}>
            <p>
              Interested in thoughtful products, complex systems, and new ways
              of designing with technology.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:ruxiadesign@gmail.com">Email ↗</a>
              <a href="https://www.linkedin.com/in/ruxiawang/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
