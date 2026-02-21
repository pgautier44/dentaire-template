import styles from "./Traitement.module.css";

export default function Traitement({ icon: Icon, title, text }) {
  return (
    <div className={styles.traitementItem}>
      {/* Logo */}
      <div className={styles.icon}>
        {Icon && <Icon />}
      </div>

      {/* Bloc texte */}
      <div className={styles.textBlock}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
