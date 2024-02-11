import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Refund from "./pages/Refund_Policy/Refund";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import RazorpayPaymentGateway from "./pages/Razorpay/RazorpayPaymentGateway";
// import CourseDetail from "./pages/CourseDetail/template/CourseDetail";
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
import Auth2 from "./pages/Auth/Auth2";
import FC1 from "./pages/CourseDetail/pages/FC1";
import FC2 from "./pages/CourseDetail/pages/FC2";
import TC1 from "./pages/CourseDetail/pages/TC1";
import TC2 from "./pages/CourseDetail/pages/TC2";
import TC3 from "./pages/CourseDetail/pages/TC3";
import TC4 from "./pages/CourseDetail/pages/TC4";
import TC5 from "./pages/CourseDetail/pages/TC5";
import TRC1 from "./pages/CourseDetail/pages/TRC1";
import TRC2 from "./pages/CourseDetail/pages/TRC2";
import TRC3 from "./pages/CourseDetail/pages/TRC3";
import TRC4 from "./pages/CourseDetail/pages/TRC4";
import TRC5 from "./pages/CourseDetail/pages/TRC5";
// import WatchCourse from "./pages/watchCourse/watchCourse";
import Dash from "./pages/dashboard/Dash";
import Generate from "./pages/Certificate/Generate";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<RazorpayPaymentGateway />} />
          <Route path="/phone" element={<Auth2 />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/course" element={<CourseDetail />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/watchCourse" element={<WatchCourse />} /> */}
          <Route path="/Certificate" element={<Cert />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/community" element={<Community />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/terms_and_conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/refundpolicy" element={<Refund />} />
          <Route path="/free_courses" element={<Courses />} />
          <Route path="/industrial_courses" element={<IndustrialCourses />} />
          <Route path="/emerging_courses" element={<EmergingCourses />} />
          <Route path="/free_courses" element={<Courses />} />
          <Route path="/FC1" element={<FC1 />} />
          <Route path="/FC2" element={<FC2 />} />
          <Route path="/TC1" element={<TC1 />} />
          <Route path="/TC2" element={<TC2 />} />
          <Route path="/TC3" element={<TC3 />} />
          <Route path="/TC4" element={<TC4 />} />
          <Route path="/TC5" element={<TC5 />} />
          <Route path="/TRC1" element={<TRC1 />} />
          <Route path="/TRC2" element={<TRC2 />} />
          <Route path="/TRC3" element={<TRC3 />} />
          <Route path="/TRC4" element={<TRC4 />} />
          <Route path="/TRC5" element={<TRC5 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
