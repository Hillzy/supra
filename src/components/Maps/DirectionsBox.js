//Dependencies
import React, { useState } from "react";
//Components
import mapsIcon from "../../assets/images/maps.svg";
import MapSearch from "./MapSearch";
//Styles
import config from "../../styles/config.module.css";
import mapsCSS from "../../styles/maps.module.css";

const DirectionsBox = props => {
  let destinationObj = {};

  const handleClick = dest => {
    destinationObj = dest;
    console.log(destinationObj);
    props.getDestination(dest);
  };

  return (
    <div className={[mapsCSS.directionsBox].join(" ")}>
      <div className={mapsCSS.searchBox}>
        <MapSearch handleClick={handleClick} />
      </div>

      <div className={mapsCSS.BtnCont}>
        <button onClick={handleClick} className={mapsCSS.dirBtn}>
          <img src={mapsIcon} className={mapsCSS.dirImg} />
        </button>
      </div>
    </div>
  );
};

export default DirectionsBox;
