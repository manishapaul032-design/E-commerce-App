import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Navbar from "../Components/Navbar";

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

import {
  CiHeart,
  CiShoppingCart,
  CiStar,
  CiDeliveryTruck,
} from "react-icons/ci";

import {
  FaBolt,
  FaCheck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";


// =====================================================
// PRODUCTS
// =====================================================

const products = [
  {
    id: 1,
    title: "GOBOULT Smartwatch",
    rating: 3.6,
    reviews: "9,945",
    price: 1699,
    oldPrice: 2999,
    image: watch1,
    images: [watch1, watch, watch1, watch],
  },

  {
    id: 2,
    title: "boAt Airdopes",
    rating: 4.2,
    reviews: "4,605",
    price: 1199,
    oldPrice: 1499,
    image: earbuds,
    images: [earbuds, earbuds, earbuds, earbuds],
  },

  {
    id: 3,
    title: "Noise Smartwatch",
    rating: 3.5,
    reviews: "3,768",
    price: 2199,
    oldPrice: 3999,
    image: watch,
    images: [watch, watch1, watch, watch1],
  },

  {
    id: 4,
    title: "Women Sweatshirt",
    rating: 4.1,
    reviews: "2,768",
    price: 439,
    oldPrice: 749,
    image: woman,
    images: [woman, woman, woman, woman],
  },

  {
    id: 5,
    title: "Men Sweatshirt",
    rating: 3.8,
    reviews: "2,578",
    price: 599,
    oldPrice: 899,
    image: man,
    images: [man, man, man, man],
  },

  {
    id: 6,
    title: "Women Sweater",
    rating: 4.4,
    reviews: "3,448",
    price: 749,
    oldPrice: 1249,
    image: sweater,
    images: [sweater, sweater, sweater, sweater],
  },

  {
    id: 7,
    title: "Bluetooth Speaker",
    rating: 4.2,
    reviews: "4,508",
    price: 449,
    oldPrice: 799,
    image: speaker1,
    images: [speaker1, speaker1, speaker1, speaker1],
  },

  {
    id: 8,
    title: "Running Shoes",
    rating: 3.6,
    reviews: "10,968",
    price: 1899,
    oldPrice: 2499,
    image: shoes,
    images: [shoes, shoes, shoes, shoes],
  },

  {
    id: 9,
    title: "Sneakers For Men",
    rating: 4.5,
    reviews: "10,768",
    price: 3999,
    oldPrice: 4499,
    image: shoe1,
    images: [shoe1, shoe1, shoe1, shoe1],
  },

  {
    id: 10,
    title: "Apple iPhone 15",
    rating: 4.1,
    reviews: "12,768",
    price: 61999,
    oldPrice: 69900,
    image: phn,
    images: [phn, phn1, phn2, phn],
  },

  {
    id: 11,
    title: "OnePlus 13R",
    rating: 4.5,
    reviews: "23,768",
    price: 38438,
    oldPrice: 44999,
    image: phn1,
    images: [phn1, phn, phn2, phn1],
  },

  {
    id: 12,
    title: "Samsung Galaxy S24 Ultra",
    rating: 4.7,
    reviews: "23,768",
    price: 86999,
    oldPrice: 134999,
    image: phn2,
    images: [phn2, phn, phn1, phn2],
  },

  {
    id: 13,
    title: "Plum Moisturizer",
    rating: 4.3,
    reviews: "23,768",
    price: 289,
    oldPrice: 349,
    image: cream,
    images: [cream, cream1, cream2, cream3],
  },

  {
    id: 14,
    title: "Dot & Key Sunscreen",
    rating: 4.1,
    reviews: "8,768",
    price: 260,
    oldPrice: 299,
    image: cream1,
    images: [cream1, cream, cream2, cream3],
  },

  {
    id: 15,
    title: "POND'S Gel Moisturiser",
    rating: 4.1,
    reviews: "5,768",
    price: 189,
    oldPrice: 200,
    image: cream2,
    images: [cream2, cream, cream1, cream3],
  },

  {
    id: 16,
    title: "NIVEA Soft Cream",
    rating: 4.0,
    reviews: "3,768",
    price: 500,
    oldPrice: 550,
    image: cream3,
    images: [cream3, cream, cream1, cream2],
  },
];


// =====================================================
// PRODUCT DETAILS
// =====================================================

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.image
  );

  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="pd-not-found">
          <h2>Product Not Found</h2>
        </div>
      </>
    );
  }

  const discount = Math.floor(
    ((Number(product.oldPrice) - Number(product.price)) /
      Number(product.oldPrice)) *
      100
  );


  // =====================================================
  // WISHLIST
  // =====================================================

  const handleWishlist = () => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = existingWishlist.find(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      alert("Already added to wishlist ❤️");
      return;
    }

    existingWishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(existingWishlist)
    );

    alert("Added to wishlist ❤️");
  };


  // =====================================================
  // CART
  // =====================================================

  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = existingCart.find(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      alert("Product already in cart 🛒");
      return;
    }

    existingCart.push({
      ...product,
      quantity: 1,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert("Product added to cart 🛒");
  };


  // =====================================================
  // REVIEW
  // =====================================================

  const handleComment = () => {
    if (!comment.trim()) {
      alert("Please write a review first.");
      return;
    }

    setSubmittedComment(comment);
    setComment("");
  };


  return (
    <>
      <Navbar />

      <main className="pd-page">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <section className="pd-gallery">

          {/* MAIN IMAGE */}

          <div className="pd-main-image">

            <div className="pd-discount">
              🔥 {discount}% OFF
            </div>

            <button
              className="pd-image-heart"
              onClick={handleWishlist}
            >
              <CiHeart />
            </button>

            <img
              src={selectedImage}
              alt={product.title}
              className="pd-product-image"
            />

          </div>


          {/* THUMBNAILS */}

          <div className="pd-thumbnails">

            {product.images.map((image, index) => (
              <button
                key={index}
                className={`pd-thumb ${
                  selectedImage === image
                    ? "pd-thumb-active"
                    : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                />
              </button>
            ))}

          </div>


          {/* REVIEW */}

          <div className="pd-review-card">

            <div className="pd-review-top">

              <div>
                <span className="pd-review-label">
                  CUSTOMER REVIEW
                </span>

                <h3>
                  What do you think?
                </h3>
              </div>

              <div className="pd-review-stars">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>

            </div>

            <textarea
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
              placeholder="Share your experience with this product..."
            />

            <button
              className="pd-review-submit"
              onClick={handleComment}
            >
              Submit Review <span>→</span>
            </button>

            {submittedComment && (
              <div className="pd-submitted-review">

                <strong>👤 You</strong>

                <p>{submittedComment}</p>

              </div>
            )}

          </div>

        </section>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <section className="pd-details">

          <div className="pd-info-card">

            {/* TITLE */}

            <div className="pd-title-row">

              <div className="pd-title-content">

                <span className="pd-category">
                  TRENDSPHERE • PREMIUM PICK
                </span>

                <h1>
                  {product.title}
                </h1>

              </div>

              <button
                className="pd-heart-button"
                onClick={handleWishlist}
              >
                <CiHeart />
              </button>

            </div>


            {/* RATING */}

            <div className="pd-rating-row">

              <span className="pd-rating">
                ⭐ {product.rating}
              </span>

              <span className="pd-reviews">
                {product.reviews} Reviews
              </span>

              <span className="pd-verified">
                <FaCheck /> Verified
              </span>

            </div>


            <div className="pd-line"></div>


            {/* PRICE */}

            <div className="pd-price-area">

              <div className="pd-price-row">

                <span className="pd-new-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </span>

                <span className="pd-old-price">
                  ₹{Number(product.oldPrice).toLocaleString("en-IN")}
                </span>

                <span className="pd-off">
                  {discount}% OFF
                </span>

              </div>

              <p>
                Inclusive of all taxes
              </p>

            </div>


            {/* OFFERS */}

            <div className="pd-offers">

              <div className="pd-section-title">
                <FaBolt />
                <h3>Available Offers</h3>
              </div>


              <div className="pd-offer">

                <div className="pd-offer-icon">
                  %
                </div>

                <div>
                  <strong>10% Instant Discount</strong>
                  <p>
                    Use selected bank cards at checkout.
                  </p>
                </div>

              </div>


              <div className="pd-offer">

                <div className="pd-offer-icon">
                  ₹
                </div>

                <div>
                  <strong>Extra 5% OFF</strong>
                  <p>
                    Special price available for this product.
                  </p>
                </div>

              </div>


              

            </div>


            {/* DELIVERY */}

            <div className="pd-delivery">

              <div className="pd-delivery-icon">
                <CiDeliveryTruck />
              </div>

              <div className="pd-delivery-text">
                <strong>Free Delivery</strong>
                <p>
                  Delivery available to your location
                </p>
              </div>

              <FaCheck className="pd-delivery-check" />

            </div>


            {/* =================================================
                NEW BUTTON SECTION
            ================================================= */}

            <div className="pd-action-area">

              <button
                type="button"
                className="pd-cart-button"
                onClick={handleAddToCart}
              >
                <CiShoppingCart />
                <span>Add To Cart</span>
              </button>


              <button
                type="button"
                className="pd-buy-button"
              >
                <FaBolt />
                <span>Buy Now</span>
                <b>→</b>
              </button>

            </div>


            {/* TRUST */}

            <div className="pd-trust">

              <div>
                <FaShieldAlt />

                <span>
                  Secure
                  <small>Payments</small>
                </span>
              </div>


              <div>
                <CiDeliveryTruck />

                <span>
                  Fast
                  <small>Delivery</small>
                </span>
              </div>


              <div>
                <FaUndo />

                <span>
                  Easy
                  <small>Returns</small>
                </span>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default ProductDetails;