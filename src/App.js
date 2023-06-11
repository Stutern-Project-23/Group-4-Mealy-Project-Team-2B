import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/ForgotPassword/VerifyEmail";
import ValidationProvider from "./hooks/FormValidationsContext";
import ResetPasswordEmailVerification from "./pages/resetPassword/ResetPasswordEmailVerification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import SignUpVerification from "./pages/signUpVerification/SignUpVerification";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ResturantDashboard from "./component/ResturantDashboard";
import GuestHomePage from "./pages/home/GuestHomePage";
import AuthHomePage from "./pages/home/AuthHomePage";
import SignIn from "./pages/signIn/SignIn";
import PaymentCheckout from "./pages/paymentCheckout/PaymentCheckout";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import SettingsDashboard from "./pages/settingDashboard/SettingsDashboard";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import "./App.css";

const App = () => (
  <div className="App">
    <ValidationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guest" element={<GuestHomePage />} />
        <Route path="auth-user" element={<AuthHomePage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password-verification" element={<VerifyEmail />} />
        <Route path="create-new-password" element={<NewPassword />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-new-password" element={<NewPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="meal-dashboard" element={<ResturantDashboard />} />
        <Route path="order-tracking" element={<OrderTracking />} />
        <Route path="sign-up-verification" element={<SignUpVerification />} />
        <Route path="forgot-password-verification" element={<VerifyEmail />} />
        <Route
          path="reset-password-verification"
          element={<ResetPasswordEmailVerification />}
        />
        <Route path="checkout" element={<PaymentCheckout />} />
        <Route path="setting-dashboard" element={<SettingsDashboard />} />
      </Routes>
    </ValidationProvider>
  </div>
);

export default App;
