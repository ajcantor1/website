import React, {useState} from "react"
import Sidebar from '@sidebar'
import Footer from '@footer'
import '../styles/styles.scss'
import Hero from '@hero';
import About from '@about';
import Services from '@services';
import Seo from "../components/Seo"



const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return(
   
    <>
      <Seo/>
      <Hero/>
  
    </>

  );

}

export default IndexPage
