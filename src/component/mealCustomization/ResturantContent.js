/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import RatingStarComponent from "../RatingStarComponent ";

const ResturantContent = ({
  imageSrc,
  description,
  header,
  reviewText,
  vendorName,
  foodId,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const url = `/meal-dashboard/${encodeURIComponent(
      vendorName,
    )}/${encodeURIComponent(foodId)}`;
    navigate(url);
  };
  return (
    <ContentWrapperItem>
      {/* <a href="/meal-dashboard"> */}
      <div className="content-wrapper-item" onClick={handleClick}>
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
      {/* </a> */}
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
      max-height: 70px;
    }
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
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
    text-align: center;
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
    margin-top: 1em;
    p {
      margin-top: 0;
      color: #11111a;
    }
    svg {
      font-size: 20px;
      cursor: pointer;
      color: #11111a;
    }
  }
`;

ResturantContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
};

export default ResturantContent;
