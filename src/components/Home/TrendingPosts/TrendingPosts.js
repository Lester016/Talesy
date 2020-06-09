import React from "react";

const TrendingPosts = () => {
  return (
    <React.Fragment>
      <div className="tile is-ancestor columns is-vcentered">
        <div className="tile is-parent column">
          <article className="tile is-child">
            <span className="tag is-light">Technology</span>{" "}
            <span className="tag is-light">Lifestyle</span>{" "}
            <span className="tag is-light">Fitness</span>{" "}
            <span className="tag is-light">Sports</span>{" "}
            <span className="tag is-light">Psychology</span>
            <p className="title">
              This section will display all the trendings in different topics
            </p>
            <div className="content  has-text-justified">
              <small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque.
                </p>
                John Smith in Technology
                <br />
                Jul 16 · 6 min read
              </small>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8 column">
          <article className="tile is-child">
            <img
              src="https://miro.medium.com/max/1400/1*V08dt3odPfym4NSv3zB-1w.png"
              alt="trending-img"
            />
          </article>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrendingPosts;
