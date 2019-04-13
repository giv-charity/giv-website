import React from "react";
import "../assets/css/Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <h2>contact us</h2>
        <div className="icons">
          <a
            href="https://linkedin.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon-size" />
          </a>
          <a
            href="https://twitter.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon-size" />
          </a>
          <a
            href="https://www.facebook.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon-size" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon-size" />
          </a>
        </div>
        <p className="copyright">Giv &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
