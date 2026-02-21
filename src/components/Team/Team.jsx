import styles from "./Team.module.css";

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
        <div className={styles.member}>
          <img src="/images/placeholder.jpg" alt="Praticien" />
          <div className={styles.overlay}>
            <h3>Dr Martin</h3>
            <p>Orthodontiste</p>
          </div>
        </div>

        <div className={styles.member}>
          <img src="/images/placeholder.jpg" alt="Assistante" />
          <div className={styles.overlay}>
            <h3>Julie Dupont</h3>
            <p>Assistante dentaire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
