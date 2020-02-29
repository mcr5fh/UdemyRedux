import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log("Song: ", song);
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong };
};

//mapstatetoprops
export default connect(mapStateToProps)(SongDetail);
