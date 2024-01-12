import React, { useState } from "react";
import "./foldCard.css";

const FoldCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`foldCard ${isOpen ? "foldCard-opened" : ""}`}>
      <div className="q" onClick={toggleAnswer}>
        <span className="qstn">{props.qstn}</span>
        <span className={`arrow ${isOpen ? "minus" : "plus"} col-class`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div className={`a ${isOpen ? "a-opened" : ""}`}>{props.ans}</div>
    </div>
  );
};

export default FoldCard;
