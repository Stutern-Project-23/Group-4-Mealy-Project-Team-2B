import React from "react";
import Button from "../../component/Button";
import BurgerDiscountImg from "../../assets/images/discount-img.png";

const Discount = () => (
  <div className="discount-container">
    <div className="discount-container-item-register">
      <h6 className="discount-header">Register and get discount up to 50 %</h6>
      <a href="/sign-up">
        <Button className="discount-btn">Create account</Button>
      </a>
    </div>
    <div className="discount-container-item-list-div">
      <div className="discount-container-item-list">
        <div>Want a meal plan?</div>
        <div>Track meal calorie</div>
        <div>Track meal calorie</div>
      </div>
      <div>
        <img
          src={BurgerDiscountImg}
          alt=""
          className="discount-container-item-list-img"
        />
      </div>
    </div>
  </div>
);

export default Discount;
