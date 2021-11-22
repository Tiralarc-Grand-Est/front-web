import React from "react"
import { Link } from "gatsby"
import { Formation, Session } from "../../data/formations/type"
import { ShopActions } from "../../data/types/formations"
import nl2br from "../utils/nl2br"
import { formatDateInterval, parseDate, parseOptionalDate } from "../../data/utils"

interface Props {
  formation: Formation
  shopActions: ShopActions
}

function hasDates(sessions: Session[]): boolean {
  return sessions.findIndex(session => session.dates != null && session.dates.length > 0) !== -1
}

function hasContent(sessions: Session[]): boolean {
  return sessions.findIndex(session => session.dates != null && session.dates.findIndex(date => date.contenu != null) !== -1) !== -1
}

export const FormationSessions: React.FC<Props> = ({ formation, shopActions }: Props) => {
  const enabled = hasDates(formation.sessions)
  const enableContentCol = hasContent(formation.sessions)
  const enableSessionShopCol = shopActions.mode === "session"
  const enableDateShopCol = shopActions.mode === "date"
  const enableShopCol = enableSessionShopCol || enableDateShopCol

  let colSpanSessionTitle = 2
  if (enableContentCol) {
    colSpanSessionTitle += 1
  }
  if (enableDateShopCol && !enableSessionShopCol) {
    colSpanSessionTitle += 1
  }

  return (
    <>
      {enabled ? (
        <>
          <h2 className="mt-3">Sessions</h2>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Session</th>
                {enableContentCol ? <th>Contenu</th> : <></>}
                <th>Dates</th>
                {enableShopCol ? <th>-</th> : <></>}
              </tr>
            </thead>
            <tbody>
              {formation.sessions.map(session => (
                <>
                  {(session.secteur != null && session.secteur.length > 0) || enableSessionShopCol ? (
                    <tr>
                      <th className="text-center" colSpan={colSpanSessionTitle}>
                        {session.secteur != null && session.secteur.length > 0 ? <>Secteur {session.secteur}</> : <></>}
                      </th>
                      {enableSessionShopCol ? (
                        <td className="text-right">
                          {session.shop != null ? (
                            <Link to={`/formations/${formation.url}/reservation/${session.shop}/`} className="btn btn-primary">
                              S&apos;inscrire
                            </Link>
                          ) : (
                            <></>
                          )}
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ) : (
                    <></>
                  )}
                  {session.dates != null ? (
                    session.dates.map(date => (
                      <tr>
                        <td>
                          {date.nom ? (
                            <>
                              <b>{date.nom}</b>
                              <br />
                            </>
                          ) : (
                            <></>
                          )}

                          {session.lieu.map((placeRow, index) => {
                            const result = []

                            if (index > 0) {
                              result.push(<br />)
                              result.push(<small>{placeRow}</small>)
                            } else {
                              result.push(placeRow)
                            }

                            return result
                          })}
                          {session.remarque != null ? (
                            <>
                              <br />
                              <small>
                                <span className="icon-info" />
                                <i>{session.remarque}</i>
                              </small>
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                        {enableContentCol ? <td>{date.contenu != null ? nl2br(date.contenu) : <></>}</td> : <></>}
                        <td>
                          <small>{formatDateInterval(parseDate(date.dateDebut), parseOptionalDate(date.dateFin))}</small>
                          {date.horaires ? (
                            <>
                              <br />
                              <small>{date.horaires}</small>
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                        {enableShopCol ? (
                          <td className="text-right">
                            {date.shop != null && date.shop.length > 0 ? (
                              <Link to={`/formations/${formation.url}/reservation/${date.shop}/`} className="btn btn-primary">
                                S&apos;inscrire
                              </Link>
                            ) : (
                              <></>
                            )}
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
