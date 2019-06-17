//Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "./Home";
import Maps from "./Maps";
import Music from "./Music";
//Styles
import config from "../styles/config.module.css";

function App() {
  return (
    <Router>
      <div className={[config.bgCol, config.appContainer].join(" ")}>
        <Sidebar />
        <Route path="/" exact component={Home} />
        <Route path="/maps/" exact component={Maps} />
        <Route path="/music/" exact component={Music} />
      </div>
    </Router>
  );
}

export default App;
