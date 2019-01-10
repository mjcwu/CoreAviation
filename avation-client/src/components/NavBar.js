import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";
import Logo from "./images/Logo.png";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <img src={Logo} alt="Logo" style = {{
        width: '40px',
        height: '30px',
        backgroundColor: "black"
      }}/> 
        <NavLink exact to="/">
          CoreAviation
        </NavLink>
        <NavLink exact to="/coreaviation/search">
          Flight Search
        </NavLink>
      
    </nav>
  );
};

export default NavBar;
