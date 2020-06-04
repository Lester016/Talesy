import React from "react";

const Notification = (props) => {
  return <div className="notification is-danger is-light">{props.message}</div>;
};

export default Notification;
