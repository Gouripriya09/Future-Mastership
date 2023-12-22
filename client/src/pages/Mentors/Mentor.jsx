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
            Grow Your Startup
            <br /> Faster With 1:1
            <br /> Mentorship
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
            Have 1-on-1 conversations about growth, marketing,
            <br /> and everything in between with the world's top 3% of
            <br /> startup and marketing mentors.
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
            WITH 400+ GROWTH MENTORS JUST A CLICK AWAY, YOU CAN:
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
            <li>Gel personalized advice on your growth strategy</li>
            <li>Gel personalized advice on your growth strategy</li>
            <li>Gel personalized advice on your growth strategy</li>
            <li>Gel personalized advice on your growth strategy</li>
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
