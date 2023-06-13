/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";

const VerifyEmail = ({ onCodeSubmit, onResendCode }) => {
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit(code);
  };

  const handleResendCode = () => {
    onResendCode();
  };

  return (
    <div className="forgot-flex">
      <div className="all">
        <header className="logo-header">
          <h1>Mealy</h1>
        </header>
        <div className="form-container">
          <div className="form-minScreen">
            <div className="text">
              <h4 className="form-title">Account Verification</h4>
              <p className="form-description">
                Enter the verification code sent to your email address.
              </p>
            </div>
            <div className="input verify-input">
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  className="input-width"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="Enter code"
                  required
                />
                <Button type="submit" className="input-width">
                  Verify
                </Button>
              </form>
            </div>

            <p className="forgot-password">
              If you did not recieve a code?
              <a href="/reset-password" onClick={handleResendCode}>
                Resend
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <RightSideImage className="image" />
    </div>
  );
};

export default VerifyEmail;
