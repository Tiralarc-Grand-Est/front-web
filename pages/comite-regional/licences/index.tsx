import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/layout/Layout";
import { ComiteRegionalNav } from "../../../components/menus/ComiteRegionalNav";

import "./style.scss";

const Licences: React.FC = () => (
  <Layout>
    <Helmet title="Tarif des licences" />
    <div className="container">
      <div className="row mt-3">
        <div className="secondary-col">
          <ComiteRegionalNav />
        </div>
        <div className="col-md-8 col-lg-9">
          <h1>Tarif des licences</h1>

          <h2>Parts fédérale et régionale</h2>

          <p>
            L&#39;Assemblée Générale du 16 février 2019 du CRTA du Grand Est a
            arrêté le montant de la part régionale des licences de la saison
            2019-2020. S&#39;ajoute à ce montant la part fédérale, comme
            détaillé ci-dessous.
          </p>

          <div className="table-responsive-lg">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Licences</th>
                  <th scope="col">Adulte sans pratique</th>
                  <th scope="col">Adulte pratique club</th>
                  <th scope="col">Adulte compétition</th>
                  <th scope="col">Jeune</th>
                  <th scope="col">Poussin</th>
                  <th scope="col">Découverte</th>
                  <th scope="col">
                    Conventions
                    <sup>2</sup>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sans IA</th>
                  <td className="text-right">26.75&nbsp;€</td>
                  <td className="text-right">31.75&nbsp;€</td>
                  <td className="text-right">39.75&nbsp;€</td>
                  <td className="text-right">22.75&nbsp;€</td>
                  <td className="text-right">13.75&nbsp;€</td>
                  <td className="text-right">15.00&nbsp;€</td>
                  <td className="text-right">14.00&nbsp;€</td>
                </tr>
                <tr>
                  <th scope="row">Avec IA</th>
                  <td className="text-right">27&nbsp;€</td>
                  <td className="text-right">32&nbsp;€</td>
                  <td className="text-right">40&nbsp;€</td>
                  <td className="text-right">23&nbsp;€</td>
                  <td className="text-right">14&nbsp;€</td>
                  <td className="text-right">15&nbsp;€</td>
                  <td className="text-right">14&nbsp;€</td>
                </tr>
                <tr>
                  <th scope="row">
                    Fonds Événements
                    <sup>1</sup>
                  </th>
                  <td colSpan={7} className="text-center">
                    2&nbsp;€
                  </td>
                </tr>
                <tr>
                  <th scope="row">Total FFTA</th>
                  <td className="text-right">29&nbsp;€</td>
                  <td className="text-right">34&nbsp;€</td>
                  <td className="text-right">42&nbsp;€</td>
                  <td className="text-right">25&nbsp;€</td>
                  <td className="text-right">16&nbsp;€</td>
                  <td className="text-right">17&nbsp;€</td>
                  <td className="text-right">16&nbsp;€</td>
                </tr>
                <tr>
                  <th scope="row">Part CRTA</th>
                  <td className="text-right">17&nbsp;€</td>
                  <td className="text-right">21&nbsp;€</td>
                  <td className="text-right">22&nbsp;€</td>
                  <td className="text-right">14&nbsp;€</td>
                  <td className="text-right">14&nbsp;€</td>
                  <td className="text-right">3&nbsp;€</td>
                  <td className="text-right">2&nbsp;€</td>
                </tr>
                <tr>
                  <th scope="row">Total FFTA + CRTA</th>
                  <td className="text-right">46&nbsp;€</td>
                  <td className="text-right">55&nbsp;€</td>
                  <td className="text-right">64&nbsp;€</td>
                  <td className="text-right">39&nbsp;€</td>
                  <td className="text-right">30&nbsp;€</td>
                  <td className="text-right">22&nbsp;€</td>
                  <td className="text-right">20&nbsp;€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <sup>1</sup> Majoration applicable à l&#39;ensemble des licences
            <br />
            <sup>2</sup> Licences FFH, FFSA, FFSU, UNSS
            <br />
            S&apos;ajoutent aux montants indiqués ci-dessus (parts fédérale et
            régionale) la cotision des Comités départementaux ainsi que celle
            des clubs.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Licences;
