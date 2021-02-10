import styled from 'styled-components';
import { Link } from "gatsby"

export const OuterImageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, var(--cyan), var(--navy));
  padding: 20px;
`

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 16px;
  font-family: Tahoma, sans-serif;
  font-weight: 700; 
  
  &:hover {
    transform: scale(1.5);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }

  padding: 5px;

  svg {
    margin-right: 12px;
  }
`

export const ImageContainer = styled.div`

    margin-top: 5px;

`

export const ImageGrid = styled.div`

  margin: 0 auto;
  display: grid !important;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px !important;
  grid-auto-flow: dense !important;

  >:nth-child(2) {
    grid-column-end: span 3;
    grid-row-start: span 2;
  }

  >:nth-child(4) {
    grid-column-end: span 2;
    grid-row-start: span 1;
  }

  >:nth-child(6) {
    grid-column-end: span 2;
    grid-row-start: span 1;
  }

  >:nth-child(7) {
    grid-column-end: span 2;
    grid-row-start: span 1;
  }
  >:nth-child(11) {
    grid-column-end: span 2;
    grid-row-start: span 2;
  }

  >:nth-child(13) {
    grid-column-end: span 2;
    grid-row-start: span 1;
  }

  img {
    object-fit: cover !important;
    height: 100%;
  }

  img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    grid-template-rows: auto-fit;
    grid-template-columns: 1fr;
    
    >:nth-child(n) {
      grid-column-end: auto;
      grid-row-start: auto;
    }

  }
`
