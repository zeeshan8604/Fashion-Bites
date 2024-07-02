import React, { useEffect, useState } from "react";
import "./Popular.css";
import BrandItem from "../BrandItem/BrandItem";

const Popular = () => {
  const [premiumbrands, setPremiumBrand] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/preimumbrand")
      .then((response) => response.json())
      .then((data) => setPremiumBrand(data))
      .catch((error) => console.error("Error fetching premium brands:", error));
  }, []);

  return (
    <div className="popular">
      <h1>PREMIUM BRANDS</h1>
      <hr />
      <div className="popular-item">
        {premiumbrands.map((item, i) => (
          <BrandItem key={i} name={item.brand} image1={item.image1} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
