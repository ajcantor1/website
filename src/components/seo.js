/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {


  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
        author
      }
    }
  }
  `)

const metaDescription = description || data.site.siteMetadata.description
const defaultTitle = data.site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={data.site.siteMetadata.title.concat(title)}

      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `url`,
          content: data.site.siteMetadata.url,
        },
        {
          property: `author`,
          content: data.site.siteMetadata.author,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site`,
          content: data.site.siteMetadata.title,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
