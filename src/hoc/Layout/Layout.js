import React from "react";
import Navigation from "../../components/Layout/Navigation/Navigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container" style={{ maxWidth: 1032, marginTop: 56 }}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
