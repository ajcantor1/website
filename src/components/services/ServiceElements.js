import styled from 'styled-components';
import Img from "gatsby-image"


export const ServicesContainer = styled.div`
  

  margin-bottom: 40px;
  background-color: var(--white);

  @media screen and (min-width: 1400px) {
    max-height: 400px;
  }
  @media screen and (max-width: 768px) {
    min-height: 400px;
    max-height: 850px;
  }
`

export const ServicesFlexBox = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media screen and (min-width: 1400px) {
    max-width: 1400px;
  }
`
export const WhatWeDo = styled.div`
  background-color: var(--white);
  font-family: Tomorrow, sans-serif;
  color: var(--navy);
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: 700;
  padding: 20px 150px;

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
    font-size: 1rem;
    line-height: 1em;
  }
  @media screen and (min-width: 1400px) {
    font-size: 2.2rem;
    line-height: 1.2em;
  }

`

export const ServiceContainer = styled.div`
  flex: 1 0 20%;
  display: flex;
  margin: auto;
  min-width: 250px;
  max-width: 300px;
  
  margin: 0 10px;
  justify-content: center;
  align-content: center;
  flex-direction: column;


  @media screen and (max-width: 768px) {
    flex: 1 0 45%;  
    margin: 20px 10px;
  }
  @media screen and (min-width: 1400px) {
    flex: 1 0 60%;  
    margin: 20px 10px;
    min-width: 300px;
    max-width: 325px;
  }

  @media screen and (max-width: 740px) {
    flex: 1 0 50%;
    min-width: 200px;
    max-width: 200px;
    margin: 0 10px;
  }
`

export const ServiceTitle = styled.div`
  font-family: Tomorrow, sans-serif;
  margin-bottom: 10px;
  font-size: 1rem;

  text-align: center;
  max-width: 220px;
  max-height: 80px;
  min-height: 80px;
  margin: auto;
  font-weight: 600;
  display: block;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    max-height: 50px;
    min-height: 50px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.2rem;
    max-height: 90px;
    min-height: 90px;
  }
`

export const ServiceDescription = styled.div`
  font-family: Tomorrow, sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 0.7rem;
  text-align: center;
  max-height: 65px;
  min-height: 65px;
  margin: auto; 
  padding: 5px;
  display: block;
  max-width: 200px;

  @media screen and (min-width: 1400px) {
    margin-top: 10px;
    font-size: 1rem;
    line-height: 1rem;
    max-width: 280px;
  }


`

export const ServiceImageContainer = styled.div`

`
export const ServiceImage = styled(Img)`
  margin: auto;
  display: block;
  max-width: 120px; 
  max-height: 120px;
  min-height: 100px;


  @media screen and (min-width: 1400px) {

    max-width: 160px; 
    max-height: 160px;
    min-height: 140px;
  }
`

