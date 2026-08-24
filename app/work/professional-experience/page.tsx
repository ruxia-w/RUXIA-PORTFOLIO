import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { professionalExperienceProject } from "@/lib/projects/professional-experience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${professionalExperienceProject.title} — Ruxia Wang`,
  description: professionalExperienceProject.subtitle,
};

export default function ProfessionalExperiencePage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={professionalExperienceProject} />
    </main>
  );
}
