import { Routes, Route } from "react-router-dom";
import SignUp from "./component/signUp/SignUp";
import "./App.css";
import SignUpVerification from "./component/signUpVerification/SignUpVerification";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signUp-Verification" element={<SignUpVerification />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  </div>
);

export default App;
