import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bulma/css/bulma.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import App from "./App";
import authReducer from "./store/reducers/auth";
import allPostsReducer from "./store/reducers/allPosts";
import { watchAuth, watchAllPosts } from "./store/sagas";

// This is for browser devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// collections of reducer.
const rootReducers = combineReducers({
  auth: authReducer,
  allPosts: allPostsReducer,
});

// Instantiate saga.
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchAllPosts);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
