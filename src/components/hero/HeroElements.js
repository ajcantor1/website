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
  margin: 50px 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 50%;
    padding: auto;   
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.4rem;
    margin: 120px 0;
  }
`
export const Landing = styled.div`
  margin: auto 400px;

  @media screen and (max-width: 768px) {
    margin: auto; 
  }

`

export const Ampersand = styled.div`
    font-size: 1.1rem;
    vertical-align:top; 
    font-weight: 700; 

  @media screen and (min-width: 1400px) {
    font-size: 1.6rem;
  }
`

export const Design = styled.div`
  vertical-align: bottom;
`

export const Title = styled.div`
  font-family: Tahoma, sans-serif;
  color: var(--lavender);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 0.8;
  letter-spacing: -1px;
  display: flex;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: 1400px) {
    font-size: 1.4rem;
    line-height: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const LastName = styled.div`
  font-size: 4rem;
  color: var(--neonblue);
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    font-size: 4rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 8rem;
    margin-left: 0px;
  }

`

export const RemainingTitle = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;

  @media screen and (min-width: 1400px) {
    margin-top: 32px;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`



export const IconSide = styled.div`
  padding-left: 10px;
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
  font-size: 1rem;
  max-width: 500px;

  @media screen and (min-width: 1400px) {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 20px 0;
    margin-left: 250px;
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-width: 380px;
    margin: 20px auto; 
  }

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    max-width: 360px;
    margin-left: 10px;
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
    margin-left: 350px;
  }

`




