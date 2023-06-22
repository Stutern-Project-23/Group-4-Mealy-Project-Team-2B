import React from "react";
import styled from "styled-components";
import ResturantTabs from "./ResturantTabs";
import AfricanGridContent from "./allResturantGrids/AfricanGrid";
import RandomResturantGrid from "./allResturantGrids/RandomResturantGrid";

const MealCustomizationComponentWrapper = () => {
  const tabs = [
    "Order Again",
    "All",
    "Tastee",
    "African",
    "Chicken Republic",
    "BluCabana",
    "Jevinik ",
    "Sketch",
  ];

  const content = [
    <p>Content for Item One</p>,
    <RandomResturantGrid />,
    <AfricanGridContent />,
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
    margin-bottom: 3em;
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

export default MealCustomizationComponentWrapper;
