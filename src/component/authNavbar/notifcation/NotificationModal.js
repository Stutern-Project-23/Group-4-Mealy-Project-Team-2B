/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

const NotificationModal = ({ open, onClose }) => (
  <OpenWrapper open={open}>
    <div className="cart-cancel-btn">
      <ImCancelCircle onClick={onClose} />
      <p>Notification</p>
    </div>
    <Wrapper>
      <p>No notification available yet.</p>
    </Wrapper>
  </OpenWrapper>
);

const OpenWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 134;
  background-color: #f8f8f8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 320px;
  transform: translateX(${({ open }) => (open ? "0px" : "320px")});
  transition: transform 0.5s;
  max-height: 99%;
  min-height: 75px;
  overflow-y: auto;
  border-radius: 0 0 0 20px;
  box-sizing: border-box;
  .cart-cancel-btn {
    display: flex;
    justify-content: space-between;
    padding-left: 1em;
    padding-right: 2em;
    margin-top: 1em;
    p {
      font-weight: 700;
      font-size: 18px;
    }
    svg {
      color: #fa5a00;
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  padding: 5px 15px;
  display: flex;
  flex-flow: column;
  p {
    font-size: 14px;
  }
`;

export default NotificationModal;
