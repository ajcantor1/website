import styled from 'styled-components';
import {Link} from "gatsby"
import { Link as ScrollLink } from 'react-scroll'


export const Nav = styled.nav`
  font-family: Tomorrow, sans-serif;
  background-color: var(--navy);
  
  box-shadow: ${({scrollNav}) => (scrollNav ? '0px 4px 4px 0px rgba(0,10,70,0.5);' :  '0px 0px 0px 0px rgba(0,10,70,0.8);')};
  height: 80px;
  display: flex;

  width: 100%;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (min-width: 1400px) {
    height: 120px;
  }
`

export const Circuit = styled.div`
  

  flex: 1 0.9 80px;
  img {
      animation: circuitAnimate  3s linear;
      
  }  
  @media screen and (min-width: 1400px) {
    width: 200px;
    flex: 1 0 150px;
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  padding-right: 24px;

`
export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  align-items: center;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  text-align: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  margin: 0 10px;
  height: 100%;
  cursor: pointer;

  @media screen and (min-width: 1400px) {
    padding: 0 0.5rem;
    font-size: 1.2rem;
  }
`
