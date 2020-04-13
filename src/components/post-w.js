import React from "react"
import { Link } from "gatsby"
// impoet Img from 'gatsby-image'



const WPost = ({ post }) => (
    <Link to={post.frontmatter.path}>
        <div className="post post--w">
            {/* <div className="post__pic">
                <img src={post.frontmatter.poster} alt=""/>
            </div> */}
                <div className="post__text">
                    <h3>{post.frontmatter.title}</h3>
                    <span className='post__date'>{post.frontmatter.date}</span>
                    <ul className='post__tags tags'>
                       {post.frontmatter.tags.map(tag => (
                            <li className='tags__item'>{tag}</li>
                       ))}
                    </ul>
            </div>
        </div>
    </Link>
)

export default WPost









