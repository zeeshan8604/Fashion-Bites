// for showing brand images on shop page
import React from "react";
import { Link } from "react-router-dom";
import "./BrandItem.css";

const BrandItem = (props) => {
  return (
    <div className="item">
      <Link to={`/${props.name}`}>
        <img src={props.image1} alt="" />
      </Link>
      <p>{props.brand}</p>
    </div>
  );
};

export default BrandItem;
