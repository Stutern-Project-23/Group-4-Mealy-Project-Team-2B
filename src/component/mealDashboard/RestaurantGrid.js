/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import DashboardResturantContent from "./DashboardResturantContent";

const RestaurantGrid = ({
  description,
  reviewText,
  header,
  imageSrc,
  onClick,
}) => (
  <div onClick={onClick} className="dashboard-content-card">
    <DashboardResturantContent
      imageSrc={imageSrc}
      description={description}
      reviewText={reviewText}
      header={header}
    />
  </div>
);

export default RestaurantGrid;
