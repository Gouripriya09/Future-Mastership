import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer";
import CourseCard from "../../components/Course/CourseCard";
import "./CourseDetail.css";

const CourseDetail = () => {
  return (
    <div className="CourseDetail light">
      <Navbar />
      <motion.div className="container" id="hero-course">
        <div className="left-course">
          <h2>Course Name</h2>
          <div className="fot">
            <div id="pfile"></div>
            <p>Instructor Name</p>
          </div>
          <button className="enroll">Enroll</button>
        </div>
        <div className="right-course">
          <div className="course-box">
            <div className="cb-1">
              <p className="course-box-head">COURSE HEAD</p>
              <p className="course-box-desc">Description of the course</p>
            </div>
            <div className="cb-2">
              <p>4.9 (135 Reviews) | 98%</p>
              <ul className="course-box-list">
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Beginner level</p>
                </li>
                <p className="sub">Gain Experience</p>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>10 Hours Aprox</p>
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Flexible Schedule</p>
                </li>
                <p className="sub">Learn at your own pace</p>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Earn degree credit</p>
                </li>
                <p className="sub">Learn more</p>
              </ul>
            </div>
            <div className="cb-3">
              <button className="cb-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="container" id="related-sec">
        <h1>Other courses</h1>
        <div id="related">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
