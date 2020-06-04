import React from "react";

import Input from "../../UI/Input/Input";
import Buttons from "../../UI/Buttons/Button";

const SignIn = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="field-body">
        <Input
          title="Email"
          name="email"
          type="text"
          refRegister={props.register({
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          error={props.errors.email}
        />
        <Input
          title="Password"
          name="password"
          type="password"
          refRegister={props.register({
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
          error={props.errors.password}
        />
      </div>

      <Buttons
        isLoading={props.isLoading}
        containerStyle={{ margin: 20 }}
        containerClass="buttons has-addons is-centered"
        color="is-danger"
        title="Sign In"
      />
    </form>
  );
};

export default SignIn;
