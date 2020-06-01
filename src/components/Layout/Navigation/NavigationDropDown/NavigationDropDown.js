import React from "react";
import { Link } from "react-router-dom";

const NavigationDropDown = (props) => {
  console.log(props.items);
  return (
    <React.Fragment>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="/topics">
          {props.title}
        </Link>
        <div className="navbar-dropdown is-boxed">
          {props.items.map((item) => (
            <Link
              key={item.id}
              className="navbar-item"
              to={"/topics/" + item.id}
            >
              {item.title}
            </Link>
          ))}
          <hr className="navbar-divider" />
          <Link className="navbar-item" to="/">
            Trending
          </Link>
          <Link className="navbar-item is-active" to="/">
            Components
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationDropDown;
