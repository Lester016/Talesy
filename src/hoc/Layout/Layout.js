import React from "react";
import Navigation from "../../components/Layout/Navigation/Navigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
