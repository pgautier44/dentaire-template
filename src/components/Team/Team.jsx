import styles from "./Team.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      {/* Bandeau titre */}
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>Notre équipe</h2>
        </div>
      </div>

      <div className={styles.members}>
        <Link href="team/martin" className={styles.member}>
          <Image
            src="/images/placeholder.jpg"
            alt="Dr Martin"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Dr Martin</h3>
            <p>Orthodontiste</p>
          </div>
        </Link>

        <Link href="team/julie" className={styles.member}>
          <Image
            src="/images/placeholder.jpg"
            alt="Julie Dupont"
            width={400}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Julie Dupont</h3>
            <p>Assistante dentaire</p>
          </div>
        </Link>
      </div>
    </section>
  );
}