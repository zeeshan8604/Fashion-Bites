import React from "react";
import Image from "../Assets/exclusiveimg.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Special deals</h2>
        <h2>just for you</h2>
        <h1>TO 50% OFF</h1>
        <h6>let's see</h6>
        <h6>We stored for you</h6>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
