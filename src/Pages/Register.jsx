import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { MdOutlineStarOutline } from "react-icons/md";

import "./Register.css";
import Navbar from "../Components/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="register-page">

        {/* Background Decorations */}
        <div className="register-circle register-circle-one"></div>
        <div className="register-circle register-circle-two"></div>
        <div className="register-circle register-circle-three"></div>

        <div className="register-container">

          {/* LEFT SIDE */}
          <div className="register-showcase">

            <div className="register-content">

              <div className="register-brand">
                <span>Trend</span>Sphere
              </div>

              <div className="register-tag">
                JOIN TRENDSPHERE
              </div>

              <h1>
                Create Your
                <br />
                <span>Style Journey.</span>
              </h1>

              <p>
                Create an account and discover fashion,
                beauty, electronics and accessories
                made for your lifestyle.
              </p>

              <div className="register-features">

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaStar />
                  </div>

                  <div>
                    <strong>Exclusive Deals</strong>
                    <small>Special offers for members</small>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <MdOutlineStarOutline />
                  </div>

                  <div>
                    <strong>Personalized Shopping</strong>
                    <small>Find products made for you</small>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="register-form-area">

            <div className="register-form">

              <div className="register-heading">

                

                <h2>Create Account</h2>

                <p>
                  Start your shopping journey with us
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="register-input-group">

                  <label>Full Name</label>

                  <div className="register-input-box">

                    <FaUser />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* EMAIL */}
                <div className="register-input-group">

                  <label>Email Address</label>

                  <div className="register-input-box">

                    <FaEnvelope />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* PASSWORD */}
                <div className="register-input-group">

                  <label>Password</label>

                  <div className="register-input-box">

                    <FaLock />

                    <input
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* CONFIRM PASSWORD */}
                <div className="register-input-group">

                  <label>Confirm Password</label>

                  <div className="register-input-box">

                    <FaLock />

                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* REGISTER BUTTON */}
                <button
                  type="submit"
                  className="register-submit"
                >
                  Create Account
                  <FaArrowRight />
                </button>

              </form>


              <div className="login-link-text">

                Already have an account?

                <Link to="/login">
                  Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Register;