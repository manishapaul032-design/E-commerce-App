import React, { useEffect, useState } from "react";
import "./BannerSlider.css";

import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

const banners = [
  {
    image: banner1,
    smallTitle: "NEW SEASON",
    title: "Discover Your",
    highlight: "Perfect Style",
    text: "Explore fashion, electronics, beauty and lifestyle essentials.",
    button: "Shop Collection",

    offerTop: "UP TO",
    offer: "50%",
    offerBottom: "OFF",
  },

  {
    image: banner2,
    smallTitle: "TRENDING NOW",
    title: "Style That",
    highlight: "Speaks You",
    text: "Find premium products that match your personality.",
    button: "Shop Now",
    offerTop: "FLAT",
    offer: "40%",
    offerBottom: "OFF",
  },

  {
    image: banner3,
    smallTitle: "LIMITED OFFER",
    title: "Upgrade Your",
    highlight: "Everyday Life",
    text: "Discover amazing products with exclusive offers.",
    button: "Explore Now",

    offerTop: "SPECIAL",
    offer: "20%",
    offerBottom: "OFF",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  /* Clone first slide */
  const slides = [...banners, banners[0]];

  /* =========================
     AUTO SLIDE
  ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     INFINITE LOOP
  ========================= */

  useEffect(() => {
    if (current === banners.length) {
      const timer = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransition(true);
          });
        });
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [current]);

  /* =========================
     NEXT
  ========================= */

  const nextSlide = () => {
    setTransition(true);
    setCurrent((prev) => prev + 1);
  };

  /* =========================
     PREVIOUS
  ========================= */

  const prevSlide = () => {
    if (current > 0) {
      setTransition(true);
      setCurrent((prev) => prev - 1);
    }
  };

  /* =========================
     DOT CLICK
  ========================= */

  const goToSlide = (index) => {
    setTransition(true);
    setCurrent(index);
  };

  return (
    <section className="banner-slider">

      {/* =========================
          TRACK
      ========================= */}

      <div
        className="banner-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition
            ? "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)"
            : "none",
        }}
      >

        {slides.map((banner, index) => (

          <div
            className="banner-slide"
            key={index}
          >

            {/* IMAGE */}

            <img
              src={banner.image}
              alt={banner.title}
            />


            {/* =========================
                OFFER BADGE
            ========================= */}

            <div className="offer-badge">

              <span className="offer-small">
                {banner.offerTop}
              </span>

              <strong>
                {banner.offer}
              </strong>

              <span className="offer-off">
                {banner.offerBottom}
              </span>

            </div>


            {/* =========================
                OVERLAY
            ========================= */}

            <div className="banner-overlay">

              <div className="banner-content">

                <span className="banner-small-title">
                  {banner.smallTitle}
                </span>


                <h1>
                  {banner.title}
                  <br />
                  <span>{banner.highlight}</span>
                </h1>


                <p>
                  {banner.text}
                </p>


                <button className="banner-btn">
                  {banner.button}

                  <span>→</span>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          LEFT ARROW
      ========================= */}

      <button
        className="banner-arrow banner-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>


      {/* =========================
          RIGHT ARROW
      ========================= */}

      <button
        className="banner-arrow banner-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>


      {/* =========================
          DOTS
      ========================= */}

      <div className="banner-dots">

        {banners.map((_, index) => (

          <button
            key={index}
            className={
              current % banners.length === index
                ? "active"
                : ""
            }
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}

      </div>

    </section>
  );
};

export default BannerSlider;