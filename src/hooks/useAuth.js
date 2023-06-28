import {useState} from 'react'
import rest from '../utilities/rest';
import { Auth, AuthDispatch, getCurrentUser } from "../utilities/auth";

export default function UseAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = Auth()

  function getUser(userEmail){
    return getCurrentUser(userEmail)
      .then(async(user) => {
        if (user) {
          // update user context with actual user data
          console.log('pre dispatch auth', user.data?.data?.user)
          const data = user.data?.data?.user
          dispatch({
            type: AuthDispatch.Authenticated,
            payload: {data},
          })
        }
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
      });
  }

  const signIn = async (email, password) => {
    let response;
    try {
      setIsLoading(true);
      setError(null);
      response = await rest().post("/signin",{email,password});
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
    return response;
  };

  const signUp = async (userData) => {
    let response;
    try {
      setIsLoading(true);
      setError(null);
      response = rest().post("/signup", userData)
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
    return response;
  };

  return {
    signIn, signUp, error, isLoading, getUser
  }
}
