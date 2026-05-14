import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

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
import { CiHeart } from "react-icons/ci";


const products = [
  {
    id: 1,
    title: "GOBOULT Smartwatch",
    rating: 3.6,
    reviews: "9,945",
    price: 1699,
    oldPrice: 2999,
    image: watch1,
  },
  {
    id: 2,
    title: "boAt Airdopes",
    rating: 4.2,
    reviews: "4,605",
    price: 1199,
    oldPrice: 1499,
    image: earbuds,
  },
  {
    id: 3,
    title: "Noise Smartwatch",
    rating: 3.5,
    reviews: "3,768",
    price: 2199,
    oldPrice: 3999,
    image: watch,
  },
  {
    id: 4,
    title: "Women Sweatshirt",
    rating: 4.1,
    reviews: "2,768",
    price: 439,
    oldPrice: 749,
    image: woman,
  },
  {
    id: 5,
    title: "Men Sweatshirt",
    rating: 3.8,
    reviews: "2,578",
    price: 599,
    oldPrice: 899,
    image: man,
  },
  {
    id: 6,
    title: "Women Sweater",
    rating: 4.4,
    reviews: "3,448",
    price: 749,
    oldPrice: 1249,
    image: sweater,
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    rating: 4.2,
    reviews: "4,508",
    price: 449,
    oldPrice: 799,
    image: speaker1,
  },
  {
    id: 8,
    title: "Running Shoes",
    rating: 3.6,
    reviews: "10,968",
    price: 1899,
    oldPrice: 2499,
    image: shoes,
  },
  {
    id: 9,
    title: "Sneakers For Men",
    rating: 4.5,
    reviews: "10,768",
    price: 3999,
    oldPrice: 4499,
    image: shoe1,
  },
  {
    id: 10,
    title: "Apple iPhone 15",
    rating: 4.1,
    reviews: "12,768",
    price: "61,999",
    oldPrice: "69,900",
    image: phn,
  },
  {
    id: 11,
    title: "OnePlus 13R",
    rating: 4.5,
    reviews: "23,768",
    price: "38,438",
    oldPrice: "44,999",
    image: phn1,
  },
  {
    id: 12,
    title: "Samsung Galaxy S24 Ultra",
    rating: 4.7,
    reviews: "23,768",
    price: "86,999",
    oldPrice: "1,34,999",
    image: phn2,
  },
  {
    id: 13,
    title: "Plum Moisturizer",
    rating: 4.3,
    reviews: "23,768",
    price: 289,
    oldPrice: 349,
    image: cream,
  },
  {
    id: 14,
    title: "Dot & Key Sunscreen",
    rating: 4.1,
    reviews: "8,768",
    price: 260,
    oldPrice: 299,
    image: cream1,
  },
  {
    id: 15,
    title: "POND'S Gel Moisturiser",
    rating: 4.1,
    reviews: "5,768",
    price: 189,
    oldPrice: 200,
    image: cream2,
  },
  {
    id: 16,
    title: "NIVEA Soft Cream",
    rating: 4.0,
    reviews: "3,768",
    price: 500,
    oldPrice: 550,
    image: cream3,
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );
const handleWishlist = () => {

  const existingWishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const alreadyExists = existingWishlist.find(
    (item) => item.id === product.id
  );

  if (alreadyExists) {
    alert("Already added in wishlist");
    return;
  }

  existingWishlist.push(product);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(existingWishlist)
  );

  alert("Added to wishlist");
};
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details-page">

     

      <div className="left-side">

        <div className="image-grid">

          <div className="img-card">
            <img src={product.image} alt="" />
          </div>


      

         

        </div>

      </div>

      

     

        <div className="title-heart">

  <h2 className="product-title">
    {product.title}
  </h2>

  <CiHeart
    className="wishlist-icon"
    onClick={handleWishlist}
  />



        <div className="rating">
          ⭐ {product.rating}
          <span>{product.reviews} Reviews</span>
        </div>

        <div className="price-section">

          <span className="discount">
            {Math.floor(
              ((product.oldPrice - product.price) /
                product.oldPrice) *
                100
            )}
            % OFF
          </span>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

          <span className="new-price">
            ₹{product.price}
          </span>

        </div>

        <div className="offers">

          <h3>Available Offers</h3>

          <ul>
            <li>10% Instant Discount</li>
            <li>Special price extra 5% off</li>
            <li>No Cost EMI Available</li>
            <li>Free Delivery</li>
          </ul>

        </div>

        <div className="buttons">
          <div className="buttons">

      <button className="cart-btn">Add To Cart</button>

      <button className="buy-btn">Buy Now</button>

      

      </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;