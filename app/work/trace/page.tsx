import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { traceProject } from "@/lib/projects/trace";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${traceProject.title} — Ruxia Wang`,
  description: traceProject.subtitle,
};

export default function TracePage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={traceProject} />
    </main>
  );
}
