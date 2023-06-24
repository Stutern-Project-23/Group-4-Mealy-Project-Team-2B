/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Input";
import Button from "../../component/Button";
import useVerifyCode from "../../hooks/VerifyCode";
import "../authPagesStyles.css";
import { RightSideImage } from "../authPageBgImg";
import { AuthDispatch, useAuth, getCurrentUser } from '../../utilities/auth';

const SignUpVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationCodeCorrect, setIsVerificationCodeCorrect] =
    useState(false);
  const [email, setEmail] = useState(null)

  const { isLoading, error, verifyCode } = useVerifyCode();
  const history = useNavigate();
  const {
    state: user,
  } = useAuth()

  const handleVerification = async (e) => {
    e.preventDefault();
    await verifyCode({verificationCode
    }).then(() => {
      if (error) {
        setIsVerificationCodeCorrect(false);
      }
      alert("verified successfully!");
      setIsVerificationCodeCorrect(true)
      history("/auth-user");
    })
  };

  useEffect(() => {
    console.log('in use effect', user.user?.email)
    // (function getuser(){
    //   getCurrentUser(email)
    //   .then(async(user) => {
    //     if (user) {
    //       console.log("seen motherfucker!!",user)
    //       // update user context with actual user data
    //       dispatch({
    //         type: AuthDispatch.Authenticated,
    //         payload: user.data,
    //       })
    //     }
    //   })
    // }())

    // if (error) {
    //   setIsVerificationCodeCorrect(false);
    // } else if (isVerificationCodeCorrect && !error)
    //   alert("verified successfully!");
    //   history("/auth-user");
  }, [email]);

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
