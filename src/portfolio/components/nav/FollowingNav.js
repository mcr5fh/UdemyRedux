import React from "react";

const FollowingNav = props => {
  return (
    <div>
      {/* <!-- Following Menu --> */}
      {/* <div className="ui large top fixed hidden menu"> */}
      <div className="ui large top fixed hidden menu">
        <div className="ui container">
          <a className="active item">Home</a>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <div className="right menu">
            <div className="item">
              <a className="ui button">Log in</a>
            </div>
            <div className="item">
              <a className="ui primary button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowingNav;
