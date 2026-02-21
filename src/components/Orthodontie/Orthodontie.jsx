import styles from "./Orthodontie.module.css";

export default function Orthodontie() {
  return (
    <section id="orthodontie" className={styles.ortho}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>L’orthodontie</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <p>
          L’orthodontie améliore l’harmonie du sourire et du visage, 
          et régularise les fonctions oro-faciales : mastication, 
          déglutition, phonation et respiration.
        </p>

        <p>
          Chez l’enfant, elle favorise une croissance équilibrée des mâchoires 
          et de la face. Chez l’adolescent, elle aligne les dents et corrige 
          les décalages. Chez l’adulte, elle peut améliorer l’alignement des dents 
          et faciliter certains actes prothétiques ou parodontaux.
        </p>
      </div>
    </section>
  );
}
