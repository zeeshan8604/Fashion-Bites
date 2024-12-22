import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddReview.css";

const ReviewForm = () => {
  const { productId } = useParams();
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/${productId}/reviews`,
        { star, review },
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setMessage("Review submitted successfully!");
        setStar(0);
        setReview("");
      }
    } catch (error) {
      setMessage("Failed to submit review.");
    }
  };

  return (
    <div className="review-form">
      <h2>Submit Your Review for Product ID: {productId}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Star Rating:
          <select value={star} onChange={(e) => setStar(e.target.value)}>
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
        </label>
        <label>
          Review:
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength="500"
            placeholder="Write your review here..."
          ></textarea>
        </label>
        <button type="submit">Submit Review</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReviewForm;
