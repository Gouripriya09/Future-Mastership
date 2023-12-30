import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import "../../index.css";

const Login = () => {
  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);
  return (
    <>
      <div className="Login light">
        <div className="login-form">
          <h1 className="f-ss col-class">Sign In</h1>
          <form action="">
            <div className="form-group">
              <label htmlFor="user">UserName or Email</label>
              <br />
              <input type="text" name="user" placeholder="Username / Email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <br />
              <input
                type="password"
                name="pwd"
                placeholder="Enter your password"
              />
            </div>
            <div className="foot">
              <div className="rem">
                <p className="remme">Remember me</p>
                <input type="checkbox" name="remember" />
              </div>
              <p>Forgot your password?</p>
            </div>
            <p>
              <Link to="/register" className="unformat-link">
                Don't have an account yet?{" "}
                <span className="col-class">Sign Up</span>
              </Link>
            </p>
            <button className="login-btn">SUBMIT</button>
          </form>
          <div className="google-box">Sign in with Google</div>
          <p className="support">Contact Support</p>
        </div>
      </div>
    </>
  );
};

export default Login;
