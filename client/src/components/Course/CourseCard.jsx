import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AI from "../../assets/AI.png";

const CourseCard = () => {
  return (
    <div className="course-card">
      <div className="top">
        <img src={AI} alt="Course_Image" />
      </div>
      <div className="body">Artificial Intelligence</div>
      <div className="bot">
        <p className="bot-1">₹499</p>
        <Link to="/course" className="unformat-link">
          <p className="bot-2"> Apply Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
