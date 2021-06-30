import React, {useState, useEffect } from "react"
import {IconGitHub, IconCodepen, IconInstagram, IconLinkedin, IconStackOverflow} from "@icons"
import {
  MainContainer,
  OuterTitleContainer,
  TitleContainer,
  Landing,
  LastName,
  Title,
  IconSide,
  IconContainer,
  CompanyDescription,
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
      <MainContainer>
        <OuterTitleContainer>

      
          <TitleContainer>

            <Landing>
              <Title>
              <LastName>Cantor</LastName>
              <div>Computing</div>
              <div>&</div>
              <div>Design</div>
            </Title>
            <CompanyDescription>
              Breathing life into your Business Ideas with our Computing Wizardry and Aesthetically Pleasing Designs
            </CompanyDescription>
            <ServiceButton 
              to="services" smooth={true} duration={700} 
              offset={-200} spy={true} >
              What <i><b><u>Can</u></b></i> we do for you?
            </ServiceButton>      
      
            </Landing>

          </TitleContainer>
        </OuterTitleContainer>
      <IconSide>
          <IconContainer>
            <IconCodepen/>
            <IconStackOverflow/>
            <IconGitHub/>
            <IconLinkedin/>
            <IconInstagram/>
          </IconContainer>
        </IconSide>
      </MainContainer>
    </>
      
    
  );
  
}

export default Hero