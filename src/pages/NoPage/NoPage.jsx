import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div className="NoPage">
      <Navbar />
      <div className="np-body">
        <h1>NOTHING TO SEE OVER HERE</h1>
        <Link className="unformat-link" to="/">
          <h3>Back Home</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;
