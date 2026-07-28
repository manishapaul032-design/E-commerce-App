import React, { useEffect, useState } from "react";
import "./WishList.css";
import Navbar from "../Components/Navbar";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistItems(items);
  }, []);

  return (
    <>
      <Navbar />

      <div className="wishlist-page">

        <div className="wishlist-header">
          <h1>My Wishlist ({wishlistItems.length})</h1>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your Wishlist is Empty ❤️</h2>
            <p>Add your favourite products to see them here.</p>
          </div>
        ) : (
          <div className="wishlist-container">

            {wishlistItems.map((item) => (

              <div
                className="wishlist-card"
                key={item.id}
              >

                <div className="wishlist-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                <div className="wishlist-details">

                  <h3>{item.title}</h3>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <p className="rating">
                    ⭐ {item.rating}
                  </p>

                  <button className="cart-btn">
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </>
  );
};

export default Wishlist;