import styles from "./SourcefoldPrototypeLink.module.css";

type Props = {
  href: string;
  label: string;
  note?: string;
};

export function SourcefoldPrototypeLink({ href, label, note }: Props) {
  return (
    <div className={styles.wrap}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      {note ? <p>{note}</p> : null}
    </div>
  );
}
