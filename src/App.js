import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import CreatePost from "./containers/CreatePost/CreatePost";
import Post from "./containers/Post/Post";
import User from "./containers/User/User";
import Layout from "./hoc/Layout/Layout";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";

function App(props) {
  console.log("App rendered");
  const { onAutoSignup } = props;

  useEffect(() => {
    onAutoSignup();
  }, [onAutoSignup]);
  
  return (
    <Layout>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
