import React from "react";
import "./auth.css";
import google_logo from "../../assets/google.png";
import { Link } from "react-router-dom";

const Register = () => {
  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);
  return (
    <>
      <div className="container">
        <div className="ls-auth reg-ls"></div>
        <div className="rs">
          <div className="Login light register">
            <div className="login-form">
              <h1 className="f-ss col-class">Sign In</h1>
              <form action="">
                <div className="form-group">
                  <label htmlFor="name">Your FullName</label>
                  <br />
                  <input
                    type="text"
                    name="user"
                    placeholder="Enter your FullName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user">Email</label>
                  <br />
                  <input type="text" name="user" placeholder="Email address" />
                </div>
                <div className="form-group">
                  <label htmlFor="MNo">Your Mobile No</label>
                  <br />
                  <input
                    type="text"
                    name="MNo"
                    placeholder="Enter your Mobile No"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Create Password</label>
                  <br />
                  <input
                    type="password"
                    name="pwd"
                    placeholder="Enter password"
                  />
                </div>
                <div className="foot">
                  <p className="tac">
                    I agree to the{" "}
                    <Link to="/terms_and_conditions" className="unformat-link">
                      <span className="col-class">terms and conditions</span>
                    </Link>
                  </p>
                  <input type="checkbox" name="remember" />
                </div>
                <p>
                  <Link to="/login" className="unformat-link">
                    Already have an account?{" "}
                    <span className="col-class">Sign In</span>
                  </Link>
                </p>
                <button className="login-btn">SUBMIT</button>
              </form>
              <div className="google-box">
                <img src={google_logo} alt="" className="google_logo" />
                Sign in with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
