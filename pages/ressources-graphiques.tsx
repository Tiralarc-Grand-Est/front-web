import Image from "next/image";
import DownloadCard from "../components/DownloadCard";
import Layout from "../components/layout/Layout";
import vignettesImg from "../public/images/vignettes.png";

export default function RessourcesGraphiques() {
  return (
    <Layout
      title="Ressources graphiques"
      description="Nous mettons à disposition du grand public un logo au format vignette, carré."
      mainClassName="simple-layout"
    >
      <h1 className="heading-1">Ressources graphiques</h1>

      <DownloadCard
        title="Vignettes et guide d'utilisation"
        subtitle="ZIP du 24 février 2019"
        href="https://cloud.tiralarc-grand-est.fr/s/X2kdnZTB5TrJnbC/download/Vignettes.zip"
        className="my-8"
      />

      <div className="prose">
        <h2>Guide d&apos;utilisation du logo</h2>

        <h3>Vignette</h3>

        <p>
          Nous mettons à disposition du grand public un logo au format vignette,
          carré. Il a été pensé pour être facilement utilisable peu importe le
          support (mandat de compétition, affiche d&apos;événement, site
          internet, ...).
        </p>

        <Image src={vignettesImg} alt="Aperçu des vignettes" />

        <h3>Version couleur ou monochrome</h3>

        <p>
          La version monochrome ou couleur est à choisir en fonction du fond sur
          lequel sera utilisé le logo. Si la version en couleur n&apos;est pas
          lisible, choisir soit la déclinaison noire, soit la déclinaison
          blanche.
        </p>

        <p>
          La version blanche peut également être utilisée sur fond mauve (code
          couleur <code>#693991</code>) ou bleu (code couleur{" "}
          <code>#00B3EA</code>
          ).
        </p>
      </div>
    </Layout>
  );
}
