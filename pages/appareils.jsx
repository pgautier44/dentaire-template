import Image from "next/image";
import styles from "../styles/TeamProfile.module.css";

const appareilsData = {
  "multi-attache": {
    name: "Multi-attache",
    image: "/images/multiAttache.jpg",
    description: "Description du multi-attache...",
    bgColor: "#3a6587"
  },
  "activateur-croissance": {
    name: "Activateur de croissance",
    image: "/images/activateurCroissance.jpg",
    description: "Description activateur...",
    bgColor: "#865834"
  },
  gouttiere: {
    name: "Gouttière",
    image: "/images/gouttiere.jpg",
    description: "Description gouttière...",
    bgColor: "#4a7c59"
  },
  "ortho-chirurgical": {
    name: "Traitement ortho-chirurgical",
    image: "/images/traitementOrtho.jpg",
    description: "Description ortho-chirurgical...",
    bgColor: "#7a4f9a"
  },
  contention: {
    name: "Contention",
    image: "/images/contention.jpg",
    description: "Description contention...",
    bgColor: "#b35c2e"
  }
};

export default function AppareilsPage() {
  return (
    <>
      {Object.entries(appareilsData).map(([slug, appareil]) => (
        <section
          key={slug}
          id={slug}
          className={styles.profile}
        >
          <div className={styles.titleWrapper}>
            <div
              className={styles.title}
              style={{ backgroundColor: appareil.bgColor }}
            >
              <h2>{appareil.name}</h2>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.imageBlock}>
              <Image
                src={appareil.image}
                alt={appareil.name}
                width={500}
                height={600}
              />
            </div>

            <div className={styles.textBlock}>
              <p>{appareil.description}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}