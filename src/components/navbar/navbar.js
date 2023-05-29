import React, { useEffect } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about');
  }, []);

  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/workexperience" activeStyle>
            Work Experience
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/studies" activeStyle>
            Studies
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
