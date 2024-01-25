import React, { useState } from "react";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import resource from "../../assets/resource1.pdf";
import Footer from "../../components/Footer/Footer";

const WatchCourse = () => {
  const [s1, sets1] = useState(true);
  const [s2, sets2] = useState(false);
  const [s3, sets3] = useState(false);

  return (
    <div className="watchCourse light">
      <Navbar />
      <div className="watchNav">
        <div className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <p className="watch-head">
          Complete Website Responsive Design: from Figma to Webflow to Website
          Design
          <div className="inner-watch-head">
            <p>
              <i class="fa-solid fa-folder-open"></i> 6 Sections
            </p>
            <p>
              <i class="fa-regular fa-circle-play"></i> 202 Lectures
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> 19h 37m
            </p>
          </div>
        </p>
      </div>
      <div className="main">
        <div className="main-ls">
          <h2 className="cc">Course Content</h2>
          <div className="dropC">
            <div className="dropC-head" onClick={() => sets1(!s1)}>
              <i
                className={`fa-solid ${
                  s1 ? "fa-chevron-down" : "fa-chevron-right"
                }`}
              ></i>
              Getting Started
              <i class="fa-regular fa-circle-play"></i> 12 Lectures{" "}
              <i class="fa-regular fa-clock"></i> 5m 43s
            </div>
            <div
              className={`dropC-body ${s1 ? "dropC-opened" : "dropC-closed"}`}
            >
              <ul className="dropC-ul">
                <li className="dropC-li">
                  <input type="checkbox" />
                  1. What is Artificial Intelligence
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    14:24
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  2. Why learn AI?
                  <div className="time">
                    <i class="fa-solid fa-pause"></i>
                    {"  "}
                    7:31
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  3. Future of AI
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    5:38
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropC">
            <div className="dropC-head" onClick={() => sets2(!s2)}>
              <i
                className={`fa-solid ${
                  s2 ? "fa-chevron-down" : "fa-chevron-right"
                }`}
              ></i>
              Introduction to XYZ
              <i class="fa-regular fa-circle-play"></i> 12 Lectures{" "}
              <i class="fa-regular fa-clock"></i> 5m 43s
            </div>
            <div
              className={`dropC-body ${s2 ? "dropC-opened" : "dropC-closed"}`}
            >
              <ul className="dropC-ul">
                <li className="dropC-li">
                  <input type="checkbox" />
                  1. learn the basics of the zbc
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    14:24
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  2. lorem ipsum
                  <div className="time">
                    <i class="fa-solid fa-pause"></i>
                    {"  "}
                    7:31
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  3. more text here
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    5:38
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropC">
            <div className="dropC-head" onClick={() => sets3(!s3)}>
              <i
                className={`fa-solid ${
                  s3 ? "fa-chevron-down" : "fa-chevron-right"
                }`}
              ></i>
              Some heading
              <i class="fa-regular fa-circle-play"></i> 12 Lectures{" "}
              <i class="fa-regular fa-clock"></i> 5m 43s
            </div>
            <div
              className={`dropC-body ${s3 ? "dropC-opened" : "dropC-closed"}`}
            >
              <ul className="dropC-ul">
                <li className="dropC-li">
                  <input type="checkbox" />
                  1. learn the basics of the zbc
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    14:24
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  2. lorem ipsum
                  <div className="time">
                    <i class="fa-solid fa-pause"></i>
                    {"  "}
                    7:31
                  </div>
                </li>
                <li className="dropC-li">
                  <input type="checkbox" />
                  3. more text here
                  <div className="time">
                    <i className="fa-solid fa-play" />
                    {"  "}
                    5:38
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-rs">
          <div className="stream">
            <div className="videoStream"></div>
            <h1>1. Getting Started</h1>
          </div>
          <div className="des">
            <h3>Description</h3>
            <p>
              We cover everything you need to build your first website. From
              creating your first page through to uploading your website to the
              internet. We'll use the world's most popular (and free) web design
              tool called Visual Studio Code. There are exercise files you can
              download and then work along with me. At the end of each video I
              have a downloadable version of where we are in the process so that
              you can compare your project with mine. This will enable you to
              see easily where you might have a problem. We will delve into all
              the good stuff such as how to create your very own mobile burger
              menu from scratch learning some basic JavaScript and jQuery.
              <br />
              <br />
              If that all sounds a little too fancy - don't worry, this course
              is aimed at people new to web design and who have never coded
              before. We'll start right at the beginning and work our way
              through step by step.{" "}
            </p>
          </div>
          <div className="res">
            <h3>Resources</h3>
            <div className="res-in">
              <i className="fa-regular fa-file"></i>
              <a href={resource} download type="application/pdf">
                <button>Setting up DOC 1</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchCourse;
