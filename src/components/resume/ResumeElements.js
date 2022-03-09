import styled from 'styled-components';
import { Link } from "gatsby"
import Img from "gatsby-image"
export const OuterContainer = styled.div`
  padding-top: 20px;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  font-size: 14px;
`

export const SideContainer = styled.div`
  flex: 0.25;
  
  display: flex;
  flex-direction: column;
`

export const SideHeaderContainer = styled.div`

  background-color: var(--cyan);
  display: flex;
  flex-direction: column;
  color: var(--white);
  text-align: center;
  padding: 20px;
`

export const SideEducationContainer = styled.div`

  flex-grow: 1;
  background-color: var(--offwhite);
  display: flex;
  flex-direction: column;
  padding: 0px;
  font-family: Tahoma, sans-serif;

  & > div {
    
      padding: 2.5px 25px;
  }
`

export const Name = styled.div`
  font-size: 2.4em;
  font-family: "Times New Roman", Times, serif;
`

export const Title = styled.div`
  font-size: 1.8em;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
`

export const Education = styled.div`
  font-size: 1.6em;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  text-transform: uppercase;
`

export const BulletContainer = styled.div`
  font-family: Tahoma, sans-serif;
  display: grid;
  grid-template-columns: 40px 1fr;
  margin: auto;
  font-size: 1em;
  padding: 20px 5px 10px 5px;
  text-align: left;
  & > div {
      
    height: 30px;
  }
`

export const QRContainer = styled.div`
  background-color: var(--white);
  width: 190px;
  height: 190px;
  overflow: hidden;
  margin: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  & > img {
    margin: auto;
  }
`

export const MainContainer = styled.div`
  margin: 10px 20px;
  flex: 0.7;
  min-width: 400px;
  max-width: 500px;
`

export const WorkExperience = styled.div`
  font-size: 1.1em;
  color: var(--jet);
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  text-transform: uppercase;
`

export const JobTitleCompanyRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`

export const JobDateLocationRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
 
  font-size: 0.8em;
  font-family: Tahoma, sans-serif;
`

export const JobTitle = styled.div`
  font-size: 1em;
  color: var(--jet);
  font-family: Tahoma, sans-serif;
  text-transform: capitalize;
`

export const Company = styled.div`
  font-size: 1em;
  color: var(--jet);
  font-weight: 600;
  font-family: Tahoma, sans-serif;
  text-transform: capitalize;
`

export const JobDuties = styled.ul`
  font-size: 1em;
  margin-left: 0px;
  color: var(--jet);
  font-family: Tahoma, sans-serif;
`
export const Skill = styled.div`
  font-weight: bold;
  margin: 5px 0;
`

export const ReferencesTitle = styled.div`
  font-size: 1em;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  margin-top: 25px;
  text-transform: uppercase;
`

export const ReferencesContainer = styled.div`
  
  font-size: 0.6em;
  font-family: Tahoma, sans-serif;
  display: grid;
  grid-template-columns: 0.9fr 1.8fr 1.2fr 0.6fr;
  margin: auto;
  margin-top: 5px;
  text-align: left;

  & > div {
    margin: 2.5px;
  }

`