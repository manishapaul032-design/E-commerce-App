import React from "react";
import "./Headphones.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import hp1 from "../assets/images/h1.jpg";
import hp2 from "../assets/images/h2.jpg";
import hp3 from "../assets/images/h3.jpg";
import hp4 from "../assets/images/h4.jpg";
import hp5 from "../assets/images/h5.jpg";
import banner from "../assets/images/h-banner.png";

const headphoneProducts = [
  {
    id: 1,
    image: hp1,
    title: "Wireless JBL Headphones",
    price: 1499,
    oldPrice: 2999,
    rating: 4.3,
  },
  {
    id: 2,
    image: hp2,
    title: "boAt Wireless Earbuds",
    price: 3999,
    oldPrice: 5999,
    rating: 4.5,
  },
  {
    id: 3,
    image: hp3,
    title: "boAt Rockerz 255 Pro+",
    price: 5499,
    oldPrice: 7999,
    rating: 4.4,
  },
  {
    id: 4,
    image: hp4,
    title: "Noise Two Wireless Headphones",
    price: 1999,
    oldPrice: 3499,
    rating: 4.2,
  },
  {
    id: 5,
    image: hp5,
    title: "OnePlus Earbuds",
    price: 1799,
    oldPrice: 2999,
    rating: 4.1,
  },
];

const Headphone = () => {
  return (
    <>
      <Navbar />

      <div className="headphone-page">

        <div
          className="hero-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay">
            <h1>Premium Headphones</h1>
            <p>
              Enjoy Crystal Clear Sound with Amazing Offers.
            </p>

            <button className="shop-btn5">
              Shop Now
            </button>
          </div>
        </div>

        <h2 className="section-title">
          Trending Headphones
        </h2>

        <div className="product-grid5">

          {headphoneProducts.map((item) => {

            const discount = Math.floor(
              ((item.oldPrice - item.price) / item.oldPrice) * 100
            );

            return (
              <div className="product-card5" key={item.id}>

                <CiHeart className="wishlist" />

                <div className="image-box">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="product-info">

                  <h3>{item.title}</h3>

                  <span className="rating5">
                    ⭐ {item.rating}
                  </span>

                  <div className="price-row">
                    <span className="price">₹{item.price}</span>

                    <span className="old-price">
                      ₹{item.oldPrice}
                    </span>
                  </div>

                  <span className="discount">
                    {discount}% OFF
                  </span>

                  <Link to={`/product/${item.id}`}>
                    <button className="cart-btn">
                      View Details
                    </button>
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </>
  );
};

export default Headphone;