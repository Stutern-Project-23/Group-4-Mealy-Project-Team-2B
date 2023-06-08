import React from "react";
import Button from "./Button";

const LogoutModal = () => (
  <div className="">
    <p>Are you sure you want to logout of mealy ?</p>
    <p>you can always log back in at any time.</p>
    <div className="button-div">
      <Button className="logout-btn" type="submit">
        Read
      </Button>
    </div>
  </div>
);

export default LogoutModal;
