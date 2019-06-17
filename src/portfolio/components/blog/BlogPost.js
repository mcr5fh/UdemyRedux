import React from "react";

const BlogPost = props => {
  return (
    <div
      className="ui vertical segment"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="ui text container">
        <div className="ui grid">
          <div className="one column row">
            <div className="column">
              <h2 className="ui header">
                {/* <a
                  href="/blog/posts/2017-04-05-introducing-semantic-ui-forest"
                  style={{ color: "inherit" }}
                //Link?
                > */}
                {props.title}
                {/* </a> */}
                <div className="sub header">{props.date}</div>
              </h2>
            </div>
          </div>
          {props.header && <props.header />}
          <p>{props.content && props.content}</p>
          {/* //possible link?<a
            href="/blog/posts/2017-04-05-introducing-semantic-ui-forest"
            className="ui basic button"
            role="button"
          > */}
        </div>
      </div>
      {props.footer && props.footer}
    </div>
  );
};

export default BlogPost;
