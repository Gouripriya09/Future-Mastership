import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aboutHero from "../../assets/aboutHero.png";
import { motion } from "framer-motion";
import { fadeAnimationVariants } from "../../utils/helpers";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="light about">
      <Navbar></Navbar>
      <motion.div
        className="container"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        <div className="ls ls-a">
          <h2 className="f-ss">
            About <span className="col-class">us</span>
          </h2>
          <p>
            Mastervance is a platform where students can upskill themselves by
            learning trending courses in areas like AI, ML, Cyber Security,
            Digital Forensics, Civil engineering, Electrical engineering,
            Computer science, and so on. We also facilitates the creation of a
            student community with like-minded individuals.
          </p>
          <h2 className="f-ss">
            Our <span className="col-class">Mission</span>
          </h2>
          <p>
            Our mission is to empower individuals with the knowledge and skills
            they need to excel in the dynamic landscapes of today and tomorrow.
            We strive to break free from traditional education constraints,
            offering industry-relevant courses that go beyond textbooks and
            classrooms. With a focus on practicality, innovation, and community,
            we're on a mission to unlock the full potential of every learner,
            making education a transformative experience.
          </p>
        </div>
        <div className="rs rs-a">
          <img src={aboutHero} alt="" className="abtHero" />
        </div>
      </motion.div>
      <motion.div
        className="container contact"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h1 className="col-class f-ss">Contact Us</h1>
        <div className="contact-form">
          <form action="">
            <label htmlFor="name">Your Name*</label>
            <br></br>
            <input type="text" placeholder="Enter your name" name="name" />
            <br />
            <label htmlFor="name">Email Address*</label>
            <br></br>
            <input type="text" placeholder="Enter your email" name="email" />
            <br />
            <label htmlFor="name">Mobile Number*</label>
            <br></br>
            <input type="text" placeholder="Enter Mobile No" name="mobile" />
            <br />
            <label htmlFor="name">College*</label>
            <br></br>
            <input type="text" placeholder="Enter Your College" name="clg" />
            <br />
            <label htmlFor="name">Interested Courses*</label>
            <br></br>
            <input
              type="text"
              placeholder="Your interested in which course?"
              name="clg"
            />
            <br />
            <br />
            <button type="submit" className="contact-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default About;
