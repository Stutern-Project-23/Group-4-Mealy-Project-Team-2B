import { useState } from "react";
import rest from '../utilities/rest';

const UseSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (userData) => {
    let req;
    try {
      setIsLoading(true);
      setError(null);
      req = rest().post("/signup", userData)
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
        return errorMessage;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
    return req;
  };

  return {
    isLoading,
    error,
    signUp,
  };
};

export default UseSignUp;
