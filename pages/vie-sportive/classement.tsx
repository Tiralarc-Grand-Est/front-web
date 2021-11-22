import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout/Layout";
import { VieSportiveNav } from "../../components/menus/VieSportiveNav";
import classement, { Row } from "../../data/classement";
import { parseDate, formatDate } from "../../data/utils";

interface State {
  data: (Row & { localizedDate: string; fullPath: string })[];
}

class ClassementPage extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);

    this.state = {
      data: classement.map((row) => ({
        localizedDate: formatDate(parseDate(row.date)),
        fullPath: `/vie-sportive/documents/${row.file}`,
        ...row,
      })),
    };
  }

  render(): ReactNode {
    const { data } = this.state;

    let currentYear: number | null = null;

    return (
      <Layout>
        <Helmet title="Classement régional" />
        <div className="container">
          <div className="row mt-3">
            <div className="secondary-col">
              <VieSportiveNav />
            </div>
            <div className="main-col my-3">
              <h1>Classement régional</h1>
              <div className="row">
                {data.map((row) => {
                  let header = <></>;

                  if (row.year !== currentYear) {
                    const innerHeader = [];

                    if (currentYear != null) {
                      innerHeader.push(<hr />);
                    }
                    innerHeader.push(<h2>Saison {row.year}</h2>);

                    currentYear = row.year;

                    header = <div className="col-12">{innerHeader}</div>;
                  }

                  return (
                    <>
                      {header}

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
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ClassementPage;
