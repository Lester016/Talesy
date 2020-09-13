import React from "react";
import { connect } from "react-redux";

import NavLinks from "../../components/Layout/Navigation/NavLinks/NavLinks";
import NavBrand from "../../components/Layout/Navigation/NavBrand/NavBrand";
import AuthButtons from "./NavButtons/AuthButtons";
import ProfileButton from "./NavButtons/ProfileButton";

const Navigation = (props) => {
  console.log("Navigation rendered");
  return (
    <React.Fragment>
      <nav className="navbar is-danger is-fixed-top">
        <div className="container" style={{ maxWidth: 1012 }}>
          <NavBrand />

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            {/* Nav links */}
            <NavLinks />

            {/* Auth Buttons */}
            <div className="navbar-end">
              <div className="navbar-item">
                {props.isAuth ? <ProfileButton /> : <AuthButtons />}
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
