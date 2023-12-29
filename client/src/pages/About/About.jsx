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
      <Footer></Footer>
    </div>
  );
};

export default About;
