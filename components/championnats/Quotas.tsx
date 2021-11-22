import React from "react"
import { Quota } from "../../data/championnats-regionaux"
import { parseDate, formatDate } from "../../data/utils"

interface Props {
  updateDate: string
  quotas: Quota[]
}

export const ChampionnatsQuotas: React.FC<Props> = ({ updateDate, quotas }: Props) => (
  <div>
    <h3>Quotas</h3>

    <p className="font-italic font-weight-light">Mis à jour le {formatDate(parseDate(updateDate))}</p>

    <table className="table table-hover table-striped my-3">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Quota</th>
          <th>Pré-Inscrits</th>
        </tr>
      </thead>
      <tbody>
        {quotas.map(({ name, shortname, value, registered }) => (
          <tr key={shortname}>
            <td>
              <b>{shortname}</b>
              <span className="d-none d-md-inline">
                <> - </>
                <i>{name}</i>
              </span>
            </td>
            <td>
              <b>{value}</b>
            </td>
            <td>{registered}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
