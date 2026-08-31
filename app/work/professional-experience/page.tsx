import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { createProjectMetadata } from "@/lib/projectMetadata";
import { professionalExperienceProject } from "@/lib/projects/professional-experience";
import styles from "./page.module.css";

export const metadata = createProjectMetadata(professionalExperienceProject);

export default function ProfessionalExperiencePage() {
  return (
    <main id="main-content" className={styles.main}>
      <CaseStudyLayout project={professionalExperienceProject} />
    </main>
  );
}
