import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="c-head">
        <span className="circle"></span>
        {props.body}
      </div>
      <div className="c-body">
        <h2 className="c-name">{props.name}</h2>
        <div className="rating">
          <i className="fa-solid fa-star" style={{ color: "#fecb3e" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#fecb3e" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#fecb3e" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#fecb3e" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#fecb3e" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
