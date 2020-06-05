import React from "react";
import { getPublishDate, getContentIntro } from "../../../../shared/utility";

const AllPost = (props) => {
  console.log("AllPost rendered");
  return (
    <div className="content">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h3>{props.title}</h3>
            <p>
              <small>
                {getContentIntro(props.content)}
                <br />
                <strong>{props.author}</strong>{" "}
                {props.tags && " in " + props.tags[0]}
                <br />
                {getPublishDate(props.date)} · {props.readTime} min read
              </small>
            </p>
          </div>
        </div>
        {/* <div className="media-right">
          <p className="image">
            <img src={props.image} alt="recommended" />
          </p>
        </div> */}
      </article>
    </div>
  );
};

export default AllPost;
