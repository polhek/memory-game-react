import React from 'react';
import Scoreboard from './Scoreboard';

const Header = ({ score, highScore }) => {
  return (
    <header>
      <div className="title">
        <h1>Memory game</h1>
      </div>
      <Scoreboard score={score} highScore={highScore} />
    </header>
  );
};

export default Header;
