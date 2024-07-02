const express = require("express");
const port = 4000;
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
//models
const user = require("./models/UserModel");
// All controllers
const productController = require("./controllers/productController");
const userController = require("./controllers/Usercontroller");
const ProductFetchcontroller = require("./controllers/ProductFetchcontroller");
const cartcontroller = require("./controllers/cartcontroller");
const wishlistcontroller = require("./controllers/wishlistcontroller");
const ordercontroller = require("./controllers/ordercontroller");
const searchcontroller = require("./controllers/searchcontroller");

app.use(express.json());

app.use(cors());

// Database connection with mongoose
mongoose.connect(
  "mongodb+srv://Manordb:manor123@cluster0.fmmlxsu.mongodb.net/Manor"
);
// API creation
app.get("/", (req, res) => {
  res.send("Express APP is running");
});

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// creating middleware to fetch user

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  } else {
    try {
      const decodedToken = jwt.verify(token, "secret_zee");
      req.user = {
        id: decodedToken.userId,
      };
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};

// ******************All the Api End point ********************************************

app.post("/addproducts", productController.addProduct);
app.delete("/api/products/:id", productController.removeProduct);
app.get("/api/allproduct", productController.getProduct);
app.post("/login", userController.login);
app.post("/signup", userController.signup);

/// creating endpoint for preimum brand
app.get("/preimumbrand", ProductFetchcontroller.getPremiumProductsByBrand);

//fething the clothing category product
app.get("/clothingproduct", ProductFetchcontroller.getclothingcategory);

// // Get Product By Id
// app.get("/Product/:producId", ProductFetchcontroller.getProductById);

//search system code
app.get("/searchproducts", searchcontroller.searchProducts);

//fetching mens jeans subcategory
app.get("/menjeans", ProductFetchcontroller.getmenjeans);

// cerating endpoint for add to cartitem
app.post("/addtocart", fetchUser, cartcontroller.addcart);
app.post("/addtowishlist", fetchUser, wishlistcontroller.addToWishlist);
app.get("/allordertoadmin", ordercontroller.getAllOrder);

// // to add new orders
app.post("/addorder", fetchUser, ordercontroller.addOrder);

app.patch("/updateorder/:id", ordercontroller.updateOrder);
// running codeo

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is running on port " + port);
  } else {
    console.log("Error :" + err);
  }
});
