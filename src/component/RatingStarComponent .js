/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const RatingStarComponent = () => {
  const [stars, setStars] = useState(0);

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  const renderStars = () => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      starIcons.push(
        <span
          key={i}
          className={`star ${i <= stars ? "star-filled" : ""}`}
          onClick={() => handleStarClick(i)}>
          &#9733;
        </span>,
      );
    }

    return starIcons;
  };

  return (
    <div>
      <div className="rating-stars">{renderStars()}</div>
    </div>
  );
};

export default RatingStarComponent;
