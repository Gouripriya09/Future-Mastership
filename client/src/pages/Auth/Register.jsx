import React, { useState } from "react";
import "./auth.css";
import google_logo from "../../assets/google.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Call getAuth to create the auth object
  const auth = getAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Space for Validation checks

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);

  return (
    <div className="container">
      <div className="ls-auth reg-ls"></div>
      <div className="rs">
        <div className="Login light register">
          <div className="login-form">
            <h1 className="f-ss col-class">Sign In</h1>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Your FullName</label>
                <br />
                <input
                  type="text"
                  name="user"
                  placeholder="Enter your FullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user">Email</label>
                <br />
                <input
                  type="text"
                  name="user"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Create Password</label>
                <br />
                <input
                  type="password"
                  name="pwd"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="foot">
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                  I agree to the{" "}
                  <Link to="/terms_and_conditions" className="unformat-link">
                    <span className="col-class">terms and conditions</span>
                  </Link>
                </label>
              </div>
              <p>
                <Link to="/login" className="unformat-link">
                  Already have an account?{" "}
                  <span className="col-class">Sign In</span>
                </Link>
              </p>
              <button type="submit" className="login-btn">
                SUBMIT
              </button>
            </form>
            <div className="google-box">
              <img src={google_logo} alt="" className="google_logo" />
              Sign in with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
