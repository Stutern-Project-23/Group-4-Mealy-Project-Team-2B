import React from "react";
import styled from "styled-components";
import Star from "../../assets/svg/Star.svg";
import Img1 from "../../assets/svg/discount-section-img1.svg";
import Img2 from "../../assets/svg/discount-section-img2.svg";
import Img3 from "../../assets/svg/discount-section-img3.svg";
import Img4 from "../../assets/svg/discount-section-img4.svg";
import Img5 from "../../assets/svg/discount-section-img5.svg";
import Shape from "../../assets/svg/discount-section-shape.svg";
import ChickenImg from "../../assets/svg/discount-section-chicken.svg";
import Divider from "../../assets/svg/discount-section-divider.svg";

const DiscountBox = () => (
  <DiscountBoxStyles>
    <ShapeBackground>
      <img src={Shape} alt="" />{" "}
    </ShapeBackground>
    <Content>
      <AbsoluteImage src={ChickenImg} />
      <div className="review-section">
        <Title>
          Great food and lots <br />
          of discounted prices
        </Title>
        <FlexContainer>
          <div>
            <AbsoluteImageSmall src={Img1} />
            <AbsoluteImageSmall src={Img2} style={{ marginLeft: "-10px" }} />
            <AbsoluteImageSmall src={Img3} style={{ marginLeft: "-10px" }} />
            <AbsoluteImageSmall src={Img4} style={{ marginLeft: "-10px" }} />
            <AbsoluteImageSmall src={Img5} style={{ marginLeft: "-10px" }} />
          </div>
          <div>
            <CustomerRating>Our Happy Customer</CustomerRating>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarImage src={Star} />
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>4.8</p>
              <p style={{ fontSize: "10px" }}>(1,9k Review)</p>
            </div>
          </div>
        </FlexContainer>
      </div>
      <DiscountDivider src={Divider} />
      <DiscountText>50%</DiscountText>
    </Content>
  </DiscountBoxStyles>
);

const ShapeBackground = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  img {
    width: 70%;
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  width: 80%;
  margin: 0 auto;
  right: 4em;
  margin-top: -13.5em;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 670px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
    right: 1.5em;
  }
  .review-section {
    display: grid;
    place-items: center;
    @media (max-width: 599px) {
      padding-top: 1em;
      margin-right: 10px;
    }
  }
`;
const AbsoluteImage = styled.img`
  width: 250px;
  height: 230px;
  @media (max-width: 920px) {
    width: 220px;
    height: 180px;
    margin-top: 1.5em;
  }
  @media (max-width: 780px) {
    width: 180px;
    height: 160px;
    margin-top: 1em;
  }
  @media (max-width: 680px) {
    margin-left: 4em;
  }
  @media (max-width: 570px) {
    width: 150px;
    height: 130px;
  }
`;
const DiscountBoxStyles = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 840px) {
    font-size: 1rem;
  }
  @media (max-width: 520px) {
    font-size: 0.7rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

const AbsoluteImageSmall = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 8900px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 599px) {
    width: 20px;
    height: 20px;
  }
`;

const CustomerRating = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
  margin-bottom: 0;
  @media (max-width: 840px) {
    font-size: 0.6rem;
  }
`;

const StarImage = styled.img`
  height: 10px;
  margin-right: 0.2em;
`;

const DiscountDivider = styled.img`
  width: 10px;
`;

const DiscountText = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  @media (max-width: 670px) {
    font-size: 2rem;
  }
  @media (max-width: 582px) {
    font-size: 1.5rem;
    margin-left: 1em;
  }
  /* @media (max-width: 530px) {
    margin-right: 1em;
  } */
`;

export default DiscountBox;
