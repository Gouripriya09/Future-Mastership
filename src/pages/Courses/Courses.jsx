import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import CourseCard from "../../components/Course/CourseCard";
import { Link } from "react-router-dom";
import "./Courses.css";
import { Variant3 } from "../../utils/helpers";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div className="light courses">
      <Navbar />
      <div className="nav2">
        <p>Courses / Free Courses</p>
      </div>
      <h1 className="col-class f-ss courses-heading">Free Courses</h1>
      <motion.div className="card-container">
        {/* {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <motion.div
            key={index}
            variants={Variant3}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <CourseCard
              title="Web Development | Complete FullStack Course | HTML CSS JS"
              name="Joshi Patel"
              rating="4.7"
              num="432"
              price="599"
            />
          </motion.div>
        ))} */}
        <Link to="/FC1" className="unformat-link">
          <CourseCard
            title="Basics of Computer"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
        <Link to="/FC2" className="unformat-link">
          <CourseCard
            title="Networking Basics"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Courses;
