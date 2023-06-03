import React from "react";
import { CgClose } from "react-icons/cg";
import location from "../../assets/images/locationVector.png";
import map from "../../assets/images/map.svg";
import "./navbarLocation.css";
import Input from "../Input";

// eslint-disable-next-line react/prop-types
const LocationModal = ({ onCloseModal }) => {
  const handleCloseModalClick = () => {
    onCloseModal();
  };

  return (
    <div className="modal-overlay">
      <div className="location-container">
        <div className="close-icon-div">
          <CgClose className="close-icon" onClick={handleCloseModalClick} />
        </div>

        <div className="location-container-grid">
          <div>
            <h2>Add a delivery address</h2>
            <Input placeholder="Current Location" className="location-input" />
            <div className="locationicon-wrapper">
              <img src={location} alt="" className="location-icon" />
              <p>Use Current Location</p>
            </div>
            <p className="bottom-p">Or set your location on the map</p>
          </div>
          <div>
            <img src={map} alt="" className="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
