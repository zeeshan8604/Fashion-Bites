const User = require("../models/UserModel");

const addToWishlist = async (req, res) => {
  console.log(req.body, req.user);

  try {
    let userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }
    userData.Whislist[req.body.itemId] =
      (userData.Whislist[req.body.itemId] || 0) + 1;
    await User.findByIdAndUpdate(
      req.user.id, // Change this line
      { Whislist: userData.Whislist }
    );

    res.send("Added to wishlist");
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

module.exports = { addToWishlist };
