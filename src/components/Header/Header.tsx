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
          <li><a href="#cabinet">Le cabinet</a></li>
          <li><a href="#equipe">L’équipe</a></li>
          <li><a href="#conseils">Conseils</a></li>
          <li><a href="#urgences">Urgences</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Bouton prise de rendez-vous */}
          <li>
            <Link href="#rendezvous" className={styles.navButton}>
              Prendre rendez-vous
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
