import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import location from "../../assets/images/locationVector.png";
import bag from "../../assets/images/bag.svg";
import notification from "../../assets/images/notification.svg";
import "./navbarLocation.css";
import LocationModal from "./LocationModal";

const AuthNavbar = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const handleInputClick = () => {
    setIsLocationModalOpen(!isLocationModalOpen);
  };

  const handleCloseModal = () => {
    setIsLocationModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.classList.contains("modal-overlay") &&
        isLocationModalOpen
      ) {
        setIsLocationModalOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isLocationModalOpen]);

  return (
    <div className="authNavbar">
      <div className="header">
        <div>
          <NavLink to="/" className="nav-logo">
            MEALY
          </NavLink>
        </div>
        <div className="right-items">
          <div className="input-div">
            <img src={location} alt="" className="nav-location" />
            <input placeholder="Current Location" onClick={handleInputClick} />
            <FaCaretDown className="drop-down" style={{ fontSize: "24px" }} />
          </div>
          <div className="profile" />
          <BsCart3 className="bag cart" />
          <IoMdNotificationsOutline className="notification" />
        </div>
      </div>
      <div>
        {isLocationModalOpen && (
          <LocationModal onCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default AuthNavbar;
