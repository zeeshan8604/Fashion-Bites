import React, { useEffect, useState } from "react";
import "./ClothingCenter.css";
import BrandItem from "../BrandItem/BrandItem";

const ClothingCenter = () => {
  const [clothingcenter, setClothingCenter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/clothingproduct")
      .then((response) => response.json())
      .then((data) => setClothingCenter(data))
      .catch((error) => console.error("Error fetching premium brands:", error));
  }, []);

  return (
    <div className="Trending">
      <h1>CLOTHING CENTER</h1>
      <hr />
      <div className="trending-now">
        {clothingcenter.map((item, i) => (
          <BrandItem
            key={i}
            brand={item.brand}
            name={item.name}
            image1={item.image1}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothingCenter;
