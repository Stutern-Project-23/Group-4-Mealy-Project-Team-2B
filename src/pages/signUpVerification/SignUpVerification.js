/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Input";
import Button from "../../component/Button";
import useVerifyCode from "../../hooks/useVerifyCode";
import "../authPagesStyles.css";
import { RightSideImage } from "../authPageBgImg";

const SignUpVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
    useState(false);
    const [res, setres] = useState("")

  const { isLoading, error, verifyCode } = useVerifyCode();
  const history = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    verifyCode({verificationCode
    }).then((result) => {
      // console.log("xx", result)
      setres(result)
    })
  };

  useEffect(() => {
    if (res) {
      alert("verified successfully!");
      history("/auth-user");
      // console.log('good to go')
    }
  });

  return (
    <div className="verification flex">
      <div className="verify flex">
        <a href="/">
          <header className="logo-header">
            <h1>Mealy</h1>
          </header>
        </a>
        <div className="verify-input flex">
          <form className="verify-form" onSubmit={handleVerification}>
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
                  type="number"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                {error && <div className="endpoint-error">{error}</div>}
                <Button type="submit" className="input-width form-btn">
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <RightSideImage className="image" />
    </div>
  );
};

export default SignUpVerification;
