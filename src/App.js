import { Routes, Route } from "react-router-dom";
// import VerifyEmail from "./pages/forgotPassword/VerifyEmail";
import ValidationProvider from "./hooks/FormValidationsContext";
import ResetPasswordEmailVerification from "./pages/resetPassword/ResetPasswordEmailVerification";
// import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
// import NewPassword from "./pages/forgotPassword/NewPassword";
import SignUpVerification from "./pages/signUpVerification/SignUpVerification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ResturantDashboard from "./component/ResturantDashboard";
import VerifyEmail from "./pages/ForgotPassword/VerifyEmail";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import GuestHomePage from "./pages/home/GuestHomePage";
import AuthHomePage from "./pages/home/AuthHomePage";
import SignIn from "./pages/signIn/SignIn";
import PaymentCheckout from "./pages/paymentCheckout/PaymentCheckout";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import "./App.css";

const App = () => (
  <div className="App">
    <PaymentCheckout />
    <ValidationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guest" element={<GuestHomePage />} />
        <Route path="auth-user" element={<AuthHomePage />} />s
        <Route path="sign-up" element={<SignUp />} />
        {/* <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password-verification" element={<VerifyEmail />} />
<Route path="create-new-password" element={<NewPassword />} /> */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-new-password" element={<NewPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="meal-dashboard" element={<ResturantDashboard />} />
        <Route path="sign-up-verification" element={<SignUpVerification />} />
        <Route path="forgot-password-verification" element={<VerifyEmail />} />
        <Route
          path="reset-password-verification"
          element={<ResetPasswordEmailVerification />}
        />
      </Routes>
    </ValidationProvider>
  </div>
);

export default App;
