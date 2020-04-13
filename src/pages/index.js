import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Main from "../components/main/main"

const IndexPage = () => {
  return  <Layout>
              <Main/>
          </Layout>
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//             poster
//             tags
//           }
//         }
//       }
//     }
//   }
// `