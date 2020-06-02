import React from "react";

const Home = () => {
  console.log("Home rendered");
  return (
    <React.Fragment>
      <div className="tile is-ancestor columns is-vcentered">
        <div className="tile is-parent column">
          <article className="tile is-child">
            <span class="tag is-light">Technology</span>{" "}
            <span class="tag is-light">Lifestyle</span>{" "}
            <span class="tag is-light">Fitness</span>{" "}
            <span class="tag is-light">Sports</span>{" "}
            <span class="tag is-light">Psychology</span>
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
            <img src="https://miro.medium.com/max/1400/1*V08dt3odPfym4NSv3zB-1w.png" />
          </article>
        </div>
      </div>
      <hr />
      <div className="columns">
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
      </div>
      <br />
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child">
            <p className="title title title is-5">All Stories</p>
            <hr />
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
            <p className="title title title is-5">Popular Stories</p>
            <hr />
            <div className="content">
              <div className="media">
                <figure class="media-left">
                  <h1>01</h1>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <small>
                        <strong>
                          Did Supernovae Kill Off Large Ocean Animals?
                        </strong>
                        <br />
                        Jake Blythe in Technology 31m
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="media">
                <figure class="media-left">
                  <h1>02</h1>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <small>
                        <strong>
                          Did Supernovae Kill Off Large Ocean Animals?
                        </strong>
                        <br />
                        Jake Blythe in Technology 31m
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="media">
                <figure class="media-left">
                  <h1>03</h1>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <small>
                        <strong>
                          Did Supernovae Kill Off Large Ocean Animals?
                        </strong>
                        <br />
                        Jake Blythe in Technology 31m
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="media">
                <figure class="media-left">
                  <h1>04</h1>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <small>
                        <strong>
                          Did Supernovae Kill Off Large Ocean Animals?
                        </strong>
                        <br />
                        Jake Blythe in Technology 31m
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
