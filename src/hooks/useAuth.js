import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utilities/auth";
import rest from '../utilities/rest';
import UserContext from './useContext';

const UseAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useNavigate();
  const { setUser } = useContext(UserContext);
  
  // set user in context and push them home
  const setUserContext = async (email) =>
    getCurrentUser(email)
    .then(async(res) => {
      // console.log(res.data.data)
      await setUser(res?.data?.data);
      history("/auth-user");
    }).catch((err) => {
      setError(err.response.data);
    })

  const signUp = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      rest().post("/signup", userData)
      .then(async() => {
        await setUserContext(userData.email);
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
      return setError(errorMessage);
    } finally{
      setIsLoading(false)
    }
    return null;
  };

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    const response = await rest().post("/signin",{email,password})
      .then(async() => {
      await setUserContext();

      setUser(response.data.user);
       // get token from response
      const token  =  response.data.access_token;
      // set JWT token to local
      localStorage.setItem("token", token);
      // set token to axios common header
      // setAuthToken(token);
      // history("/auth-user");
    })
    .catch((err) => {
      let errorMessage = "An error occurred";

      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        errorMessage = err.response.data.message;
      } else if (err && err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    })
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    signUp,
    signIn,
  };
};

export default UseAuth;
