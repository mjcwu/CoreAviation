import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="NavBar">
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
