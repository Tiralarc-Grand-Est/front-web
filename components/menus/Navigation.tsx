import React, { ReactNode } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Location } from "@reach/router"
import { Section, Social, isActive } from "../../data/menus/utils"
import { sections as sectionsData, socials as socialsData } from "../../data/menus/navigation"

interface State {
  sections: Section[]
  socials: Social[]
}

export class Navigation extends React.Component<unknown, State> {
  constructor(props: unknown, context: unknown) {
    super(props, context)

    this.state = {
      sections: sectionsData,
      socials: socialsData,
    }
  }

  render(): ReactNode {
    const { sections, socials } = this.state

    return (
      <StaticQuery
        query={graphql`
          query NavigationQuery {
            logoCrta: file(relativePath: { eq: "img/crta.png" }) {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-menu" />
            </button>

            <Link className="navbar-brand" to="/">
              <Img alt="CRTA" fluid={data.logoCrta.childImageSharp.fluid} loading="eager" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="mr-auto navbar-nav">
                <Location>
                  {({ location }) =>
                    sections.map(section => (
                      <li key={section.name} className={isActive(section, location.pathname) ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to={section.link}>
                          {section.name}
                        </Link>
                      </li>
                    ))
                  }
                </Location>
              </ul>

              <ul className="navbar-nav">
                {socials.map(social => (
                  <li key={social.icon} className="nav-item">
                    <a className="nav-link" href={social.link} target="_blank" rel="noopener noreferrer">
                      <span className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      />
    )
  }
}
