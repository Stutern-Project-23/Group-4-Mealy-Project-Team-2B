import React from "react";
import Layout from "../../component/Layout";
import MealCustomizationComponentWrapper from "../../component/mealCustomization/MealCustomizationComponentWrapper";
import GuestHeroSection from "../../component/authComp/HeroSection/GuestHeroSection";

const GuestHomePage = () => (
  <Layout>
    <GuestHeroSection />
    <MealCustomizationComponentWrapper />
  </Layout>
);

export default GuestHomePage;
