import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rest from '../utilities/rest';
import { AuthDispatch, useAuth, getCurrentUser } from '../utilities/auth'

const SignUpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    dispatch,
  } = useAuth()

  const history = useNavigate();

  const signUp = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);
      rest().post("/signup", userData)
      .then((result) => {
        if (result.status === "200" && result.data?.status === "Success") {
          console.log(result)
        }
      })
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
      rest().post("/verify", {verifyEmailToken: verificationCode})
      .then((result) => {
        if (result.status === "200" && result.data?.status === "Success") {
          console.log(result)
          alert("verified successfully!");
          history("/auth-user");
          // store use email in local storage for subsequent usage
          // localStorage.setItem("userdata", JSON.stringify(result.data?.email))
          // try {
          //   getCurrentUser(result.data?.email)
          //   .then(async(user) => {
          //     if (user) {
          //        // update user context with actual user data
          //       dispatch({
          //         type: AuthDispatch.Authenticated,
          //         payload: user.data,
          //       })
          //     }
          //     return null;
          //   })
          // } catch (err) {
          //   console.log(err)
          // }
        }
      })
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    signUp,
    verifyCode,
  };
};

export default SignUpHook;
