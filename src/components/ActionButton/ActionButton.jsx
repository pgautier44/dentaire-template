import styles from "./ActionButton.module.css";

export default function ActionButton({ href, text, Icon, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={styles.action}
    >
      <div className={styles.icon}>{Icon && <Icon />}</div>
      <p className={styles.label}>{text}</p>
    </a>
  );
}
