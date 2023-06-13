/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { FormValidationContext } from "../../hooks/FormValidationsContext";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";

const NewPassword = ({ onPasswordSubmit }) => {
  const {
    password,
    setPassword,
    passwordError,
    validatePassword,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    setPasswordError,
    setConfirmPasswordError,
  } = useContext(FormValidationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isPasswordValid && isConfirmPasswordValid) {
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
      setConfirmPasswordError("");
      onPasswordSubmit(password);
    }
  };

  return (
    <div className="create-new-passwd-page">
      <div className="left-side">
        <header className="logo-header create-new-passwd-header">
          <h1>Mealy</h1>
        </header>

        <form
          className="input-wrapper input-wrapper-top"
          onSubmit={handleSubmit}>
          <h2>Create a new password</h2>
          <div className="input-div input-cont">
            <Input
              type="password"
              id="password"
              placeholder="Enter new password"
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
              placeholder="Confirm new password"
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
          <div className="create-new-passwd-btn">
            <Button type="submit" className="input-width">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <RightSideImage />
    </div>
  );
};

export default NewPassword;
