import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link className="logo" to="/">
        TrendSphere
      </Link>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
        />

        <button>
          <FaSearch />
        </button>
      </div>

      <div className="nav-buttons">

        <Link className="btn2" to="/wishlist">
          Wishlist
        </Link>

        <Link className="btn" to="/CartPage">
          <FaShoppingCart />
          <span>Add to Cart</span>
        </Link>

        <Link className="btn1" to="/login">
          <CgProfile />
          <span>Login</span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;