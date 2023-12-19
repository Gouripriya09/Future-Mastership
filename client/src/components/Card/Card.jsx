import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="c-head">
        <h2 className="c-name">{props.name}</h2>
        <p className="c-desg">{props.desg}</p>
      </div>
      <div className="c-body">{props.body}</div>
    </div>
  );
};

export default Card;
