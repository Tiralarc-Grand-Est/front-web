/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { SyntheticEvent, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout/Layout";
import {
  clubs as clubsData,
  departments as departmentsData,
  departmentsCodes,
  Row,
  Department,
  DepartmentCode,
} from "../data/clubs";

interface Filter {
  department: DepartmentCode | null;
}

interface State {
  clubs: Row[];
  departments: Department[];
  filter: Filter;
}

function getDepartmentName(
  code: DepartmentCode,
  departments: Department[]
): string {
  const found = departments.find((department) => department.code === code);
  if (found == null) {
    return "Inconnu";
  }

  return found.name;
}

class ClubsPage extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context);
    this.state = {
      clubs: clubsData,
      departments: departmentsCodes.map((code) => departmentsData[code]),
      filter: {
        department: null,
      },
    };

    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
  }

  handleDepartmentChange = (
    department: SyntheticEvent<HTMLSelectElement>
  ): void => {
    const { value } = department.currentTarget;
    this.setState({
      filter: {
        department: value === "all" ? null : (value as DepartmentCode),
      },
    });
  };

  render(): ReactNode {
    const { clubs, departments, filter } = this.state;

    return (
      <Layout>
        <Helmet title="Liste des clubs de la région" />
        <div className="container">
          <div className="row mt-3">
            <div className="main-col my-3">
              <h1>Liste des clubs de la région</h1>

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
                      {filter.department == null
                        ? "Tous les départements"
                        : getDepartmentName(filter.department, departments)}
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
                        htmlFor="department-input"
                        className="col-sm-2 col-form-label"
                      >
                        Département
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-control"
                          id="department-input"
                          onChange={this.handleDepartmentChange}
                          value={
                            filter.department == null
                              ? "all"
                              : filter.department
                          }
                        >
                          <option value="all">Tous les départements</option>
                          {departments.map((department) => (
                            <option
                              key={department.code}
                              value={department.code}
                            >
                              {department.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {departments
                .filter((row) => {
                  if (
                    filter.department != null &&
                    row.code !== filter.department
                  ) {
                    return false;
                  }

                  return true;
                })
                .map((department) => (
                  <div key={department.code}>
                    <h2 className="my-3">{department.name}</h2>

                    <table className="table table-hover table-striped my-3">
                      <tbody>
                        {clubs.map((club) => {
                          if (
                            club.StructureCodeDepartement === department.code
                          ) {
                            return (
                              <tr key={club.StructureId}>
                                <td>
                                  <strong>{club.StructureNom}</strong> -{" "}
                                  <i>{club.StructureNomCourt}</i>
                                </td>
                                <td
                                  className="text-right"
                                  style={{ width: "200px" }}
                                >
                                  {club.AdresseWeb != null &&
                                  club.AdresseWeb.length > 0 ? (
                                    <a
                                      href={club.AdresseWeb}
                                      className="btn btn-primary btn-sm"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <span className="icon-popup" /> Web
                                    </a>
                                  ) : (
                                    <button
                                      type="button"
                                      disabled
                                      className="btn btn-primary btn-sm"
                                    >
                                      <span className="icon-popup" /> Web
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          }

                          return "";
                        })}
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ClubsPage;
