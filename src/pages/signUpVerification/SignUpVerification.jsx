import React from "react";
import styled from "styled-components";
import Input from "../../component/Input";
import Button from "../../component/Button";
import signupVerImage from "../../assets/verification-image.png";
import "../authPagesStyles.css";

const SignUpVerification = () => (
  <div className="verification flex">
    <div className="verify flex">
      <header className="logo-header">
        <h1>Mealy</h1>
      </header>
      <div className="verify-input flex">
        <form className="verify-form">
          <div>
            <div className="verify-text flex">
              <h3>Verify Email</h3>
              <p>Enter verification code sent to your Email</p>
            </div>
            <div className="input flex">
              <Input placeholder="Enter code" maxLength={6} />
              <Button type="submit">Verify</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <RightSideImage className="image" />
  </div>
);

const RightSideImage = styled.div`
  width: 50%;
  min-height: 100vh;
  background-image: url(${signupVerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 830px) {
    display: none;
  }
`;

export default SignUpVerification;
