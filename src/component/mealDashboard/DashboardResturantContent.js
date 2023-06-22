/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import RatingStarComponent from "../RatingStarComponent ";
import MealCustomizationModal from "./MealCustomizationModal";

const DashboardResturantContent = ({
  imageSrc,
  description,
  header,
  reviewText,
}) => {
  const [isMealCustomizationModalOpen, setIsMealCustomizationModalOpen] =
    useState(false);

  const handleMealClick = () => {
    setIsMealCustomizationModalOpen(!isMealCustomizationModalOpen);
  };

  const handleCloseMealModal = () => {
    setIsMealCustomizationModalOpen(false);
  };
  return (
    <ContentWrapperItem>
      <div onClick={handleMealClick}>
        <div className="content-wrapper-item">
          <div className="content-img-div">
            <img src={imageSrc} alt="" className="content-img" />
          </div>
          <h4>{header}</h4>
          <div className="review-star-div">
            <RatingStarComponent />
            <p className="review">{reviewText}</p>
          </div>
          <div className="paragraph-moreIcon-div">
            <p>{description}</p>
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
      <div>
        {isMealCustomizationModalOpen && (
          <MealCustomizationModal onCloseModal={handleCloseMealModal} />
        )}
      </div>
    </ContentWrapperItem>
  );
};

const ContentWrapperItem = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 2em;
  padding: 0.8em;
  color: #32324d;

  .content-img-div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin: 0;
  }
  p {
    margin-top: 1em;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  .review-star-div {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .review {
    font-weight: 500;
    font-size: 8px;
    margin: 0;
  }
  .paragraph-moreIcon-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    svg {
      font-size: 26px;
      cursor: pointer;
      color: #11111a;
    }
  }
`;

DashboardResturantContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
};

export default DashboardResturantContent;
