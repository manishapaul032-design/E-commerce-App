import React from "react";
import "./Vibe.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import beauty1 from "../assets/images/beauty1.png";
import w1 from "../assets/images/w1.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.jpg"


const vibes = [
  {
    title: "Minimal",
    text: "Simple & Elegant",
    className: "minimal",
    image: c2,
  },
  {
    title: "Casual",
    text: "Everyday Style",
    className: "casual",
    image: c1,
  },
  {
    title: "Premium",
    text: "Luxury Collection",
    className: "premium",
    image: w1,
  },
  {
    title: "Elegant",
    text: "Perfectly Stylish",
    className: "elegant",
    image: beauty1,
  },
];

const Vibe = () => {
  return (
    <section className="vibe-section">

      
      <div className="vibe-heading">

        <span className="small-title">
          FIND YOUR STYLE
        </span>

        <h2>Pick Your Vibe</h2>

        <p>
          Discover products that match your personality.
        </p>

      </div>


      <div className="vibe-grid">

        {vibes.map((vibe, index) => (

          <div className={`vibe-card ${vibe.className}`}key={index}>

            {vibe.image && (
              <img
                src={vibe.image}
                alt={vibe.title}
                className="vibe-image"
              />
            )}

            
            {vibe.image && (
              <div className="vibe-overlay"></div>
            )}


          
            <div className="vibe-content">

              <h3>{vibe.title}</h3>

              <p>{vibe.text}</p>

              <Link
                to="/productlist"
                className="btn"
              >
                Shop Now <span><FaLongArrowAltRight /></span>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Vibe;