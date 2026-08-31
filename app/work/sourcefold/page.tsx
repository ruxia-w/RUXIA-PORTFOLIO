import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { createProjectMetadata } from "@/lib/projectMetadata";
import { sourcefoldProject } from "@/lib/projects/sourcefold";
import styles from "./page.module.css";

export const metadata = createProjectMetadata(sourcefoldProject);

export default function SourcefoldPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={sourcefoldProject} />
    </main>
  );
}
