import React, { useState, useEffect } from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image"
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavContainer, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Circuit
} from './NavbarElements';

const Navbar = ({toggle}) => {

  const data = useStaticQuery(graphql`
    query {
      circuit: file(relativePath: { eq: "horizontal_border_2.png" }) {
        childImageSharp {
          fixed(height: 80, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Circuit>
          <Img fixed={data.circuit.childImageSharp.fixed} />
        </Circuit>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='services' 
                smooth={true} duration={500} 
                offset={-80} spy={true} 
                exact='true'>Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={700} offset={-100} spy={true}
              exact='true'>About</NavLinks>
            </NavItem>

          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}
export default Navbar;