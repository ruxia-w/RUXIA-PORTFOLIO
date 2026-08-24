import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { smartPuppyProject } from "@/lib/projects/smart-puppy";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${smartPuppyProject.title} — Ruxia Wang`,
  description: smartPuppyProject.subtitle,
};

export default function SmartPuppyPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={smartPuppyProject} />
    </main>
  );
}
