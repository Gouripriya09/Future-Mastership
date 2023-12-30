import React, { useState } from "react";
import "./foldCard.css";

const FoldCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`foldCard ${isOpen ? "foldCard-opened" : ""}`}>
      <div className="q">
        <span className="qstn">{props.qstn}</span>
        <span
          className={`arrow ${isOpen ? "minus" : "plus"} col-class`}
          onClick={toggleAnswer}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div className={`a ${isOpen ? "a-opened" : ""}`}>{props.ans}</div>
    </div>
  );
};

export default FoldCard;
