// Import the required modules
const express = require("express");
const User = require("../models/UserModel");
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

// Export the functions
module.exports = {
  signup,
  login,
};
