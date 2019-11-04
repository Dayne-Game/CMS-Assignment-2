import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import thumbnail from "../../images/test.jpg"

import Theme from "../theme/theme"
import indexStyles from "./styles/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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
      <div className={indexStyles.homeContainer}>
        <div>
          <h1>Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque hendrerit erat a consectetur luctus. Nullam in
            elementum tortor. Phasellus nec augue ligula. Vivamus vitae risus eu
            orci venenatis tempus. Cras ut nunc eget eros sollicitudin
            fringilla. Duis sodales tortor at ex dictum scelerisque. Maecenas
            vel rutrum magna. Cras aliquet nisl eget risus tristique mattis.
            Duis tristique ipsum risus, ac lacinia sapien tincidunt id.
            Vestibulum sem lectus, ornare vel quam vel, dictum pulvinar metus.
          </p>
          <br />
          <p>
            Suspendisse rhoncus odio in ipsum tincidunt, ac elementum sem
            efficitur. Curabitur vitae velit sit amet eros gravida iaculis. Cras
            fermentum odio nisl, fermentum facilisis tortor eleifend quis. Proin
            vel velit in metus elementum gravida. Praesent hendrerit pulvinar
            lacus in imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed vulputate dignissim libero, vitae hendrerit leo
            consectetur vel. Praesent molestie, magna eu porta pharetra, ligula
            odio iaculis tortor, quis vestibulum neque justo at tellus. Fusce in
            velit eget libero varius aliquet.
          </p>
        </div>
        <div className={indexStyles.outerNewsContainer}>
          <h1>Latest News Posts</h1>
          <div className={indexStyles.gridContainer}>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div
                  className={indexStyles.flipContainer}
                  onTouchStart="this.classList.toggle('hover');"
                >
                  <div className={indexStyles.flipper}>
                    <div className={indexStyles.front}>
                      <img
                        className={indexStyles.thumbnail}
                        src={thumbnail}
                        alt="Thumbnail"
                      />
                      <div className={indexStyles.newsText}>
                        <h1>{edge.node.frontmatter.title}</h1>
                      </div>
                    </div>
                    <div className={indexStyles.back}>
                      <div className={indexStyles.newsContentContainer}>
                        <p>{edge.node.frontmatter.intro}</p>
                        <Link
                          to={`/blog/${edge.node.fields.slug}`}
                          className={indexStyles.readmore}
                        >
                          Continue Reading →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default IndexPage
