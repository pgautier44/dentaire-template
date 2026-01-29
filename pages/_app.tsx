import "@/styles/Globals.css";
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import ScrollToTop from '../src/components/Scroll/ScrollToTop';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/Logo.png" />
        <title>Dentaire Template</title>

        {/* Exemple JSON-LD global pour l’entreprise */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Dentaire Template",
              url: "https://dentaire-template.local",
              logo: "https://dentaire-template.local/favicon.ico",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adresse Exemple",
                addressLocality: "Ville",
                postalCode: "00000",
                addressCountry: "FR",
              },
              telephone: "00 00 00 00 00",
              email: "contact@dentaire-template.local",
            }),
          }}
        />
      </Head>

      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
