import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>
          Copyright @2023 <span className="footer-span">Ecolern Pte Ltd</span>
          2023 .All Right Reserved. For company information and other
          <span className="footer-span">legal</span> bits. see you legal pages.
        </p>
        <p>
          We are using <span className="footer-span">cookies</span> and here's
          our
          <span className="footer-span">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
