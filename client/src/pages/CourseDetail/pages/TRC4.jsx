import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeAnimationVariants } from "../../../utils/helpers";
import rev from "../../../assets/rev.png";
import CourseCard from "../../../components/Course/CourseCard";
import "./CourseDetail.css";

const TRC4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="CourseDetail light">
      <Navbar />
      <div className="nav3">
        <p>
          Courses /{" "}
          <Link to="/emerging_courses" className="unformat-link">
            Trending Courses
          </Link>{" "}
          / Digital Forensics Course
        </p>
      </div>
      <motion.div
        className="container"
        id="hero-course"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="left-course">
          <h2>Digital forensics Course</h2>
          <div className="fot">
            <div id="pfile"></div>
            <p>Instructor Name</p>
          </div>
          <Link to="/payment" className="unformat-link">
            <button className="enroll">Enroll</button>
          </Link>
        </div>
        <div className="right-course">
          <div className="course-box">
            <div className="cb-1">
              <p className="course-box-head">Digital forensics Course</p>
              <p className="course-box-desc">
              Dive into the fundamental concepts with our Digital forensics Course
              </p>
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
      <motion.div
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="course-nav" id="course-nav">
          <ul className="course-nav-ul">
            <li className="course-nav-li">
              <a href="#course-nav" className="unformat-link">
                About
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#what-c" className="unformat-link">
                What you will learn
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#content-c" className="unformat-link">
                Content
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#ass-c" className="unformat-link">
                Assessment
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#inst-c" className="unformat-link">
                Instructor
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#rev-c" className="unformat-link">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div id="about-c">
          <h1>Overview</h1>
          <p>
          Delve into the world of Digital Forensics with our comprehensive course. This <br />
          program equips learners with the skills needed to investigate and analyze <br />
          digital evidence in various contexts.
 
          </p>
        </div>
        <div id="what-c">
          <h1>What You Will Learn</h1>
          <ul id="what-c-ul">
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
              Acquire skills in digital evidence collection and analysis.
              </p>
            </li>
            {/* <p className="sub-c">
              Explore the core concepts, history, and ethical considerations
              surrounding Artificial Intelligence.
            </p> */}
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
              Understand forensic tools and techniques.
              </p>
            </li>
            {/* <p className="sub-c">
              Dive into the fundamentals of machine learning, covering
              supervised and unsupervised learning, algorithms, and model
              evaluation.
            </p> */}
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
              Apply digital forensics in legal and investigative scenarios.

              </p>
            </li>
            {/* <p className="sub-c">
              Uncover the mysteries of neural networks, deep learning
              architectures, and their applications in real-world scenarios.
            </p> */}
            {/* <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Natural Language Processing (NLP):</p>
            </li>
            <p className="sub-c">
              Learn how AI processes and understands human language, and explore
              applications in text analysis, sentiment analysis, and language
              generation.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Computer Vision:</p>
            </li>
            <p className="sub-c">
              Delve into the fascinating world of computer vision, understanding
              how AI interprets and analyzes visual information.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Hands-On Projects:</p>
            </li>
            <p className="sub-c">
              Apply your knowledge through hands-on projects that simulate
              real-world AI applications, enhancing your problem-solving skills.
          </p> */}
          </ul>
          <h1>Prerequisites</h1>
          <p>A PC/Laptop with an Internet Connection.</p>
        </div>
        <div id="content-c">
          <h1>Course Content:</h1>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 1:  Introduction to Digital Forensics

              <ul id="child-ul-c">
                <li id="content-child-li">Digital Forensics Overview

</li>
                <li id="content-child-li">Legal and Ethical Considerations</li>

                <li id="content-child-li">
                Digital Forensics Lifecycle
                </li>
                
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 2: Digital Evidence Collection and Preservation

              <ul id="child-ul-c">
                <li id="content-child-li">
                Collection and Handling of Digital Evidence

                </li>
                <li id="content-child-li">Chain of Custody</li>
                <li id="content-child-li">Preservation Techniques

</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 3: Forensic Tools and Techniques

              <ul id="child-ul-c">
                <li id="content-child-li">
                Popular Forensic Tools

                </li>
                <li id="content-child-li">File System Analysis
</li>
                <li id="content-child-li">Memory Forensics</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 4: Mobile Device Forensics
              <ul id="child-ul-c">
                <li id="content-child-li">Challenges in Mobile Forensics
</li>
                <li id="content-child-li">Extraction and Analysis of Mobile Data


</li>
                <li id="content-child-li">Case Studies in Mobile Forensics


</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 5:  Network Forensics
              <ul id="child-ul-c">
                <li id="content-child-li">Investigating Network-Based Attacks
</li>
                <li id="content-child-li">
                Packet Analysis

                </li>
                <li id="content-child-li">Network Forensics Tools


</li>

          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 6:  Legal Aspects of Digital Forensics
              <ul id="child-ul-c">
                <li id="content-child-li">Digital Forensics in Legal Proceedings
</li>
                <li id="content-child-li">Expert Witness Testimony</li>
                <li id="content-child-li">Ethical Considerations in Digital Forensics</li>
              </ul>
            </li>
          </ul>      
                
              </ul>
            </li>
          </ul>
          
        </div>
        <div id="ass-c">
          <h1>Assessment:</h1>
          <p>Digital Forensics Case Studies: Analyze and report on real-world digital forensics cases.</p>
          <p>Practical Forensic Analysis: Hands-on projects involving the analysis of digital evidence.</p>
          <p>Final Digital Forensics Project: Develop and present a comprehensive digital forensics <br />
             investigation.
</p>
        </div>
        <div id="inst-c">
          <h1>Instructor</h1>
          <div className="inst">
            <div className="pfile"></div>
            <p className="inst-abt">
              Juraj Šimunec is Microsoft 365 Engineer experienced with setup and
              administration of complete M365 platform. His main area of focus
              is to provide best possible experience for users, but at the same
              time following best security practices in tenant configuration and
              integration with various workloads.
            </p>
          </div>
        </div>
        <div id="rev-c">
          <h1 id="rev-head">Reviews (40 Reviews)</h1>
          <div className="ratings">
            <p>Course Ratings</p>
            <img src={rev} alt="Ratings" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="container"
        id="related-sec"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h1>Other Courses</h1>
        <div id="related">
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default TRC4;
