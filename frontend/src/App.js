import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import ShopSubCategory from "./Pages/ShopSubcategory";
import ShopBrand from "./Pages/ShopBrand";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import mens_banner from "./components/Assets/Men_banner.jpg";
import womens_banner from "./components/Assets/Women_banner.png";
import kids_banner from "./components/Assets/banner_kids.png";
import WishList from "./Pages/WishList";
import PersonalInfo from "./Pages/PersonalInfo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          {/*************** * premium brand ***********/}
          <Route path="/nike" element={<ShopBrand brand="Nike" />} />
          <Route path="/puma" element={<ShopBrand brand="Puma" />} />
          <Route
            path="/new balance"
            element={<ShopBrand brand="New Balance" />}
          />
          <Route path="/adidas" element={<ShopBrand brand="Adidas" />} />
          {/* ********sub category ************/}
          <Route
            path="/menjeans"
            element={<ShopSubCategory subcategory="menjeans" />}
          />
          <Route
            path="/menshirt"
            element={<ShopSubCategory subcategory="menshirt" />}
          />
          <Route
            path="/mentshirt"
            element={<ShopSubCategory subcategory="mentshirt" />}
          />
          <Route
            path="/menjacket"
            element={<ShopSubCategory subcategory="menjacket" />}
          />
          <Route
            path="/womenjeans"
            element={<ShopSubCategory subcategory="womenjeans" />}
          />
          <Route
            path="/womensshirt"
            element={<ShopSubCategory subcategory="womenshirt" />}
          />
          <Route
            path="/womenstshirt"
            element={<ShopSubCategory subcategory="womentshirt" />}
          />
          <Route
            path="/womensjacket"
            element={<ShopSubCategory subcategory="womenjacket" />}
          />
          {/**************  searchpagesresult ************/}
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* to get personal info and address */}
          <Route path="/personalinfo" element={<PersonalInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
