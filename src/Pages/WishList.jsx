import React from "react";
import "./Wishlist.css";
import Navbar from "../Components/Navbar";

import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";


const Wishlist = () => {

  

  return (
    <>
      <Navbar />

      <div className="wishlist-page">


        <div className="wishlist-heading">

          <div>
            <span>MY COLLECTION</span>

            <h1>
              My <strong>Wishlist</strong>
            </h1>

            <p>
              Save your favorite products and shop them anytime.
            </p>
          </div>

          <div className="wishlist-heart-icon">
            <FaHeart />
          </div>

        </div>



        <div className="wishlist-grid">

         

              


              

              

        </div>

      </div>
    </>
  );
};

export default Wishlist;