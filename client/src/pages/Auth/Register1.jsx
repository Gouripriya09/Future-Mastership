import React, { useState } from "react";
import "./auth.css";
import google_logo from "../../assets/google.png";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  getAuth,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError("Error logging in: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    // Google sign in logic here
  };

  const handleTwitterSignIn = async () => {
    // Twitter sign in logic here
  };

  const handleGithubSignIn = async () => {
    // Github sign in logic here
  };

  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);

  return (
    <>
      <div className="Login light">
        <div className="login-form">
          <h1 className="f-ss col-class">Sign In</h1>
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleLogin}>
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
              <label htmlFor="pwd">Password</label>
              <br />
              <input
                type="password"
                name="pwd"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            <button type="submit" className="login-btn">
              SUBMIT
            </button>
          </form>
          <div className="google-box">
            <i
              className="fa-brands fa-google logo"
              onClick={handleGoogleSignIn}
            ></i>
            <i
              className="fa-brands fa-twitter logo"
              onClick={handleTwitterSignIn}
            ></i>
            <i
              className="fa-brands fa-github logo"
              onClick={handleGithubSignIn}
            ></i>
          </div>
          <p className="support">Contact Support</p>
        </div>
      </div>
    </>
  );
};

export default Login;