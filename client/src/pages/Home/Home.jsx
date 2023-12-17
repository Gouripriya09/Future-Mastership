import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion, useInView } from "framer-motion";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <div class="Home">
      <Navbar />
      <motion.div
        className="container"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="ls">
          <h1>
            Unlocking The Future<br></br> Through{" "}
            <span className="col-class">Mastervance</span>.
          </h1>
          <p className="hero-sub">
            Welcome to Mastervance, where we empower students to become masters
            of tomorrow's world. Our platform is a gateway to the latest
            advancements in technology.
          </p>

          <button className="ls-btn">Apply Now</button>
        </div>
        <div className="rs">
          <div className="img-p"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
