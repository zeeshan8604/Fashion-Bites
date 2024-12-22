// import React, { useContext, useState, useEffect } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
// import { BiShoppingBag } from "react-icons/bi";
// import ReactImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { FaStar } from "react-icons/fa";
// import "./Productdisplay.css"; // Import your CSS file
// import { ShopContext } from "../../Context/ShopContext";
// import Productrecommed from "../Productrecommed/Productrecommed";
// const { productId } = useParams();
// const product = All_products.find((e) => e.id === Number(productId));

// const ProductDetail = ({ product }) => {
//   // Move all hooks to the top of the component
//   const { addToCart, addToWishlist } = useContext(ShopContext);
//   const { productId } = useParams();
//   const productid = All_products.find((e) => e.id === Number(productId));
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

//   // Now you can check if the product is null
//   if (!product) {
//     return (
//       <div className="p-spinner-container">
//         <div className="p-spinner"></div>
//       </div>
//     );
//   }

//   const {
//     id,
//     name,
//     category,
//     image1,
//     image2,
//     image3,
//     image4,
//     price,
//     description,
//   } = product;

//   const images = [
//     { original: image1, thumbnail: image1 },
//     { original: image2, thumbnail: image2 },
//     { original: image3, thumbnail: image3 },
//     { original: image4, thumbnail: image4 },
//   ];

//   const sizes = ["S", "M", "L", "XL"];

//   const handleAddToBag = () => {
//     if (selectedSize) {
//       addToCart(id);
//       console.log(`Added product ${id} with size ${selectedSize} to the bag`);
//     } else {
//       alert("Please select a size before adding to bag");
//     }
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(id);
//     console.log(`Added product ${id} to the wishlist`);
//   };

//   const handleSelectSize = (size) => {
//     setSelectedSize(size);
//   };

//   return (
//     <div className="product-detail-container">
//       <div className="image-gallery-container">
//         <ReactImageGallery items={images} />
//       </div>
//       <div className="product-info-container">
//         <div className="product-name">{name}</div>
//         <div className="star-rating">
//           {[...Array(5)].map((_, i) => (
//             <FaStar key={i} fill={i < rating ? "gold" : "gray"} />
//           ))}
//         </div>
//         <div className="product-category">{category}</div>
//         <div className="product-price">₹{price}</div>
//         <div className="size-options">
//           {sizes.map((size) => (
//             <div
//               className={`size ${selectedSize === size ? "selected" : ""}`}
//               onClick={() => handleSelectSize(size)}
//               key={size}
//             >
//               {size}
//             </div>
//           ))}
//         </div>
//         <div className="action-buttons">
//           <div className="add-to-bag" onClick={handleAddToBag}>
//             <BiShoppingBag />
//             <div>Add to Bag</div>
//           </div>
//           <div className="add-to-wishlist" onClick={handleAddToWishlist}>
//             <AiOutlineHeart />
//             <div>Add to Wishlist</div>
//           </div>
//         </div>
//         <div className="product-description">{description}</div>
//       </div>
//       <Productrecommed productId={productid} />
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStar } from "react-icons/fa";
import "./Productdisplay.css"; // Import your CSS file
import { ShopContext } from "../../Context/ShopContext";
import Productrecommed from "../Productrecommed/Productrecommed";
import ProductReview from "../Productreview/Productreview";

const ProductDetail = () => {
  const { productId } = useParams(); // Get productId from route params
  const { addToCart, addToWishlist, All_products } = useContext(ShopContext);

  // Fetch the product details from All_products
  const product = All_products.find((e) => e.id === Number(productId));

  const [selectedSize, setSelectedSize] = useState(null);
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on mount
  }, []);

  if (!product) {
    return (
      <div className="p-spinner-container">
        <div className="p-spinner"></div>
      </div>
    );
  }

  const {
    id,
    name,
    category,
    image1,
    image2,
    image3,
    image4,
    price,
    description,
  } = product;

  const images = [
    { original: image1, thumbnail: image1 },
    { original: image2, thumbnail: image2 },
    { original: image3, thumbnail: image3 },
    { original: image4, thumbnail: image4 },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const handleAddToBag = () => {
    if (selectedSize) {
      addToCart(id);
      console.log(`Added product ${id} with size ${selectedSize} to the bag`);
    } else {
      alert("Please select a size before adding to bag");
    }
  };

  const handleAddToWishlist = () => {
    addToWishlist(id);
    console.log(`Added product ${id} to the wishlist`);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
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
            <div className="add-to-bag" onClick={handleAddToBag}>
              <BiShoppingBag />
              <div>Add to Bag</div>
            </div>
            <div className="add-to-wishlist" onClick={handleAddToWishlist}>
              <AiOutlineHeart />
              <div>Add to Wishlist</div>
            </div>
          </div>
          <div className="product-description">{description}</div>
        </div>
      </div>
      <Productrecommed productId={id} />
      <ProductReview productId={id} />
    </>
  );
};

export default ProductDetail;
