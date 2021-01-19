import React, {useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'; 

import {
  ServicesContainer,
  ServicesFlexBox,
  ServiceContainer,
  ServiceImage,
  ServiceImageContainer,
  ServiceTitle,
  ServiceDescription,
  WhatWeDo
} from './ServiceElements';


const Services = ({id}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { regex: "/^service/" },
        }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const metaData = [
    {
      title: "Our Solutions",
      description: "Include but not limited to graphic design, web development, e-commerce, computer embedded IoT devices",
      altname: "Our Solutions"
    },
    {
      title: "Develop AI Powered Tools",
      description: "To assist in your day to day task. From computer vision to natural language processing.",
      altname: "AI Powered Tools"
    },
    {
      title: "Sleek & Responsive Web Applications",
      description: "For your ecommerce business or to be internal used within your business",
      altname: "Sleek & Responsive Web Applications"
    },
    {
      title: "Automated Systems with Gold Level Support",
      description: "Despite delivering a turn key product we still have your back if an issue ever arrises.",
      altname: "Gold Level Support"
    }
  ]




    
  return(
    <>
      <ServicesContainer id={id}>
        <ServicesFlexBox>
          {data.allFile.edges.map((image, index) => (
            <ServiceContainer>
              <Fade left delay={index*50+10}>
                <ServiceTitle>{metaData[index].title}</ServiceTitle>
              </Fade>
              <ServiceImageContainer>
                <Flip left delay={index*100+50}>
                  <ServiceImage
                    fluid={image.node.childImageSharp.fluid}
                    alt={metaData[index].altname} 
                  />
                </Flip>
              </ServiceImageContainer>
              <Fade bottom>
                <ServiceDescription>{metaData[index].description}</ServiceDescription>
              </Fade>
            </ServiceContainer>
          ))}
        </ServicesFlexBox>
      </ServicesContainer>
      <Fade bottom>
        <WhatWeDo>
          We create things that live on the internet, from websites, applications, 
          or anything in between. Our goal is a deliverable with a performance first & pixel-perfect
          experience.
        </WhatWeDo>
      </Fade>
    </>
      
    
  );
  
}

export default Services