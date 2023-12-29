import React from "react";
import "./Community.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import underline from "../../assets/underline.png";
import { fadeAnimationVariants } from "../../utils/helpers";
import community from "../../assets/community-ls.png";

const Community = () => {
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
          <h1>
            The choice<br></br> community for
            <br />{" "}
            <div className="work-und">
              <span className="col-class">digital workers</span>
              <img src={underline} />
            </div>
            <br /> and Mastervance
          </h1>
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
        <ul>
          <li>Forums and Discussions</li>
          <li>Virtual Events and Webinars</li>
          <li>Study Materials and Resources</li>
          <li>Internship and Job opportunities</li>
          <li>Dynamic students</li>
        </ul>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Community;
