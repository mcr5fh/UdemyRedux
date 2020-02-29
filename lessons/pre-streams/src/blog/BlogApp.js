import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import App from "./components/App";
import reducers from "./reducers";
import PostList from "./components/PostList";

const store = createStore(reducers, applyMiddleware(thunk));

const BlogApp = () => {
  return (
    <Provider store={store}>
      <div className="ui container">
        BlogApp
        <PostList />
      </div>
    </Provider>
  );
};

export default BlogApp;
