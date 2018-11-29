import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        CoreAvation
      </NavLink>
    </nav>
  );
};

export default NavBar;
