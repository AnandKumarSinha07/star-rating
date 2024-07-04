import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star.css";

const Star = ({ noOFstar }) => {
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setColor(index);
  };

  return (
    <>
      <h1 className="heading">Star Rating:</h1>
      <div className="star">
        {[...Array(noOFstar)].map((_, index) => {
          index+=1
          return (

            <FaStar     
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              className={index <= (color || rating) ? 'active' : 'inactive'}
            />
          );
        })}
      </div>
    </>
  );
};

export default Star;
