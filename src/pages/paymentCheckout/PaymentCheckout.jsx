import React from "react";
import "./checkoutStyle.css";
import calender from "../../assets/images/calendar.png";
import gtbank from "../../assets/images/Rectangle 8.png";
import image2 from "../../assets/images/vector (1).png";
import Layout from "../../component/Layout";
import CheckoutSummary from "./CheckoutSummary";

const PaymentCheckout = () => (
  <Layout>
    <div className="payment-checkout flex">
      <div className="delivery-payment flex">
        <div className="payment">
          <div className="delivery-information flex">
            <h1>Delivery Information</h1>
            <form action="post" className="delivery-form flex">
              <div className="name-number flex">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name-input input"
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="number input"
                  placeholder="Mobile number"
                />
              </div>
              <input
                type="text"
                name="location"
                id="location"
                className="current-location input"
                placeholder="Current location"
              />

              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                className="notes-area"
                placeholder="Notes (Optional)"
              />
            </form>
          </div>
        </div>
        <div className="schedule flex">
          <div className="schedule-text flex">
            <h1>Schedule Delivery</h1>
            <input className="switch" type="checkbox" checked />
          </div>
          <div className="calender-input flex">
            <input
              type="datetime"
              name=""
              id=""
              className="calender input"
              placeholder="Select preferred date and time"
            />
            <img src={calender} alt="" className="calender-img" />
          </div>
        </div>
        <div className="payment-method flex">
          <h1>Payment Method</h1>
          <div className="pay flex">
            <div className="method flex">
              <button type="submit">Pay Online</button>
              <button type="submit">Cash on Delivery</button>
              <button type="submit">Food Voucher</button>
            </div>
            <div className="payment-card flex">
              <div className="gt-image">
                <img src={gtbank} alt="" />
              </div>
              <div className="atm-texts flex">
                <p>Guarantee Trust Bank</p>
                <small>**** **** 5678</small>
              </div>
              <div className="image2">
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutSummary />
    </div>
  </Layout>
);

export default PaymentCheckout;
