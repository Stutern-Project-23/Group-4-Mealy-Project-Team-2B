import { useState } from "react";

const SignUpHook = () => {
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [isVerificationCodeCorrect, setIsVerificationCodeCorrect] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      // Send a POST request to sign up the new user
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
        throw new Error("Failed to sign up the user");
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
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://mealy.onrender.com/api/v1/user/verify",
        {
          method: "POST",
          body: JSON.stringify({ verifyEmailToken: verificationCode }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        setIsVerificationCodeCorrect(true);
      } else {
        setIsVerificationCodeCorrect(false);
      }
    } catch (err) {
      setError(err.message);
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
