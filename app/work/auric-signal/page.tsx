import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { auricSignalProject } from "@/lib/projects/auric-signal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${auricSignalProject.title} — Ruxia Wang`,
  description: auricSignalProject.subtitle,
};

export default function AuricSignalPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={auricSignalProject} />
    </main>
  );
}
