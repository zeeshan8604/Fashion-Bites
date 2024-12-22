const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true, // Ensures email is not null and unique
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ], // Email validation
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  wishlist: {
    // Corrected spelling from Whislist to wishlist
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
    default: "https://via.placeholder.com/150", // Default avatar if not provided
  },
  phone: {
    type: String,
    match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"], // Basic phone validation
  },
  gender: {
    type: String,
    enum: ["Male", "Female"], // Keep the current enum
    set: (value) =>
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(), // Capitalize the first letter
  },
  dob: {
    type: Date, // Using Date object for easier manipulation
  },
  location: {
    type: String,
  },
  alternatemobile: {
    type: String,
    match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"], // Validation for alternate mobile
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
