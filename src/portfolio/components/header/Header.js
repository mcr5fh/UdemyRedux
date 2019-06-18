import React from "react";
import uva from "../../../assets/img/uva.jpg"; // Tell Webpack this JS file uses this image
import dc from "../../../assets/img/dc.jpg"; // Tell Webpack this JS file uses this image
import five_rand from "../../../assets/img/five_rand.jpg"; // Tell Webpack this JS file uses this image
import shoes from "../../../assets/img/shoes.jpg"; // Tell Webpack this JS file uses this image
import table_mountain from "../../../assets/img/table-mountain-sunset.jpg"; // Tell Webpack this JS file uses this image

const Header = props => {
  return (
    //   Note: Add Inverted to invert the color scheme so it works on a black background
    <div className="ui vertical masthead center aligned">
      <div className="ui fluid image">
        <div
          className="ui vertical center aligned segment"
          style={{
            position: "absolute",
            width: "100%",
            height: "-webkit-fill-available"
          }}
        >
          <h1 className="ui inverted centered header">Matthew Cyril Ruiters</h1>
        </div>
        <img src={table_mountain} />
      </div>
    </div>
  );
};

export default Header;
