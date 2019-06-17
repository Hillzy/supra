//Dependencies
import React, { useState } from "react";
//Components
import MapsContainer from "../components/Maps/MapsContainer";
import mapsIcon from "../assets/images/maps.svg";
//Styles
import config from "../styles/config.module.css";
import mapsCSS from "../styles/maps.module.css";

const Maps = props => {
  return (
    <div className={config.contentContainer}>
      <MapsContainer />
    </div>
  );
};
export default Maps;
