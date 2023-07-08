/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import RatingStarComponent from "../RatingStarComponent ";

const DashboardResturantContent = ({
  imageSrc,
  description,
  header,
  reviewText,
}) => (
  <ContentWrapperItem>
    <div className="content-wrapper-item">
      <div className="content-img-div">
        <img src={imageSrc} alt="" className="content-img" />
      </div>
      <h4 className="card-name">{header}</h4>
      <div className="review-star-div">
        <RatingStarComponent />
        <p className="review">{reviewText}</p>
      </div>
      <div className="paragraph-moreIcon-div">
        <p>{description}</p>
        <BsArrowRightCircle />
      </div>
    </div>
  </ContentWrapperItem>
);

const ContentWrapperItem = styled.div`
  cursor: pointer;
  background: #ffffff;
  height: 90%;
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
    margin-bottom: 1em;
    img {
      width: 100%;
      height: 70px;
    }
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    /* line-height: 39px; */
    margin: 0;
  }
  .card-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    /* margin-top: 1em; */
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  .review-star-div {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 0.8em;
    margin-bottom: 0.8em;
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
      font-size: 20px;
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
