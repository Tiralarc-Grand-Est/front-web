import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const WeekendHorizon: React.FC<Props> = ({ data }) => (
  <Layout>
    <Helmet title="Weekend Horizon 2019" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <VieSportiveNav />
        </div>
        <div className="col-md-8 col-lg-9 my-3">
          <h1>Weekend Horizon 2019</h1>

          <Img
            alt="WE Horizon 2019"
            fluid={data.banner.childImageSharp.fluid}
            className="mt-3 mb-3"
          />

          <div className="card mb-3">
            <div className="card-body">
              <b>Lac du Der - Chantecoq</b>
              <br />
              <small>
                C.S.L UFOLEP - Presqu&apos;Ile de Rougemer - 51290
                Giffaumont-Champaubert
              </small>
              <br />
              <small>Coordonnées GPS : Lat.48.553917 – Long.4.777654</small>
            </div>
          </div>

          <h2>Qui peut participer ?</h2>
          <p>
            Ce week-end horizon est{" "}
            <b>ouvert à tous les jeunes compétiteurs de la Région</b>{" "}
            (catégories Benjamin, Minime, Cadet ou Junior) ayant réalisé au
            moins 2 TAE (Tir à l&apos;Arc en Extérieur) avec une moyenne de 400
            points.
            <br />
            Tout public confondu, 60 places sont résérvées pour l&apos;occasion.
          </p>

          <h2>Le programme</h2>

          <p>Une dizaine de personnes encadreront ce weekend.</p>

          <div className="card mt-3">
            <div className="card-header">Vendredi 5 Juillet 2019</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                13h00 - Départ en bus de Mulhouse (arrêts : Sélestat, Nancy)
              </li>
              <li className="list-group-item">
                17h00 - Accueil au lac du der et présentation du déroulement du
                week-end
              </li>
            </ul>
          </div>

          <div className="card mt-3">
            <div className="card-header">Samedi 6 Juillet 2019</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Réveil musculaire près du lac</li>
              <li className="list-group-item">9h00 – Entrainement</li>
              <li className="list-group-item">10h30 - Fin de l’entrainement</li>
              <li className="list-group-item">11h00 - Duels par équipes</li>
              <li className="list-group-item">13h30 - Tir qualificatif</li>
              <li className="list-group-item">17h00 - Run Archery</li>
              <li className="list-group-item">
                18h30 - Repas et soirée animée
              </li>
            </ul>
          </div>

          <div className="card mt-3 mb-3">
            <div className="card-header">Dimanche 7 Juillet 2019</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                9H00 - Duels en individuel, mixte et par équipe
              </li>
              <li className="list-group-item">
                13H30 - Départ en bus ou avec les parents et encadrants des
                jeunes
              </li>
            </ul>
          </div>

          <h2>Les objectifs</h2>
          <p>
            <ol>
              <li>
                Préparer un maximum de jeunes au rêve olympique au travers du
                TAE et du championnat de France ;
              </li>
              <li>Créer la cohésion des trois secteurs.</li>
            </ol>
            Les jeunes qui pourront aller au championnat de France seront alors
            préparés le mieux possible et pour les autres, cela leur donnera une
            expérience. Des temps consacrés à la cohésion des groupes des trois
            secteurs et des soirées conviviales sont également au programme.
            <br />
            Ce week-end Horizon est la déclinaison des stages de détection
            proposés toute l’année. À noter, les moments consacrés au tir à
            l’arc sont ouverts aux entraineurs de clubs, aux parents et
            encadrants qui le souhaitent. Le reste du temps, les jeunes sont
            sous la responsabilité du CRTA du Grand Est.
          </p>

          <h2>La partie financière</h2>
          <div className="card-deck my-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Formule tout inclus*</h4>
                <ul className="card-text">
                  <li>
                    <b>30 €</b> pour les jeunes ayant participé aux stages de
                    détection dans la saison
                  </li>
                  <li>
                    <b>60 €</b> pour les autres jeunes de la Région
                  </li>
                </ul>
                <small>
                  * Hébergement, restauration, activités annexes, inscription à
                  la compétition et l’encadrement professionnel.
                </small>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  Frais supplémentaires de transport
                </h4>
                <ul className="card-text">
                  <li>
                    <b>10 €</b> l&apos;aller/retour depuis Nancy
                    <a
                      className="btn btn-link btn-sm"
                      data-toggle="collapse"
                      href="#collapse-nancy"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapse-nancy"
                    >
                      <span className="icon-info" />
                    </a>
                    <div className="collapse" id="collapse-nancy">
                      <small>
                        CHU Brabois, Arrêt de bus ligne 8, Rue du Morvan, 54500
                        Vandœuvre-lès-Nancy
                        <br />
                        Départ à 16h00 - Retour vers 16h30
                      </small>
                      <hr />
                    </div>
                  </li>
                  <li>
                    <b>15 €</b> l&apos;aller/retour depuis Sélestat
                    <a
                      className="btn btn-link btn-sm"
                      data-toggle="collapse"
                      href="#collapse-selestat"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapse-selestat"
                    >
                      <span className="icon-info" />
                    </a>
                    <div className="collapse" id="collapse-selestat">
                      <small>
                        Château d&apos;eau, Route de Colmar, 67600 Sélestat
                        <br />
                        Départ à 14h00 - Retour vers 18h30
                      </small>
                      <hr />
                    </div>
                  </li>
                  <li>
                    <b>15 €</b> l&apos;aller/retour depuis Mulhouse
                    <a
                      className="btn btn-link btn-sm"
                      data-toggle="collapse"
                      href="#collapse-mulhouse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapse-mulhouse"
                    >
                      <span className="icon-info" />
                    </a>
                    <div className="collapse" id="collapse-mulhouse">
                      <small>
                        Gare routière, 14 Avenue du Général Leclerc, 68100
                        Mulhouse
                        <br />
                        Départ à 13h00 - Retour vers 19h30
                      </small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            Concernant l’hébergement, prévoir un sac de couchage et le
            nécessaire de toilette.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default WeekendHorizon;

export const pageQuery = graphql`
  query WEHorizonImages {
    banner: file(relativePath: { eq: "img/horizon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
