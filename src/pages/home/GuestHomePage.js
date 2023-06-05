import React from "react";
import Layout from "../../component/Layout";
import MealCustomizationComponentWrapper from "../../component/mealCustomization/MealCustomizationComponentWrapper";
import HeroSection from "../../component/authComp/HeroSection/HeroSection";

const GuestHomePage = () => (
  <Layout>
    <HeroSection />
    <MealCustomizationComponentWrapper />
  </Layout>
);

export default GuestHomePage;
