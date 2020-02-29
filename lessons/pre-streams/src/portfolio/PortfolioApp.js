// Import the React and ReactDOM libraries
import React, { Component } from "react";

import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";

import "./template.css";
import SearchBar from "./components/search/SearchBar";

import { Button, Divider, Image, Transition } from "semantic-ui-react";

import ramble_1 from "../assets/img/ramble_1.png";

// Technically this will be the main app sooon...
class PortfolioApp extends Component {
  state = {
    passwordAccepted: true
  };

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  onFormSubmit = password => {
    console.log("Attempted password ", password);
    if (password === "quoi") {
      this.setState({
        passwordAccepted: true
      });
    }
  };

  submitCallback = () => {
    this.setState({
      term: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar />
        {/* <div className="ui container">
          <img className="ui centered large image" src={ramble_1} alt="logo" />
        </div> */}
        <div className="pusher">
          {!this.state.passwordAccepted && (
            <div className="ui segment">
              <h1 className="ui large centered header">Welcome to the blog?</h1>

              <SearchBar
                onFormSubmit={this.onFormSubmit}
                accepted={this.passwordAccepted}
              />
            </div>
          )}
          <Transition
            visible={this.state.passwordAccepted}
            animation="vertical flip"
            duration={2000}
          >
            <div>
              <Header />
              <Blog />
            </div>
          </Transition>
        </div>
      </div>
    );
  }
}

export default PortfolioApp;
