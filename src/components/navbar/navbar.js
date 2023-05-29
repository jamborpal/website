import React, { useEffect } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('website/about');
  }, []);

  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/website/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/website/workexperience" activeStyle>
            Work Experience
          </NavLink>
          <NavLink to="/website/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/website/studies" activeStyle>
            Studies
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
