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
            <FaLinkedin size="2rem" />
          </a>
          <a
            href="https://twitter.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="2rem" />
          </a>
          <a
            href="https://www.facebook.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size="2rem" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2rem" />
          </a>
        </div>
        <p className="copyright">Giv &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
