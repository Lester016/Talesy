import React from "react";
import { Link } from "react-router-dom";

import NavBurgerMenu from "./NavBurgerMenu/NavBurgerMenu";

const NavBrand = () => {
  return (
    <div className="navbar-brand">
      {/* Nav brand */}
      <Link to="/" className="navbar-item">
        <img
          src="https://bulma.io/images/bulma-logo-white.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </Link>
      {/* Nav Burger Menu */}
      <NavBurgerMenu />
    </div>
  );
};

export default NavBrand;
