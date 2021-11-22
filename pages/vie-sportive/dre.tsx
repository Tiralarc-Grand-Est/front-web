import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@rmwc/button";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";
import dreData, { Club } from "../../data/dre";

interface State {
  clubs: Club[];
}

export default class DRE extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);

    this.state = { clubs: dreData };
  }

  render(): ReactNode {
    const { clubs } = this.state;

    return (
      <Layout>
        <Helmet title="Division Régionale Excellence" />
        <div className="container">
          <div className="row mt-3">
            <div className="secondary-col">
              <VieSportiveNav />
            </div>
            <div className="main-col">
              <div className="my-3">
                <h1>Division Régionale Excellence 2019</h1>

                <p>
                  La division régionale excellence s&apos;inscrit dans la
                  filière par équipes de clubs mise en place par la FFTA.
                </p>

                <p>
                  <b>
                    C&apos;est la compétition permettant aux clubs du Grand Est
                    de confronter leurs équipes d’archers.
                  </b>
                </p>

                <p>
                  L&apos;organisation de la DR &quot;Excellence&quot; reprend le
                  principe de la montante/descendante.
                </p>

                <p>
                  Les équipes de clubs (4 ou 3 archers) doivent participer à 3
                  épreuves : 2 x 70 m (arc classique) ou 2 x 50 m (arc à
                  poulies) avec finales. Le 2 x 70 m ou 2 x 50 m (avec ou sans
                  finales), est la seule discipline de référence pour la DR
                  &quot;Excellence&quot;.
                </p>

                <p>
                  L&apos;équipe qui se se classe 1ère de la DR
                  &quot;Excellence&quot; remporte le titre de champion régional,
                  et accède à la finale nationale des DR.
                </p>

                <div className="card-deck my-3">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Public concerné</h4>
                      <ul className="card-text">
                        <li>hommes et femmes</li>
                        <li>par équipes de clubs non mixte</li>
                        <li>dès la catégorie cadet</li>
                        <li>arc classique ou arc à poulies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Tarif d&apos;engagement</h4>
                      <p className="card-text">
                        <b>100€</b> par équipe pour les 3 manches par chèque à
                        l&apos;ordre du CRTA du Grand Est
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <i>Pont-à-Mousson</i> - <small>28 avril 2019</small>
                    </div>
                    <div className="text-right">
                      <Button
                        raised
                        tag="a"
                        href="/vie-sportive/documents/dre-2019-etape1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Classement
                      </Button>{" "}
                      <Button
                        raised
                        tag="a"
                        href="/vie-sportive/mandats/51108.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mandat
                      </Button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <i>Montigny-lès-Metz</i> - <small>2 juin 2019</small>
                    </div>
                    <div className="text-right">
                      <Button
                        raised
                        tag="a"
                        href="/vie-sportive/documents/dre-2019-etape2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Classement
                      </Button>{" "}
                      <Button
                        raised
                        tag="a"
                        className="text-right"
                        href="/vie-sportive/mandats/51823.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mandat
                      </Button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <i>Volgelsheim</i> - <small>23 juin 2019</small>
                    </div>
                    <div className="text-right">
                      <Button
                        raised
                        tag="a"
                        href="/vie-sportive/documents/dre-2019-etape3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Classement
                      </Button>{" "}
                      <Button
                        raised
                        tag="a"
                        className="text-right"
                        href="/vie-sportive/mandats/51022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mandat
                      </Button>
                    </div>
                  </li>
                </ul>

                <hr />

                <h2>Inscrits</h2>

                <div className="row">
                  {clubs.map((club) => (
                    <>
                      {club.teams.map((team) => (
                        <div className="col-lg-6 col-12 my-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                {club.name}{" "}
                                <small>
                                  <em>{club.department}</em>
                                </small>
                              </h5>
                              <p>
                                <b>
                                  {team.weapon === "CL"
                                    ? "Classique"
                                    : "Poulies"}
                                </b>{" "}
                                -{" "}
                                <em>
                                  {team.gender === "H" ? "Hommes" : "Femmes"}
                                </em>
                                <br />
                                Capitaine : <em>{team.captain}</em>
                              </p>
                              <p>
                                Archers :
                                <ul>
                                  {team.members.map((member) => (
                                    <li>
                                      {member.name} -{" "}
                                      <small>
                                        <em>{member.category}</em>
                                      </small>
                                    </li>
                                  ))}
                                </ul>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ))}
                </div>

                <hr />

                <h2>Archives</h2>

                <div className="card-deck">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="/vie-sportive/documents/classement-dre-2018.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className="card-title">Classement 2018</h4>
                      </a>
                      <h6 className="cardrow-subtitle mb-2 text-muted">
                        PDF du 4 Juillet 2018
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
