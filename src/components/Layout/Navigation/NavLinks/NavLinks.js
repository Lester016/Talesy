import React from "react";

import { TOPICS } from "../../../../shared/constants";
import NavDropDown from "../../Navigation/NavLinks/NavDropDown/NavDropDown";
import NavLink from "./NavItem/NavItem";

const NavLinks = () => {
  return (
    <div className="navbar-start">
      <NavLink title="Home" to="/" />
      <NavDropDown title="Topics" items={TOPICS} />
    </div>
  );
};

export default NavLinks;
