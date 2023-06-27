/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResturantContent from "../ResturantContent";
import Meal from "../../../assets/images/meal.png";
import Avocado from "../../../assets/images/hero/avocado-sandwich.png";

const VendorContentComponent = ({ vendorName }) => {
  const [contents, setContents] = useState([]);
  const [remainingContents, setRemainingContents] = useState([]);

  useEffect(() => {
    const fetchVendorProducts = async () => {
      try {
        const response = await fetch(
          `https://mealy.onrender.com/api/v1/vendor/${vendorName}`,
        );
        const data = await response.json();
        if (Array.isArray(data.data.products)) {
          const firstContentData = data.data.products
            .slice(0, 8)
            .map((item) => (
              <ResturantContent
                key={item._id}
                imageSrc={Meal}
                description={item.description}
                reviewText={`Reviews (${item.reviews.length})`}
                header={item.name}
              />
            ));
          setContents(firstContentData);
          const remainingProducts = data.data.products
            .slice(8)
            .map((item) => (
              <ResturantContent
                key={item._id}
                imageSrc={Meal}
                description={item.description}
                reviewText={`Reviews (${item.reviews.length})`}
                header={item.name}
              />
            ));
          setRemainingContents(remainingProducts);
        } else {
          console.error(
            "Invalid data format received from the vendor endpoint.",
          );
        }
      } catch (error) {
        console.error(
          "Error fetching vendor products from the endpoint:",
          error,
        );
      }
    };

    fetchVendorProducts();
  }, [vendorName]);

  return (
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

      <ContentWrapperGrid>
        {/* Remaining grid */}
        {remainingContents}
      </ContentWrapperGrid>
    </div>
  );
};

const ContentWrapperGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  width: 100%;
  justify-content: flex-start;
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

export default VendorContentComponent;
