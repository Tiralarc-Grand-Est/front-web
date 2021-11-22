import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout/Layout";
import { PostCard } from "../components/blog/PostCard";
import { NewsRow } from "../components/news/NewsRow";
import { ShortPost } from "../components/blog/types";
import { newsList as _newsList, News } from "../data/news";

interface Props {
  data: {
    logo: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    lastBlogPost: {
      allPosts: {
        edges: {
          node: ShortPost;
        }[];
      };
    };
  };
}

interface State {
  newsList: News[];
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props, context: unknown) {
    super(props, context);

    this.state = {
      newsList: _newsList,
    };
  }

  render(): ReactNode {
    const { data } = this.props;
    const { newsList } = this.state;

    return (
      <Layout>
        <Helmet title="Découvrez le tir à l'arc dans notre région" />
        <div className="presentation row align-items-center">
          <div
            className="col-12 col-sm-10 offset-sm-1
        col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center"
          >
            <div>
              <h1 className="d-none">CRTA du Grand Est</h1>
              <Img
                alt="CRTA du Grand Est"
                fluid={data.logo.childImageSharp.fluid}
              />
            </div>

            <div className="text-center">
              <Link to="/bienvenue/" className="btn btn-lg btn-outline-light">
                <span className="icon-chevron-right" />
                Bienvenue !
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="my-3">
            <div className="row">
              <div className="col-sm-4 d-none d-sm-block">
                <h2>Blog</h2>
                {data.lastBlogPost.allPosts.edges.map(({ node }) => (
                  <PostCard key={node._meta.uid} post={node} />
                ))}
                <div className="text-center mt-4">
                  <Link to="/blog/" className="btn btn-outline-secondary">
                    <span className="icon-chevron-right" />
                    Voir plus d&#39;articles
                  </Link>
                </div>
              </div>
              <div className="col-sm">
                <h2>Actualités</h2>
                {newsList.map((news) => (
                  <NewsRow key={news.title} news={news} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query FirstMarkdownHeads {
    logo: file(relativePath: { eq: "img/crta.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    lastBlogPost: prismic {
      allPosts(first: 1, sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            _meta {
              uid
              firstPublicationDate
            }
            title
            short_description
            image
            imageSharp(crop: "thumbnail") {
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
