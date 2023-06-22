import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpHook = () => {
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [isVerificationCodeCorrect, setIsVerificationCodeCorrect] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const signUp = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://mealy.onrender.com/api/v1/user/signup",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        setIsVerificationCodeSent(true);
      } else {
        const responseData = await response.json();
        throw new Error(responseData.message);
      }
    } catch (err) {
      let errorMessage = "An error occurred";

      if (
        err &&
        err?.response &&
        err?.response.data &&
        err?.response.data.message
      ) {
        errorMessage = err.response.data.message;
      } else if (err && err?.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = async (verificationCode) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://mealy.onrender.com/api/v1/user/verify",
        {
          verifyEmailToken: verificationCode,
        },
      );
      setIsVerificationCodeCorrect(true);
      alert("verified successfully!");
      history("/auth-user");
      return response;
    } catch (err) {
      setError(err?.response?.data?.message);
      setIsVerificationCodeCorrect(false);
      return new Error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isVerificationCodeSent,
    isVerificationCodeCorrect,
    isLoading,
    error,
    signUp,
    verifyCode,
  };
};

export default SignUpHook;
