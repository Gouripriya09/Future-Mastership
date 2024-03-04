import React from "react";
import "./UD.css";

const UD = (props) => {
  return (
    <div className="UD">
      <h1>{props.name} Page</h1>
      <h2>Coming Soon...</h2>
      <p>This page is still under development</p>
      <h2 className="hover-anim">Back Home</h2>
    </div>
  );
};

export default UD;
