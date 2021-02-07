import styled from 'styled-components';
import {Link} from "gatsby"


export const NotFoundOuterContainer = styled.div`
  font-family: Tomorrow, sans-serif;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, var(--cyan), var(--navy));
 
`
export const NotFoundContainer = styled.div`
  margin: auto;
  position: relative;
  top: 25%;
  max-height: 300px;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  min-width: 400px;

  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.4);
  transition: 0.3s; 
  background-color: var(--navy);

  @media screen and (max-width: 720px) {
    flex-wrap: wrap;
    max-width: 300px;
    min-width: 300px;
    top: 10px;
    max-height: 410px;
  }
`
export const ImageBox = styled.div`
  padding:auto;
  margin: auto;
  justify-content: center;
  max-width: 200px;

  img {
    max-width: 200px;
    margin-top: 10px;
    margin-left: 10px;
  }
`

export const HeadingBox = styled.div`
  display: block;
  margin-top: 50px;
  margin-left: 5%;

  @media screen and (max-width: 720px) {
    margin-top: 0px;
  }
  h1 {
    
    font-size: 2rem;
    font-weight: 700;
    color: var(--neonblue);
    line-height: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    color: var(--lavender);
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    color: var(--white);
    margin: 5px 0;
  }
`

export const GoBackHome = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 1rem;
  color: var(--white);

  svg {
    margin-bottom: 4px;
    margin-right: 4px;
  }
`
