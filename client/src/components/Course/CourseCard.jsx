import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AI from "../../assets/Course.png";

const CourseCard = () => {
  return (
    <div className="course-card">
      <div className="top">
        <img src={AI} alt="Course Image" />
      </div>
      <div className="body">
        <Link to="/course" className="unformat-link">
          <h2>Web Development | Complete FullStack Course | HTML CSS JS</h2>
        </Link>
        <div className="body-sub">
          <p>Joshi Patel</p>
          <p>
            4.7 <i class="fa-solid fa-star"></i> (88 Reviews)
          </p>
        </div>
      </div>
      <div className="bot">
        <p className="bot-1">₹499</p>
      </div>
    </div>
  );
};

export default CourseCard;
