import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/mentions-legales" className={styles.link}>
          Mentions légales
        </Link>

        <span className={styles.separator}>|</span>

        <Link href="/cgu" className={styles.link}>
          Conditions Générales d'Utilisation
        </Link>

        <span className={styles.separator}>|</span>

        <Link href="/cookies" className={styles.link}>
          Politique de gestion des cookies
        </Link>
      </div>
    </footer>
  );
}