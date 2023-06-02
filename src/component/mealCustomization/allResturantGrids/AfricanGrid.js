import React from "react";
import ResturantContent from "../ResturantContent";
import Meal from "../../../assets/images/meal.png";

const AfricanGrid = () => {
  const contents = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    contents.push(
      <ResturantContent
        key={i}
        imageSrc={Meal}
        description="Basmati rice with chicken chunks and often other savory ingredients"
        reviewText="Reviews (220)"
        header="Tastee"
        className="rest-ContentWrapperItem"
      />,
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{contents}</>;
};

export default AfricanGrid;
