import React from "react";
import "./Shoes.css";
import { CiHeart } from "react-icons/ci";

import banner from "../assets/images/shoesbanner.png";
import shoes1 from "../assets/images/shoes1.jpg";
import shoes2 from "../assets/images/shoes2.jpg";
import sneaker from "../assets/images/sneaker.jpg";
import running from "../assets/images/running.jpg";
import sandal from "../assets/images/sandal.jpg"
import nike from "../assets/images/nike.jpg"
import Navbar from "../Components/Navbar";

const products = [
  {
    id: 1,
    name: "Stylish Women's Shoes",
    price: 1199,
    oldPrice: 1499,
    rating: 4.7,
    image: shoes1,
  },
  {
    id: 2,
    name: "Leather Shoes",
    price: 1899,
    oldPrice: 2499,
    rating: 4.5,
    image: shoes2,
  },
  {
    id: 3,
    name: "Casual White Sneakers",
    price: 2499,
    oldPrice: 3299,
    rating: 4.6,
    image: sneaker,
  },
  {
    id: 4,
    name: "Training Running Shoes",
    price: 2799,
    oldPrice: 3599,
    rating: 4.4,
    image: running,
  },
  {
    id: 5,
    name: "Flat Shoes",
    price: 899,
    oldPrice: 999,
    rating: 4.4,
    image: sandal,
  },
  {
    id: 5,
    name: "Nike AirFlex Sage Low Sneakers",
    price: 3699,
    oldPrice: 3999,
    rating: 4.4,
    image: nike,
  },
];

const Shoes = () => {
  
  return (
    <>
    <Navbar/>
    <div className="shoes-page">

      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <h1>Shoes Collection</h1>
          <p>
            Step into comfort with premium sneakers,
            running shoes & casual footwear.
          </p>

          <button className="shop-btn4">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="section-title">
        Trending Shoes
      </h2>

      <div className="product-grid4">

        {products.map((item) => {

          const discount = Math.floor(
            ((item.oldPrice - item.price) / item.oldPrice) * 100
          );

          return (

            <div className="product-card4" key={item.id}>

               <CiHeart className="wishlist" />

              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">

                <h3>{item.name}</h3>

                <span className="rating4">
                  ⭐ {item.rating}
                </span>

                <div className="price-row">

                  <span className="price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>

                  <span className="old-price">
                    ₹{item.oldPrice.toLocaleString("en-IN")}
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

export default Shoes;