import React, { useState } from "react";
import axios from "axios";
import "./Addproduct.css";

function AddProduct() {
  // Initialize the state for each product property
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [color, setColor] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [material, setmaterial] = useState("");
  const [about, setAbout] = useState("");
  const [tags, settags] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  // Define a function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a product object with the state values
      const product = {
        name,
        brand,
        category,
        introduction,
        color,
        about,
        tags,
        subcategory,
        material,
        image1,
        image2,
        image3,
        image4,
        price,
        available,
      };

      // Make the request to your server endpoint
      const response = await axios.post(
        "http://localhost:4000/addproducts",
        product
      );

      console.log(response.data);
      alert("Product added successfully!");

      // Redirect to the same page
      window.location.href = window.location.href;
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Something went wrong!");
    }
  };
  // Define a function to handle the file input changes
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    try {
      // Create a form data object with the file
      const formData = new FormData();
      formData.append("product", file);

      // Make the request to your upload endpoint
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
      );

      console.log(response.data);
      switch (e.target.name) {
        case "image1":
          setImage1(response.data.image_url);
          break;
        case "image2":
          setImage2(response.data.image_url);
          break;
        case "image3":
          setImage3(response.data.image_url);
          break;
        case "image4":
          setImage4(response.data.image_url);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Something went wrong!");
    }
  };

  // Return the JSX code for the form component
  return (
    <div className="add-product">
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
          <input
            type="text"
            id="brand"
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            placeholder="Brand"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="Category"
          />
          <input
            type="text"
            id="subcategory"
            name="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            required
            placeholder="Subcategory"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="introduction"
            name="introduction"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            required
            placeholder="Introduction"
          />
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            placeholder="about"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => settags(e.target.value)}
            required
            placeholder="tags"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            placeholder="Color"
          />
          <input
            type="text"
            id="material"
            name="material"
            value={material}
            onChange={(e) => setmaterial(e.target.value)}
            required
            placeholder="Material"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image2">Image 1</label>
          <input
            type="file"
            id="image1"
            name="image1"
            accept="image/*"
            onChange={handleFileChange}
            required
            placeholder="Image 1"
          />
          <label htmlFor="image2">Image 2</label>
          <input
            type="file"
            id="image2"
            name="image2"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image3">Image 3</label>
          <input
            type="file"
            id="image3"
            name="image3"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="image4">Image 4</label>
          <input
            type="file"
            id="image4"
            name="image4"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
