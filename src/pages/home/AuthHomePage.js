/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Layout from "../../component/Layout";
import MealCustomizationComponentWrapper from "../../component/mealCustomization/MealCustomizationComponentWrapper";
import Input from "../../component/Input";
import HelpIcon from "../../assets/images/hero/help-icon.svg";
import "../../component/authComp/HeroSection/heroSection.css";
import { useAuth } from "../../utilities/auth";

const AuthHomePage = () => {
  const { state: user} = useAuth()
  return (
    <Layout>
      <div className="hero-page-box">
        <div className="search">
          <h1 className="hero-title">Welcome, {`${user.user?.name}`}</h1>
          <p className="hero-description">What would you like to eat?</p>
          <Input
            type="text"
            id="search"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <div className="help-icon-box">
          <div className="help-icon">
            <img src={HelpIcon} alt="" />
          </div>
        </div>
      </div>
      <MealCustomizationComponentWrapper />
    </Layout>
  );
};

export default AuthHomePage;
