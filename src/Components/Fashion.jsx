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
      image: woman,
      title: "Women's SweatShirt",
      price: "₹599",
      discount: "Min. 30% off",
    },
    {
      id: 2,
      image: man,
      title: "Men's SweatShirt",
      price: "₹599",
      discount: "Min. 30% off",
    },
    {
      id: 3,
      image: Moisturizer,
      title: "Moisturizer",
      price: "₹699",
      discount: "Min. 20% off",
    },
    {
      id: 4,
      image: Shoes,
      title: "Men's Shoes",
      price: "₹999",
      discount: "Min. 40% off",
    },
  ];

  return (
    <>
      <div className="product-box">
        {/* Header */}
        <div className="product-box-header">
          <h2>Fashion Top Deals</h2>

          {/* Correct Route */}
          <Link to="/products">
            <button className="view-btn">View All</button>
          </Link>
        </div>

        {/* Products */}
        <div className="product-box-items">
          {fashion.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <p className="price">{item.price}</p>

              <p className="discount">{item.discount}</p>
            </div>
          ))}
        </div>
      </div>

     
    
       
     
    </>
  );
};

export default Fashion;