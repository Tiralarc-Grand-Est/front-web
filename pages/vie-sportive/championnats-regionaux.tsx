import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";
import { ChampionnatsSalle } from "../../components/championnats/Salle";
import { ChampionnatsQuotas } from "../../components/championnats/Quotas";
import championnatsData, {
  Championnat,
} from "../../data/championnats-regionaux";
import {
  parseDate,
  parseOptionalDate,
  formatDateInterval,
  formatDate,
} from "../../data/utils";

interface State {
  championnats: Championnat[];
}

export default class ChampionnatsRegionaux extends React.Component<
  unknown,
  State
> {
  constructor(props: unknown, context: unknown) {
    super(props, context);

    this.state = { championnats: championnatsData };
  }

  render(): ReactNode {
    const { championnats } = this.state;

    return (
      <Layout>
        <Helmet title="Championnats Régionaux" />
        <div className="container">
          <div className="row mt-3">
            <div className="secondary-col">
              <VieSportiveNav />
            </div>
            <div className="main-col">
              <div className="my-3">
                <h1 className="sr-only">Championnats Régionaux</h1>

                <ul className="nav nav-pills mb-3" id="championnats-tabs">
                  {championnats.map((championnat) => (
                    <li key={championnat.shortname} className="nav-item">
                      <a
                        className={`nav-link ${
                          championnat.default ? "active" : ""
                        }`}
                        id={`${championnat.shortname}-tab`}
                        data-toggle="pill"
                        href={`#${championnat.shortname}-content`}
                        role="tab"
                        aria-controls={`${championnat.shortname}-content`}
                        aria-selected={championnat.default ? "true" : "false"}
                      >
                        {championnat.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="championnats-content">
                  {championnats.map((championnat) => (
                    <div
                      key={`${championnat.shortname}-content`}
                      className={`tab-pane fade ${
                        championnat.default ? "show active" : ""
                      }`}
                      id={`${championnat.shortname}-content`}
                      role="tabpanel"
                      aria-labelledby={`${championnat.shortname}-tab`}
                    >
                      <h2>Championnat Régional {championnat.name}</h2>

                      <p className="lead mb-3">
                        <strong>{championnat.place}</strong>
                        &nbsp;
                        <small>
                          {formatDateInterval(
                            parseDate(championnat.dateStart),
                            parseOptionalDate(championnat.dateEnd)
                          )}
                        </small>
                      </p>

                      <div className="card-deck">
                        {championnat.documents.map((document) => (
                          <div
                            className={
                              document.important
                                ? "card text-white bg-primary"
                                : "card"
                            }
                          >
                            <div className="card-body">
                              <a
                                href={document.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <h4 className="card-title">{document.name}</h4>
                              </a>
                              <h6 className="cardrow-subtitle mb-2 text-muted">
                                {document.type} du{" "}
                                {formatDate(parseDate(document.date))}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>

                      {championnat.shortname.startsWith("salle") ? (
                        <>
                          <hr />
                          <ChampionnatsSalle />
                        </>
                      ) : (
                        []
                      )}

                      {championnat.quotas != null ? (
                        <>
                          <hr />
                          <ChampionnatsQuotas
                            updateDate={championnat.updateDate}
                            quotas={championnat.quotas}
                          />
                        </>
                      ) : (
                        []
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
