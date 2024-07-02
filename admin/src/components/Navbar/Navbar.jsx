// Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/admin" className="navbar-logo">
          Admin Panel
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/users" className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/products" className="nav-link">
            Products
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
