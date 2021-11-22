import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { PostCard } from "../components/blog/PostCard";
import { ShortPost } from "../components/blog/types";

interface Props {
  data: {
    prismic: {
      allPosts: {
        edges: {
          node: ShortPost;
        }[];
      };
    };
  };
}

const Blog: React.FC<Props> = ({ data }) => (
  <Layout>
    <Helmet title="Actualités" />
    <div className="container">
      <div className="mt-3 mb-3 row">
        <div className="main-col">
          <h1>Blog</h1>
          <div>
            {data.prismic.allPosts.edges.map(({ node }, index) => (
              <PostCard key={index} className="my-3" post={node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Blog;

export const pageQuery = graphql`
  query AllPostsHeads {
    prismic {
      allPosts(first: 1000, sortBy: meta_firstPublicationDate_DESC) {
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
