import React from 'react'
import { 
  CloseIcon, 
  Icon, 
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} offset={-100}>
            About
          </SidebarLink>
          <SidebarLink to="services"               smooth={true} duration={700} offset={-200} spy={true}
              exact='true' onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;