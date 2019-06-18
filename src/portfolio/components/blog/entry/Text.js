import React from "react";

const Text = ({ content }) => {
  return (
    <div className="text" style={{ whiteSpace: "pre" }}>
      {content}
    </div>
  );
};

export default Text;
