import React from "react";
import "./ProductList.css";
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { CiHeart } from "react-icons/ci";
import earbuds from "../assets/images/earbuds.png";
import watch1 from "../assets/images/watch1.jpg";
import watch from "../assets/images/watch.png";
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import sweater from "../assets/images/sweater.jpg";
import speaker1 from "../assets/images/speaker1.jpg";
import shoe1 from "../assets/images/shoe1.jpg";
import shoes from "../assets/images/shoes.jpg";
import phn from "../assets/images/phn.jpg";
import phn1 from "../assets/images/phn1.jpg";
import phn2 from "../assets/images/phn2.jpg";
import cream from "../assets/images/cream.jpg";
import cream1 from "../assets/images/cream1.jpg";
import cream2 from "../assets/images/cream2.jpg";
import cream3 from "../assets/images/cream3.jpg";



const products = [
  {
    id: 1,
    title: "GOBOULT (formerly Boult) Rover Pro 1.43'' AMOLED, BT Calling, 565 Nits Brightness Smartwatch",
    rating: 3.6,
    reviews: "9,945",
    price: 1699,
    oldPrice: 2999,
    image: watch1,
  },
  {
    id: 2,
    title: "boAt Airdopes 800 HiDef,Adv 4Mic AI-ENx, Fast Charge, IPX5 Bluetooth(True Wireless)",
    rating: 4.2,
    reviews: "4,605",
    price: 1199,
    oldPrice: 1499,
    image: earbuds,
  },
  {
    id: 3,
    title: "Noise Icon 2 Elite Edition 1.8'' Display with Metallic Body and Bluetooth Calling Smartwatch  (Silver Strap, Regular)",
    rating: 3.5,
    reviews: "3,768",
    price: 2199,
    oldPrice: 3999,
    image: watch,
  },
  {
    id: 4,
    title: "Women Full Sleeve Solid Sweatshirt",
    rating: 4.1,
    reviews: "2,768",
    price: 439,
    oldPrice: 749,
    image: woman,
  },
  {
    id: 5,
    title: "Men Full Sleeve Solid Sweatshirt",
    rating: 3.8,
    reviews: "2,578",
    price: 599,
    oldPrice: 899,
    image: man,
  },
  {
    id: 6,
    title: "Women Graphic Print Round Neck Sweater",
    rating: 4.4,
    reviews: "3,448",
    price: 749,
    oldPrice: 1249,
    image: sweater,
  },
  {
    id: 7,
    title: "MZ M412SP (PORTABLE) Dynamic Thunder Sound With High Bass 5 W Bluetooth Speaker  (Multicolor, Stereo Channel)",
    rating: 4.2,
    reviews: "4,508",
    price: 449,
    oldPrice: 799,
    image: speaker1,
  },
  {
    id: 8,
    title: "Lite Sports Shoes Running Shoes For Men  ",
    rating: 3.6,
    reviews: "10,968",
    price: 1899,
    oldPrice: 2499,
    image: shoes,
  },
  {
    id: 9,
    title:"Ebernon Low Premium Sneakers For Men",
    rating: 4.5,
    reviews: "10,768",
    price: 3999,
    oldPrice: 4499,
    image: shoe1,
  },
  {
    id: 10,
    title: "Apple iPhone 15 (Black, 256 GB)",
    rating: 4.1,
    reviews: "12,768",
    price: "61,999",
    oldPrice: "69,900",
    image: phn,
  },
  {
    id: 11,
    title: "OnePlus 13R 5G (Nebula Noir, 256 GB)  (12 GB RAM)",
    rating: 4.5,
    reviews: "23,768",
    price: "38,438",
    oldPrice: "44,999",
    image: phn1,
  },
  {
    id: 12,
    title: "Samsung Galaxy S24 Ultra 5G (Titanium Violet, 256 GB)  (12 GB RAM)",
    rating: 4.7,
    reviews: "23,768",
    price: "86,999",
    oldPrice: "1,34,999",
    image: phn2,
  },
  {
    id: 13,
    title: "Plum 2% Niacinamide & Rice Water Superlight Gel Cream Winter Moisturizer for Face",
    reviews: "23,768",
    price: 289,
    oldPrice: 349,
    image: cream,
  },
  {
    id: 14,
    title: "Dot & Key Sunscreen - SPF 50 PA++++ Watermelon Hyaluronic Cooling Sunscreen SPF 50 PA+++ UV + Blue Light Protection  (30 g)",
    rating: 4.1,
    reviews: "8,768",
    price: 260,
    oldPrice: 299,
    image: cream1,
  },
  {
    id: 15,
    title: "POND's SUPER LIGHT GEL MOISTURISER 50g  (50 g)",
    rating: 4.1,
    reviews: "5,768",
    price: 189,
    oldPrice: 200,
    image: cream2,
  },
  {
    id: 15,
    title: "NIVEA Soft Light Moisturizing 300ml Crèam, Jojoba oil & Vitamin-E,Face/Body/Hands  (300 ml)",
    rating: 4.0,
    reviews: "3,768",
    price: 500,
    oldPrice: 550,
    image: cream3,
  },
];

const ProductList = () => {
  return (
    <>
   <Navbar/>
    <div className="container">
    
       

  
      <main className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <CiHeart />
            <img src={p.image} alt="product" />

            <h4 className="title">{p.title}</h4>

            <span className="rating">
              ⭐ {p.rating} ({p.reviews})
            </span>

            <div className="price-box">
              <span className="price">₹{p.price}</span>
              <span className="old-price">₹{p.oldPrice}</span>
              <span className="discount">
                {Math.floor(((p.oldPrice - p.price) / p.oldPrice) * 100)}% off
              </span>
               <Link to={`/product/${p.id}`}>
              <button style={{ width: "100%",
                borderRadius: 10,
               }}>View Details</button>
            </Link>

            </div>
            
          </div>
        ))}
      </main>
    </div>
    </>
  );
};

export default ProductList;
