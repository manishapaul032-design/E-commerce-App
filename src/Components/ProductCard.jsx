import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, discount }) => {
  return (
    <Link to='/products/1'>
      <div className="product-item">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p className="price">{price}</p>
        {discount && <p>{discount}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
