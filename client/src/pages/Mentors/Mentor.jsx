import React from "react";
// import UD from "../../components/Development/UD";
import Navbar from "../../components/Navbar/Navbar";
import "./Mentor.css";
import Footer from "../../components/Footer/Footer";
import { Variant2, fadeAnimationVariants } from "../../utils/helpers";
import { motion } from "framer-motion";

const Mentor = () => {
  return (
    <div className="mentor light">
      <Navbar></Navbar>
      <div className="mentor-main">
        <div className="ls-m">
          <motion.h1
            variants={Variant2}
            initial="initial"
            whileInView="animate"
            custom={0}
            viewport={{
              once: true,
            }}
          >
            <span className="f-ss">MENTORS</span>
          </motion.h1>
          <motion.p
            variants={Variant2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
          >
            At Mastervance, we believe in the transformative power of
            mentorship. If you're ready to contribute to the growth of future
            professionals and be part of a dynamic learning community, apply to
            become a mentor today.
          </motion.p>
          <br></br>
          <motion.button
            variants={Variant2}
            initial="initial"
            viewport={{
              once: true,
            }}
            whileInView="animate"
            custom={2}
            className="apply-mentor"
          >
            Apply as Mentor
          </motion.button>
          <br></br>
          <br />
          <br />
          <motion.p
            custom={4}
            variants={Variant2}
            viewport={{
              once: true,
            }}
            initial="initial"
            whileInView="animate"
          >
            Why Become a Mentor with Mastervance?
          </motion.p>
          <motion.ul
            custom={5}
            variants={Variant2}
            viewport={{
              once: true,
            }}
            initial="initial"
            whileInView="animate"
          >
            <li>Empower the Next Generation:</li>
            <li>Connect with Like-Minded Professionals</li>
            <li>Flexible Engagement:</li>
            <li>Enhance Your Leadership Skills:</li>
          </motion.ul>
        </div>
        <motion.div
          className="rs-m"
          variants={fadeAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="col-m f-ss">
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m mid">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
          </div>
          <div className="col-m f-ss">
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m mid">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
          </div>
          <div className="col-m f-ss">
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m mid">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
            <div className="card-m">
              <span className="profile-pic" />
              <span className="name-m">B Poorna Hari</span>
              <span className="desig-m">SEO, Content Writer</span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mentor;
