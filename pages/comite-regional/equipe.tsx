import Image from "next/image";
import { Layout } from "../../components/layout/Layout";
import { ComiteRegionalNav } from "../../components/menus/ComiteRegionalNav";

import "./style.scss";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const Equipe: React.FC<Props> = ({ data }) => (
  <Layout>
    <Helmet title="Le Comité régional" />
    <div className="container comite-regional-index">
      <div className="mt-3 row">
        <div className="secondary-col">
          <ComiteRegionalNav />
        </div>
        <div className="main-col">
          <h1>Le Comité régional</h1>

          <p>
            Né de la réforme territoriale instituée par la loi NOTRe (août
            2015), notre Comité Régional est l&#39;instance représentative du
            tir à l&#39;arc dans le Grand Est depuis le 1er janvier 2017,
            nouvelle gouvernance succédant aux anciennes ligues.
          </p>

          <p>
            Organe déconcentré de la FFTA, le CRTA du Grand Est rassemble les
            146 clubs d&#39;Alsace, de Champagne-Ardenne et de Lorraine,
            désormais réunis sous son égide.
          </p>

          <p>
            Le tir à l&#39;arc dans les 10 départements du Grand Est, ce sont
            5.986 archers, dont 30 % sont des femmes. Nos arbitres, entraîneurs
            et autres bénévoles précieux, œuvrent chaque jour au développement
            du tir à l&#39;arc dans notre grande région, au sein de clubs
            répartis sur tout le territoire, en secteurs urbains et ruraux.
            Comme ailleurs en France, notre discipline, toutes armes confondues,
            se pratique en salle et en extérieur (tir olympique ou fédéral), sur
            les parcours (tir campagne, tir nature, tir 3D), sans omettre le tir
            Beursault, patrimoine sportif et culturel qui donne au tir à
            l&#39;arc ses marques de noblesse.
          </p>

          <p>
            Le Comité Régional de Tir à l&#39;Arc du Grand Est est organisé
            autour d&#39;un Comité Directeur composé de 25 membres, dont 7
            femmes. Six commissions se répartissent les missions et différents
            axes de travail, et une équipe technique régionale vient en soutien
            opérationnel sur les actions de formation et de développement
            sportif.
          </p>

          <h2>Le Bureau</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Nom</th>
                <th scope="col">Poste</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Suzanne WRONA"
                  />
                </td>
                <td>Suzanne WRONA</td>
                <td>Présidente</td>
                <td className="email">
                  <a href="mailto:presidente@tiralarc-grand-est.fr">
                    presidente@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Alain NULLANS"
                  />
                </td>
                <td>Alain NULLANS</td>
                <td>Secrétaire Général</td>
                <td className="email">
                  <a href="mailto:sec-general@tiralarc-grand-est.fr">
                    sec-general@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Bernard HOPPE"
                  />
                </td>
                <td>Bernard HOPPE</td>
                <td>Trésorier</td>
                <td className="email">
                  <a href="mailto:tresorier@tiralarc-grand-est.fr">
                    tresorier@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Marie DORMONT"
                  />
                </td>
                <td>Marie DORMONT</td>
                <td>Secrétaire Générale Adjointe</td>
                <td className="email">
                  <a href="mailto:marie.dormont@tiralarc-grand-est.fr">
                    marie.dormont@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Erwann HUBER"
                  />
                </td>
                <td>Erwann HUBER</td>
                <td>Trésorier Adjoint</td>
                <td className="email">
                  <a href="mailto:erwann.huber@tiralarc-grand-est.fr">
                    erwann.huber@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Les vices présidents</h2>

          <p>
            Leur rôle sera précisé dans le règlement intérieur à présenter lors
            de l’assemblée générale ordinaire du 20 février 2021
          </p>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Nom</th>
                <th scope="col">Poste</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Img
                    fluid={data.belinImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Stève BELIN"
                  />
                </td>
                <td>Stève BELIN</td>
                <td>Vice-Président Secteur Alsace</td>
                <td className="email">
                  <a href="mailto:steve.belin@tiralarc-grand-est.fr">
                    steve.belin@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Philippe DORMONT"
                  />
                </td>
                <td>Philippe DORMONT</td>
                <td>Vice-Président Secteur Champagne-Ardenne</td>
                <td className="email">
                  <a href="mailto:philippe.dormont@tiralarc-grand-est.fr">
                    philippe.dormont@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Francis HUE"
                  />
                </td>
                <td>Francis HUE</td>
                <td>Vice-Président Secteur Lorraine</td>
                <td className="email">
                  <a href="mailto:francis.hue@tiralarc-grand-est.fr">
                    francis.hue@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Les autres membres du Comité Directeur</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Émeline AUBLIN"
                  />
                </td>
                <td>Émeline AUBLIN</td>
                <td className="email">
                  <a href="mailto:emeline.aublin@tiralarc-grand-est.fr">
                    emeline.aublin@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Rémi BALZER"
                  />
                </td>
                <td>Rémi BALZER</td>
                <td className="email">
                  <a href="mailto:remi.balzer@tiralarc-grand-est.fr">
                    remi.balzer@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.blateckyImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Julien BLATECKY"
                  />
                </td>
                <td>Julien BLATECKY</td>
                <td className="email">
                  <a href="mailto:julien.blatecky@tiralarc-grand-est.fr">
                    julien.blatecky@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.brissaudImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Gérard BRISSAUD"
                  />
                </td>
                <td>Gérard BRISSAUD</td>
                <td className="email">
                  <a href="mailto:gerard.brissaud@tiralarc-grand-est.fr">
                    gerard.brissaud@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.duvalImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Jean-Bernard DUVAL"
                  />
                </td>
                <td>Jean-Bernard DUVAL</td>
                <td className="email">
                  <a href="mailto:jean-bernard.duval@tiralarc-grand-est.fr">
                    jean-bernard.duval@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.faivreImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Robert FAIVRE"
                  />
                </td>
                <td>Robert FAIVRE</td>
                <td className="email">
                  <a href="mailto:robert.faivre@tiralarc-grand-est.fr">
                    robert.faivre@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Cédric FINKLER"
                  />
                </td>
                <td>Cédric FINKLER</td>
                <td className="email">
                  <a href="mailto:cedric.finkler@tiralarc-grand-est.fr">
                    cedric.finkler@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Matthieu FRATH"
                  />
                </td>
                <td>Matthieu FRATH</td>
                <td className="email">
                  <a href="mailto:matthieu.frath@tiralarc-grand-est.fr">
                    matthieu.frath@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Jean-Paul LANDRON"
                  />
                </td>
                <td>Jean-Paul LANDRON</td>
                <td className="email">
                  <a href="mailto:jean-paul.landron@tiralarc-grand-est.fr">
                    jean-paul.landron@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Roland LANGAS"
                  />
                </td>
                <td>Roland LANGAS</td>
                <td className="email">
                  <a href="mailto:roland.langas@tiralarc-grand-est.fr">
                    roland.langas@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Christophe LOPEZ"
                  />
                </td>
                <td>Christophe LOPEZ</td>
                <td className="email">
                  <a href="mailto:christophe.lopez@tiralarc-grand-est.fr">
                    christophe.lopez@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Tatiana MOYSES"
                  />
                </td>
                <td>Tatiana MOYSES</td>
                <td className="email">
                  <a href="mailto:tatiana.moyses@tiralarc-grand-est.fr">
                    tatiana.moyses@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Jocelyne PETIT"
                  />
                </td>
                <td>Jocelyne PETIT</td>
                <td className="email">
                  <a href="mailto:jocelyne.petit@tiralarc-grand-est.fr">
                    jocelyne.petit@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Claire POLISENO"
                  />
                </td>
                <td>Claire POLISENO</td>
                <td className="email">
                  <a href="mailto:claire.poliseno@tiralarc-grand-est.fr">
                    claire.poliseno@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarHImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Jacky SOUDANT"
                  />
                </td>
                <td>Jacky SOUDANT</td>
                <td className="email">
                  <a href="mailto:jacky.soudant@tiralarc-grand-est.fr">
                    jacky.soudant@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Isabelle TRONQUOY"
                  />
                </td>
                <td>Isabelle TRONQUOY</td>
                <td className="email">
                  <a href="mailto:isabelle.tronquoy@tiralarc-grand-est.fr">
                    isabelle.tronquoy@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <Img
                    fluid={data.avatarFImg.childImageSharp.fluid}
                    className="member-photo"
                    alt="Charlène VERONESE"
                  />
                </td>
                <td>Charlène VERONESE</td>
                <td className="email">
                  <a href="mailto:charlene.veronese@tiralarc-grand-est.fr">
                    charlene.veronese@tiralarc-grand-est.fr
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Equipe;

export const pageQuery = graphql`
  fragment ComitePhoto on File {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  query Photos {
    avatarHImg: file(
      relativePath: { eq: "comite-regional/images/AvatarH.jpg" }
    ) {
      ...ComitePhoto
    }
    avatarFImg: file(
      relativePath: { eq: "comite-regional/images/AvatarF2.jpg" }
    ) {
      ...ComitePhoto
    }
    belinImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-Steve-dec.jpg" }
    ) {
      ...ComitePhoto
    }
    blateckyImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-Julien.jpg" }
    ) {
      ...ComitePhoto
    }
    brissaudImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-GerardBrissaud.jpg" }
    ) {
      ...ComitePhoto
    }
    duvalImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-J-Bernard-ETR.jpg" }
    ) {
      ...ComitePhoto
    }
    faivreImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-RobertFaivre.jpg" }
    ) {
      ...ComitePhoto
    }
    hueImg: file(
      relativePath: { eq: "comite-regional/images/T-bleu-Francis.jpg" }
    ) {
      ...ComitePhoto
    }
  }
`;
