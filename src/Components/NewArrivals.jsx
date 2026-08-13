import React from "react";
import "./NewArrivals.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import fashion from "../assets/images/dress1.jpg";
import earbuds from "../assets/images/h3.jpg";
import shoes from "../assets/images/sneaker.jpg";
import beauty from "../assets/images/foundation.jpg";

const NewArrivals = () => {

  const products = [
    {
      name: "New Fashion Collection",
      price: "₹1,299",
      image: fashion,
    },
    {
      name: "Wireless Earbuds",
      price: "₹999",
      image: earbuds,
    },
    {
      name: "Premium Shoes",
      price: "₹1,599",
      image: shoes,
    },
    {
      name: "Beauty Essentials",
      price: "₹699",
      image: beauty,
    },
  ];

  return (
    <section className="new-arrivals">

     

      <div className="section-heading">

        <div>
          <span className="small-title">
            JUST DROPPED
          </span>

          <h2> New Arrivals</h2>
        </div>

       <Link to="/Productlist"  className="view-all-btn">
                 View All  <FaLongArrowAltRight />
         </Link>

      </div>
     

      <div className="new-grid">

        {products.map((product, index) => (

          <div className="new-card" key={index}>

            

            <div className="new-image">

              <span>NEW</span>

              <img
                src={product.image}
                alt={product.name}
              />

            </div>
          
            <div className="new-info">

              <h3>
                {product.name}
              </h3>

              <p>
                {product.price}
              </p>

              <button className="new-cart">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default NewArrivals;