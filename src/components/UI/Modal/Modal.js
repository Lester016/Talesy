import React from "react";

const Modal = (props) => {
  return (
    <div className="modal is active">
      <div className="modal-background" onClick={props.close}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.close}
          ></button>
        </header>
        <section className="modal-card-body">{props.children}</section>
        <footer className="modal-card-foot">
          To make Medium work, we log user data and share it with service
          providers. Click “Sign In” above to accept Medium’s Terms of Service &
          Privacy Policy.
        </footer>
      </div>
    </div>
  );
};

export default Modal;
