import React from "react";

const Header = () => {
  return (
    <div className="center aligned two column row">
      <div className="column">
        <blockquote>
          <p>Work quote in Afrikaans</p>
          <p>
            —{" "}
            <a href="http://learnsemantic.com/preface/introduction.html">
              http://learnsemantic.com/preface/introduction.html
            </a>
          </p>
        </blockquote>
      </div>
      <div className="column">
        <div className="ui segment">
          <img
            className="ui centered fluid small image"
            src="../../../img/five_rand.jpg"
            alt="5 rand coin"
          />
          <p>Image Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export { Header };
