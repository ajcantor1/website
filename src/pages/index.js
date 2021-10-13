import React, {useState} from "react"
import Navbar from '@navbar'
import Sidebar from '@sidebar'
import Footer from '@footer'
import '../styles/styles.scss'
import Hero from '@hero';
import About from '@about';
import Services from '@services';
import Seo from "../components/Seo"


const homePage = {
  height: '100vh',
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return(
   
    <>
      <Seo/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div style={homePage}>
        <Navbar toggle={toggle}/>
        <Hero/>
      </div>
      <Services/>
      <About/>
      <Footer/>
  
     
    </>

  );

}

export default IndexPage
