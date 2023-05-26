import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import "./App.css";
import SignUpVerification from "./pages/signUpVerification/SignUpVerification";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyEmail from "./pages/ForgotPassword/VerifyEmail";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ResetPasswordEmailVerification from "./pages/resetPassword/ResetPasswordEmailVerification";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up-Verification" element={<SignUpVerification />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="forgot-password-verification" element={<VerifyEmail />} />
      <Route path="create-new-password" element={<NewPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route
        path="reset-password-verification"
        element={<ResetPasswordEmailVerification />}
      />
    </Routes>
  </div>
);

export default App;
