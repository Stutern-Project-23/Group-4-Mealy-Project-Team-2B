import React from "react";
import MealCustomizationComponentWrapper from "../component/mealCustomization/MealCustomizationComponentWrapper";
import Layout from "../component/Layout";

const Menu = () => (
  <Layout>
    <div className="menu-section">
      <MealCustomizationComponentWrapper />
    </div>
  </Layout>
);

export default Menu;
