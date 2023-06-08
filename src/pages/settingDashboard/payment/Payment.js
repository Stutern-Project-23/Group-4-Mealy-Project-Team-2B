import React from "react";
import styled from "styled-components";
import Button from "../../../component/Button";
import edit from "../../../assets/images/edit.svg";
import GreyRectangle from "../../../assets/images/grey-Rectangle.png";
// import image1 from "./paymentOrderPage/image1.png";
// import image2 from "./paymentOrderPage/image2.png";
import "./paymentOrderPage/PaymentOrder.css";

const Payment = () => (
  <PaymentStyles>
    <div className="main">
      <div className="delete-container flex">
        <div className="delete-data-container flex">
          <h3>Delete Account and Data</h3>
          <p>
            In accordance with our privacy policy, deleting your account and
            data can’t be undone, so we need to check it’s you before going
            ahead.
          </p>
          <p>
            Send us a request and we will confirm via email after we have
            reviewed it
          </p>
        </div>

        <div className="send-request-container flex">
          <div className="second-innerdiv flex">
            <img src={edit} alt="" className="edit-icon" />
            <img src={GreyRectangle} alt="" className="rectangle" />
          </div>
          <div className="delete-button-div">
            <Button className="delete-button" type="submit">
              Send request
            </Button>
          </div>
        </div>
      </div>
    </div>
  </PaymentStyles>
);

const PaymentStyles = styled.div``;
export default Payment;
