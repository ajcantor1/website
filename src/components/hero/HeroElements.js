import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const MainContainer = styled.div`
  background-color: var(--navy);
  width: 100%;
  position: relative;
  min-width: 100vw;
  min-height: 100vh;  
`

export const OuterTitleContainer = styled.div`
  height: 100vh;
  top: 0%;
  transition: 0.8s all ease;
  position: relative;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 20%;
    width: 80%;
    height: 100%;
  }

  @media screen and (min-width: 900px) {
    position: absolute;
    left: 20%;
    width: 70%;
    height: 100%;
  }
`

export const TitleContainer = styled.div`
  min-width: 250px;
  width: 90%;
  max-width: 320px;
  margin: 0px auto;


  @media screen and (min-width: 400px) {
    max-width: 380px;
  }


  @media screen and (min-width: 640px) {
    margin: 0 auto;   
  }

  @media screen and (min-width: 768px) {
    margin: 250px auto;
    
  }


  @media screen and (min-width: 1000px) {
    padding: 140px 0;
    margin: 0px auto;
    max-width: 400px;
  }

 

  @media screen and (min-width: 1300px) {
    margin-left: 200px;
    max-width: 600px; 
    margin: 20px auto;
  }

`

export const IconSide = styled.div`

  width: 0%;
  visibility: hidden;
  
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 0%;
    width: 20%;
    height: 100%;
    visibility: visible;
    display: block;
  }
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 0 100px;  
  padding-left: 20px;


  svg {
    min-width: 80px;
    max-width: 80px;
    animation: colorChange  10s ease-in-out;
    color: var(--neonblue);
  }

  @media screen and (min-width: 1300px) {
    svg {
      min-width: 100px;
      max-width: 100px;
    }
  }
`

export const Landing = styled.div`
  height: 500px;
  margin: auto;
  padding: 100px 0;
  max-width: 300px;

  @media screen and (min-width: 400px) { 
    max-width: 320px;
    margin: auto;
  }

  @media screen and (min-width: 768px) { 
    padding: 10px 0;
  }

  @media screen and (min-width: 1280px) { 
    max-width: 400px;
    padding: 0px 0;
  }

  @media screen and (min-width: 1000px) { 
    padding: 125px 0;
    max-width: 400px;
  }

  @media screen and (min-width: 1200px) { 
    padding: 0;
    max-width: 600px;
  }

  @media screen and (min-width: 1920px) { 
    padding: 0px 0;
  
  }
`

export const Title = styled.div`
  font-family: Tahoma, sans-serif;
  color: var(--lavender);
  display: grid;

  max-width: 280px;
  grid-column-gap: 3px;
  grid-row-gap: 0px;
  grid-template-columns: auto auto;
  
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  grid-template-rows: 1.3rem 1.3rem 1.3rem;

  >div{
    margin-top: 1.4rem;
  }

  @media screen and (min-width: 400px) {
    max-width: 320px;

    >div{
      margin-top: 1.5rem;
    }
      font-size: 1.4rem;
      grid-template-rows: 1.4rem 1.4rem 1.4rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: 400px;
    min-width: 400px;
    >div{
      margin-top: 1.5rem;
    }
      font-size: 1.8rem;
      grid-template-rows: 1.6rem 1.6rem 1.6rem;
  }

  @media screen and (min-width: 1300px) {
    
    max-width: 500px;
    min-width: 500px;
    
    >div{
      margin-top: 1.5rem;
    }
    font-size: 2.6rem;
    grid-template-rows: 2.3rem 2.3rem 2.3rem;
  }

`

export const LastName = styled.div`

  line-height: 0.7;
  color: var(--neonblue);
  grid-row: 1;
  grid-row-start: 1;
  grid-row-end: span 3;  
  font-size: 5rem;

  @media screen and (min-width: 400px) {
    font-size: 6rem;
  }

  @media screen and (min-width: 1000px) {
    font-size: 7rem;
  }

  @media screen and (min-width: 1300px) {
    font-size: 10rem;
  }
`
export const CompanyDescription = styled.div`

  color: var(--white);
  font-family: Tomorrow, sans-serif;
  text-align: justify;
  font-size: 14px;

  margin: 2rem 0.5rem;
  min-width: 250px;
  max-width: 250px;  
  
  @media screen and (min-width: 400px) {
    min-width: 300px;
    max-width: 310px;  
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    margin: 3rem 0.5rem;
  }

  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
    min-width: 380px;
    max-width: 380px;  
  }

  @media screen and (min-width: 1300px) {
    font-size: 2.5rem;
    min-width: 540px;
    max-width: 540px;  
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
  font-family: Tomorrow, sans-serif;
  text-transform: uppercase;
  text-align: center;
  border-radius: 25px;  
  font-weight: 600;
  border-radius: 10px;
  font-size: 1.3rem;
  width: 100%;
  padding: 12px 24px;
  min-width: 300px;
  margin-left: 4px;
  @media screen and (min-width: 400px) {
    font-size: 16px;
    padding: 12px 40px;
    
  } 

  @media screen and (min-width: 768px) {
    padding: 12px 26px;
    font-size: 18px;

  }

  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
    padding: 14px 36px;
    margin-left: 6px;
    width: 480px;
    min-width: 480px;
    max-width: 490px;  
  }

  @media screen and (min-width: 1300px) {
    font-size: 2.8rem;
    min-width: 540px;
    max-width: 540px;  
    padding: 14px 36px;
  }
`