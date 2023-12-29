import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Refund from "./pages/Refund_Policy/Refund";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Mentor from "./pages/Mentors/Mentor";
import Community from "./pages/Community/Community";
import Courses from "./pages/Courses/Courses";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
