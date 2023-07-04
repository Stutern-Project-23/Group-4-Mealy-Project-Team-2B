/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "react-use-cart";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { extraCart, ingredients } from "./customizationData";
import "./dashboardStyle.css";

const MealCustomizationModal = ({ onCloseModal, product, onAddToCart }) => {
  const handleCloseModalClick = () => {
    onCloseModal();
  };

  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();

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
                <img src={product.imageUrl} alt="" className="modal-main-img" />
              </div>
              <div className="ingredients flex">
                <div>
                  <h4>Main Ingredients:</h4>
                </div>
                <div className="ing flex  ingredients-div">
                  {ingredients.slice(0, 5).map((ingredient) => (
                    <div className="ing-image" key={ingredient.image}>
                      <img src={ingredient.image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rates flex">
              <div className="rate-imgs flex">
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />

                {product.reviews.length > 0 && (
                  <>
                    {product.reviews.length >= 1 && (
                      <AiFillStar className="icon-coloured" />
                    )}
                    {product.reviews.length >= 2 && (
                      <AiFillStar className="icon-coloured" />
                    )}
                    {product.reviews.length >= 3 && (
                      <AiFillStar className="icon-coloured" />
                    )}
                    {product.reviews.length >= 4 && (
                      <AiFillStar className="icon-coloured" />
                    )}
                    {product.reviews.length >= 5 && (
                      <AiFillStar className="icon-coloured" />
                    )}
                  </>
                )}
              </div>

              <p>{`(${product.reviews.length})`}</p>
            </div>
            <div className="food-details flex">
              <div className="details flex">
                <p>Size</p>
                <small>Per portion</small>
              </div>
              <div className="details flex">
                <p>Calories</p>
                <small>350 KCal</small>
              </div>
              <div className="details flex">
                <p>Cook time</p>
                <small>{product.cookTime}</small>
              </div>
            </div>
            <p className="some-text">
              List of ingredients includes: {product.ingredients}.
            </p>
          </div>

          <div className="food-cart flex">
            <div className="cart flex extras-scroll">
              {items.map((item) => (
                <div className="food flex" key={item.createdAt}>
                  <div className="price flex">
                    <div className="food-img">
                      <img src={item.imageUrl} alt="" />
                    </div>
                    <div className="food-texts flex">
                      <p>{item.name}</p>
                      <small>{item.price}</small>
                    </div>
                  </div>
                  <div className="food-number flex">
                    <div className="close-img">
                      <GrClose onClick={() => removeItem(item.id)} />
                    </div>
                    <div className="add flex">
                      <AiFillMinusCircle
                        className="plus icon-coloured"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      />
                      {item.quantity}
                      <AiFillPlusCircle
                        className="minus icon-coloured"
                        onClick={() =>
                          updateItemQuantity(item._id, item.quantity + 1)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="extras flex">
              <h2>Extras</h2>
              <div className="cart flex extras-scroll">
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
                placeholder={`$${cartTotal}`}
              />
              <button
                type="submit"
                className="add-btn"
                // onClick={handleCloseModalClick}
                onClick={() => onAddToCart(product)}>
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
