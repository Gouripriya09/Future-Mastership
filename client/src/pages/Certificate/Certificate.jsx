import React from "react";
import "./Certificate.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cert = () => {
    return (
        <div className="certificate">
        <Navbar />
<div className="cert">
    <h3>Verify Certificate</h3>
      <div className="cert1"> <p>To verify the legitimacy of any certificate issued <br />
        by Mastervance please enter "Certificate Serial <br /> 
        Number" given on your certificate.
       </p>
       </div>
  <div className="input">
    Certificate Serial Number
    <div className="verify">
    <input type="number" placeholder="Enter Number" />
    <button className="button">verify</button>
    </div>
    
  </div>
</div>
<Footer />
</div>
    );
};

export default Cert;