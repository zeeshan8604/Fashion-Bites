import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import "./WishlistDisplay.css";
import { Link } from "react-router-dom";
import wistlistemptyimage from "../Assets/Kids/wishlistempty.png";
import wishlistofferimage from "../Assets/Kids/Add Items to Wishlist.png";

const Wishlist = () => {
  const { All_products, wishlistItem, removeFromWishlist, addToCart } =
    useContext(ShopContext);

  const totalWishlistItems = Object.values(wishlistItem).reduce(
    (sum, qty) => sum + qty,
    0
  );
  if (totalWishlistItems === 0) {
    return (
      <div className="main-wishtlistempty-div">
        <div className="image-div left-wishtlistempty-div">
          <img className="wishlist_img" src={wistlistemptyimage} alt="" />
        </div>
        <div className="right-wishtlistempty-div">
          <img className="wishlistofferimage" src={wishlistofferimage} alt="" />
          <Link to={"/"}>
            <button className="wishlistshoppingbtn" type="">
              Continue shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h4>Your Wishlist</h4>

      <ul className="wishlist-items">
        {All_products.map((product) => {
          if (wishlistItem[product.id] > 0) {
            return (
              <li key={product.id} className="wishlist-item">
                <div className="wishlist-item-image">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image1} alt={product.name} />
                  </Link>
                </div>
                <div className="wishlist-item-details">
                  <p className="product-name">{product.name}</p>
                  {/* <p className="product-category">{product.category}</p> */}
                  <div className="wishlist-item-price">
                    <p className="actual-price">Rs {product.price}</p>
                    <p className="discount-price">
                      Rs {Math.round(product.price - product.price * 0.15)}
                    </p>
                    <p className="discount-percent">15%</p>
                  </div>
                </div>
                <div className="wishlist_button">
                  <button
                    className="wishlist-remove-button"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <MdDeleteOutline />
                    Remove
                  </button>
                  <button
                    className="wishlist-remove-button"
                    onClick={() => addToCart(product.id)}
                  >
                    Move To Bag
                  </button>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div
        className="empty-state"
        style={wishlistItem.length === 0 ? {} : { display: "none" }}
      >
        {/* Empty wishlist message */}
      </div>
    </div>
  );
};

export default Wishlist;
