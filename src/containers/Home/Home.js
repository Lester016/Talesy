import React from "react";
import AllPosts from "../../components/Home/AllPosts/AllPosts";
import PopularPosts from "../../components/Home/PopularPosts/PopularPosts";
import RecommendedPosts from "../../components/Home/RecommendedPosts/RecommendedPosts";
import TrendingPosts from "../../components/Home/TrendingPosts/TrendingPosts";

const Home = () => {
  console.log("Home rendered");
  return (
    <React.Fragment>
      <div className="tile is-ancestor columns is-vcentered">
        <TrendingPosts />
      </div>
      <hr />
      <div className="columns">
        <RecommendedPosts />
      </div>
      <br />
      <div className="tile is-ancestor">
        <AllPosts />
        <PopularPosts />
      </div>
    </React.Fragment>
  );
};

export default Home;
