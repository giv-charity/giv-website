import React from "react";
import "../assets/css/PartnerPage.css";

import homeless from "../assets/images/homeless.jpg";
const PartnerPage = props => {
  return (
    <div className="Partner-wrapper">
      <header>giv is looking for two kinds of partnerships</header>
      <div className="images">
        <img src={homeless} alt="" />
        <img src={homeless} alt="" />
      </div>
    </div>
  );
};

export default PartnerPage;
