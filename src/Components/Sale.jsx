import React, { useEffect, useState } from "react";
import "./Sale.css";

import fashion from "../assets/images/kurti.jpg";
import watch from "../assets/images/w1.jpg";
import shoes from "../assets/images/shoe1.jpg";
import headphones from "../assets/images/headphone.jpg";
import beauty from "../assets/images/primer.jpg"

const products = [
  {
    name: "Beauty Makeup Kit",
    price: "₹899",
    oldPrice: "₹1,499",
    discount: "-40%",
    image: beauty,
  },

  {
    name: "Smart Watch",
    price: "₹1,499",
    oldPrice: "₹2,999",
    discount: "-50%",
    image: watch,
  },
  {
    name: "Running Shoes",
    price: "₹1,399",
    oldPrice: "₹1,999",
    discount: "-30%",
    image: shoes,
  },
  {
    name: "Headphones",
    price: "₹1,199",
    oldPrice: "₹2,199",
    discount: "-45%",
    image: headphones,
  },
];

const FlashSale = () => {

  const [time, setTime] = useState({
    hours: 2,
    minutes: 15,
    seconds: 35,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prev) => {

        let hours = prev.hours;
        let minutes = prev.minutes;
        let seconds = prev.seconds;

        if (seconds > 0) {
          seconds--;
        } else {

          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {

            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 2;
            }

          }

        }

        return {
          hours,
          minutes,
          seconds,
        };

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);


  return (

    <section className="flash-sale">

      {/* Header */}

      <div className="flash-header">

        <div>

          <span className="flash-small-title">
            LIMITED TIME
          </span>

          <h2>Flash Sale is Live!</h2>

        </div>


        {/* Countdown */}

        <div className="countdown">

          <div className="time-box">
            <strong>
              {String(time.hours).padStart(2, "0")}
            </strong>

            <span>Hours</span>
          </div>


          <b>:</b>


          <div className="time-box">
            <strong>
              {String(time.minutes).padStart(2, "0")}
            </strong>

            <span>Minutes</span>
          </div>


          <b>:</b>


          <div className="time-box">
            <strong>
              {String(time.seconds).padStart(2, "0")}
            </strong>

            <span>Seconds</span>
          </div>

        </div>

      </div>


      {/* Products */}

      <div className="flash-grid">

        {products.map((product, index) => (

          <div className="flash-card" key={index}>

            {/* Image */}

            <div className="flash-image">

              <span className="discount-badge">
                {product.discount}
              </span>

              <img
                src={product.image}
                alt={product.name}
              />

            </div>


            {/* Product Details */}

            <div className="flash-info">

              <h3>
                {product.name}
              </h3>

              <div className="price-row">

                <span className="sale-price">
                  {product.price}
                </span>

                <span className="old-price">
                  {product.oldPrice}
                </span>

              </div>

              <button className="flash-cart">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default FlashSale;