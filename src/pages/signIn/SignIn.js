import React, { useContext } from "react";
import apple from "../../assets/images/apple 1.svg";
import google from "../../assets/images/google 1.svg";
import facebook from "../../assets/images/facebook 1.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";
import { FormValidationContext } from "../../hooks/FormValidationsContext";

const SignIn = () => {
  const {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    setEmailError,
    setPasswordError,
  } = useContext(FormValidationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setEmailError("");
      setPasswordError("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="sign-up-page">
      <div className="left-side">
        <header className="logo-header signup-header">
          <h1>Mealy</h1>
        </header>

        <form className="input-wrapper" onSubmit={handleSubmit}>
          <div className="sign-in-header">
            <h2>Sign In</h2>
          </div>

          <div className="input-div input-cont">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="input-width"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="validation-error-div">
              {emailError && (
                <span className="validation-error">{emailError}</span>
              )}
            </div>
          </div>

          <div className="input-div input-cont">
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="input-width"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="validation-error-div">
              {passwordError && (
                <span className="validation-error">{passwordError}</span>
              )}
            </div>
          </div>

          <div className="create-acc-btn">
            <Button type="submit" className="input-width">
              Sign In
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
            Do not have an account?
            <a href="sign-in" className="sign-up-link">
              Sign Up
            </a>
          </p>
          <p className="no-p-margin">or</p>
          <p>
            <a href="sign-up" className="guest-sign-in">
              Continue as guest
            </a>
          </p>
        </div>
      </div>
      <RightSideImage />
    </div>
  );
};

export default SignIn;
