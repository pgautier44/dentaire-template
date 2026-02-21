import styles from "./Urgence.module.css";

export default function Urgence() {
  return (
    <section  id="urgences" className={styles.urgences}>
      {/* Bandeau titre */}
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>Les urgences</h2>
        </div>
      </div>

      {/* Contenu principal */}
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" className={styles.circle} />
            <rect x="46" y="28" width="8" height="44" className={styles.cross} />
            <rect x="28" y="46" width="44" height="8" className={styles.cross} />
          </svg>
        </div>

        <div className={styles.text}>
          <p>
            Les urgences ne seront reçues au cabinet que sur rendez-vous.
            Merci de contacter le secrétariat, nous mettrons tout en œuvre
            pour vous soulager dans les meilleurs délais.
          </p>

          <p>
            Les urgences dentaires ne sont pas prises en charge au sein
            du cabinet. Nous vous invitons à contacter votre dentiste traitant.
          </p>
        </div>
      </div>
    </section>
  );
}