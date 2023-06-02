import React from "react";
import logo from "../src/Assets/MEALY.svg";
import location from "../src/Assets/location.svg";
import bag from "../src/Assets/bag.svg";
import notification from "../src/Assets/notification.svg";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div class="header">
      <div>
        <img src={logo} alt="" class="logo"></img>
      </div>
      <div class="right-items">
        <div className="input-div">
          <img src={location} alt="" className="nav-location"></img>
          <input placeholder="Current Location"></input>
          <FaCaretDown className="drop-down" style={{ fontSize: "24px" }} />
        </div>
        <div class="profile"></div>
        <img src={bag} alt="" class="bag"></img>
        <img src={notification} alt="" class="notification"></img>
      </div>
    </div>
  );
};

export default Navbar;
