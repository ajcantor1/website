import styled from 'styled-components';
import Img from "gatsby-image"


export const ServicesContainer = styled.div`

  background-color: var(--navy);
  width: 100%;
  position: relative;
  min-width: 100vw;
  background-color: var(--white);
  min-height: 1200px;

  @media screen and (min-width: 500px) {
    min-height: 1600px;
  }

  @media screen and (min-width: 600px) {
    min-height: 1000px;
  }

  @media screen and (min-width: 900px) {
    min-height: 500px;
    max-height: 500px;
  }

  @media screen and (min-width: 900px) {
    min-height: 400px;
    max-height: 400px;
  }

  @media screen and (min-width: 1600px) {
    min-height: 400px;
    max-height: 400px;
  }


`

export const ServicesFlexBox = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  min-height: 180px;
  max-height: 200px;

  @media screen and (min-width: 600px) {
    min-height: 800px;
  }
  @media screen and (min-width: 900px) {
    min-width: 800px;
    min-height: 600px;
    max-height: 600px;
   
  }

  @media screen and (min-width: 1200px) {
    min-width: 1150px;
  }

  @media screen and (min-width: 1600px) {
    min-width: 1550px;
  }
`
export const WhatWeDo = styled.div`
  background-color: var(--white);
  font-family: Tomorrow, sans-serif;
  color: var(--navy);
  font-size: 1.5rem;
  line-height: 1em;
  padding: 30px;
  font-weight: 700;
  min-width: 300px;

  @media screen and (min-width: 600px) {
    max-height: 100px;
  }

  @media screen and (min-width: 900px) {
    padding: 10px 30px;
    font-size: 1.8rem;
    max-height: 80px;
    max-width: 800px;
    margin: auto;
  }

  @media screen and (min-width: 1200px) {
    padding: 10px 0px;
    margin: 0 auto;
    font-size: 2.5rem;
    max-height: 100px;
    max-width: 1100px
  }

  @media screen and (min-width: 1600px) {
    min-width: 1400px;
    max-width: 1400px;
    margin: 0 auto;
    font-size: 3rem;
  }

  @media screen and (min-width: 1600px) {
    padding: 20px;
    margin-bottom: 20px;
  }

`

export const ServiceContainer = styled.div`
  flex: 1 0 20%;
  display: flex;
  margin: auto;
  min-width: 250px;
  max-width: 300px;
  min-height: 200px;
  max-height: 400px;
  margin: 0 0px;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media screen and (min-width: 500px) { 
    min-width: 300px;
    max-width: 350px;
    min-height: 400px;
    max-height: 450px;
  }

  @media screen and (min-width: 600px) { 
    min-width: 300px;
    max-width: 350px;
    min-height: 500px;
    max-height: 500px;
  }

  @media screen and (min-width: 900px) { 
    min-width: 200px;
    max-width: 200px;
    min-height: 450px;
    max-height: 450px;

  }

  @media screen and (min-width: 1200px) {
    min-width: 240px;
    max-width: 240px;
    padding: 40px 20px;
  }

  @media screen and (min-width: 1600px) {
      padding: 20px;
      min-width: 320px;
      max-width: 320px;
  }

`

export const ServiceTitle = styled.div`
  font-family: Tomorrow, sans-serif;
  margin-bottom: 10px;
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  min-width: 300px;
  max-width: 300px;
  max-height: 140px;
  min-height: 60px;
  margin: auto;
  font-weight: 600;
  display: block;

  @media screen and (min-width: 500px) {
    max-height: 140px;
    min-height: 60px;
    padding: 20px 0;
    
  }

  @media screen and (min-width: 500px) {
    max-height: 140px;
    min-height: 50px;   
  }

  @media screen and (min-width: 900px) {
    min-height: 100px;
    max-height: 100px;
    font-size: 1.4rem;
    letter-spacing: 1px;
    min-width: 180px;
    max-width: 180px;
    margin: 0;
    margin-top: 30px;
    padding: 0px 10px;
  }


  @media screen and (min-width: 1200px) {
    max-height: 80px;
    font-size: 1.4rem;
    letter-spacing: 1px;
    min-width: 180px;
    max-width: 180px;
    margin: auto;
  }

  @media screen and (min-width: 1600px) {
    min-height: 100px;
    max-height: 100px;
    min-width: 250px;
    max-width: 250px;
    font-size: 1.8rem;
    
  }


`

export const ServiceDescription = styled.div`
  font-family: Tomorrow, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  max-height: 200px;
  min-height: 100px;
  margin: auto; 
  padding: 5px;
  display: block;
  min-width: 300px;
  max-width: 300px;

  @media screen and (min-width: 600px) {
    max-height: 100px;
    min-height: 100px;
    min-width: 250px;
    max-width: 250px;
  }

  @media screen and (min-width: 900px) {
    max-height: 300px;
    min-height: 300px;
    min-width: 150px;
    max-width: 150px;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1200px) {
    max-height: 300px;
    min-height: 300px;
    min-width: 250px;
    max-width: 250px;
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1600px) {
    max-height: 200px;
    min-height: 200px;
    min-width: 300px;
    max-width: 300px;
  }

`

export const ServiceImageContainer = styled.div`

`
export const ServiceImage = styled(Img)`

  display: block;
  max-width: 120px; 
  max-height: 160px;
  margin: 10px auto;

  @media screen and (min-width: 500px) { 
    max-width: 200px; 
    max-height: 250px;
  }

  @media screen and (min-width: 600px) { 
    max-width: 200px; 
    max-height: 200px;
  }

  @media screen and (min-width: 900px) {
    max-width: 120px;  
    max-height: 120px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 150px; 
    max-height: 150px;
  }
`

