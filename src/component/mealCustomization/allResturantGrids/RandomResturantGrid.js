/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import styled from "styled-components";
import ResturantContent from "../ResturantContent";
import Meal from "../../../assets/images/meal.png";
import Avocado from "../../../assets/images/hero/avocado-sandwich.png";

const RandomResturantGrid = () => {
  const contents = [];
  const remainingContents = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    contents.push(
      <ResturantContent
        key={i}
        imageSrc={Meal}
        description="Basmati rice with chicken chunks and often other savory ingredients"
        reviewText="Reviews (220)"
        header="Tastee"
      />,
    );
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    remainingContents.push(
      <ResturantContent
        key={i}
        imageSrc={Meal}
        description="Basmati rice with chicken chunks and often other savory ingredients"
        reviewText="Reviews (220)"
        header="Tastee"
      />,
    );
  }

  return (
    <div>
      <ContentWrapperGrid>
        {/* First grid */}
        <>{contents.slice(0, 8)}</>
      </ContentWrapperGrid>

      {/* Discount box */}
      <div className="discount">
        <img src={Avocado} alt="" />
        <div>
          <p className="discount-off">50% OFF</p>
          <p className="discount-food">All salad and Pasta</p>
          <button className="discount-btn" type="submit">
            Use code Eattak50
          </button>
        </div>
      </div>

      <ContentWrapperGrid>
        {/* Remaining grid */}
        <>{remainingContents}</>
      </ContentWrapperGrid>
    </div>
  );
};

const ContentWrapperGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 4em;
  > div {
    width: 20%;
  }
  @media (max-width: 954px) {
    justify-content: center;
    row-gap: 1.5em;
    > div {
      width: 70%;
    }
  }
`;

export default RandomResturantGrid;
