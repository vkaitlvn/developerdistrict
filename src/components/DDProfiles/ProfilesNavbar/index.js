import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>

          <NavbarContainer>
         
            <NavLogo onClick={toggleHome} to='/profiles'>
              DDProfiles
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            
            <NavMenu>


              {/* <NavBtnLink2 to='/Discover'>Discover</NavBtnLink2> */}

              <NavBtnLink2 to='/'>DD Home</NavBtnLink2>
              
              <NavBtnLink2 to='/worldsim'>WorldSim</NavBtnLink2>

              <NavBtnLink2 to='/DDchat'>DDChat</NavBtnLink2>

              
            </NavMenu>

            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
