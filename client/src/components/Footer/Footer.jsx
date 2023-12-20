import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fc fc1">
        <h2>Mastervance</h2>
        <p>
          Chrome notes topics of interest based on your recent browsing history.
        </p>
      </div>
      <div className="fc fc2">
        <p className="ul">Resources</p>
        <ul>
          <li>Community</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Courses</li>
        </ul>
      </div>
      <div className="fc fc3">
        <p className="ul">Company</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="fc fc4">
        <p className="ul">Get In Touch</p>
        <div className="icons"></div>
        <p className="ul">Contact Us</p>
        <p>Ph.No 9391232598</p>
        <p>Email mastervance16@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
