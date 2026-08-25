import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

import {
  FaTshirt,
  FaMobileAlt,
  FaHeart,
  FaShoePrints,
  FaClock,
} from "react-icons/fa";

const Category = () => {
  const categories = [
    {
      name: "Fashion",
      icon: <FaTshirt />,
      path: "/men",
    },
    {
      name: "Electronics",
      icon: <FaMobileAlt />,
      path: "/earbuds",
    },
    {
      name: "Beauty",
      icon: <FaHeart />,
      path: "/beauty",
    },
    {
      name: "Shoes",
      icon: <FaShoePrints />,
      path: "/shoes",
    },
    {
      name: "Watches",
      icon: <FaClock />,
      path: "/watch",
    },
  ];

  return (
    <section className="category-section">

      <div className="category-heading">
        <div>
          <span>EXPLORE</span>
          <h2>Shop by Category</h2>
        </div>

        <Link to="/productlist" className="category-view-all">
          View All →
        </Link>
      </div>

      <div className="category-list">

        {categories.map((category, index) => (
          <Link
            to={category.path}
            className="category-item"
            key={index}
          >
            <div className="category-icon">
              {category.icon}
            </div>

            <p>{category.name}</p>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default Category;