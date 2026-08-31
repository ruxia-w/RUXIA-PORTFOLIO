import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { createProjectMetadata } from "@/lib/projectMetadata";
import { smartPuppyProject } from "@/lib/projects/smart-puppy";
import styles from "./page.module.css";

export const metadata = createProjectMetadata(smartPuppyProject);

export default function SmartPuppyPage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={smartPuppyProject} />
    </main>
  );
}
