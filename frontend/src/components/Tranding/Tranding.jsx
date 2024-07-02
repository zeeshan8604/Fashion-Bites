import React from "react";
import "./Tranding.css";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const Tranding = () => {
  return (
    <div className="Trending">
      <h1>Trending Now</h1>
      <hr />
      <div className="trending-now">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image1={item.image1}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tranding;
