import React from "react";

const Button = (props) => {
  return (
    <div className={props.containerClass} style={props.containerStyle}>
      <button
        type="submit"
        className={
          props.isLoading
            ? `button ${props.color} is-loading`
            : `button ${props.color}`
        }
        style={props.buttonStyle}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
