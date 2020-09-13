import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const AuthButtons = (props) => {
  return (
    <div className="field is-grouped">
      <p className="control">
        <button
          className="button is-small"
          style={{ fontSize: 14 }}
          onClick={() => props.onChangeAuthMode("login")}
        >
          <span>Sign in</span>
        </button>
      </p>
      <p className="control">
        <button
          className="button is-primary is-small"
          style={{ fontSize: 14 }}
          onClick={() => props.onChangeAuthMode("register")}
        >
          <span>Get Started</span>
        </button>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAuthMode: (mode) => dispatch(actions.changeAuthMode(mode)),
  };
};

export default connect(null, mapDispatchToProps)(AuthButtons);
