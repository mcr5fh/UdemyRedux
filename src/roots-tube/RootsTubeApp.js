// Import the React and ReactDOM libraries
import React from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Loader from "./components/Loader";
// import ImageList from './components/ImageList';

import youtube from "./api/youtube";

// Create a react component
class RootsTubeApp extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    nextToken: ""
  };

  componentDidMount() {
    this.onFormSubmit("cars");
  }

  onFormSubmit = searchTerm => {
    console.log("Searching for ", searchTerm);
    const queryParams = { q: searchTerm };
    youtube
      .get("/search", {
        params: queryParams
      })
      .then(response => {
        console.log("Youtube response: ", response);
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          nextToken: response.data.nextPageToken
        });
      });
  };

  onVideoSelect = video => {
    console.log("Selected video ", video);
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1>RootsTube</h1>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div class="ui grid">
          <div class="ui row">
            <div class="eleven wide column">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : (
                "Loading..."
              )}
            </div>
            <div class="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RootsTubeApp;
