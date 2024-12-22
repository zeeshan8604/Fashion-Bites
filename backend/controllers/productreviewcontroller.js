const Product = require("../models/ProductReview");
const { validationResult } = require("express-validator");

const reviewController = {
  // Add a new review to a product
  addReview: async (req, res) => {
    try {
      const { productId } = req.params; // Extract productId from the URL
      const { star, review } = req.body;
      const username = req.user.id; // Assuming req.user contains the authenticated user

      // Find the product by productId
      let product = await Product.findOne({ productId });

      if (!product) {
        // If the product doesn't exist, create a new product with the review
        product = new Product({
          productId,
          reviews: [{ username, star, review }],
        });
      } else {
        // If the product exists, add the new review to its reviews array
        product.reviews.push({ username, star, review });
      }

      // Save the product (new or updated)
      await product.save();

      return res.status(201).json({
        message:
          product.reviews.length > 1
            ? "Review added to existing product."
            : "New product created with the review.",
        product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  },

  // Get all reviews for a product
  getReviews: async (req, res) => {
    try {
      const { productId } = req.params;

      // Find the product by ID
      const product = await Product.findOne({ productId }).populate(
        "reviews.username",
        "name"
      ); // Populate the username field with user data

      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }

      return res.status(200).json({ reviews: product.reviews });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  },

  // Delete a specific review
  deleteReview: async (req, res) => {
    try {
      const { productId, reviewId } = req.params;

      // Find the product by ID
      const product = await Product.findOne({ productId });

      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }

      // Find and remove the review
      const reviewIndex = product.reviews.findIndex(
        (review) => review._id.toString() === reviewId
      );
      if (reviewIndex === -1) {
        return res.status(404).json({ message: "Review not found." });
      }

      product.reviews.splice(reviewIndex, 1);
      await product.save();

      return res
        .status(200)
        .json({ message: "Review deleted successfully.", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  },
};

module.exports = reviewController;
