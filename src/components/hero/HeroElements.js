import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const MainContainer = styled.div`
  background-color: var(--navy);
  width: 100%;
  position: relative;
  min-width: 100vw;
  height: 600px;
  max-height: 700px;  

  @media screen and (min-height: 800px) {
    height: 800px;
    min-height: 800px;  
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: 100vh;  
  }
`

export const OuterTitleContainer = styled.div`

  top: 0%;
  transition: 0.8s all ease;
  position: relative;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 80%;
  }

  @media screen and (min-width: 900px) {
    position: absolute;
    top: 5%;
    left: 20%;
    width: 70%;
    height: 100%;
  }
`

export const TitleContainer = styled.div`
  min-width: 250px;
  width: 90%;
  margin: 0px auto;

  @media screen and (min-width: 640px) {
    margin: 0 auto;
    min-width: 350px;
  }

  @media screen and (min-width: 640px) {
    margin: 0 auto;   
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }

  @media screen and (min-width: 1000px) {
    padding: 140px 0;
    margin: auto;
  }
 
  @media screen and (min-width: 1300px) {
    margin: auto;
    width: 800px;
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
  max-width: 250px;

  @media screen and (min-width: 400px) { 
    margin: auto;
    max-width: 350px;
  }

  @media screen and (min-width: 768px) { 
  
    max-width: 320px;
  }



  @media screen and (min-width: 1000px) { 
    padding: 0px 0;
    max-width: 400px;
  }

 

  @media screen and (min-width: 1920px) { 
    padding: 0px 0;
    max-width: 600px;
    padding: 50px;
  
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
  font-size: 14px;
  grid-template-rows: 1rem 1rem 1rem;
  min-height: 52px;
  >div{
    margin-top: 1.4rem;
  }

  @media screen and (min-width: 400px) {
    font-size: 16px;
    grid-template-rows: 16px 16px 16px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 400px;
    min-width: 400px;
    >div{
      margin-top: 1.5rem;
      margin-left: 4px;
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
  font-size: 52px;

  @media screen and (min-width: 400px) {
    font-size: 6rem;
    line-height: 0.6;
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
  margin: 10px 5px;

  @media screen and (min-width: 400px) {
    font-size: 18px;
    width: 305px;
    padding-top: 5px;
    margin: 10px 0 5px 10px;
  }

  @media screen and (min-width: 768px) { 
    margin: 15px 5px 10px 9px;
    width: 305px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
    width: 380px;
    margin: 15px 5px 10px 8px;
  }

  @media screen and (min-width: 1300px) {
    font-size: 2.5rem;
    width: 520px;
    margin: 25px 5px 15px 15px;
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
  display: block;
  padding: 12px 0px;
  margin: auto;
  width: 100%;
  margin-left: 2px;

  @media screen and (min-width: 400px) {
    font-size: 16px;
    width: 310px;
    margin-left: 10px;
    
  } 

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    font-size: 18px;
    width: 305px;

  }

  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
    padding: 14px 0;
    margin-left: 6px;
    width: 385px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 2.8rem;
    margin-left: 10px;
    width: 545px;
    padding: 14px 0px;
  }
`