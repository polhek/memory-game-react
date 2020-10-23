import React from 'react';
import img from '../img/1.png';
const CardImg = ({ imgPath, id, handleClick }) => {
  return (
    <div className="imgDiv">
      <img
        className="image"
        onClick={(e) => handleClick(e)}
        src={imgPath}
        id={id}
        alt={id}
      ></img>
    </div>
  );
};

export default CardImg;
