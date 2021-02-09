import React, {useState, useEffect } from "react"
import {IconGitHub, IconCodepen, IconInstagram, IconLinkedin, IconStackOverflow} from "@icons"
import {
  HeroContainer,
  TitleContainer,
  Landing,
  LastName,
  Ampersand,
  Design,
  Title,
  IconSide,
  CompanyDescription,
  RemainingTitle,
  ServiceButton
} from './HeroElements';


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);


    
  return(
    <>
      <HeroContainer>
      <TitleContainer>
        <IconSide>
          <IconCodepen/>
          <IconStackOverflow/>
          <IconGitHub/>
          <IconLinkedin/>
          <IconInstagram/>
        </IconSide>
        <Landing>
     
            <Title>
              <LastName>Cantor</LastName>
              <RemainingTitle>
                <div>Computing</div>
                <Ampersand>&</Ampersand><Design>Design</Design>
              </RemainingTitle>
              
            </Title>
            <CompanyDescription>
            Breathing life into your Business Ideas with our Computing Wizardry and Aesthetically Pleasing Designs
          </CompanyDescription>
          <ServiceButton 
            to='services' smooth={true} duration={700} 
            offset={-100} spy={true} >
            What <i><b><u>Can</u></b></i> we do for you?
          </ServiceButton>      
    
        </Landing>

      </TitleContainer>

      </HeroContainer>
    </>
      
    
  );
  
}

export default Hero