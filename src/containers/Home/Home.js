import React, { useEffect } from "react";
import { connect } from "react-redux";

import AllPosts from "../../components/Home/AllPosts/AllPosts";
import PopularPosts from "../../components/Home/PopularPosts/PopularPosts";
import RecommendedPosts from "../../components/Home/RecommendedPosts/RecommendedPosts";
import TrendingPosts from "../../components/Home/TrendingPosts/TrendingPosts";
import * as actions from "../../store/actions/index";

const Home = (props) => {
  const {
    onGetAllPosts,
    allPosts,
    allPostsIsLoading,
    popularPosts,
    popularPostsIsLoading,
    onGetPopularPosts,
  } = props;

  useEffect(() => {
    onGetAllPosts();
    onGetPopularPosts();
  }, [onGetAllPosts, onGetPopularPosts]);

  console.log("Home rendered");
  return (
    <React.Fragment>
      <div className="tile is-ancestor columns is-vcentered">
        <TrendingPosts />
      </div>
      <div className="columns">
        <RecommendedPosts />
      </div>
      <br />
      <div className="tile is-ancestor">
        <AllPosts posts={allPosts} loading={allPostsIsLoading} />
        <PopularPosts posts={popularPosts} loading={popularPostsIsLoading} />
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPosts: () => dispatch(actions.getAllPosts()),
    onGetPopularPosts: () => dispatch(actions.getPopularPosts()),
  };
};

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts.posts,
    allPostsIsLoading: state.allPosts.loading,
    popularPosts: state.popularPosts.posts,
    popularPostsIsLoading: state.popularPosts.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
