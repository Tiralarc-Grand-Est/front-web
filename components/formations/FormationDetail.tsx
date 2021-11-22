import React from "react"
import { Formation } from "../../data/formations/type"
import nl2br from "../utils/nl2br"
import nl2li from "../utils/nl2li"

interface Props {
  formation: Formation
}

export const FormationDetail: React.FC<Props> = ({ formation }: Props) => (
  <>
    <h2 className="mt-3">Description</h2>
    <p>{nl2br(formation.description)}</p>

    {formation.objectifs != null ? (
      <>
        <h2 className="mt-3">Objectifs</h2>
        <p>{nl2br(formation.objectifs)}</p>
      </>
    ) : (
      <></>
    )}

    {formation.contenu != null ? (
      <>
        <h2 className="mt-3">Contenu</h2>
        <ul>{nl2li(formation.contenu)}</ul>
      </>
    ) : (
      <></>
    )}

    {formation.prerequis != null ? (
      <>
        <h2 className="mt-3">Prérequis</h2>
        <ul>{nl2li(formation.prerequis)}</ul>
      </>
    ) : (
      <></>
    )}

    {formation.particularites != null ? (
      <>
        <h2 className="mt-3">Particularités</h2>
        <ul>{nl2li(formation.particularites)}</ul>
      </>
    ) : (
      <></>
    )}

    {formation.complements != null && formation.complements.length > 0 ? (
      <>
        <h2 className="mt-3">Compléments</h2>
        <ul>
          {formation.complements.map(complement => (
            <li>{complement}</li>
          ))}
        </ul>
      </>
    ) : (
      <></>
    )}
  </>
)
