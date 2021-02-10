import styled from 'styled-components';
import Img from "gatsby-image"
import { Link } from "gatsby"
export const OuterAboutContainer = styled.div`

  background-color: var(--cyan);
  
  @media screen and (min-width: 1400px) {
    height: 700px;
  }
`

export const GalleryLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  text-decoration-style: dotted;
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  font-family: Tahoma, sans-serif;
  &:visited {
    text-decoration: underline;
    color: var(--white);
  }
  &:hover {
    text-decoration: underline;
    color: var(--white);    
  }
  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 16px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  background-color: var(--navy);
  padding: 0 auto;
  margin: auto;
  flex-wrap: wrap; 
  min-height: 200px;
  max-height: 200px;
  max-width: 800px;
  min-width: 600px;
  box-shadow: 10px 12px 12px 0px rgba(0,10,70,0.8);
  transition: 0.3s;

  @media screen and (max-width: 720px) {
    min-height: 480px;
    max-height: 520px;
    max-width: 300px;
    min-width: 220px;
  }

  @media screen and (max-width: 768px) {
    min-height: 480px;
    max-height: 520px;
    max-width: 200px;
    min-width: 200px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 16px;
    min-height: 220px;
    max-height: 220px;
    max-width: 820px;
    min-width: 620px;
  }
`
export const AboutContainer = styled.div`
  padding: 20px;
  margin: 0 50px;

  >:nth-child(1){    
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    flex-direction: row;

    @media screen and (min-width: 1400px) {
      margin-top: 120px;
    }
  }

  >:nth-child(2){
    margin-bottom: 20px;
    margin-top: 75px;
    margin-right: 25px;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 768px) {
    >:nth-child(1){
    
      margin: 20px auto; 
    }
    
    >:nth-child(2){

      margin: 0px auto;
      margin-top: 100px;
    }
  }

  @media screen and (max-width: 720px) {
    >:nth-child(1){
      padding-top: 10px;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 20px;
    }
    
    >:nth-child(2){
      padding-top: 10px;
      margin: 0 auto;
      margin-top: 20px;
      
      flex-direction: column;

    }
  }
`

export const ProfilePicture = styled(Img)`
  flex: 1 0 250px;
  max-width: 180px;
  min-width: 180px;
  min-height: 180px;
  max-height: 180px;
  margin: auto 10px;
  border: 10px solid var(--neonblue);
  background-color: var(--navy);

  @media screen and (max-width: 720px) {
    margin: 10px auto;
  }


`

export const ProfileDescription = styled.div`
  color: white;
  font-family: Tahoma, sans-serif;
  display: flex;
  height: 100%;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
`

export const Name = styled.h1`
  margin: 0;
  padding: 0;
  text-decoration: none;
  margin-top: 10px;
  font-size: 1.5rem;
  width: 100%;
  font-weight: 600;

  @media screen and (min-width: 1400px) {
    font-size: 2rem;
  }
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: var(--neonblue);
  text-decoration: none;
  margin-top: 10px;
  font-size: 1rem;
  width: 100%;
  font-weight: 600;
  @media screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`

export const Summary = styled.div`
  margin: 10px;
  padding: 0;
  text-decoration: none;
  font-size: 12px;
  text-align: left;
  line-height: 1rem;
  max-width: 400px;
  max-height: 100px;
  font-weight: 600;
  @media screen and (min-width: 1400px) {
    font-size: 1rem;
    line-height: 1rem;
    max-width: 500px;
    max-height: 120px;
  }
`