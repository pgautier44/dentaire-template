import Image from "next/image";
import styles from "../../styles/TeamProfile.module.css";

const teamMembers = {
  martin: {
    name: "Dr Martin",
    role: "Orthodontiste",
    image: "/images/placeholder.jpg",
    description:
      "Diplômée en orthodontie, le Dr Martin accompagne enfants et adultes dans leur traitement.",
    bgColor: "#3a6587"
  },
  julie: {
    name: "Dr DUPONT Julie",
    role: "Assistante dentaire",
    image: "/images/placeholder.jpg",
    description:
      "Julie accompagne les patients tout au long de leur parcours de soins.Julie accompagne les patients tout au long de leur parcours de soins. Julie accompagne les patients tout au long de leur parcours de soins. ",
    bgColor: "#865834"
  }
};

export default function TeamProfile({ member }) {
  if (!member) {
    return <p>Membre introuvable</p>;
  }

  return (
    <section className={styles.profile}>
      <div className={styles.titleWrapper}>
        <div
          className={styles.title}
          style={{ backgroundColor: member.bgColor || "#3a6587" }}
        >
          <h2>{member.name}</h2>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <Image
            src={member.image}
            alt={member.name}
            width={500}
            height={600}
          />
        </div>

        <div className={styles.textBlock}>
          <p>{member.description}</p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(teamMembers).map((team) => ({
    params: { team }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const member = teamMembers[params.team] || null;

  return {
    props: { member }
  };
}