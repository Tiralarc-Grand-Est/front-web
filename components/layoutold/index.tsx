import React, { ReactNode } from "react"
import { ThemeProvider } from "@rmwc/theme"
import "@rmwc/theme/styles"
import "@rmwc/button/styles"
import { StaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { Section, Social } from "../../data/menus/utils"
import { sections as sectionsData, socials as socialsData } from "../../data/menus/navigation"
import { Navigation } from "../menus/Navigation"

import "./scss/style.scss"

interface Props {
  children: React.ReactNode
}

interface State {
  sections: Section[]
  socials: Social[]
}

const queryContent = graphql`
  query LayoutQuery {
    logoFfta: file(relativePath: { eq: "img/ffta.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    logoGrandEst: file(relativePath: { eq: "img/grand-est.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    logoCros: file(relativePath: { eq: "img/cros.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export class Layout extends React.Component<Props, State> {
  constructor(props: Props, context: unknown) {
    super(props, context)

    this.state = {
      sections: sectionsData,
      socials: socialsData,
    }
  }

  render(): ReactNode {
    const { children } = this.props
    const { sections, socials } = this.state
    return (
      <StaticQuery
        query={`${queryContent}`}
        render={data => (
          <ThemeProvider options={{ primary: "#693991", secondary: "#00b3ea", "on-primary": "#ffffff", "on-secondary": "#ffffff" }}>
            <Helmet
              titleTemplate="%s | Comité Régional de Tir à l'Arc du Grand Est"
              defaultTitle="Comité Régional de Tir à l'Arc du Grand Est"
            >
              <html lang="fr" />
              <meta name="description" content="Comité Régional de Tir à l'Arc du Grand Est" />
              <meta name="keywords" content="arc, grand est" />
              <meta name="theme-color" content="#693991" />
              <meta name="google-site-verification" content={`${process.env.GATSBY_GOOGLE_SITE_VERIFICATION || ""}`} />
            </Helmet>
            <Navigation />
            <div className="container-fluid">{children}</div>
            <footer className="main-footer text-muted">
              <div className="container-fluid p-3 p-md-5">
                <ul className="footer-links">
                  {sections.map(section => (
                    <li key={section.name}>
                      <Link to={section.link}>{section.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/mentions-legales/">Mentions légales</Link>
                  </li>
                  <li>
                    <Link to="/donnees-personnelles/">Données personnelles</Link>
                  </li>
                  <li>
                    <Link to="/ressources-graphiques/">Ressources graphiques</Link>
                  </li>
                  {socials.map(social => (
                    <li key={social.icon}>
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <span className={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  Le Comité Régional de Tir à l&#39;Arc du Grand Est remercie de leur soutien ses partenaires institutionnels,
                  <br />
                  ainsi que la Fédération Française de Tir à l&#39;Arc.
                </p>
                <ul className="partners-logos">
                  <li className="ffta-logo">
                    <a href="http://www.ffta.fr/" target="_blank" rel="noopener noreferrer">
                      <Img alt="FFTA" fluid={data.logoFfta.childImageSharp.fluid} />
                    </a>
                  </li>
                  <li className="grand-est-logo">
                    <a href="https://www.grandest.fr/" target="_blank" rel="noopener noreferrer">
                      <Img alt="Grand Est" fluid={data.logoGrandEst.childImageSharp.fluid} />
                    </a>
                  </li>
                  <li className="cros-logo">
                    <a href="https://sportgrandest.eu/" target="_blank" rel="noopener noreferrer">
                      <Img alt="CROS Grand Est" fluid={data.logoCros.childImageSharp.fluid} />
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </ThemeProvider>
        )}
      />
    )
  }
}
