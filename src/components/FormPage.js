import React from "react";
import "../assets/css/Form.css";
import axios from "axios";

const handleSubmit = () => {
  const email = document.getElementById("email").value;
  if (email === "") alert("Enter an email!");

  axios.post("https://giv-startup.appspot.com/api/addEmail", {
    email
  });
};

const Form = props => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">product updates</h2>
      <div className="form-inputs">
        <input
          className="email-input"
          type="email"
          id="email"
          placeholder="enter your email address"
        />
        <input
          className="signup-button"
          type="button"
          onClick={handleSubmit}
          value="get early access"
        />
      </div>
    </div>
  );
};

export default Form;
