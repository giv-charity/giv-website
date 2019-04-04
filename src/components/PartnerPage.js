import React from "react";
import "../assets/css/PartnerPage.css";

const PartnerPage = props => {
  return (
    <div className="partner-wrapper">
      <h1>partnerships</h1>
      <div className="images">
        <div class="container">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Avatar"
            class="image"
          />
          <div class="overlay-left" />
          <div class="text-bottom-left">
            <h1>nonprofits</h1>
            <h3 className="lighter">that innovate</h3>
          </div>
        </div>
        <div class="container">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Avatar"
            class="image"
          />
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
