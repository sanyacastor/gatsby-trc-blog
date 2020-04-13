import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"

import { motion } from "framer-motion"

const appear = {
  visible: {
    // x: '0px',
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    // x: '-50px',
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark


  return (
    <Layout>
        <div className="container container--blog">
          <div className="blog-post">
            <div className="block-post__header">
                <h1 className="block-post__header-text">{frontmatter.title}</h1>
                <div className="block-post__header-lead">
                <span className="block-post__header-date">{frontmatter.date}</span>
                <p >{frontmatter.lead}</p>
                </div>
            </div>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={appear}> 
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
              <Link to="/news/">назад</Link>
            </motion.div>
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM.DD.YYYY")
        path
        title
        tags
        lead
      }
    }
  }
`