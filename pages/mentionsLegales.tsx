import styles from "../styles/MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <main className={styles.container}>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par :
        <br />
        Cabinet d’orthodontie
        <br />
        [Nom du praticien]
        <br />
        [Adresse]
        <br />
        Téléphone : [Numéro]
        <br />
        Email : [Adresse email]
      </p>

      <h2>Directeur de la publication</h2>
      <p>
        Le directeur de la publication est : [Nom du praticien].
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :
        <br />
        Vercel Inc.
        <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789
        <br />
        États-Unis
        <br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          https://vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu présent sur ce site (textes, images, graphismes,
        logo, icônes, etc.) est protégé par les lois en vigueur relatives à la
        propriété intellectuelle.
      </p>

      <p>
        Toute reproduction, représentation, modification, publication,
        adaptation de tout ou partie des éléments du site, quel que soit le
        moyen ou le procédé utilisé, est interdite sauf autorisation écrite
        préalable.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations recueillies via les formulaires du site sont destinées
        uniquement au traitement des demandes des patients.
      </p>

      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD),
        vous disposez d’un droit d’accès, de rectification et de suppression des
        données vous concernant.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site sont fournies à titre informatif
        et ne remplacent en aucun cas une consultation médicale.
      </p>
    </main>
  );
}