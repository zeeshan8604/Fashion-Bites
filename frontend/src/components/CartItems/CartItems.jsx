import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import { BsArrowReturnLeft } from "react-icons/bs";
import "./CartItem.css";
import { Link } from "react-router-dom";
// import axios from "axios";

const CartItems = () => {
  const {
    All_products,
    cartItem,
    removeFromCart,
    GetTotalCartAmount,
    GetTotalCartItem,
  } = useContext(ShopContext);

  if (!localStorage.getItem("auth-token")) {
    window.location.replace("/login");
  }

  const placeOrder = () => {
    const orderData = {
      products: All_products.filter((product) => cartItem[product.id] > 0),
    };

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addorder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New order created:", data.data.order);
          // Optionally, you can redirect or do something else upon successful order creation
        })
        .catch((error) => console.error("Error creating order:", error));
    } else {
      console.error("User not authenticated");
      // Handle authentication logic here (e.g., redirect to login page)
    }
  };

  return (
    <div className="main-div">
      <h4>Your Cart Item</h4>
      <div className="cartitems">
        <div className="cart-left">
          {All_products.map((product) => {
            if (cartItem[product.id] > 0) {
              return (
                <div className="cart-all-item" key={product.id}>
                  <div className="cart-items">
                    <div className="item-img">
                      <img src={product.image1} alt="" />
                    </div>
                    <div className="cart-item-detail">
                      <p className="product-name">{product.name}</p>
                      <p className="product-category">{product.category}</p>
                      <div className="size-quantity">
                        <button>{cartItem[product.id]}</button>
                        <button>M</button>
                      </div>
                      <div className="price-tags">
                        <p className="actual-price"> Rs {product.price}</p>
                        <p className="discount-price">
                          Rs {Math.round(product.price - product.price * 0.15)}
                        </p>
                        <p className="dicount-percent">15%</p>
                      </div>
                      <p>↩︎ 14 days return available</p>
                    </div>
                    <div className="remove-logo">
                      <MdDeleteOutline
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-right">
          <div className="cart-price-detail">
            <p className="Price-heading">
              PRICE DETAILS ({GetTotalCartItem()})
            </p>
            <hr />
            <div className="pricing">
              <p>Total MRP</p>
              <p>Rs {GetTotalCartAmount()}</p>
            </div>
            <div className="pricing">
              <p>Coupon Discount</p>
              <a href="">Apply Coupon</a>
            </div>
            <div className="pricing">
              <p>
                Discount <span>15 %</span>
              </p>
              <p className="cart-discount">
                Rs -{Math.round(GetTotalCartAmount() * 0.15)}
              </p>
            </div>
            <div className="pricing">
              <p>Platform Fee</p>
              <p className="platform-fee">FREE</p>
            </div>
            <div className="pricing">
              <p>Shipping Fee</p>
              <p>
                <span className="Shipping-fee">Rs70</span>&nbsp;&nbsp;
                <span className="free-text">FREE</span>
              </p>
            </div>
            <hr />
            <div className="pricing">
              <p>Total Amount</p>
              <p>
                {GetTotalCartAmount() - Math.round(GetTotalCartAmount() * 0.15)}
              </p>
            </div>
            <Link style={{ textDecoration: "none" }} to="/personalinfo">
              <button className="palce-order-btn" onClick={placeOrder}>
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
