import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

const Header = () => (
  <div className="flex chat-header-cont" style={{ width: "100%" }}>
    <div>
      <img alt="" className="user-chat-dp" src="https://bit.ly/dan-abramov" />
      <BiBadgeCheck className="online-badge" />
    </div>
    <div>
      <p>Dan Abrahmov</p>
      <p style={{ color: "green" }}>Online</p>
    </div>
  </div>
);

export default Header;
