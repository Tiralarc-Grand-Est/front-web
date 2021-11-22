/* eslint-disable jsx-a11y/label-has-associated-control */
import { SyntheticEvent, ReactNode, Component } from "react";
// import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import Layout from "../../components/layout/Layout";
// import { VieSportiveNav } from "../../components/menus/VieSportiveNav";
// import epreuves, {
//   Row,
//   Championnat,
//   championnats as championnatsData,
// } from "../../data/eprv";
// import {
//   parseDate,
//   parseOptionalDate,
//   formatDateInterval,
// } from "../../data/utils";

// registerLocale("fr", fr);
// setDefaultLocale("fr");

interface Filter {
  dateStart: Date;
  dateEnd: Date;
  championnat: number | null;
}

interface State {
  // data: (Row & { localizedDate: string; fullPath: string | null })[];
  // championnats: Championnat[];
  filter: Filter;
}

// function getChampionnatName(id: number, list: Championnat[]): string {
//   const found = list.find((championnat) => championnat.id === id);
//   if (found == null) {
//     return "Inconnu";
//   }

//   return found.name;
// }

const now = new Date();
const oneYearLater = new Date();
oneYearLater.setFullYear(now.getFullYear() + 1);

class CalendarPage extends Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);
    this.state = {
      // data: epreuves.map((row) => ({
      //   localizedDate: formatDateInterval(
      //     parseDate(row.EprvDateDebut),
      //     parseOptionalDate(row.EprvDateFin)
      //   ),
      //   fullPath: row.Mandat ? `/vie-sportive/mandats/${row.EprvId}.pdf` : null,
      //   ...row,
      // })),
      // championnats: championnatsData,
      filter: {
        dateStart: now,
        dateEnd: oneYearLater,
        championnat: null,
      },
    };

    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
    this.handleChampionnatChange = this.handleChampionnatChange.bind(this);
  }

  handleDateStartChange = (date: Date): void => {
    const { filter } = this.state;
    this.setState({
      filter: {
        dateStart: date,
        dateEnd: filter.dateEnd,
        championnat: filter.championnat,
      },
    });
  };

  handleDateEndChange = (date: Date): void => {
    const { filter } = this.state;
    this.setState({
      filter: {
        dateStart: filter.dateStart,
        dateEnd: date,
        championnat: filter.championnat,
      },
    });
  };

  handleChampionnatChange = (
    championnat: SyntheticEvent<HTMLSelectElement>
  ): void => {
    const { filter } = this.state;
    const { value } = championnat.currentTarget;
    this.setState({
      filter: {
        dateStart: filter.dateStart,
        dateEnd: filter.dateEnd,
        championnat: value === "all" ? null : parseInt(value, 10),
      },
    });
  };

  render(): ReactNode {
    const { filter } = this.state;

    return (
      <Layout
        title="Calendrier régional"
        description="Le calendrier de toutes les compétitions de la région, et tous les mandats permettant aux archers d'y participer."
      >
        <div className="container">
          <div className="mt-3 row">
            <div className="secondary-col">
              {/* <VieSportiveNav /> */}
              <hr />
              <a
                className="btn btn-outline-primary btn-block"
                href="/vie-sportive/calendriers/calendrier-saison-hivernale-2020-2021-20-08-10.pdf"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Version PDF (salle)
              </a>
              <a
                className="btn btn-outline-primary btn-block"
                href="http://www.ffta.fr/ws/epreuves?ChxDiscipline=&ChxTypeChampionnat=&ChxLigue=CR06&ChxDepartement=&ChxClub=&ChxDateDebut=2020-10-01&ChxDateFin=2021-08-31"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendrier FFTA
              </a>
              <a
                className="btn btn-outline-primary btn-block"
                href="/vie-sportive/documents/arbitrage-hiver-2020.pdf"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendrier d&#39;arbitrage
              </a>
              <a
                className="btn btn-outline-primary btn-block"
                href="/vie-sportive/documents/tutoriel-mandats-ffta.pdf"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aide publication ffta.fr
              </a>
            </div>
            <div className="my-3 main-col">
              <h1>Calendrier régional</h1>
              <div className="card">
                <div className="card-header" id="filter-heading">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#filter-collapse"
                      aria-expanded="true"
                      aria-controls="filter-collapse"
                    >
                      {/* {filter.championnat == null
                        ? "Tous les championnats"
                        : getChampionnatName(
                            filter.championnat,
                            championnats
                          )}{" "} */}
                      {/* {formatDateInterval(filter.dateStart, filter.dateEnd)} */}
                    </button>
                  </h2>
                </div>

                <div
                  id="filter-collapse"
                  className="collapse show"
                  aria-labelledby="filter-heading"
                >
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="date-start-input"
                        className="col-sm-2 col-form-label"
                      >
                        Date de début
                      </label>
                      <div className="col-sm-10">
                        {/* <DatePicker
                          selected={filter.dateStart}
                          dateFormat="dd/MM/yyyy"
                          onChange={this.handleDateStartChange}
                          className="form-control"
                          id="date-start-input"
                        /> */}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="date-end-input"
                        className="col-sm-2 col-form-label"
                      >
                        Date de fin
                      </label>
                      <div className="col-sm-10">
                        {/* <DatePicker
                          selected={filter.dateEnd}
                          dateFormat="dd/MM/yyyy"
                          onChange={this.handleDateEndChange}
                          className="form-control"
                          id="date-end-input"
                        /> */}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="championnat-input"
                        className="col-sm-2 col-form-label"
                      >
                        Championnat
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-control"
                          id="championnat-input"
                          onChange={this.handleChampionnatChange}
                          value={
                            filter.championnat == null
                              ? "all"
                              : `${filter.championnat}`
                          }
                        >
                          <option value="all">Tous les championnats</option>
                          {/* {championnats.map((championnat) => (
                            <option key={championnat.id} value={championnat.id}>
                              {championnat.name}
                            </option>
                          ))} */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table my-3 table-hover table-striped">
                <tbody>
                  {/* {data
                    .filter((row) => {
                      // const dateStart = parseDate(row.EprvDateDebut).getTime();
                      // const dateEnd = parseDate(row.EprvDateFin).getTime();
                      // const dateStartFilter = filter.dateStart.getTime();
                      // const dateEndFilter = filter.dateEnd.getTime();

                      // if (dateEnd < dateStartFilter) {
                      //   return false;
                      // }

                      // if (dateEndFilter < dateStart) {
                      //   return false;
                      // }

                      // if (
                      //   filter.championnat != null &&
                      //   row.ChampionnatId !== filter.championnat
                      // ) {
                      //   return false;
                      // }

                      return true;
                    })
                    .map((row) => (
                      <tr key={row.EprvId}>
                        <td>
                          <strong>{row.EprvNom}</strong> à <i>{row.EprvLieu}</i>{" "}
                          - <small>{row.localizedDate}</small>
                        </td>
                        <td>
                          {row.fullPath != null ? (
                            // <Button
                            //   raised
                            //   tag="a"
                            //   href={row.fullPath}
                            //   target="_blank"
                            //   rel="noopener noreferrer"
                            // >
                            //   Mandat
                            // </Button>
                            []
                          ) : (
                            []
                          )}
                        </td>
                      </tr>
                    ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CalendarPage;
