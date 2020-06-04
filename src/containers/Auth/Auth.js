import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import * as actions from "../../store/actions/index";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const Auth = (props) => {
  const onSubmit = (data) => {
    props.onAuth(data.email, data.password, props.authMode);
  };

  const { register, handleSubmit, errors, watch } = useForm();

  console.log("Auth rendered");
  return (
    <Modal
      close={() => props.onChangeAuthMode(null)}
      title={props.authMode === "login" ? "Sign In" : "Sign Up"}
    >
      {/* Forms */}
      {props.authMode === "login" ? (
        <SignIn
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={props.isSubmitting}
        />
      ) : (
        <SignUp
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={props.isSubmitting}
          watch={watch}
        />
      )}

      {/* Switch for auth mode */}
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

const mapStateToProps = (state) => {
  return {
    authMode: state.auth.authMode,
    isSubmitting: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAuthMode: (mode) => dispatch(actions.changeAuthMode(mode)),
    onAuth: (email, password, mode) =>
      dispatch(actions.authenticate(email, password, mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
