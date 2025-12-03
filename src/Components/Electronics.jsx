import React from 'react'
import "./ProductBox.css";
import earbuds from "../assets/images/earbuds.png";
import watch from "../assets/images/watch.png";
import speaker from "../assets/images/speaker.png";
import phone from "../assets/images/phone.png";
import ProductCard from './ProductCard';
import {Link} from "react-router-dom";

const Electronics = () => {
    const electronics = [
        { image: earbuds, title: "Wireless Earbuds", price: "₹899", discount: "Min. 50% off" },
        { image: watch, title: "Smart Watch", price: "₹1,299", discount: "Min. 50% off" },
        { image: speaker, title: "Bluetooth Speaker", price: "₹699", discount: "Min. 50% off" },
        { image: phone, title: "Smart Phones", price: "₹14,000", discount: "Min. 30% off" },
      ];
  return (
      <div className="product-box">
        <div className="product-box-header">
          <h2>Best of Electronics</h2>
          <Link aria-current="page" to="/products/:pid"><button className="view-btn">View All</button></Link>
        </div>

        <div className="product-box-items">
          {electronics.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
  )
}

export default Electronics
