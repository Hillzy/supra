//Dependencies
import React from "react";
import { Link } from "react-router-dom";
//Components
import homeIcon from "../../assets/images/home.svg";
import mapsIcon from "../../assets/images/maps.svg";
import musicIcon from "../../assets/images/music.svg";
//Styles
import sidebarCSS from "../../styles/sidebar.module.css";
import config from "../../styles/config.module.css";

const Navbar = () => {
  return (
    <div className={[sidebarCSS.navContainer].join(" ")}>
      <ul>
        <li className={sidebarCSS.navLink}>
          <Link to="/">
            <img
              src={homeIcon}
              className={[sidebarCSS.iconImg, config.svgFill].join(" ")}
              alt="home"
            />
          </Link>
        </li>
        <li className={sidebarCSS.navLink}>
          <Link to="/maps/">
            <img src={mapsIcon} className={sidebarCSS.iconImg} alt="Maps" />
          </Link>
        </li>
        <li className={sidebarCSS.navLink}>
          <Link to="/music/">
            <img src={musicIcon} className={sidebarCSS.iconImg} alt="Music" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
