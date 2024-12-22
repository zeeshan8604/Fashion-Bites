import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Productreview.css";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/${productId}/get-reviews`
        );
        setReviews(response.data.reviews);
      } catch (err) {
        setError("Error fetching reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-reviews">
      <h2>Product Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <strong>{review.username.name}</strong> rated it {review.star}{" "}
              stars
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this product.</p>
      )}
    </div>
  );
};

export default ProductReviews;
