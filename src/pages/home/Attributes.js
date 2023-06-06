import React from "react";
import BikeImg from "../../assets/images/Group 13.svg";
import SmallBike from "../../assets/bike-bg.png";
import Ordertime from "../../assets/time-img.png";
import Order from "../../assets/order-img.png";

const Attributes = () => (
  <div className="attributes-section">
    <div>
      <img src={BikeImg} alt="" className="bike-img" />
    </div>

    <div>
      <h4>Your order is delivered quickly</h4>

      <p className="attributes-section-subheader">
        Enjoy your food in a warm state will increase appetite
      </p>

      <div className="attributes-section-col">
        <div className="attributes-section-col-container">
          <img
            src={SmallBike}
            alt=""
            className="bike-img attributes-section-col-container-item"
          />
          <div className="attributes-section-col-container-item">
            <h6>Fast delivery</h6>
            <p>Delivered by professional courier and on time place</p>
          </div>
        </div>

        <div className="attributes-section-col-container">
          <img
            src={Order}
            alt=""
            className="bike-img attributes-section-col-container-item"
          />
          <div className="attributes-section-col-container-item">
            <h6>Order from anywhere</h6>
            <p>Order food anywhere easily via smartphone</p>
          </div>
        </div>

        <div className="attributes-section-col-container">
          <img
            src={Ordertime}
            alt=""
            className="bike-img attributes-section-col-container-item"
          />
          <div className="attributes-section-col-container-item">
            <h6>Receive on time</h6>
            <p>
              Delivered by professional courier and on time placeReceive your
              food while it is still warm
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Attributes;
