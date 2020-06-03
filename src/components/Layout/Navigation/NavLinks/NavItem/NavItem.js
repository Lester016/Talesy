import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <NavLink
      className="navbar-item"
      to={props.to}
      exact
      activeClassName="is-active"
    >
      {props.title}
    </NavLink>
  );
};

export default NavItem;
