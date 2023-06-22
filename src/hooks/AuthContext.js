import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import useSignIn from "./SignInHook";
import useSignUp from "./SignUpHook";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initialize your authentication state and functions here
  const signInHook = useSignIn();
  const signUpHook = useSignUp();

  const { user: signInUser, ...signInProps } = signInHook;
  const { ...signUpProps } = signUpHook;

  const user = signInUser || signUpHook.isVerificationCodeCorrect;

  const authValue = useMemo(
    () => ({ user, ...signInProps, ...signUpProps }),
    [user, signInProps, signUpProps],
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
