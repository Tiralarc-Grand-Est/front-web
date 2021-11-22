import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";

const Aides: React.FC = () => (
  <Layout>
    <Helmet title="Aides régionales" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <VieSportiveNav />
        </div>
        <div className="main-col">
          <h1>Aides régionales</h1>

          <h2>Les aides accordées par le CRTA du Grand Est en 2017</h2>
          <p>
            Tableau récapitulatif des aides accordées par le CRTA du Grand Est
            aux archers et aux clubs du territoire.
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Intitulé</th>
                <th scope="col">Date</th>
                <th scope="col">Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aides régionales</td>
                <td>5 août 2017</td>
                <td>
                  <a
                    href="/vie-sportive/aides/aides-regionales-2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>Haut niveau : les aides de la Région Grand Est</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Intitulé</th>
                <th scope="col">Date</th>
                <th scope="col">Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soutien aux clubs de haut niveau</td>
                <td>2018</td>
                <td>
                  <a
                    href="https://www.grandest.fr/vos-aides-regionales/soutien-aux-clubs-de-haut-niveau"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lien (grandest.fr)
                  </a>
                </td>
              </tr>
              <tr>
                <td>Soutien aux sportifs de haut niveau</td>
                <td>2018</td>
                <td>
                  <a
                    href="https://www.grandest.fr/vos-aides-regionales/soutien-aux-sportifs-de-haut-niveau"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lien (grandest.fr)
                  </a>
                </td>
              </tr>
              <tr>
                <td>Soutien aux investissements sportifs</td>
                <td>2018</td>
                <td>
                  <a
                    href="https://www.grandest.fr/vos-aides-regionales/soutien-aux-investissements-sportifs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lien (grandest.fr)
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

export default Aides;
