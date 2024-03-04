import React, { useEffect } from "react";
import "./Community.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import underline from "../../assets/underline.png";
import { fadeAnimationVariants } from "../../utils/helpers";
import community from "../../assets/community-ls.png";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Community light">
      <Navbar />
      <motion.div
        className="container"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="ls-c">
          <img src={community} />
        </div>
        <div className="rs-c">
          <h1 className="f-ss">
            <span className="col-class">Mastervance </span>Community
          </h1>
          <h4>Where Learning Connects and Thrives!</h4>
          <p>
            At Mastervance, we recognize the power of community in fostering
            meaningful connections, collaborative learning, and shared success
            stories. Our community is a vibrant hub where learners, mentors, and
            industry experts converge to create a dynamic ecosystem of knowledge
            and growth.
          </p>
          <button className="com-btn">
            <a
              href="https://chat.whatsapp.com/JuK9wnxmdQE8go7GluXPER"
              target="_blank"
              className="unformat-link"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div
        className="container com"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h1 className="col-class f-ss">What You'll Find in Our Community:</h1>
        <ul className="com-ul">
          <li>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "var(--primary)" }}
            ></i>
            Forums and Discussions
          </li>
          <li>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "var(--primary)" }}
            ></i>
            Virtual Events and Webinars
          </li>
          <li>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "var(--primary)" }}
            ></i>
            Study Materials and Resources
          </li>
          <li>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "var(--primary)" }}
            ></i>
            Internship and Job opportunities
          </li>
          <li>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "var(--primary)" }}
            ></i>
            Dynamic students
          </li>
        </ul>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Community;
