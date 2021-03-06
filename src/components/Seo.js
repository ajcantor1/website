
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
        image
      }
    }
  }`
const Seo = ({description, keywords, title, image, url, author}) => {
  return (
    <StaticQuery query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const metaAuthor = author || data.site.siteMetadata.author
      const metaUrl = url || data.site.siteMetadata.url
      const metaImage = image || data.site.siteMetadata.image
      const metaKeywords = keywords || ["web design", "deep learning", "software", "development"]
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
    }}/>
  )
}
export default Seo