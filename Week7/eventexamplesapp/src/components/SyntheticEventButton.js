import React from 'react';

function SyntheticEventButton() {
  const handleClick = (event) => {
    console.log("I was clicked");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default SyntheticEventButton;
