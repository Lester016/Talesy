import React from "react";
import { connect } from "react-redux";

import NavLinks from "../../../components/Layout/Navigation/NavLinks/NavLinks";
import NavBrand from "../../../components/Layout/Navigation/NavBrand/NavBrand";

const Navigation = (props) => {
  console.log("Navigation rendered");
  console.log("isAuth = ", props.isAuth);
  return (
    <React.Fragment>
      <nav className="navbar is-danger is-fixed-top">
        <div className="container" style={{ maxWidth: 1032 }}>
          <NavBrand />

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            {/* Nav links */}
            <NavLinks />

            {/* Auth Buttons */}
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Navigation);
