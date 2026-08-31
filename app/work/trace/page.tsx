import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { createProjectMetadata } from "@/lib/projectMetadata";
import { traceProject } from "@/lib/projects/trace";
import styles from "./page.module.css";

export const metadata = createProjectMetadata(traceProject);

export default function TracePage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={traceProject} />
    </main>
  );
}
