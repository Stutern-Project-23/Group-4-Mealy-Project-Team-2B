import React from "react";
import Button from "../component/Button";
import PaymentData from "../Data/PaymentConfirmation";
import Close from "../assets/images/hero/close.svg";
import Success from "../assets/images/hero/success.svg";
import "./PaymentConfirmation.css";

const PaymentConfirmation = () => (
  <div className="payment-main-box">
    <div className="payment-modal">
      <div className="close">
        <img src={Close} alt="" />
      </div>
      <div className="payment-box">
        <div className="payment-success">
          <img src={Success} alt="" />
        </div>
        <h1 className="payment-title">Payment Successful</h1>
        <div className="payment-details">
          {PaymentData.map((item) => (
            <div className="payment-detail" key={item.id}>
              <p className="payment-info">{item.title}</p>
              <p className="payment-info-info">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="payment-total">
          <h3>Total</h3>
          <p>#33, 067</p>
        </div>

        <Button type="submit">Track Order</Button>
      </div>
    </div>
  </div>
);

export default PaymentConfirmation;
