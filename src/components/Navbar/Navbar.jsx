import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import dark_logo from "../../assets/logo.png";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import light_logo from "../../assets/logo-light.png";
import "./Navbar.css";
// import { color } from "framer-motion";

const Navbar = () => {
  const auth = useAuth();
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);

  const [mode, setMode] = useState(initialMode);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = mode === "Dark" ? "Light" : "Dark";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setDropdownOpen(false);
    navigate(`/${course}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.documentElement.classList.remove("Dark", "Light");
    document.documentElement.classList.add(mode);
  }, [mode]);

  function toHome() {
    navigate("/");
  }

  return (
    <>
      <div className={`Navbar `}>
        <span className="set e1">
          {mode === "Dark" ? (
            <img src={dark_logo} alt="MASTERVANCE" onClick={toHome} />
          ) : (
            <img src={light_logo} alt="MASTERVANCE" onClick={toHome} />
          )}
        </span>
        <span className="set e2">
          <ul>
            <li>
              <Link to="/" className="unformat-link">
                <p>Home</p>
              </Link>
            </li>
            <li className="dropdown" onClick={toggleDropdown}>
              <p>
                Courses <i className="fa-solid fa-caret-down"></i>
              </p>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleCourseSelect("industrial_courses")}>
                    Technical Courses
                  </li>
                  <li onClick={() => handleCourseSelect("free_courses")}>
                    Free Courses
                  </li>
                  <li onClick={() => handleCourseSelect("emerging_courses")}>
                    Trending Courses
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="unformat-link" to="/mentor">
                <p>Mentors</p>
              </Link>
            </li>
            <li>
              <Link className="unformat-link" to="/community">
                <p>Community</p>
              </Link>
            </li>
            <li>
              <Link className="unformat-link" to="/about">
                <p>About Us</p>{" "}
              </Link>
            </li>
          </ul>
        </span>
        {auth.currentUser ? (
          <span className="user-info">
            <Link to="/dashboard" className="unformat-link">
              <img
                src={auth.currentUser.photoURL}
                alt="Profile"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                }}
              />
            </Link>
          </span>
        ) : null}
        <ul className={`${isSidebarOpen ? "sidebar-open" : "sidebar-close"}`}>
          <li>
            <Link to="/" className="unformat-link">
              <p>Home</p>
            </Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <p>
              Courses <i className="fa-solid fa-caret-down"></i>
            </p>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleCourseSelect("industrial_courses")}>
                  Technical Courses
                </li>
                <li onClick={() => handleCourseSelect("free_courses")}>
                  Free Courses
                </li>
                <li onClick={() => handleCourseSelect("emerging_courses")}>
                  Trending Courses
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="unformat-link" to="/mentor">
              <p>Mentor</p>
            </Link>
          </li>
          <li>
            <Link className="unformat-link" to="/community">
              <p>Community</p>
            </Link>
          </li>
          <li>
            <Link className="unformat-link" to="/about">
              <p>About Us</p>{" "}
            </Link>
          </li>
          <br />
          <i
            className="fa-solid fa-circle-half-stroke mode-btn"
            onClick={toggleDarkMode}
          ></i>
          {auth.currentUser ? (
            <>
              <button onClick={() => auth.logout()} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <br />
              <br />
              <Link to="/login" className="unformat-link">
                <button className="login-btn">LOGIN</button>
              </Link>
              <br />
              <br />
            </>
          )}
          {auth.currentUser ? (
            <Link to="/free_courses" className="unformat-link">
              <button id="apply">Apply Now</button>
            </Link>
          ) : (
            <Link to="/register" className="unformat-link">
              <button id="apply">Apply Now</button>
            </Link>
          )}
          <br />
          <br />
        </ul>

        <span className="set e3">
          <i
            className="fa-solid fa-circle-half-stroke mode-btn"
            onClick={toggleDarkMode}
          ></i>
          {auth.currentUser ? (
            <>
              <button
                onClick={() => auth.logout().then(navigate("/login"))}
                className="logout-btn"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="unformat-link">
                <button className="login-btn">LOGIN</button>
              </Link>
            </>
          )}
          {auth.currentUser ? (
            <Link to="/free_courses" className="unformat-link">
              <button id="apply">Apply Now</button>
            </Link>
          ) : (
            <Link to="/register" className="unformat-link">
              <button id="apply">Apply Now</button>
            </Link>
          )}
        </span>
      </div>

      <i
        className={`fa-solid ${isSidebarOpen ? "fa-xmark" : "fa-bars"} hbm`}
        onClick={toggleSidebar}
      ></i>
    </>
  );
};

export default Navbar;
