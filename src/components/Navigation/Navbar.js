import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

export default function Navbar({loggedIn, logOutUser, currentUser, handleGetProducts}) {
  function handleLogout(e){
    e.preventDefault()
    logOutUser()
  } 

  function handleClick(e){
    handleGetProducts(e)
  }

  return (
    <div>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">withthe<b>tide</b></NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            {!loggedIn? (
              <div>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li> 
            </div>) :
            <div>
            <li>Welcome {currentUser.username}</li>
            <img src={currentUser.image_url} alt="profile picture"/>
            <li><Link to="/orders">Orders</Link></li> 
            <li><Link to="/products" onClick={handleClick}>Products</Link></li> 
            <li><a href="#" onClick={handleLogout}>Logout</a></li> 
            </div>
            }
        </ul> */}
    </div>
  )
}
