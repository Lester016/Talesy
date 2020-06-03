import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Modal from "../../components/UI/Modal/Modal";

const Auth = (props) => {
  console.log("Auth rendered");
  return (
    <Modal
      close={() => props.onChangeAuthMode(null)}
      title={props.authMode === "login" ? "Sign In" : "Sign Up"}
    >
      <div className="buttons has-addons is-centered">
        <button
          className="button"
          onClick={
            props.authMode === "register"
              ? () => props.onChangeAuthMode("login")
              : () => props.onChangeAuthMode("register")
          }
        >
          {props.authMode === "register"
            ? "Already have an account? Sign in"
            : "Don't have an account yet? Sign up"}
        </button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAuthMode: (mode) => dispatch(actions.changeAuthMode(mode)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
