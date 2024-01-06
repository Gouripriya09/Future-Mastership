import React, { useState } from "react";
import "./auth.css";
import google_logo from "../../assets/google.png";
import { Link } from "react-router-dom";
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

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      const provider = new TwitterAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Twitter:", error.message);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with GitHub:", error.message);
    }
  };

  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);

  return (
    <>
      <div className="Login light">
        <div className="login-form">
          <h1 className="f-ss col-class">Sign In</h1>
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
            <i className="fa-brands fa-google logo" onClick={handleGoogleSignIn}></i>
            <i className="fa-brands fa-twitter logo" onClick={handleTwitterSignIn}></i>
            <i className="fa-brands fa-github logo" onClick={handleGithubSignIn}></i>
          </div>
          <p className="support">Contact Support</p>
        </div>
      </div>
    </>
  );
};

export default Login;
