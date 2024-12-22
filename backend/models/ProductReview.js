const mongoose = require("mongoose");

// Define the review schema
const reviewSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  star: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // Ensure star ratings are between 1 and 5
  },
  review: {
    type: String,
    required: true,
    maxlength: 500, // Limit the review string length
  },
  date: {
    type: Date,
    default: Date.now, // Automatically set the date to the current timestamp
  },
});

// Define the product schema
const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  reviews: [reviewSchema], // Embed an array of reviews
});

// Create models
const Review = mongoose.model("Review", productSchema);

module.exports = Review;
