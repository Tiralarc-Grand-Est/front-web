import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Section, isActive } from "../../data/menus/utils"

interface Props {
  rootName: string
  sections: Section[]
}

export const SideNavigation: React.FC<Props> = ({ sections, rootName }) => {
  const { pathname } = useLocation()

  return (
    <>
      <div className="d-md-none">
        <nav aria-label="breadcrumb d-md-none">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#side-menu" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="side-menu">
                <span className="icon-chevron-right" />
                {rootName}
              </a>
            </li>
            {sections.map(section => {
              if (!isActive(section, pathname)) {
                return []
              }

              return (
                <li key={section.link} className="breadcrumb-item active" aria-current="page">
                  {section.name}
                </li>
              )
            })}
          </ol>
        </nav>
        <div className="collapse" id="side-menu">
          <div className="card">
            <div className="card-body">
              <nav className="nav flex-column">
                {sections.map(section => (
                  <Link className="nav-link" activeClassName="active" partiallyActive to={section.link} key={section.name}>
                    {section.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav flex-column border border-top-0 border-bottom-0 border-left-0 d-none d-md-block">
        {sections.map(section => (
          <Link className="nav-link" activeClassName="active" partiallyActive to={section.link} key={section.name}>
            {section.name}
          </Link>
        ))}
      </nav>
    </>
  )
}
