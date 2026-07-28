import React from "react";
import "./Women.css";
import { CiHeart } from "react-icons/ci";
import dress1 from "../assets/images/dress1.jpg";
import kurti from "../assets/images/kurti.jpg";
import saree from "../assets/images/saree.jpg";
import top from "../assets/images/top.jpg";
import banner from "../assets/images/woman-banner.jpeg";
import Navbar from "../Components/Navbar";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
    image: dress1,
  },
  {
    id: 2,
    name: "Printed Kurti",
    price: 799,
    oldPrice: 1199,
    rating: 4.3,
    image: kurti,
  },
  {
    id: 3,
    name: "Designer Saree",
    price: 1499,
    oldPrice: 2299,
    rating: 4.7,
    image: saree,
  },
  {
    id: 4,
    name: "Casual Cotton Top",
    price: 599,
    oldPrice: 899,
    rating: 4.2,
    image: top,
  },
];

const Women = () => {
  return (
    <>
    <Navbar/>
   
    <div className="women-page">

      <div className="hero-banner"  style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlay">
          <h1>Women's Fashion Collection</h1>
          <p>Discover the latest dresses, kurtis, sarees & tops.</p>
          <button className="shop-btn2">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="section-title">Trending Collections</h2>
       

      <div className="product-grid2">

        {products.map((item) => {

          const discount = Math.floor(
            ((item.oldPrice - item.price) / item.oldPrice) * 100
          );

          return (

            <div className="product-card2" key={item.id}>

               <CiHeart className="wishlist" />

              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">

                <h3>{item.name}</h3>

                <span className="rating2">
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

                <button className="cart-btn">View Details</button>

              </div>

            </div>

          );
        })}

      </div>

    </div>
     </>
  );
};

export default Women;