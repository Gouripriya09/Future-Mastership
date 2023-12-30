import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dark_logo from "../../assets/logo.png";
import light_logo from "../../assets/logo-light.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <div className={`Navbar `}>
        <span className="set e1">
          {mode === "Dark" ? (
            <img src={dark_logo} alt="MASTERVANCE" />
          ) : (
            <img src={light_logo} alt="MASTERVANCE" />
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
                    Industrial Courses
                  </li>
                  <li onClick={() => handleCourseSelect("free_courses")}>
                    Free Courses
                  </li>
                  <li onClick={() => handleCourseSelect("emerging_courses")}>
                    Emerging Courses
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
          </ul>
        </span>
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
                  Industrial Courses
                </li>
                <li onClick={() => handleCourseSelect("free_courses")}>
                  Free Courses
                </li>
                <li onClick={() => handleCourseSelect("emerging_courses")}>
                  Emerging Courses
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
          <Link to="/login" className="unformat-link">
            <button className="login-btn">LOGIN</button>
          </Link>
          <br />
          <br />
        </ul>

        <span className="set e3">
          <i
            className="fa-solid fa-circle-half-stroke mode-btn"
            onClick={toggleDarkMode}
          ></i>
          <Link to="/login" className="unformat-link">
            <button className="login-btn">LOGIN</button>
          </Link>
          <button className="apply">Apply Now</button>
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
