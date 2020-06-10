import React from "react";

import AllPost from "./AllPost/AllPost";

const AllPosts = (props) => {
  console.log("All Posts rendered");
  const { posts } = props;
  // if (posts) {
  //   Object.keys(posts).map((element) => console.log(posts[element]));
  // }
  return (
    <div className="tile is-parent is-8">
      <article className="tile is-child">
        <p className="title title title is-5">All Stories</p>
        <hr />
        {posts
          ? Object.keys(posts).map((element) => {
              return <AllPost key={element} {...posts[element]} />;
            })
          : "Loading..."}
      </article>
    </div>
  );
};

export default AllPosts;
