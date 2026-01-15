import React from "react";
import './ProductDetails.css';
import earbuds from "../assets/images/earbuds.png";
import watch1 from "../assets/images/watch1.jpg";
import watch from "../assets/images/watch.png";
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import sweater from "../assets/images/sweater.jpg";
import speaker1 from "../assets/images/speaker1.jpg";
import shoe1 from "../assets/images/shoe1.jpg";
import shoes from "../assets/images/shoes.jpg";
import phn from "../assets/images/phn.jpg";
import phn1 from "../assets/images/phn1.jpg";
import phn2 from "../assets/images/phn2.jpg";
import cream from "../assets/images/cream.jpg";
import cream1 from "../assets/images/cream1.jpg";
import cream2 from "../assets/images/cream2.jpg";
import cream3 from "../assets/images/cream3.jpg";



const ProductDetails=() =>{


  return (
   


<div class="product-container">

  
  <div class="product-image">
    <img src={earbuds} alt="Product Image"/>
  </div>

  
  <div class="product-details">
    <h1>Wireless Bluetooth Headphones</h1>

    <p class="brand">Brand: <span>SoundMax</span></p>

    <div class="rating">
      ⭐⭐⭐⭐☆ <span>(1,245 Ratings)</span>
    </div>

    <div class="p-price">
      ₹1,199 <span class="old-price">₹1,499</span>
      <span class="discount">20% off</span>
    </div>

    <p class="description">
      Experience high-quality sound with deep bass and noise isolation.
      Comfortable design with long battery life.
    </p>

    <ul class="features">
      <li>✔ Bluetooth 5.0</li>
      <li>✔ 20 Hours Battery</li>
      <li>✔ Fast Charging</li>
      <li>✔ Noise Cancellation</li>
    </ul>

    <div class="buttons">
      <button class="add-cart">Add to Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

  </div>

</div>


  );
}
export default ProductDetails;

