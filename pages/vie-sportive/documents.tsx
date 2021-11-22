import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";

const Documents: React.FC = () => (
  <Layout>
    <Helmet title="Document sportifs" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <VieSportiveNav />
        </div>
        <div className="col-md-8 col-lg-9">
          <h1>Les documents</h1>
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
                <td>
                  Cahier des charges des Championnats Régionaux et Division
                  Régionale Excellence
                </td>
                <td>2019</td>
                <td>
                  <a
                    href="/vie-sportive/documents/cahier-des-charges-CRTA-Grand-Est-11-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Cahier des Charges ETAF-R</td>
                <td>2019</td>
                <td>
                  <a
                    href="/vie-sportive/documents/cahier-des-charges-ETAF-R-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Dossier de demande d'habilitation ETAF-R</td>
                <td>2019</td>
                <td>
                  <a
                    href="/vie-sportive/documents/dossier-de-demande-habilitation-ETAF-R-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Tutoriel de mise en ligne des mandats sur ffta.fr</td>
                <td>2019</td>
                <td>
                  <a
                    href="/vie-sportive/documents/tutoriel-mandats-ffta.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Championnats régionaux
                  <br />
                  Programmation des secteurs d&#39;affectation
                  <br />
                  Olympiade 2017 - 2021
                </td>
                <td>2018</td>
                <td>
                  <a
                    href="/vie-sportive/documents/championnats-secteurs-2017-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Programmation / Organisation des Championnats régionaux</td>
                <td>2017</td>
                <td>
                  <a
                    href="/vie-sportive/documents/championnats-programmation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Division Régionale Excellence</td>
                <td>2017</td>
                <td>
                  <a
                    href="/vie-sportive/documents/DRE-2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>Transfert de licences entre clubs</td>
                <td>2017</td>
                <td>
                  <a
                    href="/demarches/transfert-licences-2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
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

export default Documents;
