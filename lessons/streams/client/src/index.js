import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
