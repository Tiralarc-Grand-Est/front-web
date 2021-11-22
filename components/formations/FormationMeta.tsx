import React from "react"
import { Link } from "gatsby"
import { Formation } from "../../data/formations/type"
import { FormationTags } from "./FormationTags"
import { FormationPrix } from "./FormationPrix"

interface Props {
  formation: Formation
}

export const FormationMeta: React.FC<Props> = ({ formation }: Props) => (
  <>
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-text">
          <FormationTags formation={formation} />
        </div>

        <div className="card-text">
          Référence :{" "}
          <i>
            <b>{formation.reference}</b>
          </i>
        </div>

        <div className="card-text">
          Durée :{" "}
          <i>
            <b>{formation.duree}</b>
          </i>
        </div>

        {formation.programmation != null ? (
          <div className="card-text">
            Programmation :{" "}
            <i>
              <b>{formation.programmation}</b>
            </i>
          </div>
        ) : (
          <></>
        )}

        {formation.maximum != null ? (
          <div className="card-text">
            Nombre de places :{" "}
            <i>
              <b>{formation.maximum}</b>
            </i>
          </div>
        ) : (
          <></>
        )}

        <FormationPrix formation={formation} />

        {formation.shop != null && formation.shop.length > 0 ? (
          <Link to={`/formations/${formation.url}/reservation/${formation.shop}/`} className="btn btn-primary btn-block mt-3">
            S&apos;inscrire
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  </>
)
