import React from "react";
import "./style.css";
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
        <p className="bot-2"> Apply Now</p>
      </div>
    </div>
  );
};

export default CourseCard;
