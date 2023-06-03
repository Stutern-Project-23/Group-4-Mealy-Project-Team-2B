import React from "react";
import Input from "../component/Input";
import CategoryData from "../Data/HeroSectionData";
import Fav1 from "../assets/images/hero/fav1.png";
import Fav2 from "../assets/images/hero/fav2.png";
import Fav3 from "../assets/images/hero/fav3.png";
import Fav4 from "../assets/images/hero/fav4.png";
import Fav5 from "../assets/images/hero/fav5.png";
import Fav6 from "../assets/images/hero/fav6.png";
import Avocado from "../assets/images/hero/avocado-sandwich.png";
import HelpIcon from "../assets/images/hero/help-icon.svg";
import "./HeroSection.css";

const HeroSection = () => (
  <div className="hero-page-box">
    <div className="search">
      <h1 className="hero-title">Welcome, Guest</h1>
      <p className="hero-description">What would you like to eat?</p>
      <form>
        <Input
          type="text"
          id="search"
          placeholder="Search"
          className="search-input"
        />
      </form>
    </div>
    <div className="category">
      <h3 className="hero-subtitle">Category</h3>
      <div className="category-grid">
        {CategoryData.map((item) => (
          <div key={item.id}>
            <img src={item.categoryImg} alt="" />
            <p className="category-details">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="favorites">
      <h3 className="hero-subtitle">Favorites</h3>
      <div className="favorites-grid">
        <img src={Fav1} alt="" />
        <img src={Fav2} alt="" />
        <img src={Fav3} alt="" />
        <img src={Fav4} alt="" />
        <img src={Fav5} alt="" />
        <img src={Fav6} alt="" />
        <div className="favourites-empty-box">
          <div className="add">+</div>
        </div>
        <div className="favourites-empty-box">
          <div className="add">+</div>
        </div>
        <div className="favourites-empty-box">
          <div className="add">+</div>
        </div>
      </div>
    </div>
    <div className="help-icon-box">
      <div className="help-icon">
        <img src={HelpIcon} alt="" />
      </div>
    </div>

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
  </div>
);

export default HeroSection;
