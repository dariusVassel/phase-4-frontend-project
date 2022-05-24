import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SideBtnWrap, SidebarLink, SidebarRoutes, SidebarWrapper, SidebarMenu} from './SidebarElements'

export default function Sidebar() {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="services">Services</SidebarLink>
                <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoutes to="/login">Login</SidebarRoutes>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}
