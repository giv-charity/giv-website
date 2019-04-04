import React from "react";
import "../assets/css/PartnerPage.css";

import homeless from "../assets/images/homeless.jpg";
const PartnerPage = props => {
  return (
    <div className="partner-wrapper">
      <h1>giv is looking for two kinds of partnerships</h1>
      <div className="images">
        <div class="container">
          <img src={homeless} alt="Avatar" class="image" />
          <div class="overlay-left" />
          <div class="text-bottom-left">
            <h1>nonprofits</h1>
            <h3 className="lighter">that innovate</h3>
          </div>
        </div>
        <div class="container">
          <img src={homeless} alt="Avatar" class="image" />
          <div class="overlay-right" />
          <div class="text-top-right">
            <h1>corporations</h1>
            <h3 className="lighter">that care</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
