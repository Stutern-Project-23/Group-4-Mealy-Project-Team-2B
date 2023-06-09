import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Profile from "./ProfileUI/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
);
