import React from "react";
import styled from "styled-components";
import EmptyPana from "../assets/Empty-pana.svg";

const EmptyVendorContent = () => (
  <EmptyStyle>
    <div>
      <img src={EmptyPana} alt="" />
      <h4>OOps!, Empty Vendor content.</h4>
      <p> Kindly check back later.</p>
    </div>
  </EmptyStyle>
);

const EmptyStyle = styled.div`
  width: 100% !important;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 90% !important;
    display: grid;
    place-content: center;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    color: #000;
    p {
      font-size: 16px;
    }
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

export default EmptyVendorContent;
