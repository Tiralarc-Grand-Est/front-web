import React from "react"
import { Commission } from "../data/team"

type Props = {
  commission: Commission
}

export const CommissionComponent: React.FC<Props> = ({ commission }) => (
  <div className="col-sm-12 col-lg-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{commission.name}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Resp. : <b>{commission.manager}</b>
        </li>
        {commission.members?.map(member => (
          <li className="list-group-item">{member}</li>
        ))}
        {commission.info ? (
          <li className="list-group-item">
            <i>{commission.info}</i>
          </li>
        ) : (
          []
        )}
      </ul>
    </div>
  </div>
)
