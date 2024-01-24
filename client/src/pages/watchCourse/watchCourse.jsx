import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const WatchCourse = () => {
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
        <div className="main-ls">Hello</div>
        <div className="main-rs">World</div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchCourse;
