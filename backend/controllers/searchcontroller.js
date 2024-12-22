const Product = require("../models/Products");

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Use a case insensitive regex to search for the query in the tags field
    const products = await Product.find(
      {
        tags: { $regex: query, $options: "i" },
      },
      "-_id"
    );

    // If no products found, return empty array
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchProducts };
