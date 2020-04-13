import React from "react"
import { Link } from "gatsby"
// impoet Img from 'gatsby-image'

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
    {post.frontmatter.tags}
      {post.frontmatter.title} ({post.frontmatter.date})
      <img src={post.frontmatter.poster}/>
    </Link>
  </div>
)

export default PostLink