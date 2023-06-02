import React from "react";
import location from "../src/Assets/location.svg";
import map from "../src/Assets/map.svg";
import close from "../src/Assets/close.svg";

const Location = () => {
  return (
    <div>
      <div class="location-container">
        <div>
          <h2>Add a delivery address</h2>
          <input placeholder="Current Location" class="location-input"></input>
          <div class="locationicon-wrapper">
            <img src={location} alt="" class="location-icon"></img>
            <p>Use Current Location</p>
          </div>
          <p class="bottom-p">Or set your location on the map</p>
        </div>
        <div>
          <img src={close} alt="" className="close-icon"></img>
          <img src={map} alt="" class="map"></img>
        </div>
      </div>
    </div>
  );
};

export default Location;
