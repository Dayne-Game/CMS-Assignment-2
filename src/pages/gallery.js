import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Theme from "../theme/theme"
import galleryStyles from "./styles/gallery.module.scss"

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDaynesPhotos(limit: 10) {
        edges {
          node {
            largeImageURL
            pageURL
            tags
            user
          }
        }
      }
    }
  `)
  return (
    <Theme>
      <div className={galleryStyles.galleryContainer}>
        <h1>Welcome to the Gallery!</h1>
        <p>
          Psst! This gallery gets its images from Dayne's Plugin he created
          which sources, Programming images from Pixabay.com!
        </p>
        {data.allDaynesPhotos.edges.map(edge => {
          return (
            <img
              src={edge.node.largeImageURL}
              alt={edge.node.tags}
              className={galleryStyles.image}
            />
          )
        })}
      </div>
    </Theme>
  )
}

export default GalleryPage
