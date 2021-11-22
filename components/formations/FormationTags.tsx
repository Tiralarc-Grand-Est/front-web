import React from "react"
import { FormationAbstract } from "../../data/formations/type"
import { categorieClassementToStr } from "../../data/types/formations"

interface Props {
  formation: FormationAbstract
}

export const FormationTags: React.FC<Props> = ({ formation }: Props) => (
  <>
    {formation.categories != null
      ? formation.categories.map(categorie => (
          <>
            <span className="badge badge-secondary">{categorieClassementToStr(categorie)}</span>{" "}
          </>
        ))
      : []}

    {formation.armes != null
      ? formation.armes.map(arme => (
          <>
            <span className="badge badge-secondary">{arme}</span>{" "}
          </>
        ))
      : []}

    {formation.diplome != null
      ? formation.diplome.map(diplome => (
          <>
            <span className="badge badge-secondary">{diplome}</span>{" "}
          </>
        ))
      : []}

    {formation.age != null ? (
      <>
        <span className="badge badge-secondary">{formation.age}</span>{" "}
      </>
    ) : (
      []
    )}
  </>
)
