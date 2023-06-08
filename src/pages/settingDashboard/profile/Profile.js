import React from "react";
import styled from "styled-components";
import edit from "../../../assets/images/profile-edit-pen.png";
import EllipseImg from "../../../assets/images/Ellipse.png";

const Profile = () => (
  <ProfileStyles>
    <div className="main">
      <div className="profile-container flex">
        <div className="profile-image-container flex cont-border">
          <img src={EllipseImg} alt="" />
          <div className="profile-name-location-div">
            <p>Amara Chukwu</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="cont-border flex">
          <div className="personal-information-header flex">
            <h3>Personal Information</h3>
            <img src={edit} alt="" className="profile-edit-icon" />
          </div>

          <div className="personal-information-edit flex">
            <div>
              <div>
                <p>First Name</p>
                <h4>Amara</h4>
              </div>

              <div>
                <p>Email address</p>
                <h4>amarachuckwu@gmail.com</h4>
              </div>
            </div>

            <div>
              <div>
                <p>Last Name</p>
                <h4>Chukwu</h4>
              </div>

              <div>
                <p>Phone</p>
                <h4>+234 543 6788 0086</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex cont-border">
          <div className="personal-information-header flex">
            <h3>Addresses</h3>
            <img src={edit} alt="" className="profile-edit-icon" />
          </div>

          <div className="personal-information-edit flex">
            <div>
              <div>
                <p>Country</p>
                <h4>Nigeria</h4>
              </div>

              <div>
                <p>Street/Number</p>
                <h4>St finbarrs road 73</h4>
              </div>
            </div>

            <div>
              <div>
                <p>City/State</p>
                <h4>Akoka Lagos State</h4>
              </div>

              <div>
                <p>Postal Code</p>
                <h4>100213</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProfileStyles>
);

const ProfileStyles = styled.div`
  color: #000000;
  .personal-information-header {
    justify-content: space-between;
    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
    }
  }
  .profile-image-container img {
    width: 100px;
    flex-direction: row !important;
    cursor: pointer;
  }
  .profile-image-container {
    gap: 2em;
    flex-direction: row !important;
  }
  .profile-name-location-div {
    margin-top: 0.5em;
  }
  .personal-information-edit {
    column-gap: 5em;
    align-items: center;

    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .profile-edit-icon {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  .personal-information-edit > div > div {
    margin-bottom: 1em;
  }
`;
export default Profile;
