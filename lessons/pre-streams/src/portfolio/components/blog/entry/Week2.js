import React from "react";
import five_rand from "../../../../assets/img/five_rand.jpg"; // Tell Webpack this JS file uses this image
import modular from "../../../../assets/img/modular.png"; // Tell Webpack this JS file uses this image

const Header = () => {
  return (
    <div className="center aligned two column row">
      {/* <div className="column">
        <blockquote>
          <h3 className="ui header">Swaar werk het niemand dood gemaak nie</h3>
          <i className="content">Hard work never killed anyone</i>
        </blockquote>
      </div> */}
    </div>
  );
};

export { Header, modular, five_rand };
