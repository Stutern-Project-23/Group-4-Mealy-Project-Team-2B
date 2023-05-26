import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import signupVerImage from "../../assets/verification-image.png";

const SignUpVerification = () => (
  <SignUpVeriPage>
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
  </SignUpVeriPage>
);

const SignUpVeriPage = styled.div`
  .flex {
    display: flex;
  }

  .verification {
    width: 100%;
    min-height: 100vh;
    height: 100%;
  }

  .verify {
    flex-direction: column;
    width: 50%;
    background-color: #f8f8f8;
    padding: 2rem;
  }

  .verify-input {
    flex-direction: column;
    justify-content: left;
    align-items: center;
    height: 100%;
  }
  .verify-form {
    height: 100%;
    display: grid;
    place-items: center;
  }
  .verify-text {
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    color: #32324d;
    margin-bottom: 2em;
  }

  .verify-text p {
    font-size: 0.9rem;
  }

  .input {
    flex-direction: column;
    row-gap: 2rem;
    width: 100%;
  }

  @media (max-width: 1100px) {
    .verify {
      padding: 1rem;
    }

    .verify-input {
      padding: 0 2rem;
    }
  }

  @media (max-width: 900px) {
    .verify-input {
      padding: 0 1rem;
    }
  }

  @media (max-width: 830px) {
    .verify {
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    .verify-input {
      padding: 0;
    }
  }
`;

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
