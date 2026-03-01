import styles from "../styles/MentionsLegales.module.css";

export default function PolitiqueCookies() {
  return (
    <main className={styles.container}>
      <h1>Politique de gestion des cookies</h1>

      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal
        (ordinateur, tablette ou smartphone) lors de la consultation d’un site
        internet. Il permet notamment de reconnaître un utilisateur et de
        mémoriser certaines informations relatives à sa navigation.
      </p>

      <h2>Pourquoi utilisons-nous des cookies ?</h2>
      <p>
        Le site utilise des cookies afin d’améliorer l’expérience utilisateur,
        mesurer l’audience et assurer le bon fonctionnement des services
        proposés.
      </p>

      <h2>Types de cookies utilisés</h2>

      <h3>Cookies nécessaires au fonctionnement</h3>
      <p>
        Ces cookies sont indispensables au bon fonctionnement du site et ne
        peuvent pas être désactivés. Ils permettent notamment l’accès aux
        fonctionnalités essentielles.
      </p>

      <h3>Cookies de mesure d’audience</h3>
      <p>
        Ces cookies permettent d’analyser la fréquentation et l’utilisation du
        site afin d’en améliorer les performances et le contenu.
      </p>

      <h3>Cookies tiers</h3>
      <p>
        Le site peut intégrer des services externes susceptibles de déposer des
        cookies (par exemple des cartes interactives ou des contenus embarqués).
        Ces cookies sont soumis aux politiques de confidentialité des services
        concernés.
      </p>

      <h2>Gestion des cookies</h2>
      <p>
        Lors de votre première visite sur le site, un bandeau d’information peut
        vous permettre d’accepter ou de refuser tout ou partie des cookies.
      </p>

      <p>
        Vous pouvez également configurer votre navigateur pour accepter ou
        refuser les cookies à tout moment.
      </p>

      <h2>Configuration du navigateur</h2>
      <p>
        La gestion des cookies peut être effectuée directement depuis les
        paramètres de votre navigateur internet. Chaque navigateur propose des
        modalités différentes de gestion des cookies.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les cookies sont conservés pour une durée maximale conforme à la
        réglementation en vigueur et proportionnée à leur finalité.
      </p>

      <h2>Modification de la politique</h2>
      <p>
        Cette politique de gestion des cookies peut être modifiée à tout moment
        afin de refléter les évolutions légales ou techniques du site.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question concernant cette politique de gestion des cookies,
        vous pouvez contacter l’éditeur du site via les informations figurant
        dans les mentions légales.
      </p>
    </main>
  );
}