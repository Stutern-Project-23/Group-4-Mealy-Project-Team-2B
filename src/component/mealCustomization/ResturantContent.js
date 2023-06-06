import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RatingStarComponent from "../RatingStarComponent ";

const ResturantContent = ({ imageSrc, description, header, reviewText }) => (
  <ContentWrapperItem>
    <div className="content-wrapper-item">
      <img src={imageSrc} alt="" className="content-img" />
      <h4>{header}</h4>
      <div className="review-star-div">
        <RatingStarComponent />
        <p className="review">{reviewText}</p>
      </div>
      <p>{description}</p>
    </div>
  </ContentWrapperItem>
);
ResturantContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
};

const ContentWrapperItem = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 17px;
  margin-top: 2em;
  padding: 0.8em;
  color: #32324d;
  width: 21%;
  img {
    width: 100%;
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
    font-size: 12px;
    margin: 0;
  }
`;

export default ResturantContent;
