import styles from "./OrthodontieTraitement.module.css";
import Traitement from "../Traitement/Traitement";

/* ---------- Icônes ---------- */

const QuestionIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42">
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="32"
      fill="#7faebe"
      fontFamily="sans-serif"
    >
      ?
    </text>
  </svg>
);

const ExamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PlanIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <rect x="5" y="6" width="14" height="16" rx="2" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6l4 2" />
  </svg>
);

const RetainerIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />          {/* tête */}
    <circle cx="8" cy="10" r="1.5" />          {/* œil gauche */}
    <circle cx="16" cy="10" r="1.5" />         {/* œil droit */}
    <path d="M8 16c1.5 1 4.5 1 6 0" />        {/* sourire */}
  </svg>
);

export default function OrthodontieTraitement() {
  const steps = [
    {
      icon: QuestionIcon,
      title: "Première consultation",
      text: "Un premier rendez-vous permet d’échanger sur vos souhaits d’amélioration du sourire, de prendre des photos et de vous remettre un devis estimatif."
    },
    {
      icon: ExamIcon,
      title: "Examens complémentaires",
      text: "Des empreintes dentaires et des examens radiologiques nécessaires sont réalisés pour établir un diagnostic précis."
    },
    {
      icon: PlanIcon,
      title: "Plan de traitement personnalisé",
      text: "Une fois les examens étudiés, un plan de traitement adapté vous est proposé avec un devis définitif et une estimation de la durée du traitement."
    },
    {
      icon: ClockIcon,
      title: "Suivi du traitement",
      text: "Le traitement nécessite un suivi régulier avec des rendez-vous toutes les 5 à 7 semaines afin d’assurer le bon déroulement des soins."
    },
    {
      icon: RetainerIcon,
      title: "Maintien par contention",
      text: "Une fois le traitement terminé, différents moyens de contention vous seront proposés."
    }
  ];

  return (
    <section id="traitement" className={styles.traitement}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h2>Le traitement</h2>
        </div>
      </div>

      <div className={styles.content}>
        {steps.map((step, index) => (
          <Traitement
            key={index}
            icon={step.icon}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
}
