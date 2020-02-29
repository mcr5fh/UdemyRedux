// Import the React and ReactDOM libraries
import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const accessKey = "34d3ec4f6587b987fb88b62179ec2ec122b66cfc7b14f6504d8d2aed365bd675";
const secret = "04827ee32ff3c67c9b4093b9e0f2e26afdab80be654b1de179f7cf3d4a3f7f46";
const searchApi = "/search/photos";

// Create a react component
class PicsApp extends React.Component {

  state = {
    imgData: []
  }

  handleSearchSubmit = (searchTerm) => {
    console.log(searchTerm);
    unsplash.get(searchApi, {
      params: {
        query: searchTerm
      }
    }).then(resp => {
      console.log(resp)
      // const searchResults = resp.data.results.map(item => item.urls.regular);
      this.setState({
        imgData: resp.data.results
      })
    });
  }

  render() {
    const buttonStyle = { marginTop: '10px' };

    return (
      <div className="ui container" style={buttonStyle}>
        <SearchBar handleSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.imgData}
        />
      </div>
    );
  }
}

export default PicsApp;