import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import Line from "../../assets/line.png";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.5,
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
      <motion.div
        className="container"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="ls2">
          <div className="img-p2"></div>
        </div>
        <div className="rs2">
          <h1>
            Why <span className="col-class">Mastervance</span>?
          </h1>
          <ul className="why-h">
            <li>Practical Learning</li>
            <li>Real-World Impact</li>
            <li>Cutting-Edge Curriculum</li>
            <li>Industry-Level Experts</li>
            <li>Dynamic Community Connection</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="container what-about"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="main-others">
          <div className="heading">
            <span className="line"></span>
            <p>Mastervance</p>
            <span className="line"></span>
          </div>
          <h3 className="what-others">What Others Think About Us !</h3>
          <p className="what-para">
            Skills can often be divided into domain-general and domain-specific
            skills. For example, in the domain of work, some general skills
            would include time management, teamwork and leadership,
            self-motivation and others, whereas domain-specific skills would be
            used only for a certain job.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
