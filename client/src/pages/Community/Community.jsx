import React from "react";
import "./Community.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import underline from "../../assets/underline.png";
import { Variant2 } from "../../utils/helpers";
import community from "../../assets/community-ls.png";

const Community = () => {
  return (
    <div className="Community light">
      <Navbar />
      <motion.div className="container">
        <div className="ls-c">
          <img src={community} />
        </div>
        <div className="rs-c">
          <h1>
            The choice<br></br> community for
            <br /> <span className="col-class">digital workers</span>
            <img src={underline} />
            <br /> and Mastervance
          </h1>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Community;
