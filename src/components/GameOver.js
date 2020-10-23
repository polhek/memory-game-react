import React from 'react';

const GameOver = ({ visibility, handleVisibility }) => {
  return (
    <div class={`errorDiv ${visibility}`}>
      <div className="error">
        <h1>Game Over</h1>
        <button onClick={(e) => handleVisibility(e)}>
          <h3>Play again!</h3>
        </button>
      </div>
    </div>
  );
};

export default GameOver;
