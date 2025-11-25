import React from 'react'
import './Navbar.css';

import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
    <Link className="logo" to="/">TrendSphere</Link>

    <div className="search-box">
        
      <input type="text" placeholder="Search for Products, Brands and More" />
     
      <button><FaSearch /></button>
    </div>

     <Link className="btn"><FaShoppingCart /> Add to cart</Link>

    <Link className="btn" aria-current="page" to="/login"><CgProfile /> Login</Link>
  </nav>

    </>
  )
}

export default Navbar
