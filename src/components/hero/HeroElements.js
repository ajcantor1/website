import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const HeroContainer = styled.div`

  background-color: var(--navy);
  min-height: 600px;
  width: 100%;
  flex-direction: column;
  position: relative;


  @media screen and (max-width: 768px) {
    max-height: 100vh;
    min-height: 100vh; 
  }
`

export const TitleContainer = styled.div`

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
 

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
    padding-top: 100px
   
  }

`
export const Landing = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media screen and (max-width: 768px) {
  
    padding-top: 100px
   
  } 

  @media screen and (max-width: 720px) {
  
  padding-top: 80px
 
} 

 
`

export const Title = styled.div`
  font-family: Tahoma, sans-serif;
  color: var(--lavender);
  font-size: 16px;
  font-weight: 600;
  display: grid;

  max-width: 280px;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  grid-template-rows: 16px 16px 16px;
  grid-template-columns: auto auto;
  @media screen and (max-width: 720px) {
   
    grid-template-rows: 16px 16px 16px;
  }

`

export const LastName = styled.div`

  font-size: 64px;
  line-height: 0.7;
  color: var(--neonblue);
  grid-row: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
  

  @media screen and (max-width: 768px) {
    font-size: 62px;
    padding-right: 8px;
  }
`
export const IconSide = styled.div`
  margin-left: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--navy);

      svg {
          flex: 1 0 60px;  
          min-width: 60px;
          max-width: 70px;
          animation: colorChange  10s ease-in-out;
          color: var(--neonblue);
      }
  
  @media screen and (min-width: 1400px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
    min-width: 150px;
  }
`
export const CompanyDescription = styled.div`


  color: var(--white);
  font-size: 16px;
  max-width: 320px;
  margin: 20px auto; 
  @media screen and (min-width: 1400px) {
    font-size: 16px;
    max-width: 300px;
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 20px auto; 
  }

  @media screen and (max-width: 720px) {
    font-size: 16px;
    margin-left: auto;
  }
`

export const ServiceButtonContainer = styled.button`
`

export const ServiceButton = styled(ScrollLink)`

  text-decoration: none;
  border: 0;
  outline: none;
  background-color: var(--neonblue);
  color: white;
  cursor: pointer;
  margin-left: 8px;
  padding: 10px 12px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  max-width: 260px;
  text-align: center;
  border-radius: 25px;

  @media screen and (min-width: 1400px) {
    font-size: 1.3rem;
    max-width: 380px;
    padding: 20px 16px;
    font-weight: 600;
    margin-top: 20px;
  }
`




