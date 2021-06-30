import React, {useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
	OuterAboutContainer,
  AboutContainer,
	ProfileContainer,
  ProfilePicture,
  ProfileDescription,
  Name,
  Title,
  Summary,
  GalleryLink
} from './AboutElements';

const About = ({id}) => {
  const [isMounted, setIsMounted] = useState(false);
	const data = useStaticQuery(graphql`
    query {
      Jprofile: file(relativePath: { eq: "Jprofile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Aprofile: file(
        relativePath: { eq: "Aprofile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
	`)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);
      
  return(
    <>
      <OuterAboutContainer name="about" id={id}>
        <AboutContainer>
          <ProfileContainer>
							
            <ProfilePicture fluid={data.Jprofile.childImageSharp.fluid}/>
            <ProfileDescription>
              <Name>
                Jeremy
									
              </Name>
              <Title>
                Computer Engineer 
              </Title>
              <Summary>
                With a background in electrical engineering & computer
                science, I enjoy all things computering from building 
                things for the web to new bleeding edge deep learning 
                methods.
              </Summary>
            </ProfileDescription>
							
          </ProfileContainer>
          <ProfileContainer>
						
            <ProfilePicture fluid={data.Aprofile.childImageSharp.fluid}/>
            <ProfileDescription>
              <Name>
                Audria
              </Name>
              <Title>
              Graphic Designer 
              </Title>	
              <Summary>
                My life-long enjoyment working with traditional medium has motivated my career in digital art. 
                I can add content to your website via photography or logo design.
              </Summary>		
              <GalleryLink to="/gallery/">
                Check out my Gallery
              </GalleryLink>					
            </ProfileDescription>   
          </ProfileContainer>
        </AboutContainer>
      </OuterAboutContainer>
    </>
        
    );
    
  }
  
export default About