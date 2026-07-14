import React from "react";
import { Link } from "react-router-dom";

import earbuds from "../assets/images/earbuds.png";
import watch from "../assets/images/watch.png";
import speaker from "../assets/images/speaker.png";
import phone from "../assets/images/phone.png";

const Electronics = () => {

  const electronics = [
    {
      id: 1,
      category: "earbuds",
      image: earbuds,
      title: "Wireless Earbuds",
      price: "₹899",
      discount: "Min. 50% off",
    },
    {
      id: 2,
      category: "watch",
      image: watch,
      title: "Smart Watch",
      price: "₹1,299",
      discount: "Min. 50% off",
    },
    {
      id: 3,
      category: "speaker",
      image: speaker,
      title: "Bluetooth Speaker",
      price: "₹699",
      discount: "Min. 50% off",
    },
    {
      id: 4,
      category: "phones",
      image: phone,
      title: "Smart Phones",
      price: "₹14,000",
      discount: "Min. 30% off",
    },
  ];

  return (
    <div className="product-box">

      <div className="product-box-header">
        <h2>Best of Electronics</h2>

        <Link to="/products">
          <button className="view-btn">View All</button>
        </Link>
      </div>

      <div className="product-box-items">

        {electronics.map((item) => (

          <Link
            to={`/products/${item.category}`}
            className="product-card"
            key={item.id}
          >

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p className="price">{item.price}</p>

            <p className="discount">{item.discount}</p>

          </Link>

        ))}

      </div>

    </div>
  );
};

export default Electronics;