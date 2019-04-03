import React from "react";
import "../assets/css/Footer.css";
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        contact us
        <div className="icons">
          <a
            href="https://github.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="2vw" />
          </a>
          <a
            href="https://twitter.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="2vw" />
          </a>
          <a
            href="https://www.facebook.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size="2vw" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2vw" />
          </a>
        </div>
        <p className="copyright">Giv &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
