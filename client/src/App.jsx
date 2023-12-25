import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Mentor from "./pages/Mentors/Mentor";
import Community from "./pages/Community/Community";
import Auth from "./pages/Auth/Auth";
import Courses from "./pages/Courses/Courses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
