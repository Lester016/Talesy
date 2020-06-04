import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className="field">
        <label className="label">{props.title}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            name={props.name}
            ref={props.refRegister}
          />
        </div>
        {props.error && <p style={{ color: "red" }}>{props.error.message}</p>}
      </div>
    </React.Fragment>
  );
};

export default Input;
