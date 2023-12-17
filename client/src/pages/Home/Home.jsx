import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div class="Home">
      <Navbar />
      <div className="container">
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
      </div>
    </div>
  );
};

export default Home;
