/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AfricanGrid from "./mealCustomization/allResturantGrids/AfricanGrid";
import HeroBackgroundImg from "../assets/images/dashboard-hero-bg.png";
import AttributeImg from "../assets/images/Frame 91.png";
import Layout from "./Layout";
import CheckoutSummary from "../pages/paymentCheckout/CheckoutSummary";
import TasteeImg from "../assets/images/tastee.png";

const TabPanel = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}>
    {value === index && (
      <div style={{ padding: "16px", paddingTop: 0 }}>
        <div className="dashboard-content-grid">{children}</div>
      </div>
    )}
  </div>
);

const ResturantDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleChange(index);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      handleChange(Math.max(0, value - 1));
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      handleChange(Math.min(6, value + 1));
    }
  };

  useEffect(() => {
    const handleKeyDownGlobal = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        handleChange(Math.max(0, value - 1));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        handleChange(Math.min(6, value + 1));
      }
    };
    document.addEventListener("keydown", handleKeyDownGlobal);

    return () => {
      document.removeEventListener("keydown", handleKeyDownGlobal);
    };
  }, [value]);

  const tabItems = [
    "Order Again",
    "All",
    "Starters",
    "African",
    "Drinks",
    "Salad",
    "Combos",
    "Snacks",
  ];

  return (
    <Layout>
      <DashboardStyle>
        <div className="dashboard-hero-container">
          <div className="dashboard-hero-container-overlay" />
          <div className="dashboard-hero-content">
            <img src={TasteeImg} alt="" />
          </div>
        </div>

        <div className="dashboard-tabs-content-cont">
          <div className="dashboard-content-tabs">
            <div role="tablist" className="tabList">
              <img src={AttributeImg} alt="" className="attibute-img" />
              {tabItems.map((item, index) => (
                <div
                  className={`tab-button ${
                    index === value ? "active-tab" : ""
                  }`}
                  key={`vertical-tab-${index}`}
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                  onClick={() => handleChange(index)}
                  tabIndex={value === index ? 0 : -1}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  role="tab">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-content">
            <TabPanel value={value} index={0}>
              <AfricanGrid />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </div>

          <div className="checkout-summary-section">
            <CheckoutSummary />
          </div>
        </div>
      </DashboardStyle>
    </Layout>
  );
};

const DashboardStyle = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  .dashboard-hero-container {
    height: 276px;
    width: 100%;
    margin-top: 7em;
    margin-bottom: 2em;
    position: relative;
    display: grid;
    place-items: center;
  }
  .dashboard-hero-container-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(84, 84, 107, 0.38),
        rgba(84, 84, 107, 0.38)
      ),
      url(${HeroBackgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .dashboard-hero-content {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .dashboard-tabs-content-cont {
    display: grid;
    grid-template-columns: 0.7fr 2fr 1fr;
    gap: 1em;
    width: 100%;
    padding-bottom: 5em;
  }
  @media (max-width: 1089px) {
    .dashboard-tabs-content-cont {
      grid-template-columns: 0.4fr 2fr;
      .dashboard-content-tabs {
        grid-column: 1 / 2;
      }
      .dashboard-content {
        grid-column: 2 / 3;
      }
      .checkout-summary-section {
        grid-column: 1 / 3;
        justify-self: center;
        width: 60%;
        margin-top: 2em;
      }
    }
  }

  .dashboard-content-tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 8px;
    gap: 10px;
    background: #ffffff;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08);
    height: 500px;
    .tab-button {
      text-align: center;
    }
  }
  .attibute-img {
    width: 10em;
  }
  .dashboard-content-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 100%;
    justify-content: space-evenly;
  }
  .dashboard-content-grid > div {
    margin-top: 0;
    width: 27%;
  }

  .dashboard-content-grid-item {
    margin-top: 0 !important;
  }
  @media (max-width: 747px) {
    .dashboard-content-grid > div {
      width: 35%;
    }
  }
  @media (max-width: 658px) {
    .dashboard-content-grid > div {
      width: 80%;
    }
  }
`;

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
export default ResturantDashboard;
