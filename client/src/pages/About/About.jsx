import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { fadeAnimationVariants } from "../../utils/helpers";
import "./About.css";

const About = () => {
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
            About Our <span className="col-class">Company</span>
          </h2>
          <p>
            If you notice on their blog, a considerable number of content pieces
            are directed at providing valuable insights and solutions for daily
            audience pain points. By creating valuable content beginning from
            the basics of marketing to more complex business decisions, HubSpot
            engages a massive audience who will love its products.
          </p>
          <h2 className="f-ss">
            About Our <span className="col-class">Mission</span>
          </h2>
          <p>
            If you notice on their blog, a considerable number of content pieces
            are directed at providing valuable insights and solutions for daily
            audience pain points. By creating valuable content beginning from
            the basics of marketing to more complex business decisions, HubSpot
            engages a massive audience who will love its products.
          </p>
        </div>
        <div className="rs rs-a">
          <div className="img-p"></div>
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
