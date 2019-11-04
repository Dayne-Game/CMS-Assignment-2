import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import thumbnail from "../../images/test.jpg"

import Theme from "../theme/theme"
import blogStyles from "./styles/blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              intro
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Theme>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div className={blogStyles.post}>
              <div className={blogStyles.imageWrapper}>
                <div className={blogStyles.gatsbyImageOuterWrapper}>
                  <img
                    src={thumbnail}
                    alt="Thumbnail"
                    className={blogStyles.thumbnail}
                  />
                </div>
              </div>
              <div className={blogStyles.textBox}>
                <div className={blogStyles.blogHeader}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.date}</p>
                </div>
                <p>{edge.node.frontmatter.intro}</p>
                <Link
                  className={blogStyles.readmore}
                  to={`/blog/${edge.node.fields.slug}`}
                >
                  Continue Reading →
                </Link>
              </div>
            </div>
          )
        })}
      </ol>
    </Theme>
  )
}

export default BlogPage
