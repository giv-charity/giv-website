import React from "react";
import "../assets/css/Form.css";
import axios from "axios";
import swal from "sweetalert";

const error = () => swal("Error", "Enter an email first!", "error");

const success = () =>
  swal(
    "Registered!",
    "Thank you for joining! You will recieve an email soon",
    "success"
  );

const handleSubmit = () => {
  const email = document.getElementById("email").value;
  if (email === "") {
    error();
    return;
  }

  axios.post("https://giv-startup.appspot.com/api/addEmail", {
    email
  });

  success();
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
