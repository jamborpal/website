import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';




export const Bars = styled(FaBars)`
  display: none;
  color: #333333;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #333333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover,
  &.active {
    color: #555555;

    &:after {
      content: '';
      position: absolute;
      left: 0.5rem;
      right: 0.5rem;
      bottom: -2px; /* Increase the value to add more space */
      border-bottom: 2px solid black; /* Add underline style using border-bottom */
    }
  }
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #333333;
padding: 10px 22px;
color: #333333;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 1rem;
position: relative;

&:hover {
  background: #555555;
  color: #ffffff;

  &:after {
    content: '';
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    bottom: -2px; /* Increase the value to add more space */
    border-bottom: 2px solid black; /* Add underline style using border-bottom */
  }
}

&.active {
  background: #555555;
  color: #ffffff;

  &:after {
    content: '';
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    bottom: -2px; /* Increase the value to add more space */
    border-bottom: 2px solid black; /* Add underline style using border-bottom */
  }
}
}
`;


export const Nav = styled.nav`
background: transparent;
height: 70px;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 2rem;
z-index: 12;
`;




