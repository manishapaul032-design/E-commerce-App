import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";


import {
  FaTshirt,
  FaMobileAlt,
  FaHeart,
  FaShoePrints,
  FaClock,
  FaLongArrowAltRight,
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

      <div className="section-heading">

        <div>
          <span className="small-title">
            EXPLORE
          </span>

          <h2>Shop by Category</h2>
        </div>

        <Link to="/Productlist" className="view-all-btn">
          View All <FaLongArrowAltRight /> 
        </Link>

      </div>


      <div className="category-list">

        {categories.map((category, index) => (

          <Link
            to={category.path}
            className="category-item"
            key={index}
          >

            <div className="category-image">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

          </Link>

        ))}

      </div>

    </section>
  );
};

export default Category;