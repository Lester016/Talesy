import React from "react";

import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";
import CreatePost from "./containers/CreatePost/CreatePost";
import Post from "./containers/Post/Post";
import User from "./containers/User/User";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

function App() {
  console.log("App rendered");
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

export default App;
