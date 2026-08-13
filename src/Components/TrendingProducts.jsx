import React from "react";
import "./TrendingProducts.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import woman from "../assets/images/woman.jpg";
import earbuds from "../assets/images/earbuds.png";
import watch from "../assets/images/watch.png";
import shoes from "../assets/images/shoes.jpg";

const products = [
  {
    name: "Premium Fashion",
    price: "₹999",
    image: woman,
  },
  {
    name: "Wireless Earbuds",
    price: "₹799",
    image: earbuds,
  },
  {
    name: "Smart Watch",
    price: "₹1,299",
    image: watch,
  },
  {
    name: "Running Shoes",
    price: "₹1,599",
    image: shoes,
  },
];

const TrendingProducts = () => {
  return (
    <section className="trending-section">

      <div className="section-heading">
        <div>
          <span className="small-title">HOT RIGHT NOW</span>
          <h2> Trending Now</h2>
        </div>

        <Link to="/Productlist"  className="view-all-btn">
          View All <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="trending-grid">

        {products.map((product, index) => (
          <div className="trend-card" key={index}>

            <div className="trend-image">
              <span className="new-badge">NEW</span>

              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-info">

              <div className="product-name">
                {product.name}
              </div>

              <div className="product-price">
                {product.price}
              </div>

              <button className="add-cart">
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TrendingProducts;