import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image1} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">Rs. {props.price}</div>
    </div>
  );
};

export default Item;
