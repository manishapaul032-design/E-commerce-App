import React from "react";
import "./Smartwatch.css";
import { CiHeart } from "react-icons/ci";
import Navbar from "../Components/Navbar";

import watch1 from "../assets/images/w1.jpg";
import watch2 from "../assets/images/w2.jpg";
import watch3 from "../assets/images/w3.jpg";
import watch4 from "../assets/images/w4.jpg";
import banner from "../assets/images/w-banner.png";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 10",
    price: 45999,
    oldPrice: 49999,
    rating: 4.9,
    image: watch1,
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 7",
    price: 29999,
    oldPrice: 34999,
    rating: 4.8,
    image: watch2,
  },
  {
    id: 3,
    name: "Noise ColorFit Pro 5",
    price: 3499,
    oldPrice: 4999,
    rating: 4.5,
    image: watch3,
  },
  {
    id: 4,
    name: "boAt Wave Sigma",
    price: 1999,
    oldPrice: 3499,
    rating: 4.4,
    image: watch4,
  },
];

const Smartwatch = () => {
  return (
    <>
      <Navbar />

      <div className="smartwatch-page">

        <div
          className="hero-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay">
            <h1>Premium Smartwatch Collection</h1>
            <p>
              Discover the latest smartwatches with fitness tracking, calling,
              AMOLED displays, and premium designs.
            </p>

            <button className="shop-btn6">
              Shop Now
            </button>
          </div>
        </div>

        <h2 className="section-title">
          Trending Smartwatches
        </h2>

        <div className="product-grid6">
          {products.map((item) => {
            const discount = Math.floor(
              ((item.oldPrice - item.price) / item.oldPrice) * 100
            );

            return (
              <div className="product-card6" key={item.id}>

                <CiHeart className="wishlist" />

                <div className="image-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-info">

                  <h3>{item.name}</h3>

                  <span className="rating6">
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

export default Smartwatch;