import React from "react";
import "./feedbacks.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Feedback from "../../components/feedback/feedback";

const Feedbacks = () => {
  return (
    <div className="Feedbacks light">
      <Navbar />
      <div className="feedback-container">
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
      <div className="feedback-form">
        <h2 className="f-ss col-class">Feedback Form</h2>
        <form action="">
          <label htmlFor="name">Your Full Name*</label>
          <br />
          <input type="text" name="name" placeholder="Enter your name" />
          <br></br>
          <label htmlFor="email">Email address*</label>
          <br />
          <input type="email" name="email" placeholder="Enter your email" />
          <br />
          <label htmlFor="clg">Enter your College*</label>
          <br />
          <input
            type="text"
            name="clg"
            placeholder="Enter your College/University"
          />
          <br />
          <label htmlFor="Feedback">Feedback*</label>
          <br />
          <input
            type="text"
            className="feedback-field"
            name="Feedback"
            placeholder="Enter your Feedback here"
          />
          <br />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Feedbacks;
