
import React from "react"
import { Helmet } from "react-helmet"


const metaDescription = "Smart automated systems sleek design"
const metaTitle = "Cantor Computing"
const metaAuthor = "Jeremy Cantor"
const metaUrl = "https://www.cantorcomputing.com"
const metaImage = `src/images/robot-icon.png`
const metaKeywords =  ["web design", "deep learning", "software", "development", "machine learning"]

const Seo = () => {
  return (


  <Helmet
    title={metaTitle}
    meta={[
      {
        name: `description`,
        content: metaDescription
      },
      {
        property: `og:title`,
        content: metaTitle
      },
      {
        property: `og:author`,
        content: metaAuthor
      },
      {
        property: `og:description`,
        content: metaDescription
      }, 
      {
        property: `og:type`,
        content: `website`
      },
      {
        property: `og:image`,
        content: metaImage
      },
      {
        property: `og:url`,
        content: metaUrl
      }
    ].concat(
      metaKeywords && metaKeywords.length > 0 ? {
        name: `keyword`,
        content: metaKeywords.join(`, `)
      } : []
    )}
  />
)

  
}
export default Seo