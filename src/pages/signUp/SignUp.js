import React from "react";
import styled from "styled-components";
import apple from "../../assets/apple 1.svg";
import google from "../../assets/google 1.svg";
import facebook from "../../assets/facebook 1.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import signupImage from "../../assets/signup.svg";

const SignUp = () => (
  <div className="sign-up-page">
    <div className="left-side">
      <header className="logo-header signup-header">
        <h1>Mealy</h1>
      </header>

      <form className="input-wrapper">
        <h2>Create an Account</h2>

        <div className="input-div input-cont">
          <Input type="text" id="name" placeholder="Name" />
        </div>

        <div className="input-div input-cont">
          <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="input-div input-cont">
          <Input type="password" id="password" placeholder="Password" />
        </div>

        <div className="input-div input-cont">
          <Input
            type="password"
            id="forget-password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="checkboxes">
          <div className="first-checkbox">
            <input type="checkbox" id="discount" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="discount" className="checkbox-label">
              I want to receive discounts, loyalty offers and other updates.
            </label>
          </div>

          <div className="second-checkbox">
            <input type="checkbox" id="agree" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="agree" className="checkbox-label">
              yes, I understand and agree to Mealy’s Terms of service
            </label>
          </div>
        </div>

        <div className="create-acc-btn">
          <Button type="submit">Create an account</Button>
        </div>
      </form>

      <div className="button-icons-div">
        <p>Sign up using</p>
        <div className="icons">
          <img src={apple} alt="apple-icon" />
          <img src={google} alt="google-icon" />
          <img src={facebook} alt="facebook-icon" />
        </div>

        <p className="sign-in-link">
          Already have an account?<a href="#signIn"> Sign In</a>
        </p>
      </div>
    </div>
    <RightSideImage />
  </div>
);

const RightSideImage = styled.div`
  width: 50%;
  min-height: 100vh;
  background-image: url(${signupImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 850px) {
    display: none;
  }
`;

export default SignUp;
