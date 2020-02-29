import React, { Component } from "react";

const SongCard = ({ song }) => {
  return (
    <div className="ui card">
      <div className="content"> dummy data for now </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">
            <button>Select Song</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
