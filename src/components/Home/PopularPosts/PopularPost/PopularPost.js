import React from "react";

const PopularPost = (props) => {
  return (
    <div className="content">
      <div className="media">
        <figure className="media-left">
          <h1>0{props.index}</h1>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <small>
                <strong>{props.title}</strong>
                <br />
                {props.author} {props.tags && " in " + props.tags[0]}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
