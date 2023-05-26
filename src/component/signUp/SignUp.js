import React from "react";
import styled from "styled-components";
import apple from "../../assets/apple 1.svg";
import google from "../../assets/google 1.svg";
import facebook from "../../assets/facebook 1.svg";
import Input from "../Input";
import Button from "../Button";
import signupImage from "../../assets/signup.svg";

const SignUp = () => (
  <SignUpPage>
    <div className="sign-up-page">
      <div className="left-side">
        <header className="logo-header signup-header">
          <h1>Mealy</h1>
        </header>

        <form className="input-wrapper">
          <h2>Create an Account</h2>

          <div className="input-div">
            <Input type="text" id="name" placeholder="Name" />
          </div>

          <div className="input-div">
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="input-div">
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="input-div">
            <Input
              type="password"
              id="forget-password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="checkboxes">
            <div className="first-checkbox">
              <input type="checkbox" id="discount" />
              <label htmlFor="discount" className="checkbox-label">
                I want to receive discounts, loyalty offers and other updates{" "}
              </label>
            </div>

            <div className="second-checkbox">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="checkbox-label">
                yes, I understand and agree to Mealy’s Terms of service{" "}
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
  </SignUpPage>
);

const SignUpPage = styled.div`
  .sign-up-page {
    width: 100%;
    height: auto;
    display: flex;
    overflow: hidden;
  }
  .signup-header {
    margin-top: 2em;
    margin-left: 2em;
  }
  .left-side {
    width: 50%;
    @media (max-width: 850px) {
      width: 100%;
    }
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 18px;
    color: #32324d;
  }

  .input-wrapper {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 2em;
    margin-top: 3em;
  }
  .input-wrapper h2 {
    margin-left: -7em;
  }

  .input-div {
    margin-bottom: 1.5em;
  }

  .checkboxes {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .checkbox-label {
    margin-left: 8px;
    font-size: 14px;
  }

  .first-checkbox {
    margin-top: 8px;
    margin-bottom: 14px;
  }

  .create-acc-btn {
    margin-top: 24px;
  }

  .icons img {
    margin-right: 24px;
    width: 2rem;
  }

  .button-icons-div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3em;
  }
  .button-icons-div p {
    margin-bottom: 1em;
  }
  .sign-in-link {
    margin-top: 1em;
  }
`;

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
