import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { MdListAlt } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("addProduct");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div
          className={`sidebar-option ${
            selectedOption === "addProduct" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("addProduct")}
        >
          <MdOutlineAddBox /> Add Product
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div
          className={`sidebar-option ${
            selectedOption === "listProduct" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("listProduct")}
        >
          <MdListAlt /> List Product
        </div>
      </Link>
      <Link to={"/ordered"} style={{ textDecoration: "none" }}>
        <div
          className={`sidebar-option ${
            selectedOption === "listProduct" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("ordered")}
        >
          <FaShippingFast /> Orders
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
