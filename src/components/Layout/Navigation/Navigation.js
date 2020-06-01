import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/create-post">CreatePost</Link>
      </li>
      <li>
        <Link to="/Post">Post</Link>
      </li>
    </ul>
  );
};

export default Navigation;
