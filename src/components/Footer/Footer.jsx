import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { footerVariant } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <motion.div
        className="footer"
        variants={footerVariant}
        whileInView="animate"
        initial="initial"
        viewport={{
          once: true,
        }}
      >
        <div className="fc fc1">
          <h2>Mastervance</h2>
          <p>
            We empower students to become masters of tomorrow's world. Our
            platform is a gateway to the latest advancements in technology.
          </p>
        </div>
        <div className="fc fc2">
          <p className="ul">Connect</p>
          <ul>
            <Link to="/community" className="unformat-link">
              <li>Community</li>
            </Link>
            <Link to="/mentor" className="unformat-link">
              <li>Mentors</li>
            </Link>
            <Link to="/about" className="unformat-link">
              <li>About Us</li>
            </Link>
            <Link to="/free_courses" className="unformat-link">
              <li>Courses</li>
            </Link>
          </ul>
        </div>
        <div className="fc fc3">
          <p className="ul">Resources</p>
          <ul>
            <Link to="/privacypolicy" className="unformat-link">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/refundpolicy" className="unformat-link">
              <li>Refund Policy</li>
            </Link>
            <Link to="/terms_and_conditions" className="unformat-link">
              <li>Terms & Conditions</li>
            </Link>
            <Link to="/faq" className="unformat-link">
              <li>FAQ</li>
            </Link>
            <Link to="/Certificate" className="unformat-link">
              <li>Verify Certificate</li>
            </Link>
          </ul>
        </div>
        <div className="fc fc4">
          <p className="ul">Get In Touch</p>
          <div className="icons">
            <a
              href="https://www.instagram.com/mastervance_16"
              target="_blank"
              rel="noopener noreferrer"
              className="unformat-link"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="" className="unformat-link">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555549581393&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="unformat-link"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="www.linkedin.com/in/mastervance16"
              target="_blank"
              rel="noopener noreferrer"
              className="unformat-link"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/MasterVanc44749"
              target="_blank"
              rel="noopener noreferrer"
              className="unformat-link"
            >
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
          <p className="ul">Contact Us</p>
          <p>
            <i class="fa-solid fa-phone"></i>
            <a href="tel:9110799941" class="unformat-link">
              Ph.No 9110799941
            </a>
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:mastervance16@gmail.com" class="unformat-link">
              Email mastervance16@gmail.com
            </a>
          </p>

          <br></br>
          <br />
          <p className="cc">Mastervance © 2024</p>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
