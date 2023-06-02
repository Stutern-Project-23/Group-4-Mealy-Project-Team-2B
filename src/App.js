import { Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/forgotPassword/VerifyEmail";
import ValidationProvider from "./hooks/FormValidationsContext";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import SignUpVerification from "./pages/signUpVerification/SignUpVerification";
import ResetPasswordEmailVerification from "./pages/resetPassword/ResetPasswordEmailVerification";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import NewPassword from "./pages/forgotPassword/NewPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SignIn from "./pages/signIn/SignIn";
import MealCustomization from "./component/mealCustomization/MealCustomization";
import ResturantDashboard from "./component/ResturantDashboard";
import "./App.css";



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
        <Route path="tabs" element={<MealCustomization />} />
        <Route path="meal-dashboard" element={<ResturantDashboard />} />
        <Route
          path="reset-password-verification"
          element={<ResetPasswordEmailVerification />}
        />
      </Routes>
    </ValidationProvider>
  </div>
);

export default App;
