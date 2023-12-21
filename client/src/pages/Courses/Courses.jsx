import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UD from "../../components/Development/UD";
import CourseCard from "../../components/Course/CourseCard";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="light courses">
      <Navbar />
      <h1 className="col-class f-ss courses-heading">Free Courses</h1>
      <div className="card-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
