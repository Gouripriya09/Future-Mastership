import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeAnimationVariants } from "../../../utils/helpers";
import rev from "../../../assets/rev.png";
import CourseCard from "../../../components/Course/CourseCard";
import "./CourseDetail.css";

const CourseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="CourseDetail light">
      <Navbar />
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
          <h2>Course Name</h2>
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
            Embark on a transformative journey into the world of Artificial
            Intelligence (AI) with Master Vance's comprehensive AI Mastery
            course. Designed for both beginners and intermediate learners, this
            course equips you with the foundational knowledge and practical
            skills needed to navigate the exciting landscape of AI.
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
              <p>Understanding AI Fundamentals:</p>
            </li>
            <p className="sub-c">
              Explore the core concepts, history, and ethical considerations
              surrounding Artificial Intelligence.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Machine Learning Essentials:</p>
            </li>
            <p className="sub-c">
              Dive into the fundamentals of machine learning, covering
              supervised and unsupervised learning, algorithms, and model
              evaluation.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Neural Networks and Deep Learning:</p>
            </li>
            <p className="sub-c">
              Uncover the mysteries of neural networks, deep learning
              architectures, and their applications in real-world scenarios.
            </p>
            <li id="what-c-li">
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
            </p>
          </ul>
          <h1>Prerequisites</h1>
          <p>A PC/Laptop with an Internet Connection.</p>
        </div>
        <div id="content-c">
          <h1>Course Content:</h1>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 1: Introduction to Artificial Intelligence
              <ul id="child-ul-c">
                <li id="content-child-li">Overview of AI</li>
                <li id="content-child-li">Historical Perspective</li>
                <li id="content-child-li">Ethical Considerations</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 2: Machine Learning Foundations
              <ul id="child-ul-c">
                <li id="content-child-li">Basics of Machine Learning</li>
                <li id="content-child-li">Supervised Learning</li>
                <li id="content-child-li">Unsupervised Learning</li>
                <li id="content-child-li">Model Evaluation</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 3: Neural Networks and Deep Learning
              <ul id="child-ul-c">
                <li id="content-child-li">Understanding Neural Networks</li>
                <li id="content-child-li">Deep Learning Architectures</li>
                <li id="content-child-li">Practical Applications</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 4: Natural Language Processing (NLP)
              <ul id="child-ul-c">
                <li id="content-child-li">Introduction to NLP</li>
                <li id="content-child-li">Text Analysis</li>
                <li id="content-child-li">Sentiment Analysis</li>
                <li id="content-child-li">Language Generation</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 5: Computer Vision
              <ul id="child-ul-c">
                <li id="content-child-li">Basics of Computer Vision</li>
                <li id="content-child-li">Image Recognition</li>
                <li id="content-child-li">Object Detection</li>
                <li id="content-child-li">Practical Applications</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 6: Capstone Project
              <ul id="child-ul-c">
                <li id="content-child-li">Apply Your Knowledge</li>
                <li id="content-child-li">
                  Create and Execute a Real-World AI Project
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="ass-c">
          <h1>Assessment:</h1>
          <p>
            The course includes quizzes, assignments, and a final project to
            assess your understanding and practical application of AI concepts.
          </p>
          <p>
            Enroll in our AI Mastery course and unlock the potential of
            Artificial Intelligence. Whether you're a budding data scientist,
            software engineer, or technology enthusiast, this course will
            empower you to navigate the evolving field of AI with confidence.
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

export default CourseDetail;
