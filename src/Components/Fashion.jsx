import React from "react";
import { Link } from "react-router-dom";

import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import Moisturizer from "../assets/images/moisturizer.jpg";
import Shoes from "../assets/images/shoes.jpg";

const Fashion = () => {

  const fashion = [

    {
      id: 1,
      category: "women",
      image: woman,
      title: "Women's Style",
      price: "₹599",
      discount: "Min. 30% off",
    },

    {
      id: 2,
      category: "men",
      image: man,
      title: "Men's Style",
      price: "₹599",
      discount: "Min. 30% off",
    },

    {
      id: 3,
      category: "beauty",
      image: Moisturizer,
      title: "Cosmetics & Jwellery",
      price: "₹699",
      discount: "Min. 20% off",
    },

    {
      id: 4,
      category: "shoes",
      image: Shoes,
      title: "Shoes",
      price: "₹999",
      discount: "Min. 40% off",
    },

  ];

  return (
    <div className="product-box">

      <div className="product-box-header">

        <h2>Fashion Top Deals</h2>

        <Link to="/products">
          <button className="view-btn">View All</button>
        </Link>

      </div>

      <div className="product-box-items">

        {fashion.map((item) => (

          <Link
            to={`/${item.category}`}
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

export default Fashion;