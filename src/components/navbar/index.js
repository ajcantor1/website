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

  const circuit = useStaticQuery(graphql`
    query {
      circuitLarge: file(relativePath: { eq: "circuit.png" }) {
        childImageSharp {
          fixed(height: 200, width: 420) {
              ...GatsbyImageSharpFixed
              
          }
        }
      },

      circuitMedium: file(relativePath: { eq: "circuit.png" }) {
        childImageSharp {
          fixed(height: 120, width: 250) {
              ...GatsbyImageSharpFixed
          }
        }
      },

      circuitSmall: file(relativePath: { eq: "circuit.png" }) {
        childImageSharp {
          fixed(height: 120, width: 250) {
              ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const circuitImage = [
    {
        ...circuit.circuitSmall.childImageSharp.fixed,
        media: '(max-width: 500px)',
    },
    {
        ...circuit.circuitMedium.childImageSharp.fixed,
        media: '(max-width: 900px)',
    },
    {
        ...circuit.circuitLarge.childImageSharp.fixed,
        media: '(max-width: 3840px)',
    },
];
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
          <Img fixed={circuitImage} />
        </Circuit>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='services' 
                smooth={true} duration={500} 
                offset={-200} spy={true} 
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