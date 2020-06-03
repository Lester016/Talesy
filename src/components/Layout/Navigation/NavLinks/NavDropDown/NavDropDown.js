import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";

const NavDropDown = (props) => {
  return (
    <React.Fragment>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="/topics">
          {props.title}
        </Link>
        <div className="navbar-dropdown is-boxed">
          {props.items.map((item) => (
            <NavItem
              title={item.title}
              key={item.id}
              to={"/topics/" + item.id}
            />
          ))}
          <hr className="navbar-divider" />
          <NavItem title="Trending" to="/trending" />
          <NavItem title="More" to="/" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavDropDown;
