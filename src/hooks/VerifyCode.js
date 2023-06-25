import { useState } from "react";
import rest from '../utilities/rest';
import { getCurrentUser } from '../utilities/auth';

const useVerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getUserViaEmail(userEmail){
    let currentuser;
    getCurrentUser(userEmail)
      .then(async(user) => {
        if (user) {
          // update user context with actual user data
          console.log('pre dispatch auth', user.data?.data?.user)
          const data = user.data?.data?.user;
          currentuser = user.data?.data?.user;
          // dispatch({
          //   type: AuthDispatch.Authenticated,
          //   payload: data,
          // })
        }
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
      });
    return currentuser;
  }

  const verifyCode = async ({verificationCode}) => {
    // debugger; // eslint-disable-line no-debugger
    let res;
    try {
      setIsLoading(true);
      setError(null);
      await rest().post("/verify", {verifyEmailToken: verificationCode})
      Promise.resolve()
      .then(async(result) => {
        // console.log("response result hook", result)
        console.log('pre dispatch sign in', result.data?.data)
        const data = result.data?.data
        // dispatch({
        //   type: AuthDispatch.SignIn,
        //   payload: data,
        // })
        if(result){
          // User is verified, proceed to fetch user data
          await getUserViaEmail(result.data?.data?.email)
          await localStorage.setItem("accessToken", JSON.stringify(result.data?.data?.access_token))
          // Return the processed data to pass it to the next `then` block
          res = result;
        }
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
    return res;
  };

  return {
    isLoading,
    error,
    verifyCode,
    getUserViaEmail,
  };
}

export default useVerifyCode;