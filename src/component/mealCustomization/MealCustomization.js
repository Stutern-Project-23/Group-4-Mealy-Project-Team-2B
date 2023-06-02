import React from "react";
import styled from "styled-components";
import ResturantTabs from "./ResturantTabs";
import AfricanGridContent from "./allResturantGrids/AfricanGrid";
import RandomResturantGrid from "./allResturantGrids/RandomResturantGrid";

const MyComponent = () => {
  const tabs = [
    "Order Again",
    "All",
    "Starters",
    "African",
    "Drinks",
    "Salad",
    "Combos",
    "Snacks",
  ];

  const content = [
    <ContentWrapperGrid>Content for Item One</ContentWrapperGrid>,
    <ContentWrapperGrid>
      <RandomResturantGrid />
    </ContentWrapperGrid>,
    <ContentWrapperGrid>
      <AfricanGridContent />
    </ContentWrapperGrid>,
    <p>Content for Item Three</p>,
  ];

  return (
    <AllResturantStyle>
      <div className="header-rest">
        <h3>All Restaurants</h3>
      </div>
      <ResturantTabs
        tabs={tabs}
        content={content}
        className="tabs-custom-class"
      />
    </AllResturantStyle>
  );
};

const AllResturantStyle = styled.div`
  margin-top: 5em;
  background-color: #f8f8f8;
  .header-rest {
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
  h3 {
    font-weight: 500;
    font-size: 32px;
    line-height: 34px;
    color: #32324d;
    margin-left: 0;
  }
  display: grid;
  place-items: center;
  .tabs-custom-class {
    width: 90%;
  }
`;

const ContentWrapperGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 4em;
`;

export default MyComponent;
