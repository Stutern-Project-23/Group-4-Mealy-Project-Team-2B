import React from "react";
import edit from "./Assets/edit.svg"

const Delete = () =>  (
    <div className="delete-container">
        <div className="first-container">
            <h3>Delete Account and Data</h3>
            <p>
          In accordance with our privacy policy, deleting your account and data
          can’t be undone, so we need to check it’s you before going ahead.
            </p>
            <p>
          Send us a request and we will confirm via email after we have reviewed
          it
            </p>
        </div>
        <div className="second-container">
            <div className="second-innerdiv">
                <img src={edit} alt="" className="edit-icon" />
                <div className="rectangle"/>
            </div>
            <div className="delete-button-div">
            <button className="delete-button" type="submit">Send request</button>
            </div>
        </div>
    </div>
  );


export default Delete;
