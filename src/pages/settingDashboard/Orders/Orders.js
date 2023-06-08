import React from "react";
import { orders, histories } from "./data";
import uniqueId from "../../../component/uniqueId";
import "../style.css";

const Orders = () => (
  <div className="main">
    <div className="orders flex">
      <div className="ongoing-orders flex">
        <h3 className="head-ord">Ongoing Orders</h3>
        <div className="ongoing">
          {orders.map((order) => (
            <div className="order-container flex" key={uniqueId(5)}>
              <div className="order flex">
                <div className="order-img">
                  <img src={order.image} alt="" />
                </div>
                <div className="order-texts flex">
                  <h5>{order.name}</h5>
                  <small>{order.details}</small>
                  <small>{order.detail2}</small>
                  <p>{order.price}</p>
                </div>
              </div>
              <div className="order-btn">
                <button type="submit">{order.text}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-history flex">
        <h3 className="head-ord">Order History</h3>
        <div className="history">
          {histories.map((history) => (
            <div className="order-container flex" key={uniqueId(5)}>
              <div className="order flex">
                <div className="order-img">
                  <img src={history.image} alt="" />
                </div>
                <div className="order-texts flex">
                  <h5>{history.name}</h5>
                  <p>
                    <small>{history.details}</small>
                  </p>
                  <p>
                    <small>{history.detail2}</small>
                  </p>
                  <p>{history.price}</p>
                </div>
              </div>
              <div className="order-btn">
                <button type="submit">{history.text}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Orders;
