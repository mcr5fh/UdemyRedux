import React from "react";

const MainNav = props => {
  return (
    //   Note: Add Inverted to invert the color scheme so it works on a black background
    <div className="ui container">
      <div className="ui large secondary  pointing menu">
        <a className="toc item">
          <i className="sidebar icon" />
        </a>
        <a className="active item">Home</a>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
        <div className="right item">
          <a className="ui inverted button">Log in</a>
          <a className="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
