import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const MainContainer = styled.div`
  background-color: var(--navy);
  width: 100%;
  display: flex;
  flex: 1;

`

export const OuterTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`

export const IconSide = styled.div`

  width: 0%;
  visibility: hidden;
  flex: 0;
  @media screen and (min-width: 768px) {
    flex: 0.2;
    visibility: visible;
    display: block;
  }
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  
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

export const TitleContainer = styled.div`

  flex: 1;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex: 0.8;
    justify-content: flex-start;
  }
  
`


export const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5%;

  @media screen and (min-width: 768px) {
    margin: auto;
    width: 480px;
  }

  @media screen and (min-width: 1500px) {
    margin: auto 25%;
    width: 600px;
  }
`
export const Title = styled.div`
  font-family: sans-serif;
  color: var(--lavender);
  display: grid;
  grid-row-gap: 0px;
  grid-template-columns: auto auto;
  font-weight: 800;
  grid-template-rows: 12px 12px 12px;
  font-size: 12px;
  min-width: 85%;
  width: 85%;

  @media screen and (min-width: 375px) {
    grid-template-rows: 14px 14px 14px;
    font-size: 14px;
  }

  @media screen and (min-width: 410px) {
    grid-template-rows: 16px 16px 16px;
    font-size: 16px;
  }

  @media screen and (min-width: 440px) {
    grid-template-rows: 17px 17px 17px;
    font-size: 17px;
  }

  @media screen and (min-width: 500px) {
    grid-template-rows: 18px 18px 18px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    grid-template-rows: 20px 20px 20px;
    font-size: 20px;
  }


  @media screen and (min-width: 1400px) {
    grid-template-rows: 24px 24px 24px;
    font-size: 24px;
    margin: auto;
  }

`

export const LastName = styled.div`


  color: var(--neonblue);
  grid-row: 1;
  grid-row-start: 1;
  grid-row-end: span 3;  
  font-size: 48px;
  line-height: 0.7;

  @media screen and (min-width: 360px) {
    font-size: 54px;
    line-height: 0.6;
  }

  @media screen and (min-width: 375px) {
    font-size: 56px;
    line-height: 0.7;
  }

  @media screen and (min-width: 410px) {
    font-size: 60px;
    line-height: 0.8;
  }

  @media screen and (min-width: 440px) {
    font-size: 64px;
    line-height: 0.8;
  }

  @media screen and (min-width: 470px) {
    font-size: 68px;
    line-height: 0.8;
  }

  @media screen and (min-width: 490px) {
    font-size: 72px;
    line-height: 0.7;
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
    line-height: 0.8;
  }

  @media screen and (min-width: 1400px) {
    font-size: 100px;
    line-height: 0.6;
  }
`
export const CompanyDescription = styled.div`

  color: var(--white);
  font-family: Tomorrow, sans-serif;
  text-align: justify;
  font-size: 12px;

  margin: 2% 2%;
  min-width: 82.5%;
  width: 82.5%;

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }

  @media screen and (min-width: 410px) {
    font-size: 15px;
  }

  @media screen and (min-width: 440px) {
    font-size: 16px;
  }

  @media screen and (min-width: 490px) {
    font-size: 17px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1500px) {
    font-size: 24px;
  }

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
  font-size: 1rem;
  padding: 12px 0;
  margin: 1% 0;
  min-width: 82.5%;
  width: 82.5%;

  @media screen and (min-width: 375px) {
    font-size: 1.5rem;
  }


  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }

  @media screen and (min-width: 1500px) {
    font-size: 1.8rem;
    padding: 18px 0;
  }

`