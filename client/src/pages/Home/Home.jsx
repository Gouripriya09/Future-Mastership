import React from "react";
import "./Home.css";
import { fadeAnimationVariants } from "../../utils/helpers.js";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import FoldCard from "../../components/foldCard/foldCard.jsx";

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
      <motion.div
        className="container"
        id="cards"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Card
          name="Poorna Hari"
          desg="Seo, Content Developer"
          body=" teamwork and leadership, self-motivation and others, whereas domain-specific skills would be used only for a certain job. teamwork and leadership, self-motivation and others, whereas "
        />
        <Card
          name="B. Karthik"
          desg="Seo, Content Developer"
          body=" teamwork and leadership, self-motivation and others, whereas domain-specific skills would be used only for a certain job. teamwork and leadership, self-motivation and others, whereas "
        />
        <Card
          name="B. K. Bhargav"
          desg="Upcoming ,Film Director"
          body=" teamwork and leadership, self-motivation and others, whereas domain-specific skills would be used only for a certain job. teamwork and leadership, self-motivation and others, whereas "
        />
      </motion.div>
      <motion.button
        className="view-all"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        View all reviews
      </motion.button>
      <motion.div
        className="container weekly-chal"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="ls3">
          <h1>
            Weekly <span className="col-class">Challenges</span> !
          </h1>
          <ul className="why-h">
            <li>
              Chrome notes topics of interest based on your recent browsing
              history.
            </li>
            <li>
              Chrome notes topics of interest based on your recent browsing
              history.
            </li>
            <li>
              Chrome notes topics of interest based on your recent browsing
              history.
            </li>
            <li>
              Chrome notes topics of interest based on your recent browsing
              history.
            </li>
            <li>
              Chrome notes topics of interest based on your recent browsing
              history.
            </li>
          </ul>
        </div>
        <div className="rs3">
          <div className="img-p3"></div>
        </div>
      </motion.div>
      <motion.div className="container faq-h">
        <FoldCard
          qstn="What is Master Vance?"
          ans="Master Vance is a dynamic online learning platform that offers courses in trending areas such as AI, ML, Cyber Security, and Digital Forensics. Our platform also provides a vibrant community for like-minded learners."
        />
        <FoldCard
          qstn="How do I get started on Master Vance?"
          ans="To get started, simply visit our website at www.mastervance.com, create an account, and explore our courses. You can enroll in courses, engage with the community, and enhance your tech skills."
        />
        <FoldCard
          qstn="What courses does Master Vance offer?"
          ans="Master Vance offers courses in Artificial Intelligence, Machine Learning, Cyber Security, and Digital Forensics. Our courses are designed to be relevant, up-to-date, and taught by industry experts."
        />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
