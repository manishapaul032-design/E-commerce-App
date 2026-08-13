import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link className="logo" to="/">
        <span className="trend">Trend</span>
        <span className="sphere">Sphere</span>
      </Link>


      {/* Search */}
      <div className="search-box">

        <input
          type="text"
          placeholder="Search for Products, Brands and More"
        />

        <button type="button">
          <FaSearch />
        </button>

      </div>


      {/* Navigation Buttons */}
      <div className="nav-buttons">

        {/* Wishlist */}
        <Link
          className="btn2"
          to="/wishlist"
        >
          Wishlist
        </Link>


        {/* Cart */}
        <Link
          className="btn"
          to="/CartPage"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </Link>


        {/* Login */}
        <Link
          className="btn1"
          to="/login"
        >
          <CgProfile />
          <span>Login</span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;