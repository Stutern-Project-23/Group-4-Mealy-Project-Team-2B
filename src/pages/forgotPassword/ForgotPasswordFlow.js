import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerifyEmail from "./VerifyEmail";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";

const ForgotPasswordFlow = () => {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [resetPasswordToken, setResetPasswordToken] = useState("");
  const [codeValidated, setCodeValidated] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [showCodeForm, setShowCodeForm] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();

  const handleEmailSubmit = (Inputcode) => {
    setError("");
    setIsLoading(true);
    fetch("https://mealy.onrender.com/api/v1/user/forgotpassword", {
      method: "POST",
      body: JSON.stringify({ Inputcode }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCodeSent(true);
          setShowEmailForm(false);
          setShowCodeForm(true);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCodeSubmit = (code) => {
    setError("");
    // Call the API endpoint to validate the forgot password code
    fetch("https://mealy.onrender.com/api/v1/user/resetpassword/code", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const resetPasswordTokenData = data.resetPasswordToken;
          setCodeValidated(true);
          setResetPasswordToken(resetPasswordTokenData);
          setShowCodeForm(false);
          setShowNewPasswordForm(true);
          console.log(data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  const handleResendCode = () => {
    setError("");
    fetch("https://mealy.onrender.com/api/v1/user/resetpassword/code", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setError("An error occurred. Please try again.");
      });
  };

  const handlePasswordSubmit = (password) => {
    setError("");
    fetch(
      `https://mealy.onrender.com/api/v1/user/resetpassword/${resetPasswordToken}`,
      {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          alert("Password updated successfully!");
          history.push("/auth-user");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  let currentForm = null;

  if (showEmailForm) {
    currentForm = (
      <ForgotPassword
        onEmailSubmit={handleEmailSubmit}
        error={error}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  } else if (showCodeForm) {
    currentForm = (
      <VerifyEmail
        onCodeSubmit={handleCodeSubmit}
        onResendCode={handleResendCode}
        error={error}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  } else if (showNewPasswordForm) {
    currentForm = (
      <NewPassword
        onPasswordSubmit={handlePasswordSubmit}
        error={error}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  }

  return <div>{currentForm}</div>;
};

export default ForgotPasswordFlow;
