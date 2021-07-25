import Layout from "../components/layout/Layout";

export default function MentionsLegales() {
  return (
    <Layout
      title="Mentions légales"
      description="Mentions légales pour le site du Comité Régional de Tir à l'Arc du Grand Est"
      mainClassName="simple-layout prose"
    >
      <h1>Mentions légales</h1>

      <h2>Comité Régional de Tir à l&#39;Arc du Grand Est</h2>

      <p>
        Organe déconcentré de la Fédération Française de Tir à l&#39;Arc (FFTA)
      </p>

      <p>
        Association de loi 1901
        <br />
        Enregistrée auprès de la Préfecture de Meurthe-et-Moselle sous le
        n°W543009328
      </p>

      <p>
        Siret : <strong>82401205800015</strong>
        <br />
        APE : <strong>9312Z</strong>
      </p>

      <p>
        Siège social :
        <br />
        <strong>
          Maison régionale des sports
          <br />
          13 rue Jean Moulin - CS 70001
          <br />
          54510 Tomblaine
        </strong>
      </p>

      <p>
        Contact :{" "}
        <a href="mailto:contact@tiralarc-grand-est.fr">
          contact@tiralarc-grand-est.fr
        </a>
      </p>

      <p>
        Responsable légal : Suzanne Wrona (
        <a href="mailto:presidente@tiralarc-grand-est.fr">
          presidente@tiralarc-grand-est.fr
        </a>
        )
      </p>
    </Layout>
  );
}
