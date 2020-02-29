import React from "react";
import marked from "marked";

const Text = ({ content }) => {
  const contentWithNewLines = content.split("<br/>").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
        <br />
      </span>
    );
  });
  console.log("Printing content: ", contentWithNewLines);
  return <div className="">{contentWithNewLines}</div>;
};

export default Text;
