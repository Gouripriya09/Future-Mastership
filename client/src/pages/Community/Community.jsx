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
      <Footer />
    </div>
  );
};

export default Community;
