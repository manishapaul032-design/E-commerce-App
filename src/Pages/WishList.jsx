import React, { useEffect, useState } from "react";
import './WishList.css'
import Navbar from "../Components/Navbar";

const Wishlist = () => {

  const [wishlistItems, setWishlistItems] =
    useState([]);

  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistItems(items);

  }, []);

  return (
<>
<Navbar/>
    <div className="wishlist-page">

      <h1>My Wishlist</h1>

      <div className="wishlist-container">

        {wishlistItems.map((item) => (

          <div
            className="wishlist-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt=""
            />

            <h3>{item.title}</h3>

            <p>₹{item.price}</p>

            <p>⭐ {item.rating}</p>

          </div>

        ))}

      </div>

    </div>
    </>
  );
};

export default Wishlist;