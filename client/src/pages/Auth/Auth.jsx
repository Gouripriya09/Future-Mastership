import React, { useState, useEffect } from "react";
import "./auth.css";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <div className="Auth">
      <div className="ls-auth"></div>
      <div className="rs-auth"></div>
    </div>
  );
};

export default Auth;
