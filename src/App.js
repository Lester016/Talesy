import React from "react";

import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";
import CreatePost from "./containers/CreatePost/CreatePost";
import Post from "./containers/Post/Post";
import User from "./containers/User/User";

function App() {
  console.log("App rendered");
  return (
    <div>
      <Home />
      <Auth />
      <CreatePost />
      <Post />
      <User />
    </div>
  );
}

export default App;
