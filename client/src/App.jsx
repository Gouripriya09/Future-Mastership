import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Refund from "./pages/Refund_Policy/Refund";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Feedbacks from "./pages/feedbacks/feedbacks";
import Mentor from "./pages/Mentors/Mentor";
import Terms from "./pages/tc/terms";
import Community from "./pages/Community/Community";
import Faq from "./pages/faq/faq";
import Courses from "./pages/Courses/Courses";
import Privacypolicy from "./pages/privacypolicy/privacypolicy";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import IndustrialCourses from "./pages/Courses/IndustrialCourses";
import EmergingCourses from "./pages/Courses/EmergingCourses";
import Cert from "./pages/Certificate/Certificate";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Certificate" element={<Cert />} /> 
          <Route path="/community" element={<Community />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/terms_and_conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/refundpolicy" element={<Refund />} />
          <Route path="/free_courses" element={<Courses />} />
          <Route path="/industrial_courses" element={<IndustrialCourses />} />
          <Route path="/emerging_courses" element={<EmergingCourses />} />
          <Route path="/free_courses" element={<Courses />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
