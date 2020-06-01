import React from "react";
import { Link } from "react-router-dom";
import NavigationDropDown from "./NavigationDropDown/NavigationDropDown";
import { TOPICS } from "../../../shared/constants";

const Navigation = () => {
  console.log("Navigation rendered");
  return (
    <React.Fragment>
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo-white.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Link>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <NavigationDropDown title="Topics" items={TOPICS} />
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      className="bd-tw-button button"
                      onClick={() => console.log("login")}
                    >
                      <span>Sign in</span>
                    </button>
                  </p>
                  <p className="control">
                    <button
                      className="button is-primary"
                      onClick={() => console.log("register")}
                    >
                      <span>Get Started</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
