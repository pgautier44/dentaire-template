import styles from "./Cabinet.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Actions from "../Actions/Actions";

export default function Cabinet() {
  return (
    <section id="cabinet" className={styles.section}>
      {/* Bandeau titre */}
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>Le cabinet</h2>
        </div>
      </div>

      {/* Contenu */}
      <div className={styles.container}>
        <div className={styles.image}>
          <ImageSlider
              images={[
                "/images/cabinet1.jpg",
                "/images/cabinet2.jpg",
                "/images/cabinet3.jpg",
              ]}
          />
        </div>

        <div className={styles.text}>
          <p>
            Notre cabinet dentaire vous accueille dans un environnement moderne
            et confortable, pensé pour le bien-être des patients de tout âge.
          </p>

          <p>
            L’équipe du cabinet met à votre disposition des équipements récents
            et des solutions de soins adaptées à chaque situation, dans une
            approche attentive et personnalisée.
          </p>

          <p>
            Nous accordons une attention particulière à la qualité de l’accueil,
            à l’écoute des patients et au suivi des traitements.
          </p>

          <p>
            Toute l’équipe sera heureuse de vous accueillir prochainement au
            cabinet.
          </p>
        </div>
      </div>
      <Actions />
    </section>
  );
}
