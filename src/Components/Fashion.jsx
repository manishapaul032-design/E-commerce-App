import React from 'react'
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import Moisturizer from "../assets/images/moisturizer.jpg";
import Shoes from "../assets/images/shoes.jpg";
import ProductBox from './ProductBox';
import ProductCard from './ProductCard';
const Fashion = () => {
    const fashion = [
        { image: woman, title: "Woman's SweatShirt", price: "₹599", discount: "Min. 30% off" },
        { image: man, title: "Men's SweatShirt", price: "₹599", discount: "Min. 30% off" },
        { image: Moisturizer, title: "Moisturizer", price: "₹699" },
        { image: Shoes, title: "Men's Shoes", price: "₹999" },
    ];
  return (
    <div className="product-box">
        <div className="product-box-header">
          <h2>Fashion Top Deals</h2>
          <button className="view-btn">View All</button>
        </div>

        <div className="product-box-items">
          {fashion.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
  )
}

export default Fashion
