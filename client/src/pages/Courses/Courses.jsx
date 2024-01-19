import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import CourseCard from "../../components/Course/CourseCard";
import "./Courses.css";
import { Variant3 } from "../../utils/helpers";

const Courses = () => {
  return (
    <motion.div className="light courses">
      <Navbar />
      <h1 className="col-class f-ss courses-heading">Free Courses</h1>
      <motion.div className="card-container">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
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
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Courses;
