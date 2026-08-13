import React from "react";
import "./Login.css";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { MdOutlineStarOutline } from "react-icons/md";

const Login = () => {
    
  return (
    <>
    <Navbar/>
    <div className="login-page">

      {/* Decorative Background */}
      <div className="login-circle circle-one"></div>
      <div className="login-circle circle-two"></div>
      <div className="login-circle circle-three"></div>


      <div className="login-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="login-showcase">

          <div className="showcase-content">

            <div className="brand-logo">
              <span>Trend</span>Sphere
            </div>


            <span className="welcome">
              WELCOME BACK
            </span>


            <h1>
              Discover Your
              <br />
              <span>Perfect Style.</span>
            </h1>


            <p>
              Shop fashion, beauty, electronics and
              accessories—all in one place.
            </p>


            <div className="offer-box">

              <span className="offer-icon">
                <MdOutlineStarOutline />
              </span>

              <div>
                <strong>
                  Exclusive Deals
                </strong>

                <small>
                  Get up to 50% OFF today
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="login-form-area">

          <div className="login-form">


            {/* Heading */}

            <div className="login-heading">

              <span className="login-icon">
                
              </span>

              <h2>
                Welcome Back!
              </h2>

              <p>
                Login to continue shopping
              </p>

            </div>


            {/* Form */}

            <form>


              {/* ================= EMAIL ================= */}

              <div className="input-group">

                <label>
                  Email Address
                </label>

                <div className="input-box">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Enter your email"
                  />

                </div>

              </div>


              {/* ================= PASSWORD ================= */}

              <div className="input-group">

                <label>
                  Password
                </label>

                <div className="input-box">

                  <FaLock />

                  <input
                    type="password"
                    placeholder="Enter your password"
                  />

                </div>

              </div>


              {/* ================= REMEMBER + FORGOT ================= */}

              <div className="login-options">

                <label className="remember">

                  <input
                    type="checkbox"
                  />

                  <span>
                    Remember me
                  </span>

                </label>


                <a
                  href="#forgot"
                  className="forgot-password"
                >
                  Forgot Password?
                </a>

              </div>


              {/* ================= LOGIN BUTTON ================= */}

              <button
                type="submit"
                className="login-submit"
              >

                Login

                <FaArrowRight />

              </button>

            </form>


            {/* ================= REGISTER ================= */}

            <div className="register-text">

              Don't have an account?

              <Link to="/register">
                Create Account
              </Link>

            </div>


          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default Login;