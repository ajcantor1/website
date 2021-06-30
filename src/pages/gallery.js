import React  from "react"
import '../styles/styles.scss'
import Gallery from '@gallery';
import Seo from "../components/Seo"
const GalleryPage = () => {


  
    return(
      <>
        <Seo title="Gallery"/>
        <Gallery/>
      </>
    );
  
  }
  
  export default GalleryPage
  