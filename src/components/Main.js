import React from 'react';
import CardImg from './CardImg';

const Main = ({ iconList, handleClick }) => {
  const shuffleIcons = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  shuffleIcons(iconList);
  return (
    <div className="mainContent">
      <div className="box">
        {iconList.map((icon) => (
          <CardImg
            key={icon.id}
            imgPath={icon.logoURL}
            id={icon.id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
