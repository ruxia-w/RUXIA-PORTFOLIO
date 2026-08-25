import styles from "./Footer.module.css";

/** Shared site footer — originally the homepage's own footer, extracted so
 * every top-level page (home, case studies) renders the identical markup
 * instead of separate copies drifting apart. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 Ruxia Wang</span>
      <span>New York, NY</span>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  );
}
