import styles from "./Appareil.module.css";

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
        <div className={styles.typesAppareil}>
          <img src="/images/multiAttache.jpg" alt="Multi-attache" />
          <div className={styles.overlay}>
            <h3>Multi-attache</h3>
          </div>
        </div>

        <div className={styles.typesAppareil}>
          <img src="/images/activateurCroissance.jpg" alt="Activateur-de-croissance" />
          <div className={styles.overlay}>
            <h3>Activateur de croissance</h3>
          </div>
        </div>

        <div className={styles.typesAppareil}>
          <img src="/images/gouttiere.jpg" alt="Gouttière" />
          <div className={styles.overlay}>
            <h3>Gouttière</h3>
          </div>
        </div>

        <div className={styles.typesAppareil}>
          <img src="/images/traitementOrtho.jpg" alt="Traitement-ortho-chirurgical" />
          <div className={styles.overlay}>
            <h3>Traitement ortho-chirurgical</h3>
          </div>
        </div>

        <div className={styles.typesAppareil}>
          <img src="/images/contention.jpg" alt="Contention" />
          <div className={styles.overlay}>
            <h3>Contention</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
