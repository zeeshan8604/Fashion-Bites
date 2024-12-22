import React, { useEffect, useState } from "react";
import "./Productrecommed.css";

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  // Fetch product details and recommendations
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`
        ); // Replace with your API endpoint
        const data = await response.json();

        if (response.ok) {
          setProduct(data.product);
          setRecommendations(data.matchingProducts);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="product-details-container">
      {product && (
        <div className="product-main">
          <h2>{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p>{product.description}</p>
        </div>
      )}

      <h3>Recommended Products</h3>
      <div className="recommendations-carousel">
        {recommendations.map((rec, index) => (
          <div className="recommendation-card" key={index}>
            <img
              src={rec.image}
              alt={rec.name}
              className="recommendation-image"
            />
            <p>{rec.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
