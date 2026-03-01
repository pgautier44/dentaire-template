import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Partie haute bleue */}
      <div className={styles.headerTop}>
        <div className={styles.logoBlock}>
          <Link href="/">
              <Image
                src="/images/logo-dentaire-outline.svg"
                alt="Logo cabinet dentaire"
                width={150}
                height={150}
                priority
              />
          </Link>

          <span className={styles.logoTitle}>ORTHODONTIE</span>
          <span className={styles.logoSubtitle}>Spécialiste en orthodontie</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.headerNav}>
        <ul className={styles.navList}>
          <li><Link href="/#cabinet">Le cabinet</Link></li>
          <li><Link href="/#team">L’équipe</Link></li>
          <li><Link href="/#orthodontie">L'Orthodontie</Link></li>
          <li><Link href="/#traitement">Traitements</Link></li>
          <li><Link href="/#appareils">Appareils</Link></li>
          <li><Link href="/#urgences">Urgences</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          
          <li>
            <Link href="/#rendezvous" className={styles.navButton}>
              Prendre rendez-vous
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
