import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="set e1">LOGO</span>
      <span className="set e2">
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Courses</p>
          </li>
          <li>
            <p>Mentor</p>
          </li>
          <li>
            <p>Community</p>
          </li>
          <li>
            <p>About Us</p>{" "}
          </li>
        </ul>
      </span>
      <span className="set e3">
        <button className="apply">Apply Now</button>
      </span>
    </div>
  );
};

export default Navbar;
