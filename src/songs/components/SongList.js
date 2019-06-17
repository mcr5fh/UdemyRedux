import React, { Component } from "react";

import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderSongList() {
    var i = 0;
    return this.props.songList.map(song => {
      i += 1;
      return (
        <div className="item" key={i}>
          <div className="left floated content">{song.title}</div>
          <div className="right floated content">
            <button
              className="ui button"
              onClick={() => this.props.selectSong(song)}
            >
              Select Song
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log("SongList: ", this.props);
    return (
      //   <div className="ui segment">
      <div className="ui divided list">{this.renderSongList()}</div>
      //   </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state List: ", state);
  return { songList: state.songList };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
