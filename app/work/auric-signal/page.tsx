import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { createProjectMetadata } from "@/lib/projectMetadata";
import { auricSignalProject } from "@/lib/projects/auric-signal";
import styles from "./page.module.css";

export const metadata = createProjectMetadata(auricSignalProject);

export default function AuricSignalPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={auricSignalProject} />
    </main>
  );
}
