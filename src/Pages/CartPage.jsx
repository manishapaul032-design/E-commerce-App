import React from "react";
import "./CartPage.css";
import {FaShoppingBag,FaArrowRight} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const CartPage = () => {

  return (
    <>
      <Navbar />

      <div className="cart-page">

       
        <div className="cart-header">

          <div>
            <span className="cart-small-title">
              YOUR SHOPPING BAG
            </span>

            <h1>
              My <span>Cart</span>
            </h1>

            <p>
              Review your selected products before checkout.
            </p>
          </div>

          <div className="cart-bag-icon">
            <FaShoppingBag />
          </div>

        </div>


        <div className="cart-layout">

          
          <div className="cart-products">

           


            <div className="empty-cart">

              <div className="empty-cart-icon">
                <FaShoppingBag />
              </div>

              <h2>Your Cart is Empty</h2>

              <p>
                Looks like you haven't added anything to your cart yet.
              </p>

              <Link to="/Productlist" className="continue-btn">
                <FaArrowRight />
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default CartPage;