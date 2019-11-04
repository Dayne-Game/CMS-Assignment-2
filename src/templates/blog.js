import React from "react"
import { graphql } from "gatsby"

import Theme from "../theme/theme"
import blogStyles from "./template-blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Theme>
      <div className={blogStyles.post}>
        <div className={blogStyles.titleBox}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <span></span>
        </div>
        <article className={blogStyles.articleContainer}>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </article>
      </div>
    </Theme>
  )
}

export default Blog
