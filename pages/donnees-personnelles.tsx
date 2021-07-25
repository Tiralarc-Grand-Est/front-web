import Layout from "../components/layout/Layout";

const iframeStyle = {
  border: 0,
  height: "200px",
  width: "100%",
};

export default function DonneesPersonnelles() {
  return (
    <Layout
      title="Données personnelles"
      description="Le traitement des données personnelles est conforme à la législation, et notamment au RGPD."
      mainClassName="simple-layout prose"
    >
      <h1>Données personnelles</h1>

      <p>
        Le Comité Régional de Tir à l&apos;Arc du Grand Est s&apos;engage à ce
        que la collecte et le traitement de vos données, effectués à partir du
        site tiralarc-grand-est.fr, soient conformes au règlement général sur la
        protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Cookies de mesure d’audience</h2>

      <p>
        En vue d’adapter le site aux demandes de ses visiteurs, nous mesurons le
        nombre de visites, le nombre de pages vues ainsi que l&apos;activité des
        visiteurs sur le site et leur fréquence de retour. Matomo, l&apos;outil
        de statistiques utilisé par le Comité Régional, génère les cookies
        suivants :
      </p>

      <table>
        <thead>
          <tr>
            <th>Nom du cookie</th>
            <th>Finalité</th>
            <th>Durée de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_pk_ses.xxx</td>
            <td>Statistiques Matomo</td>
            <td>1/2 h</td>
          </tr>
          <tr>
            <td>_pk_id.xxx</td>
            <td>Statistiques Matomo</td>
            <td>13 mois</td>
          </tr>
          <tr>
            <td>piwik_ignore</td>
            <td>
              Cookie permettant d’indiquer à Matomo que vous vous opposez au
              suivi statistique
            </td>
            <td>13 mois</td>
          </tr>
        </tbody>
      </table>

      <h2>Configuration de la mesure d&apos;audience</h2>

      <iframe
        title="Politique de vie privée"
        style={iframeStyle}
        src="https://tracking.tiralarc-grand-est.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=ffffff&fontColor=&fontSize=1rem&fontFamily=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CArial%2Csans-serif%2CApple%20Color%20Emoji%2CSegoe%20UI%20Emoji%2CSegoe%20UI%20Symbol%2CNoto%20Color%20Emoji"
      />
    </Layout>
  );
}
