import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const HeroContainer = styled.div`

  background-color: var(--navy);
  display: flex;
  max-height: 900px;
  min-height: 600px;
  flex-direction: column;

  @media screen and (min-width: 1400px) {
    max-height: 1000px;
    min-height: 900px;
  }

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
  width: 100%;
  margin-bottom: 20%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
    padding: auto;   
  }
  @media screen and (min-width: 1400px) {
    margin: 120px 0;
  }
`
export const Landing = styled.div`
 
  flex: 1 0 auto;
  @media screen and (max-width: 768px) {
    margin: auto; 
  }
`

export const Title = styled.div`
  font-family: Tahoma, sans-serif;
  color: var(--lavender);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1px;
  display: grid;
  margin: 0 auto;
  max-width: 320px;
  grid-template-rows: 16px 16px 16px;
  grid-template-columns: auto auto;

  @media screen and (max-width: 720px) {
    font-size: 14px;
    max-width: 240px;
    grid-template-rows: 12px 12px 12px;
  }

`

export const LastName = styled.div`
  line-height: 0.75;
  font-size: 66px;
  color: var(--neonblue);
  grid-row: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
  padding-right: 12px;

  @media screen and (max-width: 720px) {
    font-size: 54px;
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

  vertical-align:middle;
  margin: 20px auto;
  color: var(--white);
  font-size: 20px;
  max-width: 500px;

  @media screen and (min-width: 1400px) {
    font-size: 20px;
    max-width: 600px;
    margin: 100px 0;
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 360px;
    margin: 20px auto; 
  }

  @media screen and (max-width: 720px) {
    font-size: 16px;
    max-width: 300px;
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
  padding: 8px 10px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  max-width: 245px;
  text-align: center;
  display: block;
  margin:  0 auto;
  border-radius: 25px;

  @media screen and (min-width: 1400px) {
    font-size: 1.3rem;
    max-width: 380px;
    padding: 20px 16px;
    font-weight: 600;
    margin-top: 20px;
  }
`




