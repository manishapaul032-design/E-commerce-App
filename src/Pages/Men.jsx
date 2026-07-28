import React from "react";
import "./Men.css";
import { CiHeart } from "react-icons/ci";

import tshirt from "../assets/images/t-shirt.jpg";
import shirt from "../assets/images/shirt.jpg";
import hoodie from "../assets/images/hoodie.jpg";
import jeans from "../assets/images/jeans.jpg";
import banner from "../assets/images/b4.png";
import Navbar from "../Components/Navbar";

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 699,
    oldPrice: 999,
    rating: 4.4,
    image: tshirt,
  },
  {
    id: 2,
    name: "Formal Slim Fit Shirt",
    price: 1299,
    oldPrice: 1799,
    rating: 4.5,
    image: shirt,
  },
  {
    id: 3,
    name: "Winter Hoodie",
    price: 1499,
    oldPrice: 2199,
    rating: 4.6,
    image: hoodie,
  },
  {
    id: 4,
    name: "Blue Denim Jeans",
    price: 1199,
    oldPrice: 1699,
    rating: 4.3,
    image: jeans,
  },
];

const Men = () => {
  return (
    <>
    <Navbar/>
    
    <div className="men-page">

      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content">

          <span className="offer-tag">
            🔥 NEW ARRIVALS
          </span>

          <h1>Men's Fashion</h1>

          <p>
            Upgrade your wardrobe with premium shirts,
            t-shirts, hoodies and jeans.
          </p>

          <button className="shop-btn1">
            Shop Now
          </button>

        </div>
      </div>

      <h2 className="section-title">
        Trending Men's Collection
      </h2>

      <div className="product-grid1">

        {products.map((item) => {

          const discount = Math.floor(
            ((item.oldPrice - item.price) / item.oldPrice) * 100
          );

          return (

            <div className="product-card1" key={item.id}>

               <CiHeart className="wishlist" />

              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">

                <h3>{item.name}</h3>

                <div className="rating1">
                  ⭐ {item.rating}
                </div>

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

export default Men;