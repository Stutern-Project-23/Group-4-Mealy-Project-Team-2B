import React from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import "../authPagesStyles.css";
import { RightSideImage } from "../authPageBgImg";

const SignUpVerification = () => (
  <div className="verification flex">
    <div className="verify flex">
      <a href="/">
        <header className="logo-header">
          <h1>Mealy</h1>
        </header>
      </a>
      <div className="verify-input flex">
        <form className="verify-form">
          <div>
            <div className="verify-text flex">
              <h3>Verify Email</h3>
              <p>Enter verification code sent to your Email</p>
            </div>
            <div className="input  flex">
              <Input
                placeholder="Enter code"
                maxLength={6}
                className="input-width"
              />
              <Button type="submit" className="input-width">
                Verify
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <RightSideImage className="image" />
  </div>
);

export default SignUpVerification;
