import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <div className="input">
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter code"
                  required
                />
                <Button type="submit" className="submit-button">
                  Verify
                </Button>
              </form>
            </div>

            <p className="forgot-password">
              If you did not recieve a code?
              <a href="/reset-password">Resend</a>.
            </p>
          </div>
        </div>
      </div>
      <RightSideImage className="image" />
    </div>
  );
};

export default VerifyEmail;
