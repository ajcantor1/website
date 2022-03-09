import React  from "react"
import '../styles/styles.scss'
import Resume from '@resume';
import Seo from "../components/Seo"

const ResumePage = () => {

  return(
    <>
      <Seo title="Resume"/>
      <Resume/>
    </>
  );

}
  
export default ResumePage
  