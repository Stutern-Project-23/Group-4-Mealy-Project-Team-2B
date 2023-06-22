import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { cart, receipt } from "../../pages/paymentCheckout/data";

const SideCheckoutSummary = () => (
  <SideCheckoutSummaryStyle>
    <div className="checkout flex">
      <div className="cart flex cart-scroll">
        {cart.map((items) => (
          <div className="food flex" key={items.id}>
            <div className="price flex">
              <div className="food-img">
                <img src={items.image} alt="" className="img" />
              </div>
              <div className="food-texts flex">
                <p>{items.food}</p>
                <small>{items.price}</small>
              </div>
            </div>
            <div className="food-number flex">
              <div className="close-img">
                <GrFormClose />
              </div>
              <div className="add flex">
                <AiFillMinusCircle className="minus" /> 3
                <AiFillPlusCircle className="plus" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="discount-input flex">
        <input
          type="number"
          name=""
          id=""
          className="discount-checkout"
          placeholder="Enter discount code"
        />
        <button type="submit" className="discount-btn">
          Apply
        </button>
      </div>
      <div className="receipt flex">
        {receipt.map((total) => (
          <div className="total flex" key={total.id}>
            <div className="amount flex">
              <p>{total.item}</p> <small>{total.price}</small>
            </div>
          </div>
        ))}
        <button type="submit">
          <a href="/checkout">Proceed</a>
        </button>
      </div>
    </div>
  </SideCheckoutSummaryStyle>
);

const SideCheckoutSummaryStyle = styled.div`
  .flex {
    display: flex;
  }
  .checkout {
    flex-direction: column;
    row-gap: 2rem;
    padding: 1.5rem;
    background-color: #ffffff;
    margin: 0 auto;
  }
  .cart {
    flex-direction: column;
    row-gap: 0.5rem;
  }
  .cart-scroll {
    max-height: 200px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  .cart-scroll::-webkit-scrollbar {
    width: 6px;
  }

  .cart-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .cart-scroll::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  .food {
    justify-content: space-between;
    align-items: center;
  }

  .price {
    align-items: center;
    column-gap: 0.8rem;
  }

  .food-img {
    width: 3rem;
  }

  .food-img img {
    display: block;
  }

  .food-texts {
    flex-direction: column;
    row-gap: 0.3rem;
  }

  .food-texts p {
    font-size: 0.8rem;
    font-weight: 800;
  }

  .food-texts small {
    font-size: 0.7rem;
  }

  .food-number {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
  }

  .add {
    justify-content: space-between;
    align-items: center;
    column-gap: 0.3rem;
    font-size: 0.7rem;
  }
  .plus,
  .minus {
    color: rgb(250, 90, 0);
    font-size: 1.5em;
  }
  .plus,
  .minus,
  .close-img {
    cursor: pointer;
  }
  .discount-input {
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 0 0.1rem 0 0.5rem;
    outline: none;
    border: 1px solid #32324d4f;
    border-radius: 5px;
    height: 2.5rem;
  }

  .discount-checkout {
    padding: 0;
    outline: none;
    border: none;
    width: 100%;
  }

  .discount-btn {
    border: none;
    outline: none;
    padding: 0.6rem 1rem;
    color: #ffffff;
    background-color: #fa5a00;
    border-radius: 5px;
  }

  .receipt {
    flex-direction: column;
    row-gap: 1rem;
    padding: 0 3rem;
    color: #32324d;
  }

  .total {
    flex-direction: column;
    row-gap: 2rem;
  }

  .total p {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .amount p:last-child .total {
    color: #fa5a00;
  }

  .total small {
    font-weight: 800;
  }

  .amount p:last-child {
    border-top: 1px solid #32324d;
    padding: 0.5rem 0 0 0;
  }

  .amount {
    justify-content: space-between;
    align-items: center;
  }

  .receipt button {
    border: none;
    outline: none;
    padding: 0.7rem 1rem;
    color: #ffffff;
    background-color: #fa5a00;
    border-radius: 5px;
  }

  .cancel-order {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .input,
  textarea,
  .calender-input {
    padding: 0.5rem 0.7rem;
    outline: none;
    resize: none;
    border: 1px solid #32324d4f;
    border-radius: 5px;
  }
  button a {
    color: white;
  }
  @media (max-width: 906px) {
    .checkout {
      width: 80%;
    }
  }
  @media (max-width: 440px) {
    .receipt {
      padding: 0px 1rem;
    }
  }
`;

export default SideCheckoutSummary;
