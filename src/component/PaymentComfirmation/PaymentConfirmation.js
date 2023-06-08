import React from "react";
<<<<<<< HEAD:src/component/PaymentComfirmation/PaymentConfirmation.js
import Button from "../Button";
import PaymentData from "../authComp/Data/PaymentConfirmation";
import Success from "../../assets/images/hero/success.svg";
import "./paymentConfirmation.css";
=======
import Button from "../component/Button";
import PaymentData from "../component/authComp/Data/PaymentConfirmation";
import Success from "../assets/images/hero/success.svg";
import "./PaymentConfirmation.css";
>>>>>>> 496d4abeac3e6fd52164caaa4b35911fa4e50cfe:src/PaymentComfirmation/PaymentConfirmation.js

const PaymentConfirmation = () => (
  <div className="payment-main-box">
    <div className="payment-modal">
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

        <Button type="submit" className="track-order-btn">
          Track Order
        </Button>
      </div>
    </div>
  </div>
);

export default PaymentConfirmation;
