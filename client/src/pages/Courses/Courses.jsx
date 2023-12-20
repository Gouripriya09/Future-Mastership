import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UD from "../../components/Development/UD";
import "./Courses.css"

const Courses = () => {
  return (
    <div className="light courses">
      <Navbar />
      <UD name="Courses" />
      <Footer />
    </div>
  );
};

export default Courses;
