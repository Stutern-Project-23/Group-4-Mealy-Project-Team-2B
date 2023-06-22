import React from "react";
import { v4 as randid } from "uuid";
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

const Cards = [
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
  {
    id: randid(),
    content: generateCardContent("Green Curry Spices", "IDR 30K", CarouselImg),
  },
];
export default Cards;
