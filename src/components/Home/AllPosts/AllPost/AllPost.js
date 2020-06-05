import React from "react";

const AllPost = (props) => {
  return (
    <div className="content">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h3>{props.title}</h3>
            <p>
              <small>
                {props.intro}
                <br />
                <strong>{props.author}</strong>{" "}
                {props.tags && " in " + props.tags}
                <br />
                {props.datePublished} · {props.timeRead} min read
              </small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <p className="image">
            <img src={props.image} alt="recommended" />
          </p>
        </div>
      </article>
    </div>
  );
};

export default AllPost;
