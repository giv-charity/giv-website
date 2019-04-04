import React from "react";
import "../assets/css/LandingPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const LandingPage = props => {
  return (
    <div className="landing-page">
      <div className="app-flex-title">
        <h2 className="giv-title">giv</h2>
        <h2 className="giv-slogan">charitable giving, reimagined</h2>
      </div>
      <a href="#why" className="nav-arrow">
        <MdKeyboardArrowDown size="5rem" />
      </a>
    </div>
  );
};

export default LandingPage;
