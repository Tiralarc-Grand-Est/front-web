import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { ComiteRegionalNav } from "../../components/menus/ComiteRegionalNav";

const Statuts: React.FC = () => (
  <Layout>
    <Helmet title="Statuts et Règlement intérieur" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <ComiteRegionalNav />
        </div>
        <div className="main-col mb-3">
          <h1>Statuts et Règlement intérieur</h1>
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <a
                  href="/statuts/statuts-15-02-2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="card-title">Statuts</h4>
                </a>
                <h6 className="cardrow-subtitle mb-2 text-muted">
                  Modifiés le 15 Février 2020
                </h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <a
                  href="/statuts/reglement-interieur-15-02-2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="card-title">Règlement intérieur</h4>
                </a>
                <h6 className="cardrow-subtitle mb-2 text-muted">
                  Modifiés le 15 Février 2020
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Statuts;
