import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Listproduct.css";

const ProductCard = ({ product }) => {
  const deleteProduct = async () => {
    try {
      // Send a delete request to the backend with the product id
      await axios.delete(`http://localhost:4000/api/products/${product._id}`);
      // Filter out the deleted product from the products state
      setProducts(products.filter((p) => p._id !== product._id));
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  // This component displays a single product card with its name, brand, category, price, and images
  return (
    <div className="product-card">
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <button onClick={deleteProduct}>Delete</button>
      </div>
      <div className="product-images">
        <img src={product.image1} alt="Image 1" />
      </div>
    </div>
  );
};

const ProductGrid = () => {
  // This component fetches the products from the backend and renders them in a grid using the ProductCard component
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the backend using axios
    axios
      .get("http://localhost:4000/api/allproduct")
      .then((response) => {
        // Set the products state with the response data
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
