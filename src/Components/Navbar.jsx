import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Banner from './Banner';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
    <div className="logo">TrendSphere</div>

    <div className="search-box">
        
      <input type="text" placeholder="Search for Products, Brands and More" />
     
      <button><FaSearch /></button>
    </div>

     <li className="btn"><FaShoppingCart /> Add to cart</li>

    <Link className="btn" aria-current="page" to="/login"><CgProfile /> Login</Link>
  </nav>

    </>
  )
}

export default Navbar
