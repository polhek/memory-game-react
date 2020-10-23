import React from 'react';

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
