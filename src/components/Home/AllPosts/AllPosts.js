import React from "react";

import AllPost from "./AllPost/AllPost";

const AllPosts = (props) => {
  console.log("All Posts rendered", props.posts, props.loading);

  // for (const key in props.posts) {
  //   if (props.posts.hasOwnProperty(key)) {
  //     const element = props.posts[key];
  //     console.log(element);
  //   }
  // }
  return (
    <div className="tile is-parent is-8">
      <article className="tile is-child">
        <p className="title title title is-5">All Stories</p>
        <hr />
        <AllPost />
      </article>
    </div>
  );
};

export default AllPosts;
