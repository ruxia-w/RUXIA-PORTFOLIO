import type { CaseStudyProject } from "@/lib/types";
import styles from "./ProjectMetadata.module.css";

type ProjectMetadataProps = {
  project: Pick<CaseStudyProject, "category" | "role" | "year" | "duration" | "status">;
};

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  const items: Array<[string, string]> = [
    ["Type", project.category],
    ["Role", project.role.join(", ")],
  ];
  if (project.duration) items.push(["Duration", project.duration]);
  items.push(["Year", project.year]);
  items.push(["Status", project.status]);

  return (
    <dl className={styles.list}>
      {items.map(([label, value]) => (
        <div className={styles.item} key={label}>
          <dt className={styles.term}>{label}</dt>
          <dd className={styles.desc}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
