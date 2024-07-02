const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const addcart = async (req, res) => {
  console.log(req.body, req.user);
  try {
    let userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }
    userData.cartData[req.body.itemId] =
      (userData.cartData[req.body.itemId] || 0) + 1;
    await User.findByIdAndUpdate(
      req.user.id, // Change this line
      { cartData: userData.cartData }
    );

    res.send("Added to cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

module.exports = { addcart };
