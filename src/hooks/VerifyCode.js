import { useState, useEffect } from "react";
import rest from '../utilities/rest';
import { AuthDispatch, useAuth, getCurrentUser } from '../utilities/auth';

const useVerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null)

  const {
    dispatch,
  } = useAuth()  

  const verifyCode = async ({verificationCode}) => {
    // debugger; // eslint-disable-line no-debugger
    try {
      setIsLoading(true);
      setError(null);
      await rest().post("/verify", {verifyEmailToken: verificationCode})
      .then(async(result) => {
        // console.log("response result hook", result)
        setEmail(result.data?.data?.email)
        await localStorage.setItem("accessToken", JSON.stringify(result.data?.data?.access_token))
      })
    } catch (err) {
      let errorMessage = "An error occurred";
      if (
        err &&
        err?.response &&
        err?.response.data &&
        err?.response.status &&
        err.response.headers
      ) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = err.response.data;
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
          errorMessage = err.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  function getUserViaEmail(userEmail){
    getCurrentUser(userEmail)
      .then(async(user) => {
        if (user) {
          // update user context with actual user data
          await dispatch({
            type: AuthDispatch.Authenticated,
            payload: user.data,
          })
        }
      })
  }

  useEffect(() => {
    if(email){
      getUserViaEmail(email)
    }
  }, [email])

  return {
    isLoading,
    error,
    verifyCode,
  };
}

export default useVerifyCode;