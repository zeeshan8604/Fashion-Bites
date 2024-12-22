const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  image4: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  composition: {
    // add percentage to material eg: cotton 80, polyester 20
    type: String,
    require: true,
  },
  additional_details: {
    manufactured: {
      type: String,
      required: true,
      default: "India",
    },
    country_origin: {
      type: String,
      required: true,
      default: "India",
    },
  },
  tags: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
