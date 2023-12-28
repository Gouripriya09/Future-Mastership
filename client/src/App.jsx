import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Refund from "./pages/Refund_Policy/Refund";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Mentor from "./pages/Mentors/Mentor";
import Community from "./pages/Community/Community";
import Auth from "./pages/Auth/Auth";
import Courses from "./pages/Courses/Courses";

const App = () => {
  const initialMode = localStorage.getItem("themeMode") || "Light";
  document.documentElement.classList.add(initialMode);

  const [mode, setMode] = useState(initialMode);

  const toggleDarkMode = () => {
    const newMode = mode === "Dark" ? "Light" : "Dark";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  };

  useEffect(() => {
    document.documentElement.classList.remove("Dark", "Light");
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/refundpolicy" element={<Refund />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
