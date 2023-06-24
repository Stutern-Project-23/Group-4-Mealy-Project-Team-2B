import { useState } from "react";
import rest from '../utilities/rest';
import { AuthDispatch, useAuth } from '../utilities/auth';

const useVerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        console.log("response result hook", result)
        await localStorage.setItem("userdata", JSON.stringify(result))
        await dispatch({
          type: AuthDispatch.Authenticated,
          payload: result.data?.data,
        })
        return result
      //   setEmail(result.data?.data?.email)
      //   // console.table(result)
      //   if (["200", "201"].includes(result.status) && result.data?.status === "Success") {
      //     // store user email in local storage for subsequent usage
      //     localStorage.setItem("userdata", JSON.stringify(result.data?.email))
      //   }
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

  return {
    isLoading,
    error,
    verifyCode,
  };
}

export default useVerifyCode;