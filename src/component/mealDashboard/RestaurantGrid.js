/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import Meal from "../../assets/images/meal.png";
import DashboardResturantContent from "./DashboardResturantContent";

const RestaurantGrid = () => {
  const contents = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    contents.push(
      <DashboardResturantContent
        key={i}
        imageSrc={Meal}
        description="Basmati rice with chicken chunks and often other savory ingredients"
        reviewText="Reviews (220)"
        header="Tastee"
      />,
    );
  }

  return <>{contents}</>;
};

export default RestaurantGrid;
