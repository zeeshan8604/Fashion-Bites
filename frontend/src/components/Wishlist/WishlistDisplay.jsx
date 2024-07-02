// import React, { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import { MdDeleteOutline } from "react-icons/md";
// import { BsArrowReturnLeft } from "react-icons/bs";
// import "./WishlistDisplay.css";
// import { Link } from "react-router-dom";

// const Wishlist = () => {
//   const { All_products, wishlistItem, removeFromWishlist } =
//     useContext(ShopContext);
//   if (!localStorage.getItem("auth-token")) {
//     window.location.replace("/login");
//   }

//   return (
//     <div className="main-div">
//       <h4>Your Wishlist Item</h4>
//       <div className="cartitems">
//         <div className="cart-left">
//           {All_products.map((product) => {
//             if (wishlistItem[product.id] > 0) {
//               return (
//                 <div className="cart-all-item">
//                   <div className="cart-items">
//                     <div className="item-img">
//                       <Link to={`/product/${product.id}`}>
//                         <img src={product.image1} alt="" />
//                       </Link>
//                     </div>
//                     <div className="cart-item-detail">
//                       <p className="product-name">{product.name}</p>
//                       <p className="product-category">{product.category}</p>
//                       {/* <div className="size-quantity">
//                         <button>{wishlistItem[product.id]}</button>
//                         <button>M</button>
//                       </div> */}
//                       <div className="price-tags">
//                         <p className="actual-price"> Rs {product.price}</p>
//                         <p className="discount-price">
//                           Rs {Math.round(product.price - product.price * 0.15)}
//                         </p>
//                         <p className="dicount-percent">15%</p>
//                       </div>
//                       {/* <p>
//                         <BsArrowReturnLeft className="arrow" />{" "}
//                         <span>14 days</span> return available
//                       </p> */}
//                     </div>
//                     <div className="remove-logo">
//                       <MdDeleteOutline
//                         onClick={() => removeFromWishlist(product.id)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import "./WishlistDisplay.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { All_products, wishlistItem, removeFromWishlist, addToCart } =
    useContext(ShopContext);

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
