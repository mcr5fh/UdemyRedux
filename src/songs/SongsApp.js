// Import the React and ReactDOM libraries
import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
import SongCard from "./components/SongCard";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

// Create a react component
class SongsApp extends Component {
  render() {
    return (
      <div>
        <Provider store={createStore(reducers)}>
          <div className="ui container">
            <h1>Songs App</h1>
            <SearchBar />
            <div className="ui grid">
              <div className="ui row">
                <div className="five wide column">
                  <SongList />
                  {/* <SongCard /> */}
                </div>
                <div className="five wide column">
                  <SongDetail />
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default SongsApp;
