// Import the React and ReactDOM libraries
import React from 'react';

// Create a react component
const ComponentsDetail = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  const buttonStyle = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
  );
};

export default ComponentsDetail;
