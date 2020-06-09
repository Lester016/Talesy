import React from "react";
import { connect } from "react-redux";

import Navigation from "../Layout/Navigation/Navigation";
import Auth from "../../containers/Auth/Auth";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      {/* Authentication */}
      {props.authMode && <Auth />}
      <div
        className="container"
        style={{
          maxWidth: 1032,
          margin: "auto",
          marginTop: 52,
        }}
      >
        <div
          style={{
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    authMode: state.auth.authMode,
  };
};

export default connect(mapStateToProps)(Layout);
