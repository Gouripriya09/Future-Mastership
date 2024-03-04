import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AI from "../../assets/Course.png";

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <div className="top">
        <img src={AI} alt="Course Image" />
      </div>
      <div className="body">
        <h2>{props.title}</h2>
        <div className="body-sub">
          <p>{props.name}</p>
          <p>
            {props.rating} <i class="fa-solid fa-star"></i> ({props.num}{" "}
            Reviews)
          </p>
        </div>
      </div>
      <div className="bot">
        <p className="bot-1">₹{props.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
