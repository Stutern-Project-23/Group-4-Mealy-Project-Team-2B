import React from "react";
import styled from "styled-components";
import LocationVector from "../assets/images/locationVector.png";
import DrowndownVector from "../assets/images/dropdownVector.png";

const LocationSearch = () => (
  <SearchStyle>
    <div className="search-input">
      <input type="text" placeholder="Search location" />
    </div>
  </SearchStyle>
);

const SearchStyle = styled.div`
  margin-top: 3em;
  .search-input {
    position: relative;
    display: flex;
    align-items: center;
  }
  .search-input input[type="text"] {
    padding: 10px 40px 10px 30px;
    border: 1px solid #32324d;
    border-radius: 7px;
    width: 40%;
    margin: 0 auto;
    outline: none;
    background-image: url(${LocationVector}), url(${DrowndownVector});
    background-position: left 10px center, right 10px center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-size: 15px auto;
  }

  /* Adjustments for responsiveness */
  @media (max-width: 768px) {
    .search-input input[type="text"] {
      width: 70%;
      background-size: 12px 12px;
    }
  }
`;
export default LocationSearch;
