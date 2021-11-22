import React from "react"
import { Link } from "gatsby"
import { FormationAbstract } from "../../data/formations/type"
import { FormationTags } from "./FormationTags"

interface Props {
  formation: FormationAbstract
}

export const FormationHead: React.FC<Props> = ({ formation }: Props) => (
  <div className="card mb-3">
    <div className="card-body">
      <div className="row align-items-center">
        <div className="col">
          <h5 className="card-title">
            <small>
              <i>{formation.reference}</i>
            </small>{" "}
            {formation.titre}
          </h5>
          <p className="card-text">
            <FormationTags formation={formation} />
          </p>
        </div>
        <div className="col-auto">
          <Link key={formation.url} className="btn btn-primary" to={`/formations/${formation.url}/`}>
            <span className="d-none d-md-inline">Plus de détails</span>
            <span className="icon-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)
