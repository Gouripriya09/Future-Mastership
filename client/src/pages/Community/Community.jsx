import React from "react";
import "./Community.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UD from "../../components/Development/UD";

const Community = () => {
  return (
    <div className="Community light">
      <Navbar />
      <UD name="Community" />
      <Footer />
    </div>
  );
};

export default Community;
