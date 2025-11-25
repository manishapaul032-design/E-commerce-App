import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <div className="footer-container">

    <div className="footer-section">
      <h3>About</h3>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">E-commerce Stories</a>
    </div>

    <div className="footer-section">
      <h3>Help</h3>
      <a href="#">Payments</a>
      <a href="#">Shipping</a>
      <a href="#">Cancellation</a>
      <a href="#">FAQ</a>
    </div>

    <div className="footer-section">
      <h3>Policy</h3>
      <a href="#">Return Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Security</a>
      <a href="#">Privacy</a>
    </div>

    <div className="footer-section">
      <h3>Social</h3>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 YourStore — All Rights Reserved</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
