import React from "react";

import PopularPost from "./PopularPost/PopularPost";

const PopularPosts = (props) => {
  console.log("Popular Posts rendered");
  let posts = props.posts;

  return (
    <div className="tile is-parent">
      <article className="tile is-child">
        <p className="title title title is-5">Popular Stories</p>
        <hr />
        {posts
          ? Object.keys(posts).map((element, index) => {
              return (
                <PopularPost key={element} index={index+1} {...posts[element]} />
              );
            })
          : "Loading..."}
      </article>
    </div>
  );
};

export default PopularPosts;
