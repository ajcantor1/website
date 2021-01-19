import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'

export const HeroContainer = styled.div`
  padding-top: 100px;
  background-color: var(--navy);
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 60vh;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const Landing = styled.div`
  flex: 1;

  margin-left: 1%;
`

export const Ampersand = styled.div`

    font-size: 1.1rem;
    vertical-align:top; 
    font-weight: 700; 
`

export const Design = styled.div`
  vertical-align:bottom;
 
`

export const Title = styled.div`
  font-family: Tahoma, sans-serif;
  color: var(--lavender);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 0.8;
  letter-spacing: -1px;
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  
`

export const LastName = styled.div`
  font-size: 4rem;
  color: var(--neonblue);
  justify-content: center;
`

export const RemainingTitle = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
`



export const IconSide = styled.div`
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
  

  @media screen and (max-width: 768px) {
    display: none;
    min-width: 150px;
  }
`
export const CompanyDescription = styled.div`

  vertical-align:middle;
  margin: 20px auto;
  color: var(--gray);
  font-size: 1rem;
  max-width: 500px;
  

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 450px;
    margin: 20px auto; 
  }

  @media screen and (max-width: 720px) {
    font-size: 0.9rem;
    max-width: 450px;
    margin: 20px 0;
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
  padding: 8px 8px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  max-width: 300px;
  display: block;
  margin:  0 auto;
  margin-top: -80px;
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);


 
`




