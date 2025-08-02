import React from 'react';

function WelcomeButton() {
  const sayMessage = (msg) => {
    console.log(msg);
  };

  return (
    <button onClick={() => sayMessage("welcome")}>Say Welcome</button>
  );
}

export default WelcomeButton;
