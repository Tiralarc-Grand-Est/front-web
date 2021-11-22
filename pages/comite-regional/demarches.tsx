import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { ComiteRegionalNav } from "../../components/menus/ComiteRegionalNav";

const Demarches: React.FC = () => (
  <Layout>
    <Helmet title="Les démarches et procédures" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <ComiteRegionalNav />
        </div>
        <div className="main-col">
          <h1>Les démarches et procédures</h1>
          <p>
            Ci-dessous quelques informations sur les modalités de fonctionnement
            et recommandations de bons usages.
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Intitulé</th>
                <th scope="col">Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Transfert de licences entre clubs</td>
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

export default Demarches;
