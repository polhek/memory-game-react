import React from 'react';

const Scoreboard = ({ score, highScore }) => {
  return (
    <div className="scoreboard">
      <div>
        <h2>
          Score: <span className="score">{score}</span>
        </h2>
      </div>
      <div>
        <h2>
          Highest Score: <span className="score">{highScore}</span>
        </h2>
      </div>
    </div>
  );
};

export default Scoreboard;
