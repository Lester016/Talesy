import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const ProfileButton = (props) => {
  return (
    <React.Fragment>
      <p className="control">
        <button
          className="button is-primary is-small"
          style={{ fontSize: 14 }}
          onClick={() => props.onLogout()}
        >
          <span>Logout</span>
        </button>
      </p>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.clearTokenStart()),
  };
};

export default connect(null, mapDispatchToProps)(ProfileButton);
