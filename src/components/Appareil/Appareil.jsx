import styles from "./Appareil.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Appareil() {
  return (
    <section id="appareils" className={styles.appareil}>
      {/* Bandeau titre */}
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>Les appareils</h2>
        </div>
      </div>

      <div className={styles.typesAppareils}>
        <Link href="/appareils#multi-attache" className={styles.typesAppareil}>
          <Image
            src="/images/multiAttache.jpg"
            alt="Multi-attache"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Multi-attache</h3>
          </div>
        </Link>

        <Link
          href="/appareils#activateur-croissance"
          className={styles.typesAppareil}
        >
          <Image
            src="/images/activateurCroissance.jpg"
            alt="Activateur de croissance"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Activateur de croissance</h3>
          </div>
        </Link>

        <Link href="/appareils#gouttiere" className={styles.typesAppareil}>
          <Image
            src="/images/gouttiere.jpg"
            alt="Gouttière"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Gouttière</h3>
          </div>
        </Link>

        <Link
          href="/appareils#ortho-chirurgical"
          className={styles.typesAppareil}
        >
          <Image
            src="/images/traitementOrtho.jpg"
            alt="Traitement ortho-chirurgical"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Traitement ortho-chirurgical</h3>
          </div>
        </Link>

        <Link href="/appareils#contention" className={styles.typesAppareil}>
          <Image
            src="/images/contention.jpg"
            alt="Contention"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Contention</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}