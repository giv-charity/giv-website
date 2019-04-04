import React from "react";
import "../assets/css/PartnerPage.css";

import homeless from "../assets/images/homeless.jpg";
const PartnerPage = props => {
  return (
    <div className="partner-wrapper">
      <header>giv is looking for two kinds of partnerships</header>
      <div className="images">
        <img id="non-profit-img" src={homeless} alt="" />
        <img id="corporation-img" src={homeless} alt="" />
      </div>
    </div>
  );
};

export default PartnerPage;
