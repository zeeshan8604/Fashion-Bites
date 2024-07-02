import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDetail from "../components/ProductDisplay/ProductDisplay";
// Import the CSS file at the top of your Product.js file
import "./Product.css";

// ... rest of your code

const Product = () => {
  const { All_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = All_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default Product;
