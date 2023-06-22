/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import mainImage from "../../assets/dashboardimg/main-image.png";
import { extraCart, ingredients, details } from "./customizationData";
import "./dashboardStyle.css";

const MealCustomizationModal = ({ onCloseModal }) => {
  const handleCloseModalClick = () => {
    onCloseModal();
  };

  return (
    <div className="modal-overlay">
      <main className="main-container flex">
        <div className="main-close">
          <GrClose onClick={handleCloseModalClick} />
        </div>
        <div className="container modal-wrap flex">
          <div className="about flex">
            <div className="main-ingredients">
              <div className="">
                <img src={mainImage} alt="" />
              </div>
              <div className="ingredients flex">
                <div>
                  <h4>Main Ingredients:</h4>
                </div>
                <div className="ing flex">
                  {ingredients.map((ingredient) => (
                    <div className="ing-image" key={ingredient.id}>
                      <img src={ingredient.image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rates flex">
              <div className="rate-imgs flex">
                <AiFillStar className="icon-coloured" />
                <AiFillStar className="icon-coloured" />
                <AiFillStar className="icon-coloured" />
                <AiFillStar className="icon-coloured" />
                <AiOutlineStar />
              </div>
              <p>(22)</p>
            </div>
            <div className="food-details flex">
              {details.map((detail) => (
                <div className="details flex" key={detail.id}>
                  <p>{detail.title}</p>
                  <small>{detail.text}</small>
                </div>
              ))}
            </div>
            <p className="some-text">
              This that, wherever comes to mind. Global village. This that,
              wherever comes to mind. Global village. This that, wherever comes
              to mind. Global village.
            </p>
          </div>
          <div className="food-cart flex">
            <div className="smokey flex">
              <div className="smokey-texts flex">
                <p>Smokey Jollof</p>
                <small>#350.00</small>
              </div>
              <div className="smokey-number flex">
                <AiFillPlusCircle className="minus icon-coloured" /> 3
                <AiFillMinusCircle className="plus icon-coloured" />
              </div>
            </div>
            <div className="extras flex">
              <h2>Extras</h2>
              <div className="cart flex">
                {extraCart.map((extra) => (
                  <div className="food flex" key={extra.id}>
                    <div className="price flex">
                      <div className="food-img">
                        <img src={extra.image} alt="" />
                      </div>
                      <div className="food-texts flex">
                        <p>{extra.food}</p>
                        <small>{extra.price}</small>
                      </div>
                    </div>
                    <div className="food-number flex">
                      <div className="close-img">
                        <GrClose />
                      </div>
                      <div className="add flex">
                        <AiOutlineMinusCircle className="minus" />3
                        <AiOutlinePlusCircle className="plus" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-add flex">
              <input
                type="text"
                name=""
                id=""
                className="amount"
                placeholder="#33, 067"
              />
              <button
                type="submit"
                className="add-btn"
                onClick={handleCloseModalClick}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MealCustomizationModal;
