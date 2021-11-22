import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";
import performances, { Row } from "../../data/performances";
import { parseDate, formatDate } from "../../data/utils";

interface State {
  data: (Row & { localizedDate: string; fullPath: string })[];
}

class PerformancesPage extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);

    this.state = {
      data: performances.map((row) => ({
        localizedDate: formatDate(parseDate(row.date)),
        fullPath: `/vie-sportive/documents/${row.file}`,
        ...row,
      })),
    };
  }

  render(): ReactNode {
    const { data } = this.state;

    return (
      <Layout>
        <Helmet title="Les meilleures performances" />
        <div className="container">
          <div className="row mt-3">
            <div className="secondary-col">
              <VieSportiveNav />
            </div>
            <div className="main-col my-3">
              <h1>Les meilleures performances</h1>

              <div className="row">
                {data.map((row) => (
                  <div key={row.name} className="col-12 col-md-6 col-lg-4">
                    <div className="card my-3">
                      <div className="card-body">
                        <a
                          href={row.fullPath}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h4 className="card-title">{row.name}</h4>
                        </a>
                        <h6 className="cardrow-subtitle mb-2 text-muted">
                          PDF du {row.localizedDate}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default PerformancesPage;
