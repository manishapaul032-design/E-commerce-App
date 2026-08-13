import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">

          <h2>
            <span className="footer-trend">Trend</span>
            <span className="footer-sphere">Sphere</span>
          </h2>

          <p>
            Discover fashion, electronics, beauty,
            shoes and more — all in one place.
          </p>

          <div className="social-icons">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/fashion">Fashion</a>
          <a href="/electronics">Electronics</a>
          <a href="/beauty">Beauty</a>
          <a href="/shoes">Shoes</a>

        </div>


        {/* Customer Service */}
        <div className="footer-column">

          <h3>Customer Service</h3>

          <a href="/contact">Contact Us</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/CartPage">My Cart</a>
          <a href="/login">My Account</a>
          <a href="/returns">Returns & Refunds</a>

        </div>


        {/* Contact */}
        <div className="footer-column contact-column">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Kolkata, West Bengal, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@trendsphere.com</span>
          </div>

        </div>

      </div>


      {/* Newsletter */}
      <div className="footer-newsletter">

        <div>
          <h3>Stay Updated</h3>

          <p>
            Subscribe to get the latest offers and new arrivals.
          </p>
        </div>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 TrendSphere. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;