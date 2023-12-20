import React from "react";
import UD from "../../components/Development/UD";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Mentor = () => {
  return (
    <div className="mentor light">
      <Navbar></Navbar>
      <UD name="Mentors" />
      <Footer></Footer>
    </div>
  );
};

export default Mentor;
