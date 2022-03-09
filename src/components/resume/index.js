import React, {useState, useEffect } from "react"
import {ArrowBackCircle} from '@styled-icons/ionicons-solid'
import {
    OuterContainer,
    SideContainer,
    SideHeaderContainer,
    SideEducationContainer,
    Name,
    Title,
    Education,
    BulletContainer,
    QRContainer,
    MainContainer,
    WorkExperience,
    JobTitle,
    Company,
    JobTitleCompanyRow,
    JobDateLocationRow,
    JobDuties,
    Skill,
    ReferencesTitle,
    ReferencesContainer
} from './ResumeElements';
import {Github} from '@styled-icons/evaicons-solid'
import {Mail} from '@styled-icons/foundation'
import {Phone, Globe} from '@styled-icons/fa-solid'
import {Location} from '@styled-icons/ionicons-sharp'
import {Calendar} from '@styled-icons/ionicons-outline'
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image"
import { FileX } from "@styled-icons/bootstrap";

const Resume = () => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = React.createRef();
  
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1);
        return () => clearTimeout(timeout);
    }, []);

    const images = useStaticQuery(graphql`
      query {
        qrcode: file(relativePath: { eq: "qrcode.png" }) {
          childImageSharp {
            fixed(height: 150, width: 150) {
              ...GatsbyImageSharpFixed  
            }
          }
        }
      }
  `);
  
  const sercoJobDuties = [
    "Assigned to provide updates and bugfixes for System Authorization Access Request (SAAR)",
    "Spearheaded development of a test automation suite that enabled entry level developers to easily design test cases for SAAR website and IBM's Tririga",
    "Proposed and assisted in deploying Apache Airflow to run test automation scipts at scheduled intervals",
    "Lead development effort of adding a Smart Card (Common Access Card) derived digital signature within Tririga",
    "Evaluated different digital signature products ranging included Docusign, OneSpan, and DBsign."
  ]

  const ezJobDuties = [
    "Worked with popular brands of industrial computer vision cameras and frame grabbers including Cognex, BitFlow, and Point Grey",
    "Developed and deployed solutions convolution neural network to perform image classification and segmentation on contact lenses and other medical products",
    "Created Desktop UI for computer vision products",
    "Maintained and Updated Company's website"
  ]

  const unfJobDuties = [
    "Created a virtual portfolio application called Tour De Finance, a multiuser paper trading system.",
    "Performed duty as a teaching assistant to teach student MATLAB.",
    "Converted professor's MATLAB script to python"
  ]

  const warehouseJobDuties = [

    "Developing a sensor network that to monitor the trajectory/path of warehouse workers.",
    "Designed PCBs equipped with a microcontroller that would monitor discoverable Bluetooth devices carried by workers",
    "Microcontroller used a Wi-Fi module (ESP32) to report information to a server via a REST API",
    "Workers’ paths are timestamped and stored in relational database"
  ]

  const robotDuties = [

    "Represented UNF engineering department in underwater autonomous vehicle competition.",
    "Developed solution to allow a submarine to move autonomously via feedback from computer vision techniques and inertial measurement unit"
  ]

  return(
    <>

      <OuterContainer ref={ref}>
        <SideContainer>
            <SideHeaderContainer>
                <Name>Jeremy Cantor</Name>
                <Title>Software Engineer</Title>
                <BulletContainer>
                    <div><Mail size="18"/></div>
                    <div>ajcantor1@gmail.com</div>
                    <div><Phone size="18"/></div>
                    <div>(904) 707 - 5033</div>
                    <div><Location size="18"/></div>
                    <div>Jacksonville, FL</div>
                    <div><Globe size="18"/></div>
                    <div>www.cantorcomputing.com</div>
                    <div><Github size="18"/></div>
                    <div>www.github.com/ajcantor1</div>
                </BulletContainer>
                <QRContainer><Img fixed={{...images.qrcode.childImageSharp.fixed}} /></QRContainer>
            </SideHeaderContainer>
            <SideEducationContainer>
                
                <Education>Education</Education>
                <div>B.S Electrical Engineering & Computer Science</div>
                <div className="bold">University of North Florida</div>
                <div className="text-align-left"><Calendar size="24"/> May 2015 - December 2017</div>
                <div className="text-align-left"><Location size="24"/> Jacksonville, FL</div>
                <br />
                <Education>Skills</Education>
                <Skill>Python (Django, Flask, Tensorflow, Pandas, Scipy, Apache Airflow, etc.)</Skill>
                <Skill>Javascript (React, React Native, Node.js Electron, D3 etc.)</Skill> 
                <Skill>HTML5, CSS3</Skill> 
                <Skill>Other programming language proficiencies include: C, C++, C#, Java, PHP, SQL</Skill> 
                <Skill>Other relevant skills: Printed Circuit Board Design, Compentency in applied mathematics (Calculus, Linear Algebra, Probability, and Statistics), Machine Learning, Handling and Caring for pet cats, Computer Vision </Skill>     
            </SideEducationContainer>
        </SideContainer>
        <MainContainer>
          <WorkExperience>Work Experience</WorkExperience>
            <JobTitleCompanyRow>
              <JobTitle>Software Developer</JobTitle>
              <Company>Serco Inc.</Company>
            </JobTitleCompanyRow>
            <JobDateLocationRow>
              <div><Calendar size="18"/>  October 2019 - Present</div>
              <div><Location size="18"/>Montgomery, AL (Remote)</div>
            </JobDateLocationRow>
            <JobDuties>
              {sercoJobDuties.map((job, i) => 
                (<li key={i}>{job}</li>))
              }
            </JobDuties>

            <JobTitleCompanyRow>
              <JobTitle>Computer Vision Engineer</JobTitle>
              <Company>EZ Systems (Contractor for Johnson & Johnson Vision Care)</Company>
            </JobTitleCompanyRow>
            <JobDateLocationRow>
              <div><Calendar size="18"/>  Jan 2018 - Sept 2019</div>
              <div><Location size="18"/>Jacksonville, FL</div>
            </JobDateLocationRow>
            <JobDuties>
              {ezJobDuties.map((job, i) => 
                (<li key={i}>{job}</li>))
              }
            </JobDuties>

            <JobTitleCompanyRow>
              <JobTitle>Research & Teaching Assistant</JobTitle>
              <Company>University of North Florida Signal Processing and Network lab</Company>
            </JobTitleCompanyRow>
            <JobDateLocationRow>
              <div><Calendar size="18"/>  Sept 2015 - Dec 2017</div>
              <div><Location size="18"/>Jacksonville, FL</div>
            </JobDateLocationRow>
            <JobDuties>
              {unfJobDuties.map((job, i) => 
                (<li key={i}>{job}</li>))
              }
            </JobDuties>

            <WorkExperience>University Projects</WorkExperience>

            <JobTitleCompanyRow>
              <JobTitle>Engineering Senior Design Project</JobTitle>
              <Company>Warehouse Indoor Localization System</Company>
            </JobTitleCompanyRow>
            <JobDateLocationRow>
              <div><Calendar size="18"/>  Oct 2016 - April 2017</div>
              <div><Location size="18"/>Jacksonville, FL</div>
            </JobDateLocationRow>
            <JobDuties>
              {warehouseJobDuties.map((job, i) => 
                (<li key={i}>{job}</li>))
              }
            </JobDuties>

            <JobTitleCompanyRow>
              <JobTitle>Robosub Competition</JobTitle>
            
            </JobTitleCompanyRow>
            <JobDateLocationRow>
              <div><Calendar size="18"/>  May 2015 - July 2015</div>
              <div><Location size="18"/>San Francisco, CA</div>
            </JobDateLocationRow>
            <JobDuties>
              {robotDuties.map((job, i) => 
                (<li key={i}>{job}</li>))
              }
            </JobDuties>
            <ReferencesTitle>References</ReferencesTitle>
            <ReferencesContainer>

              <div>Alexander Frets</div>
              <div>Technical Business Consultant and Lead for Serco</div>
              <div>alexander.frets@serco-na.com</div>
              <div>(702) 622-8951</div>

              <div>Matthew Guice</div>
              <div>Tririga Developer for Serco</div>
              <div>matthew.guice@serco-na.com</div>
              <div>(334) 782-7748</div>    

              <div>Dan Preza</div>
              <div>Principal Electrical Engineer at J&J Vision Care</div>
              <div>dpreza1@its.jnj.com</div>
              <div>(904) 608-8803</div>

              <div>Patrick Kreidl, Ph.D</div>
              <div>Associate Professor of Engineering</div>
              <div>patrick.kreidl@unf.edu</div>
              <div>(904) 620-1905</div>


            </ReferencesContainer>
        </MainContainer>
      </OuterContainer>
      
    </>
      
    
  );
  
}

export default Resume