import React from 'react';
import image1 from './image1.png';
import image2 from './image2.png';
import "./PaymentOrder.css";

const PaymentPage = () => (
    <div className="payment-container">
      <div className="section1">
        <h2>Available Balance</h2>
        <h2>₦4100</h2>
        <div className="add-balance">
          <span>+</span>
          <h4>Add money</h4>
        </div>
      </div>
      <div className="section2">
        <h3>Manage Card</h3>
        <div className="card-info">
          <div className="card-number">
             <img src={image1} alt="MasterCard Logo" className="card-logo" />
            <p>**** </p>
            <p> ****2527</p>
            <img src={image2} alt="Delete Logo" className="delete-logo" />
          </div>
          
        </div>
        <div className="card-info2">
          <div className="card-number">
             <img src={image1} alt="MasterCard Logo" className="card-logo" />
            <p>**** </p>
            <p> ****4312</p>
            
            <img src={image2} alt="Delete Logo" className="delete-logo" />
          </div>
          
        </div>
        <div className="section">
        <div className="add-card">
          <span>+</span>
          <h2>Add New Debit Card</h2>
        </div>
      </div>
      </div>
      
      
    </div>
  );

export default PaymentPage;