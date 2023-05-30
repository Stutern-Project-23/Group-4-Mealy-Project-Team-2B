import React from "react";
import styled from "styled-components";
import Input from "../../component/Input";
import Button from "../../component/Button";
import signupImage from "../../Assets/signup.svg";
 
const ResetPassword = () => (
  <div className="create-new-passwd-page">
    <div className="left-side">
      <header className="logo-header create-new-passwd-header">
        <h1>Mealy</h1>
      </header>

      <form className="input-wrapper input-wrapper-top">
        <h2 className="input-wrapper-margin">Reset Password</h2>
        <div className="input-div input-cont">
          <Input
            type="password"
            id="password"
            placeholder="Enter old password"
            className="input-width"
          />
        </div>
        <div className="input-div input-cont">
          <Input
            type="password"
            id="password"
            placeholder="Enter new password"
            className="input-width"
          />
        </div>
        <div className="input-div input-cont">
          <Input
            type="password"
            id="forget-password"
            placeholder="Confirm new password"
            className="input-width"
          />
        </div>
        <div className="create-new-passwd-btn">
          <Button type="submit" className="input-width">
            Reset Password
          </Button>
        </div>
      </form>
    </div>
    <RightSideImage />
  </div>
);

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

export default ResetPassword;
