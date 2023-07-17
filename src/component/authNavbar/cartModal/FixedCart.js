/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

const FixedCart = ({ cartItems, onOpen }) => (
  <FixedDiv onClick={onOpen}>
    <CartBox>
      <BsCart3 className="bag cart" />

      <CartNumber>
        <p className="badge">{cartItems || 0}</p>
      </CartNumber>
    </CartBox>
  </FixedDiv>
);

const FixedDiv = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 0 10px 0px 10px;
`;
const CartNumber = styled.div`
  text-align: center;
  font-size: 10px;
  width: 15px;
  color: #fff;
  position: absolute;
  top: 1px;
  font-weight: 500;
  border-radius: 50%;
  padding: 0.5em;
  background-color: #fa5a00;
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;
const CartBox = styled.div`
  position: relative;
`;

export default FixedCart;