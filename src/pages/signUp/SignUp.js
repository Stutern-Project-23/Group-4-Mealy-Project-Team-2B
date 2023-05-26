import React from "react";
import apple from "../../assets/apple 1.svg";
import google from "../../assets/google 1.svg";
import facebook from "../../assets/facebook 1.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";

const SignUp = () => (
  <div className="sign-up-page">
    <div className="left-side">
      <header className="logo-header signup-header">
        <h1>Mealy</h1>
      </header>

      <form className="input-wrapper">
        <h2>Create an Account</h2>

        <div className="input-div input-cont">
          <Input
            type="text"
            id="name"
            placeholder="First Name"
            className="input-width"
          />
        </div>
        <div className="input-div input-cont">
          <Input
            type="text"
            id="name"
            placeholder="Last Name"
            className="input-width"
          />
        </div>

        <div className="input-div input-cont">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="input-width"
          />
        </div>

        <div className="input-div input-cont">
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="input-width"
          />
        </div>

        <div className="input-div input-cont">
          <Input
            type="password"
            id="forget-password"
            placeholder="Confirm Password"
            className="input-width"
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
          <Button type="submit" className="input-width">
            Create an account
          </Button>
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
          Already have an account?<a href="sign-In"> Sign In</a>
        </p>
      </div>
    </div>
    <RightSideImage />
  </div>
);

export default SignUp;
