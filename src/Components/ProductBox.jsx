import React from "react";
import "./ProductBox.css";
import ProductCard from "./ProductCard";
import Fashion from "./Fashion";
import Electronics from "./Electronics";

const ProductBox = () => {
  return (
    <div>
      <Fashion />
      <Electronics />
      
    </div>
  );
};

export default ProductBox;
