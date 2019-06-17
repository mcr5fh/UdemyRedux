// Import the React and ReactDOM libraries
import React, { Component } from "react";

import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";

import "./template.css";
// Technically this will be the main app sooon...
class PortfolioApp extends Component {
  render() {
    return (
      // <!-- Page Contents -->
      <div>
        <NavBar />

        <div className="pusher">
          <Header />
          <Blog />
          <div>
            <hr />
            <h1>All the Apps</h1>
            <div className="ui grid">
              <div className="ui row">
                <div className="eight wide column">Projects</div>
                <div className="eight wide column">List of stuff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioApp;
