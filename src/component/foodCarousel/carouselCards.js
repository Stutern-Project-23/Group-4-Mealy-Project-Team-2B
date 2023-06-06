import React from "react";
import CarouselWallet from "../../assets/images/carouselWallet.png";
import CarouselImg from "../../assets/images/carouselImg1.png";

const generateCardContent = (name, price, img) => (
  <div className="carousel-content-div">
    <img alt="" src={img} className="carousel-content-img" />
    <div className="carousel-content-decription">
      <div>
        <p className="carousel-content-decription-name">{name}</p>
        <p className="carousel-content-decription-price">{price}</p>
      </div>
      <div>
        <img
          src={CarouselWallet}
          alt=""
          className="carousel-content-decription-wallet"
        />
      </div>
    </div>
  </div>
);

const cards = [
  {
    id: 1,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 2,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 3,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 4,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 5,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 2,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 3,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 4,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 5,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 2,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 3,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 4,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: 5,
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
];
export default cards;
