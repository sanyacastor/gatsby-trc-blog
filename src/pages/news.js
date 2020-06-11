import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Wpost from "../components/post-w";

// import { motion } from "framer-motion"

// const appear = {
//   visible: {
//     x: '0px',
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {
//     x: '-50px',
//     opacity: 0,
//     transition: {
//       when: "afterChildren",
//     },
//   },
// }

const News = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
        <Wpost key={edge.node.id} post={edge.node} />
    ));

  return (
    <Layout>
      <SEO title="Новости" />
      <div className="container">
        <div className="container__wrapper">
          <section className="news">
            <div className="posts">
              {posts}
              <Link to="/">назад</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default News;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            poster
            tags
          }
        }
      }
    }
  }
`;
