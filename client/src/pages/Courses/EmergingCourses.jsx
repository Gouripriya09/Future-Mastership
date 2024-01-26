import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import CourseCard from "../../components/Course/CourseCard";
import "./Courses.css";
import { Variant3 } from "../../utils/helpers";

const EmergingCourses = () => {
  return (
    <motion.div className="light courses">
      <Navbar />
      <h1 className="col-class f-ss courses-heading">Trending Courses</h1>
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
            <CourseCard title="Web Development | Complete FullStack Course | HTML CSS JS"
              name="Joshi Patel"
              rating="4.7"
              num="432"
              price="599"/>
          </motion.div>
        ))} */}
        <Link to="/TRC1" className="unformat-link">
          <CourseCard
            title="Artificial Intelligence (AI) Course"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
        <Link to="/TRC2" className="unformat-link">
          <CourseCard
            title="Machine Learning (ML) Course"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
        <Link to="/TRC3" className="unformat-link">
          <CourseCard
            title="Cybersecurity Course"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
        <Link to="/TRC4" className="unformat-link">
          <CourseCard
            title="Digital Forensics Course"
            name="unkown"
            rating="0"
            num="0"
            price="599"
          />
        </Link>
        <Link to="/TRC4" className="unformat-link">
          <CourseCard
            title="Internet of Things (IoT) Course"
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

export default EmergingCourses;
