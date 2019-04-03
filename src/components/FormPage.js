import React from "react";
import "../assets/css/Form.css";

const Form = props => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">signup for updates</h2>
      <div className="form-inputs">
        <input
          className="email-input"
          type="email"
          placeholder="enter your email address"
        />
        <input
          className="signup-button"
          type="button"
          value="get early access"
        />
      </div>
    </div>
  );
};

export default Form;
