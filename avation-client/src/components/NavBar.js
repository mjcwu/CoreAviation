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
      {/* <div className="NavBar Item"> */}
        <NavLink exact to="/">
          CoreAviation
        </NavLink>
        <NavLink exact to="/coreaviation/search">
          Flight Search
        </NavLink>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
