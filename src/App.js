import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/forgotPassword/VerifyEmail";
import ValidationProvider from "./hooks/FormValidationsContext";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/Home";
import SignUpVerification from "./pages/signUpVerification/SignUpVerification";
import ResetPasswordEmailVerification from "./pages/resetPassword/ResetPasswordEmailVerification";
import "./App.css";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import NewPassword from "./pages/forgotPassword/NewPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SignIn from "./pages/signIn/SignIn";



const App = () => (
  <div className="App">
    <ValidationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up-verification" element={<SignUpVerification />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password-verification" element={<VerifyEmail />} />
        <Route path="create-new-password" element={<NewPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route
          path="reset-password-verification"
          element={<ResetPasswordEmailVerification />}
        />
      </Routes>
    </ValidationProvider>
  </div>
);

export default App;
