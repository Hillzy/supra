//Dependencies
import React from "react";

//Components
import Navbar from "./Navbar";

//Styles
import config from "../../styles/config.module.css";
import sidebarCSS from "../../styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={[config.sidebarCol, sidebarCSS.sbContainer].join(" ")}>
      <Navbar />
    </div>
  );
};

export default Sidebar;
