import React from "react";
import "./Women.css";
import dress1 from "../assets/images/dress1.jpg";
import kurti from "../assets/images/kurti.jpg";
import saree from "../assets/images/saree.jpg";
import top from "../assets/images/top.jpg";

const products = [
  {
    id: 1,
    name: "Floral Dress",
    price: 999,
    image: "dress1",
  },
  {
    id: 2,
    name: "Kurti",
    price: 799,
    image: "kurti",
  },
  {
    id: 3,
    name: "Saree",
    price: 1499,
    image: "saree",
  },
  {
    id: 4,
    name: "Top",
    price: 599,
    image: "top",
  },
];

const Women=()=> {
  return (
    <div className="women-page">
      <h1>Women's Fashion</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>₹{item.price}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;