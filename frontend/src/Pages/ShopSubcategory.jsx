import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item";
import "./ShopCategory.css";

const ShopCategory = (props) => {
  const { All_products } = useContext(ShopContext);

  return (
    <div className="shop-categoey">
      <div className="img-heading">
        <img className="banner" src={props.banner} alt="" />
        <h3 className="category-name">FOR {props.category}s</h3>
        <hr />
      </div>
      <div className="shopproducts">
        {All_products.map((item, i) => {
          if (props.subcategory === item.subcategory) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image1={item.image1}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
