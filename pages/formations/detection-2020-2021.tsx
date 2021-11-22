import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { Layout } from "../../components/layout/Layout";
import { parseDate, formatDateInterval } from "../../data/utils";
import data, { SessionsSector } from "../../data/detection";

interface State {
  sessionsSectors: SessionsSector[];
}

class Detection20202021Page extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);
    this.state = {
      sessionsSectors: data,
    };
  }

  render(): JSX.Element {
    const { sessionsSectors } = this.state;

    return (
      <Layout>
        <Helmet title="Stages détection 2020-2021" />
        <div className="container">
          <div className="row mt-3">
            <div className="secondary-col">
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg btn-block dropdown-toggle"
                  type="button"
                  id="detection-reservation"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  S&apos;inscrire
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="detection-reservation"
                >
                  {sessionsSectors.map((sessionsSector, index) => {
                    let result = [];

                    if (index > 0) {
                      result.push(<div className="dropdown-divider" />);
                    }

                    result.push(
                      <h6 className="dropdown-header">{sessionsSector.id}</h6>
                    );
                    result = result.concat(
                      sessionsSector.sessions.map((session) =>
                        session.shopId ? (
                          <Link
                            to={`/formations/detection-2020-2021/${session.id}/`}
                            className="dropdown-item"
                          >
                            {session.name}
                          </Link>
                        ) : (
                          <></>
                        )
                      )
                    );

                    return result;
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 my-3">
              <h1>Stages détection 2020-2021</h1>

              <h2>Description</h2>
              <p>
                Cette détection régionale "jeunes" a pour but de suivre, dans
                chaque secteur, les 8 meilleurs jeunes dans chaque catégorie
                (Poussins, Benjamins, Minimes, Cadets et Juniors, en arcs
                classique et à poulies). Ce dispositif permettra de suivre de 72
                à 96 jeunes compétiteurs.
              </p>

              <h2>Les objectifs</h2>
              <p>
                <ol>
                  <li>
                    Préparer l&apos;accès à la filière sportive olympique, aux
                    championnats de France individuels et par équipes de clubs.
                  </li>
                  <li>
                    Sensibiliser les tireurs à l&apos;opportunité d&apos;accéder
                    à la filière du haut niveau (Pôles).
                  </li>
                </ol>
              </p>

              <h2>Sessions 2020-2021</h2>

              <p>Le stage débutera à 9h et se terminera à 17h.</p>

              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>Session</th>
                    <th>Dates</th>
                    <th>Tarif</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionsSectors.map((sessionsSector) => (
                    <>
                      <tr>
                        <th className="text-center" colSpan={4}>
                          Secteur {sessionsSector.id}
                        </th>
                      </tr>
                      {sessionsSector.sessions.map((session) => (
                        <tr>
                          <td>
                            <b>{session.name}</b>
                            <br />
                            {session.place.map((placeRow, index) => {
                              const result = [];

                              if (index > 0) {
                                result.push(<br />);
                              }

                              result.push(<small>{placeRow}</small>);
                              return result;
                            })}
                          </td>
                          <td>
                            <small>
                              {formatDateInterval(
                                parseDate(session.dateStart),
                                parseDate(session.dateEnd)
                              )}
                            </small>
                          </td>
                          <td>
                            <i>{session.price}€</i>
                          </td>
                          <td className="text-right">
                            {session.shopId ? (
                              <Link
                                to={`/formations/detection-2020-2021/${session.id}/`}
                                className="btn btn-primary"
                              >
                                S&apos;inscrire
                              </Link>
                            ) : (
                              <></>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>

              <h3>Suivi pédagogique</h3>

              <p>
                Demi journée en fin de stage pour évaluer concrètement le
                travail réalisé par l&apos;ETR avec l&apos;archer.
              </p>

              <h3>Critères de participation</h3>

              <p>
                La priorité sera donnée aux archers figurant au classement
                national TAE de l'année A-1. La commission pourra, dans certains
                cas, pondérer la sélection avec le classement Salle.
              </p>

              <h3>Composition d'un groupe</h3>

              <p>
                Les archers seront invités nominativement en début de saison
                sportive et devront répondre sous 15 jours à cette invitation.
                Une copie de cette invitation sera adressée à leurs présidents
                de clubs et entraîneurs.
              </p>

              <h3>Procédure intermédiaire</h3>

              <p>
                À la fin de la saison "salle" (fin février), la commission
                sportive se donne la possibilité d'ajuster les groupes si un
                archer n'accède pas à la filière. Le critère retenu est la
                sélection au championnat régional.
              </p>

              <h3>Conditions de maintien dans la filière</h3>

              <p>
                <b>Assiduité, motivation, investissement.</b>
                <br />
                L&apos;archer doit s&apos;entraîner au moins 2 à 3 fois par
                semaine en respectant les consignes du cadre référent.
              </p>

              <h3>Résumé du contenu du stage</h3>

              <p>
                Clef de voûte du contenu des interventions, les 5 grands thèmes
                des stages sont :
                <ol>
                  <li>technique</li>
                  <li>physique</li>
                  <li>matériel</li>
                  <li>mental</li>
                  <li>planification</li>
                </ol>
              </p>

              <h3>Information des comités départementaux</h3>

              <p>
                la liste des archers participant aux stages de détection sera
                communiquée à chaque comité départemental concerné, lequel
                pourra - selon ses possibilités et ses objectifs - réaliser un
                suivi mensuel avec ses mêmes archers en lien avec le suivi du
                stage régional et compléter les groupes avec d'autres archers
                compétiteurs.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Detection20202021Page;
