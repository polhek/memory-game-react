import React from 'react';

const Win = ({ handleVisibility, visibility }) => {
  return (
    <div class={`errorDiv ${visibility}`}>
      <div className="error">
        <h1>You have won the game!!! Good Job!!</h1>
        <button onClick={() => handleVisibility()}>
          <h3>Play again!</h3>
        </button>
      </div>
    </div>
  );
};

export default Win;
