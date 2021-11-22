import React from "react";
import { Helmet } from "react-helmet";
import { CommissionComponent } from "../../../components/Commission";
import { Layout } from "../../../components/layout/Layout";
import { ComiteRegionalNav } from "../../../components/menus/ComiteRegionalNav";
import commissionsData, { Commission } from "../../../data/team";

import "./style.scss";

type State = {
  commissions: Commission[];
};

class Commissions extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);
    this.state = { commissions: commissionsData };
  }

  render(): JSX.Element {
    const { commissions } = this.state;

    return (
      <Layout>
        <Helmet title="Les commissions" />
        <div className="container commissions">
          <div className="row mt-3">
            <div className="secondary-col">
              <ComiteRegionalNav />
            </div>
            <div className="main-col">
              <h1>Les commissions</h1>

              <div className="row">
                {commissions.map((commission) => {
                  if (
                    commission.children != null &&
                    commission.superName != null
                  ) {
                    return (
                      <div className="col-12">
                        <hr />

                        <h2>{commission.name}</h2>
                        <p>
                          Responsable : <b>{commission.manager}</b>
                        </p>

                        <h3>{commission.superName}</h3>

                        <div className="row">
                          {commission.children?.map((child) => (
                            <CommissionComponent commission={child} />
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return <CommissionComponent commission={commission} />;
                })}
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Les Conseillers Techniques</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Jacques Rousseau</b> <em>CTS</em>
                        <br />
                        <a href="mailto:jacques.rousseau.cts@tiralarc-grand-est.fr">
                          jacques.rousseau.cts@tiralarc-grand-est.fr
                        </a>
                      </li>
                      <li className="list-group-item">
                        Robert Bischoff <em>CT</em>
                        <br />
                        <a href="mailto:robert.bischoff@tiralarc-grand-est.fr">
                          robert.bischoff@tiralarc-grand-est.fr
                        </a>
                      </li>
                    </ul>
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

export default Commissions;
