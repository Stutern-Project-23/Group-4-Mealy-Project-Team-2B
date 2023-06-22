import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const history = useNavigate();

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.post(
        "https://mealy.onrender.com/api/v1/user/signin",
        {
          email,
          password,
        },
      );

      setUser(response.data.user);
      history("/auth-user");
    } catch (err) {
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
    }

    setIsLoading(false);
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(
        "https://mealy.onrender.com/api/v1/auth/google",
      );
      window.location.href = response.data.signInUrl;
    } catch (err) {
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
    }

    setIsLoading(false);
  };

  return { signIn, signInWithGoogle, isLoading, error, user };
};

export default SignInHook;
