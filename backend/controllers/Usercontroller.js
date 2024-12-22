// Import the required modules
const express = require("express");
const User = require("../models/UserModel");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

// Create a signup  controller
const signup = async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "exixting user fond with same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  let wishlist = {};
  for (let i = 0; i < 300; i++) {
    wishlist[i] = 0;
  }
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
    Whislist: wishlist,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
      username: user.username,
    },
  };
  const token = jwt.sign(data, "secret_zee");
  res.json({ success: true, token });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (user) {
      // If user found, compare passwords
      if (password === user.password) {
        // If passwords match, generate JWT token
        const token = jwt.sign({ userId: user._id }, "secret_zee");

        res.json({ success: true, token, username: user.username });
      } else {
        res.status(401).json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.status(404).json({ success: false, errors: "User not found" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, errors: "Server error" });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.user.id; // User ID from the authentication middleware

  try {
    // Find the user by ID
    const user = await User.findById(userId).select("-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User data retrieved successfully",
      user,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.user.id; // Get user ID from the token
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// get all the user order data.

const getOrders = async (req, res) => {
  try {
    // Ensure the request has a valid authenticated user
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ errors: "Please authenticate using a valid token" });
    }
    // Extract and log the user ID for clarity
    const userId = req.user.id;
    // Check the connection to the database
    const orders = await Order.find({ buyer: userId }).exec();
    // Handle the case when no orders are found
    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found for this user" });
    }
    // Log successful retrieval of orders
    res.status(200).json({ success: true, orders });
  } catch (error) {
    // Detailed error response for server issues
    res.status(500).json({
      success: false,
      message:
        "An error occurred while fetching orders. Please try again later.",
    });
  }
};

// Export the functions
module.exports = {
  signup,
  login,
  updateUserProfile,
  getUserProfile,
  getOrders,
};
