import React from "react";
import Navbar from "../Components/Navbar";
import './CartPage.css';
import {Link} from "react-router-dom";

const CartPage = () => {
  return (
    <div className="cart-container">
      <Navbar/>
   
      <div className="cart-box">
        <div className="tabs">
          <span className="active">TrendSphere</span>
          
        </div>

        <div className="empty-cart-section">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="Empty Cart"
            className="cart-img"
          />

          <h3>Missing Cart items?</h3>
          <p>Login to see the items you added previously</p>

          
          <Link className="login-cart-btn" aria-current="page" to="/login"> Login</Link>
        </div>
      </div>

      <footer className="footer">
        <p> © 2007-2025 TrendSphere.com </p>
      </footer>
    </div>
  );
};

export default CartPage;
