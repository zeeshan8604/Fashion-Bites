import React, { useState } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/logo4.png";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";
import Search from "../Search/Search";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { GetTotalCartItem } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo-img" src={Logo} alt="logo" />
        {/* <p>𝓕𝓐𝓢𝓗𝓘𝓞𝓝 𝓑𝓘𝓣𝓔𝓢</p> */}
        <Search />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
            Mens
          </Link>
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Womens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
            Womens
          </Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="kids">
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <div class="dropdown">
            <div className="profile-div">
              <div className="left-pro-div">
                <CgProfile />
              </div>
              <div>{localStorage.getItem("username")}</div>
            </div>
            <ul class="dropdown-menu">
              <li>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profileinfo"
                >
                  <p>My Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Orders"
                >
                  <p>Order</p>
                </Link>
              </li>
              <li>
                <p>HelpDesk</p>
              </li>
              <li>
                <Link to={"/feedback"}>
                  <p>Feedback</p>
                </Link>
              </li>
              <li>
                <p
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    localStorage.removeItem("username");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link style={{ textDecoration: "none", color: "black" }} to="/wishlist">
          <FaRegHeart className="watch-list" />
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <IoCartOutline className="cart-logo" />
        </Link>

        <div className="nav-cart-count">{GetTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
