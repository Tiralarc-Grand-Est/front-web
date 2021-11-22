import React from "react"
import { Formation } from "../../data/formations/type"

interface Props {
  formation: Formation
}

export const FormationPrix: React.FC<Props> = ({ formation }: Props) => (
  <>
    {formation.prix.map(prix => (
      <>
        <hr />
        <div>
          {prix.nom != null ? <h3>{prix.nom}</h3> : <></>}
          {prix.total === 0 ? <p className="price-tag mb-0">Gratuit</p> : <p className="price-tag mb-0">{prix.total}€</p>}
          {prix.hebergement != null ? (
            <>
              <i>{prix.hebergement}</i>
              <br />
            </>
          ) : (
            <></>
          )}
          {prix.restauration != null ? <i>{prix.restauration}</i> : <></>}
        </div>
      </>
    ))}
  </>
)
