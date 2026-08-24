import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./GlobalNavigation.module.css";

export function GlobalNavigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Global">
        <Link href="/" className={styles.brand}>RUXIA WANG</Link>
        <ul className={styles.navList}>
          <li><Link href="/#selected-work" className={styles.navLink}>Works</Link></li>
          <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
