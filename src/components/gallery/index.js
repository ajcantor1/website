import React, {useState, useEffect } from "react"
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image"
import {
  OuterImageContainer,
  ImageContainer,
  ImageGrid,
  GoBackLink
} from './GalleryElements';
import {ArrowBackCircle} from '@styled-icons/ionicons-solid'

const Gallery = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);

	const data = useStaticQuery(graphql`{
    allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"},
        relativeDirectory: {eq: "gallery"}
      }, 
      sort: { fields: base, order: ASC })
    {
      edges {
        node {
          base,
          childImageSharp {
            fluid(quality: 100) {
             
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`)
  
  return(
    <>
      <OuterImageContainer>
      <GoBackLink href="/" ><ArrowBackCircle size="32"/>Go Back Home</GoBackLink>
        <ImageContainer>
          <ImageGrid>
            {data.allFile.edges.map((image, key) => (

                <Img key={key}
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(',')[0]}/>
    
            ))}
          </ImageGrid>
        </ImageContainer>
        
      </OuterImageContainer>
      
    </>
      
    
  );
  
}

export default Gallery