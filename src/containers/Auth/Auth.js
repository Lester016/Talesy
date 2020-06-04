import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import * as actions from "../../store/actions/index";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const Auth = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (data) => {
    console.log(data)
    setIsSubmitting(true)
  };
  const { register, handleSubmit, errors } = useForm();

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
          isLoading={isSubmitting}
        />
      ) : (
        <SignUp />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAuthMode: (mode) => dispatch(actions.changeAuthMode(mode)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
