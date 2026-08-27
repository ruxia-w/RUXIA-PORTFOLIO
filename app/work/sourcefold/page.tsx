import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { sourcefoldProject } from "@/lib/projects/sourcefold";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${sourcefoldProject.title} — Ruxia Wang`,
  description: sourcefoldProject.subtitle,
};

export default function SourcefoldPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={sourcefoldProject} />
    </main>
  );
}
