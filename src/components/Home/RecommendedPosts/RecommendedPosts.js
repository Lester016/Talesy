import React from "react";

const RecommendedPosts = () => {
  return (
    <React.Fragment>
      <div className="column is-half content">
        <div
          style={{
            backgroundImage: `url("https://wowthemesnet.github.io/template-mundana-bootstrap-html/assets/img/demo/5.jpg")`,
            height: 150,
          }}
        ></div>
        <br />
        <small>
          <h3>Brain Stimulation Relieves Depression Symptoms</h3>
          <p>
            Researchers have found an effective target in the brain for
            electrical stimulation to improve mood in people suffering from
            depression.
          </p>
          John Smith in Technology
          <br />
          Jul 16 · 6 min read
        </small>
      </div>
      <div className="column is-half content">
        <div className="columns is-multiline is-mobile">
          <div className="column is-narrow">
            <img
              src="https://wowthemesnet.github.io/template-mundana-bootstrap-html/assets/img/demo/blog4.jpg"
              width="120"
              height="80"
              alt="recommended"
            />
          </div>
          <div className="column">
            <small>
              <h6>Nasa's IceSat space laser makes height maps of Earth</h6>
              John Smith in Technology
              <br />
              Jul 16 · 6 min read
            </small>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-narrow">
            <img
              src="https://wowthemesnet.github.io/template-mundana-bootstrap-html/assets/img/demo/blog5.jpg"
              width="120"
              height="80"
              alt="recommended"
            />
          </div>
          <div className="column">
            <small>
              <h6>Underwater museum brings hope to Lake Titicaca</h6>
              John Smith in Technology
              <br />
              Jul 16 · 6 min read
            </small>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-narrow">
            <img
              src="https://wowthemesnet.github.io/template-mundana-bootstrap-html/assets/img/demo/blog6.jpg"
              width="120"
              height="80"
              alt="recommended"
            />
          </div>
          <div className="column">
            <small>
              <h6>Sun-skimming probe starts calling home</h6>
              John Smith in Technology
              <br />
              Jul 16 · 6 min read
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecommendedPosts;
