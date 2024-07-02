import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStar } from "react-icons/fa";
import "./Productdisplay.css"; // Import your CSS file
import { useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { addToWishlist } = useContext(ShopContext);

  const { id, name, category, image1, image2, image3, image4, price } = product;

  const images = [
    { original: image1, thumbnail: image1 },
    { original: image2, thumbnail: image2 },
    { original: image3, thumbnail: image3 },
    { original: image4, thumbnail: image4 },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const [selectedSize, setSelectedSize] = useState(null);
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);

  const handleAddToBag = () => {
    if (selectedSize) {
      // Assuming id is the product ID and any other necessary product information
      const product = { id, size: selectedSize };

      // Call the addToCart function from the context
      // const userId = localStorage.getItem("auth-token");
      addToCart(product.id); //userId

      console.log(`Added product ${id} with size ${selectedSize} to the bag`);
    } else {
      alert("Please select a size before adding to bag");
    }
  };

  const handleAddToWishlist = () => {
    addToWishlist(product.id);
    console.log(`Added product ${id} to the wishlist`);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className="product-detail-container">
      <div className="image-gallery-container">
        <ReactImageGallery items={images} />
      </div>
      <div className="product-info-container">
        <div className="product-name">{name}</div>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} fill={i < rating ? "gold" : "gray"} />
          ))}
        </div>
        <div className="product-category">{category}</div>
        <div className="product-price">₹{price}</div>
        <div className="size-options">
          {sizes.map((size) => (
            <div
              className={`size ${selectedSize === size ? "selected" : ""}`}
              onClick={() => handleSelectSize(size)}
              key={size}
            >
              {size}
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <div
            className="add-to-bag"
            // onClick={() => {
            //   addToCart(product.id);
            // }}
            onClick={handleAddToBag}
          >
            <BiShoppingBag />
            <div>Add to Bag</div>
          </div>
          <div className="add-to-wishlist" onClick={handleAddToWishlist}>
            <AiOutlineHeart />
            <div>Add to Wishlist</div>
          </div>
        </div>
        <div className="product-description">{product.discription}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
