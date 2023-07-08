/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyVendorContent from "../../EmpytVendorContent";
import MultipleLoadingCard from "../../MultipleLoadingCard";
import ResturantContent from "../ResturantContent";
import Meal from "../../../assets/images/meal.png";
import Avocado from "../../../assets/images/hero/avocado-sandwich.png";
import uniqueId from "../../uniqueId";

const RandomResturantGrid = () => {
  const [contents, setContents] = useState([]);
  const [remainingContents, setRemainingContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mealy.onrender.com/api/v1/product/all")
      .then((response) => response.json())
      .then((data) => {
        const contentData = data.data
          .slice(0, 8)
          .map((item) => (
            <ResturantContent
              key={uniqueId()}
              imageSrc={Meal}
              description={item.description}
              reviewText={`Reviews (${item.reviews.length})`}
              header={item.name}
            />
          ));
        const remainingContentData = data.data
          .slice(8)
          .map((item) => (
            <ResturantContent
              key={uniqueId()}
              imageSrc={item.imageUrl}
              description={item.description}
              reviewText={`Reviews (${item.reviews.length})`}
              header={item.name}
            />
          ));
        setContents(contentData);
        setRemainingContents(remainingContentData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-state-div">
          <MultipleLoadingCard />
        </div>
      ) : (
        <>
          {contents.length === 0 && remainingContents.length === 0 ? (
            <EmptyVendorContent />
          ) : (
            <div>
              <ContentWrapperGrid>
                {/* First grid */}
                {contents}
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

              {remainingContents.length > 0 && (
                <ContentWrapperGrid>
                  {/* Remaining grid */}
                  {remainingContents}
                </ContentWrapperGrid>
              )}
            </div>
          )}
        </>
      )}
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
