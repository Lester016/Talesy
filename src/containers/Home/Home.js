import React from "react";

const Home = () => {
  console.log("Home rendered");
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-8">
        <article className="tile is-child">
          <p className="title">All Stories</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h3>This is a sample title</h3>
                  <p>
                    <small>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin.
                      <br />
                      <strong>John Smith</strong> in Technology
                      <br />
                      Jul 16 · 6 min read
                    </small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <p className="image">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </div>
            </article>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <p className="title">Popular Stories</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
