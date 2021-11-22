import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { Layout } from "../../components/layout/Layout";
import { Categorie } from "../../data/formations/type";
import {
  FormationHeadGroup,
  categorieToStrPl,
} from "../../data/types/formations";
import { FormationHead } from "../../components/formations/FormationHead";

interface Props {
  data: {
    allFormations: {
      totalCount: number;
      distinct: Categorie[];
      group: FormationHeadGroup[];
    };
  };
}

const Formations: React.FC<Props> = ({ data }) => (
  <Layout>
    <Helmet title="Formations" />
    <div className="container">
      <div className="row mt-3">
        <div className="col my-3">
          <h1>Formations</h1>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Guide des formations</h5>
              <p className="card-text">
                Téléchargez le guide des formations proposées par le Comité
                Régional de Tir à l&apos;Arc du Grand Est pour la saison
                2020/2021.
              </p>
              <p className="card-text">
                <a
                  className="btn btn-outline-primary btn-lg"
                  href="/formations/guide-formations-2020-2021-22-07-2020.pdf"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guide des formations 2020/2021
                </a>
              </p>
            </div>
          </div>

          <div className="formations-container">
            {data.allFormations.group.map((group) => (
              <div className="formations-group-container">
                <h3>
                  {categorieToStrPl(group.fieldValue)}{" "}
                  <span className="badge badge-pill badge-secondary">
                    {group.totalCount}
                  </span>
                </h3>

                {group.fieldValue === "CS" ? (
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="card-title">
                            <small>
                              <i>CS1</i>
                            </small>{" "}
                            Stages détection 2020-2021
                          </h5>
                          <p className="card-text">
                            <span className="badge badge-secondary">
                              de Poussin à Junior
                            </span>
                          </p>
                        </div>
                        <div className="col-auto">
                          <Link
                            className="btn btn-primary"
                            to="/formations/detection-2020-2021/"
                          >
                            <span className="d-none d-md-inline">
                              Plus de détails
                            </span>
                            <span className="icon-chevron-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {group.nodes.map((formation) => (
                  <FormationHead formation={formation} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Formations;

export const pageQuery = graphql`
  query AllFormationsHeads {
    allFormations(sort: { fields: [reference], order: [ASC] }) {
      totalCount
      distinct(field: categorie)
      group(field: categorie) {
        totalCount
        fieldValue
        nodes {
          id
          url
          date(formatString: "DD/MM/YYYY", locale: "FR")
          titre
          reference
          categorie
          tags
          categories
          armes
          diplome
          age
        }
      }
    }
  }
`;
