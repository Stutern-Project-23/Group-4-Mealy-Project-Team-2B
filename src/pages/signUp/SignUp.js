import React, { useContext } from "react";
import apple from "../../assets/images/apple 1.svg";
import google from "../../assets/images/google 1.svg";
import facebook from "../../assets/images/facebook 1.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";
import { FormValidationContext } from "../../hooks/FormValidationsContext";

const SignUp = () => {
  const {
    firstName,
    setFirstName,
    firstNameError,
    validateFirstName,
    lastName,
    setLastName,
    lastNameError,
    validateLastName,
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
    setFirstNameError,
    setLastNameError,
    setEmailError,
    setPasswordError,
    setConfirmPasswordError,
    setAgreeCheckedError,
  } = useContext(FormValidationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgreeCheckedValid = validateAgreeChecked();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isAgreeCheckedValid
    ) {
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setAgreeCheckedError("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeChecked(false);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <header className="logo-header signup-header">
          <h1>Mealy</h1>
        </header>

        <form className="input-wrapper" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          <div className="input-div input-cont">
            <Input
              type="text"
              id="first name"
              placeholder="First Name"
              className="input-width"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="validation-error-div">
            {firstNameError && (
              <span className="validation-error">{firstNameError}</span>
            )}
          </div>

          <div className="input-div input-cont">
            <Input
              type="text"
              id="last name"
              placeholder="Last Name"
              className="input-width"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="validation-error-div">
            {lastNameError && (
              <span className="validation-error">{lastNameError}</span>
            )}
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
          </div>
          <div className="validation-error-div">
            {emailError && (
              <span className="validation-error">{emailError}</span>
            )}
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
          </div>
          <div className="validation-error-div">
            {passwordError && (
              <span className="validation-error">{passwordError}</span>
            )}
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
          </div>
          <div className="validation-error-div">
            {confirmPasswordError && (
              <span className="validation-error">{confirmPasswordError}</span>
            )}
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
            </div>
            <div className="validation-error-div">
              {agreeCheckedError && (
                <span className="validation-error">{agreeCheckedError}</span>
              )}
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
