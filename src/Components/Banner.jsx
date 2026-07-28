import React from 'react'
import './Banner.css'
import bg from '../assets/images/b3.jpeg'
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <div className='slider'>
      
      <div className="responsive-banner" style={{ backgroundImage: `url(${bg})` }}>
  <div className="text-area">
    
    <button className="shop-btn"><FaShoppingCart />Shop Now</button>
  </div>
  </div>
  </div>
    </>
  )
}

export default Banner

