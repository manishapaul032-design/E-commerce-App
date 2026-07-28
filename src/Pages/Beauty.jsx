import React from "react";
import "./Beauty.css";
import { CiHeart } from "react-icons/ci";

import banner from "../assets/images/beauty-banner.jpeg";
import cream from "../assets/images/cream.jpg";
import cream1 from "../assets/images/cream1.jpg";
import cream2 from "../assets/images/cream2.jpg";
import cream3 from "../assets/images/cream3.jpg";
import primer from "../assets/images/primer.jpg";
import foundation from "../assets/images/foundation.jpg"
import Navbar from "../Components/Navbar";

const products = [
  {
    id: 1,
    name: "Plum Niacinamide Gel Cream",
    price: 289,
    oldPrice: 349,
    rating: 4.6,
    image: cream,
  },
  {
    id: 2,
    name: "Dot & Key Sunscreen SPF 50",
    price: 260,
    oldPrice: 299,
    rating: 4.5,
    image: cream1,
  },
  {
    id: 3,
    name: "POND'S Super Light Gel",
    price: 189,
    oldPrice: 250,
    rating: 4.4,
    image: cream2,
  },
  {
    id: 4,
    name: "NIVEA Soft Moisturising Cream",
    price: 500,
    oldPrice: 650,
    rating: 4.7,
    image: cream3,
  },
   {
    id: 5,
    name: "MARS Hydra Glow Primer",
    price: 280,
    oldPrice: 399,
    rating: 4.7,
    image: primer,
  },
   {
    id: 6,
    name: "MARS High Coverage Foundation SPF50 PA+++",
    price: 280,
    oldPrice: 399,
    rating: 4.7,
    image: foundation,
  },
];

const Beauty = () => {
  return (
    <>
    <Navbar/>
  
    <div className="beauty-page">

      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <h1>Beauty Collection</h1>

          <p>
            Discover skincare, moisturizers, sunscreen,
            face creams & beauty essentials.
          </p>

          <button className="shop-btn3">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="section-title">
        Trending Beauty Products
      </h2>

      <div className="product-grid3">

        {products.map((item) => {

          const discount = Math.floor(
            ((item.oldPrice - item.price) / item.oldPrice) * 100
          );

          return (

            <div className="product-card3" key={item.id}>

              <CiHeart className="wishlist" />

              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">

                <h3>{item.name}</h3>

                <span className="rating3">
                  ⭐ {item.rating}
                </span>

                <div className="price-row">

                  <span className="price">
                    ₹{item.price}
                  </span>

                  <span className="old-price">
                    ₹{item.oldPrice}
                  </span>

                </div>

                <span className="discount">
                  {discount}% OFF
                </span>

                <button className="cart-btn">
                View Details
                </button>

              </div>

            </div>

          );

        })}

      </div>

    </div>
      </>
  );
};

export default Beauty;