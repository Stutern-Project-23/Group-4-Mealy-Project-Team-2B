import React, { useContext, useState, useEffect } from "react";
import apple from "../../assets/images/apple 1.svg";
import google from "../../assets/images/google 1.svg";
import facebook from "../../assets/images/facebook 1.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";
import { FormValidationContext } from "../../hooks/FormValidationsContext";
import UseAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [res, setres] = useState("");
  const [disableBtn, setDisableBtn] = useState(false)

  const { isLoading, error, signUp } = UseAuth();

  const {
    name,
    setName,
    nameError,
    validateName,
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    validateAgreeChecked,
    agreeChecked,
    agreeCheckedError,
    setAgreeChecked,
    setNameError,
    setEmailError,
    setPasswordError,
    setConfirmPasswordError,
    setAgreeCheckedError,
    receivePromotionalEmails,
    setReceivePromotionalEmails,
  } = useContext(FormValidationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true)
    const isFirstNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgreeCheckedValid = validateAgreeChecked();

    if (
      isFirstNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isAgreeCheckedValid
    ) {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setAgreeCheckedError("");
      signUp({
        name,
        email,
        password,
        confirmPassword,
        receivePromotionalEmails,
      })
      // .then((response) => {
      //   setres(response.status)
      //   // console.log("post signup res", response)
      // });
    }
  };

  // useEffect(() => {
  //   if (res) {
  //     history("/sign-up-verification", {state:{email}});
  //     // console.log('good to go')
  //   }
  //   else {
  //     setDisableBtn(false)
  //   }
  // });

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <a href="/">
          <header className="logo-header signup-header">
            <h1>Mealy</h1>
          </header>
        </a>

        <form className="input-wrapper" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          <div className="input-div input-cont">
            <Input
              type="text"
              id="first name"
              placeholder="First Name"
              className="input-width"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="validation-error-div">
              {nameError && (
                <span className="validation-error">{nameError}</span>
              )}
            </div>
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

          <div className="input-div input-cont">
            <Input
              type="password"
              id="forget-password"
              placeholder="Confirm Password"
              className="input-width"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="validation-error-div">
              {confirmPasswordError && (
                <span className="validation-error">{confirmPasswordError}</span>
              )}
            </div>
          </div>

          <div className="checkboxes">
            <div className="first-checkbox">
              <input
                type="checkbox"
                id="discount"
                checked={receivePromotionalEmails}
                onChange={(e) => setReceivePromotionalEmails(e.target.checked)}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="discount" className="checkbox-label">
                I want to receive discounts, loyalty offers and other updates.
              </label>
            </div>

            <div className="second-checkbox">
              <input
                type="checkbox"
                id="agree"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="agree" className="checkbox-label">
                yes, I understand and agree to Mealy’s Terms of service
              </label>
              <div className="validation-error-div">
                {agreeCheckedError && (
                  <span className="validation-error">{agreeCheckedError}</span>
                )}
              </div>
            </div>
          </div>

          <div className="create-acc-btn">
            {error && <div className="endpoint-error">{error}</div>}
            <Button type="submit" className="input-width" style={disableBtn ? {opacity: '0.6',cursor:'not-allowed'}:{opacity:'1'}}>
              {isLoading ? "Signing Up..." : "Create an account"}
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
            Already have an account?
            <a href="sign-In" className="sign-up-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <RightSideImage />
    </div>
  );
};

export default SignUp;
