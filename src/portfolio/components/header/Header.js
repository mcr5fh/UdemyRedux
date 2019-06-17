import React from "react";
import uva from "../../../assets/img/uva.jpg"; // Tell Webpack this JS file uses this image
import dc from "../../../assets/img/dc.jpg"; // Tell Webpack this JS file uses this image
import five_rand from "../../../assets/img/five_rand.jpg"; // Tell Webpack this JS file uses this image
import shoes from "../../../assets/img/shoes.jpg"; // Tell Webpack this JS file uses this image
import table_mountain from "../../../assets/img/table-mountain-sunset.jpg"; // Tell Webpack this JS file uses this image

const Header = props => {
  return (
    //   Note: Add Inverted to invert the color scheme so it works on a black background
    <div>
      {/* <div className="main-cover"> */}

      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui fluid image">
          <div
            style={{
              position: "absolute",
              //   top: "2em",
              width: "100%",
              height: "auto"
            }}
          >
            <h1
              className="ui centered header"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                display: "inline-block",
                borderRadius: "15px",
                paddingLeft: "0.3em",
                paddingRight: "0.3em"
              }}
            >
              Matthew Cyril Ruiters
            </h1>
          </div>
          <img src={table_mountain} />
        </div>
      </div>

      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="center aligned one wide row">
            <h1 className="ui centered header">About</h1>
          </div>
          <div className="center aligned three column row">
            <div className="column">
              <div className="ui segment">
                <img className="ui centered medium image" src={dc} alt="dc" />
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <img
                  className="ui medium image"
                  src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                  alt="Powered by AWS Cloud Computing"
                />
              </div>
              <div className="ui segment">
                <img
                  className="ui medium image"
                  src={uva}
                  alt="Powered by AWS Cloud Computing"
                />
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <img
                  className="ui centered small image"
                  src={shoes}
                  alt="shoes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
