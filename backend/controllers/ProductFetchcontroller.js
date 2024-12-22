const Product = require("../models/Products");

const getPremiumProductsByBrand = async (req, res) => {
  try {
    const products = await Product.find({ category: "brand" });

    const premiumInBrand = products.slice(0, 4);

    console.log("Premium brands fetched successfully");

    res.send(premiumInBrand);
  } catch (error) {
    console.error("Error fetching premium brands:", error);
    res.status(500).send("Internal Server Error");
  }
};
const getclothingcategory = async (req, res) => {
  try {
    const clothingProducts = await Product.find({ category: "clothing" });
    console.log("Clothing category products fetched successfully");

    res.send(clothingProducts);
  } catch (error) {
    console.error("Error fetching clothing category products:", error);
    res.status(500).send("Internal Server Error");
  }
};
const getmenjeans = async (req, res) => {
  try {
    const menJeans = await Product.find({ subcategory: "menjeans" });
    console.log("mensjeans products fetched successfully");

    res.send(menJeans);
  } catch (error) {
    console.error("Error fetching mens jeans products:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getPremiumProductsByBrand,
  getclothingcategory,
  getmenjeans,
  // getProductById,
};
