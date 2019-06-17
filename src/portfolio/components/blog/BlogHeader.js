import React from "react";

const BlogHeader = props => {
  const blogStyle = {
    paddingTop: "4rem",
    paddingBottom: "4rem"
  };
  return (
    <div className="ui vertical raised segment" style={blogStyle}>
      <div className="ui text center aligned container">
        <h1 className="ui huge centered header">
          Blog. Let's start a Blog
          <div className="sub header">
            I always wanted to have a radio talk show, so this is the next best
            thing?
          </div>
        </h1>
      </div>
    </div>
  );
};

export default BlogHeader;
