import React from "react";

const MainNav = props => {
  return (
    //   Note: Add Inverted to invert the color scheme so it works on a black background
    <div className="ui inverted vertical masthead center aligned segment nav-segment">
      <div className="ui container">
        <div className="ui large secondary pointing inverted menu">
          <a className="toc item">
            <i className="sidebar icon" />
          </a>
          <a className="active item">Home</a>
          <a className="item" href="#blog">
            Blog
          </a>
          <a className="item">Career</a>
          <div className="right item">
            <a className="ui inverted button">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
