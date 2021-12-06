import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../../styles/StyledNavbar";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/logo.svg")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/pricing" activeStyle>
            Pricing
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/board-creation">Create a board</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
