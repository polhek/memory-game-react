import React, { useState } from 'react';
import './App.css';
import cards from './components/Cards';
// Components
import Cards from './components/Cards';
import Header from './components/Header';
import Main from './components/Main';
import GameOver from './components/GameOver';
import Win from './components/Win';

function App() {
  // states
  const [iconList, setIconList] = useState(Cards);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [visibility, setVisibility] = useState('visible');
  const [visibilityWin, setVisibilityWin] = useState('visible');
  const handleClick = (event) => {
    const clickedIcon = cards.find((icon) => icon.id == event.target.id);
    // check if icon was clicked...
    if (!clickedIcon.clicked) {
      clickedIcon.clicked = true;
      incrementScore();
      setIconList(cards);
    } else {
      if (score === 20) {
        handleVisibilityWin();
      } else {
        handleVisibility();
      }

      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      unClick(iconList);
    }
  };

  const handleVisibility = (event) => {
    if (visibility == 'visible') {
      setVisibility('');
      console.log(visibility);
    } else if (visibility === '') {
      setVisibility('visible');
      console.log(visibility);
    }
    console.log('sadasdas');
  };
  const unClick = (array) => {
    array.forEach((icon) => {
      icon.clicked = false;
    });
    setIconList(array);
  };
  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleVisibilityWin = () => {
    if (visibilityWin == 'visible') {
      setVisibilityWin('');
      console.log(visibility);
    } else if (visibilityWin === '') {
      setVisibilityWin('visible');
      console.log(visibility);
    }
  };

  return (
    <>
      <div className="container">
        <Header score={score} highScore={highScore} />
        <Main iconList={iconList} handleClick={handleClick} />
        <footer>
          <p>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {' '}
              www.flaticon.com
            </a>
          </p>
        </footer>
        <GameOver visibility={visibility} handleVisibility={handleVisibility} />
        <Win
          visibility={visibilityWin}
          handleVisibility={handleVisibilityWin}
        />
      </div>
    </>
  );
}

export default App;
