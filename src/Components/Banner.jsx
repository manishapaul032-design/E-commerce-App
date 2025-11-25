import React from 'react'
import './Banner.css'
import bg from '../assets/images/b3.jpg'

const Banner = () => {
  return (
    <>
    <div className='slider'>
      
      <div className="responsive-banner" style={{ backgroundImage: `url(${bg})` }}>
  <div className="text-area">
    <h1>Winter Sale is Live!</h1>
    <p>Exciting offers on Electronics, Fashion, Home & more</p>
    <button className="shop-btn">Shop Now</button>
  </div>
  </div>
  </div>
    </>
  )
}

export default Banner

