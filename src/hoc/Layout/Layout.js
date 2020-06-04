import React from "react";
import { connect } from "react-redux";

import Navigation from "../Layout/Navigation/Navigation";
import Auth from "../../containers/Auth/Auth";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      {/* Authentication */}
      {props.authMode && <Auth authMode={props.authMode} />}
      <div
        className="container"
        style={{
          maxWidth: 1032,
          marginRight: 10,
          marginLeft: 10,
          margin: "auto",
          marginTop: 56,
        }}
      >
        {props.children}
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
