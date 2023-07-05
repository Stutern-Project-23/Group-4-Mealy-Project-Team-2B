/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../component/Input";
import edit from "../../../assets/images/profile-edit-pen.png";
import EllipseImg from "../../../assets/images/Ellipse.png";
import Button from "../../../component/Button";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Amara");
  const [lastName, setLastName] = useState("Chukwu");
  const [phone, setPhone] = useState("+234 543 6788 0086");
  const [addressEditing, setIsAddressEditing] = useState(false);
  const [country, setCountry] = useState("Nigeria");
  const [cityState, setCityState] = useState("Akoka Lagos State");
  const [postalCode, setPostalCode] = useState("100213");
  const [street, setStreet] = useState("St finbarrs road 73");

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleAddressEditClick = () => {
    setIsAddressEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleAdressEditClick = () => {
    setIsAddressEditing(true);
  };

  const handleAddressSaveClick = () => {
    setIsAddressEditing(false);
  };

  return (
    <ProfileStyles>
      <div className="main">
        <div className="profile-container flex">
          <div className="profile-image-container flex cont-border">
            <img src={EllipseImg} alt="" />
            <div className="profile-name-location-div">
              <p className="user-name">{`${firstName} ${lastName}`}</p>
              <p className="user-saved-location">{`${cityState} ${country}`}</p>
            </div>
          </div>

          <div className="cont-border flex">
            <div className="personal-information-header flex">
              <h3>Personal Information</h3>
              <img
                src={edit}
                alt=""
                className="profile-edit-icon"
                onClick={handleEditClick}
              />
            </div>

            <div className="personal-information-edit flex">
              <div>
                <div>
                  <p>First Name</p>
                  {isEditing ? (
                    <Input
                      type="text"
                      value={firstName}
                      className="edit-input"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  ) : (
                    <h4>{firstName}</h4>
                  )}
                </div>

                <div>
                  <p>Email address</p>
                  <h4 className={isEditing ? "greyed-out" : ""}>
                    amarachuckwu@gmail.com
                  </h4>
                </div>
              </div>

              <div>
                <div>
                  <p>Last Name</p>
                  {isEditing ? (
                    <Input
                      type="text"
                      value={lastName}
                      className="edit-input"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  ) : (
                    <h4>{lastName}</h4>
                  )}
                </div>

                <div>
                  <p>Phone</p>
                  {isEditing ? (
                    <Input
                      type="tel"
                      className="edit-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <h4>{phone}</h4>
                  )}
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="edit-save-btn-div flex">
                <Button
                  onClick={handleSaveClick}
                  type="submit"
                  className="edit-save-btn">
                  save
                </Button>
              </div>
            )}
          </div>

          <div className="flex cont-border">
            <div className="personal-information-header flex">
              <h3>Addresses</h3>
              <img
                src={edit}
                alt=""
                className="profile-edit-icon"
                onClick={handleAddressEditClick}
              />
            </div>

            <div className="personal-information-edit flex">
              <div>
                <div>
                  <p>Country</p>
                  {addressEditing ? (
                    <Input
                      type="text"
                      className="edit-input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  ) : (
                    <h4>{country}</h4>
                  )}
                </div>

                <div>
                  <p>Street/Number</p>
                  {addressEditing ? (
                    <Input
                      type="text"
                      className="edit-input"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  ) : (
                    <h4>{street}</h4>
                  )}
                </div>
              </div>

              <div>
                <div>
                  <p>City/State</p>
                  {addressEditing ? (
                    <Input
                      type="text"
                      className="edit-input"
                      value={cityState}
                      onChange={(e) => setCityState(e.target.value)}
                    />
                  ) : (
                    <h4>{cityState}</h4>
                  )}
                </div>

                <div>
                  <p>Postal Code</p>
                  {addressEditing ? (
                    <Input
                      type="text"
                      className="edit-input"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  ) : (
                    <h4>{postalCode}</h4>
                  )}
                </div>
              </div>
            </div>
            {addressEditing && (
              <div className="edit-save-btn-div flex">
                <Button
                  onClick={handleAddressSaveClick}
                  type="submit"
                  className="edit-save-btn">
                  save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProfileStyles>
  );
};

const ProfileStyles = styled.div`
  color: #000000;
  .personal-information-header {
    justify-content: space-between;
    h3,
    .user-name {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .personal-information-header h3,
  .user-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
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
    text-align: start !important;
  }
  .personal-information-edit {
    column-gap: 5em;
    align-items: center;
    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .user-saved-location,
  .personal-information-edit p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  .profile-edit-icon {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  .personal-information-edit > div > div {
    margin-bottom: 1em;
  }
  .greyed-out {
    color: #999999;
  }
  .edit-input {
    margin-top: 1em;
  }
  .edit-save-btn-div {
    justify-content: flex-end;
    .edit-save-btn {
      width: 100px;
    }
  }
`;
export default Profile;
