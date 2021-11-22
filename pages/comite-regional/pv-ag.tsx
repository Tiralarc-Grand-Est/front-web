import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { ComiteRegionalNav } from "../../components/menus/ComiteRegionalNav";

const PvAg: React.FC = () => (
  <Layout>
    <Helmet title="PV des Assemblées Générales" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <ComiteRegionalNav />
        </div>
        <div className="main-col">
          <h1>PV des Assemblées Générales</h1>

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
                <td>Assemblée Générale Ordinaire</td>
                <td>15 Février 2020</td>
                <td>
                  <a
                    href="/pv-ag/PV-AGO-15-02-2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    PV (PDF)
                  </a>
                </td>
              </tr>
              <tr>
                <td>Assemblée Générale Extraordinaire et Ordinaire</td>
                <td>16 Février 2019</td>
                <td>
                  <a
                    href="/pv-ag/PV-AGE-AGO-16-02-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    PV (PDF)
                  </a>
                  &nbsp;
                  <a
                    href="/pv-ag/Dossier-AGE-AGO-16-02-2019-web.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    Dossier (PDF)
                  </a>
                </td>
              </tr>
              <tr>
                <td>Assemblée Générale Ordinaire</td>
                <td>10 Février 2018</td>
                <td>
                  <a
                    href="/pv-ag/PV-AGO-10-02-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    PV (PDF)
                  </a>
                  &nbsp;
                  <a
                    href="/pv-ag/Dossier-AGO-10-02-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    Dossier (PDF)
                  </a>
                </td>
              </tr>
              <tr>
                <td>Assemblée Générale Extraordinaire</td>
                <td>14 Janvier 2017</td>
                <td>
                  <a
                    href="/pv-ag/PV-AGE-14-01-2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    PV (PDF)
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

export default PvAg;
