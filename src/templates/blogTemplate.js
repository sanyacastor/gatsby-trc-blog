import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";

import './blogTemplae.scss'

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="container container--blog">
        <div className="container__wrapper">
          <div className="blog-post">
            <div className="block-post__header">
              <div className="block-post__header-text">
                <h1 className="block-post__header-title">{frontmatter.title}</h1>
                <div  className="block-post__header-lead">
                  <p>{frontmatter.lead}</p>
                </div>
                <span className="block-post__header-date">
                    {frontmatter.date}
                  </span>
              </div>
              <div className="block-post__header-image">
                <img src={frontmatter.poster} alt='иллюстрация'/>
              </div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/news/">назад</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
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
        poster
      }
    }
  }
`;
