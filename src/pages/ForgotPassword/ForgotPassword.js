import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../component/Input";
import Button from "../../component/Button";
import signupVerImage from "../../assets/verification-image.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="forgot-flex">
      <div className="all">
        <header className="logo-header">
          <h1>Mealy</h1>
        </header>
        <div className="form-container">
          <div className="form-minScreen">
            <div className="text">
              <h4 className="form-title">Forgot your Password?</h4>
              <p className="form-description">
                Enter the email address associated with your account
              </p>
            </div>
            <div className="input">
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
                <Button type="submit" className="submit-button">
                  Get Code
                </Button>
              </form>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
      <RightSideImage className="image" />
    </div>
  );
};

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

export default ForgotPassword;
