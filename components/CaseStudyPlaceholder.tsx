import styles from "./CaseStudyPlaceholder.module.css";

type CaseStudyPlaceholderProps = {
  label?: string;
  items?: string[];
  groups?: Array<{ title: string; items: string[] }>;
  aspectRatio?: string;
  caption?: string;
  details?: string[];
};

/**
 * A clearly-labeled stand-in for a diagram, product UI, or video that hasn't
 * been produced yet. Deliberately plain (dashed border, muted surface, no
 * imagery) so it can never be mistaken for finished work.
 */
export function CaseStudyPlaceholder({ label, items, groups, aspectRatio, caption, details }: CaseStudyPlaceholderProps) {
  return (
    <figure className={styles.wrap}>
      <div className={styles.box} style={aspectRatio ? { aspectRatio } : undefined}>
        <span className={styles.tag}>Placeholder</span>
        {groups ? (
          <div className={styles.groups}>
            {groups.map((group) => (
              <div key={group.title} className={styles.group}>
                <p className={styles.groupTitle}>{group.title}</p>
                <div className={styles.chipRow}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.chip}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : items ? (
          <div className={styles.itemsGrid}>
            {items.map((item) => (
              <span key={item} className={styles.item}>{item}</span>
            ))}
          </div>
        ) : (
          label ? <p className={styles.label}>{label}</p> : null
        )}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      {details?.length ? (
        <ul className={styles.details}>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}
