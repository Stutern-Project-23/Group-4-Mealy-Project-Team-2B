import React from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { RightSideImage } from "../authPageBgImg";

const NewPassword = () => (
  <div className="create-new-passwd-page">
    <div className="left-side">
      <header className="logo-header create-new-passwd-header">
        <h1>Mealy</h1>
      </header>

      <form className="input-wrapper input-wrapper-top">
        <h2>Create a new password</h2>
        <div className="input-div input-cont">
          <Input
            type="password"
            id="password"
            placeholder="Enter new password"
          />
        </div>
        <div className="input-div input-cont">
          <Input
            type="password"
            id="forget-password"
            placeholder="Confirm new password"
          />
        </div>
        <div className="create-new-passwd-btn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
    <RightSideImage />
  </div>
);

export default NewPassword;
