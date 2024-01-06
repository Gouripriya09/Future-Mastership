import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const auth = getAuth();

  const handleSocialSignIn = async (provider) => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const isNewUser = userCredential.additionalUserInfo?.isNewUser || false;

      if (isNewUser) {
        await updateProfile(userCredential.user, {
          displayName: userCredential.additionalUserInfo?.profile?.name || "",
        });
      }

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          navigate("/");
        } else {
          // No user is signed in
          console.error("Error signing in with social provider: No user signed in");
        }
      });
    } catch (error) {
      console.error("Error signing in with social provider:", error.message);
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    handleSocialSignIn(provider);
  };

  const handleTwitterSignIn = () => {
    const provider = new TwitterAuthProvider();
    handleSocialSignIn(provider);
  };

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    handleSocialSignIn(provider);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

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
              <i className="fa-brands fa-google logo" onClick={handleGoogleSignIn}></i>
              <i className="fa-brands fa-x-twitter logo" onClick={handleTwitterSignIn}></i>
              <i className="fa-brands fa-github logo" onClick={handleGithubSignIn}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
