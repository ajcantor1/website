import React, {useState} from "react"
import Navbar from '@navbar'
import Sidebar from '@sidebar'
import '../styles/styles.scss'
import Hero from '@hero';
import About from '@about';
import Services from '@services';



const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero/>
      <Services id='services'/>
      <About id='about'/>  
    </>
  );

}

export default IndexPage
