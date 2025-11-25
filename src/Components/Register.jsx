import React from 'react';
import './Register.css'
import logimg from '../images/log1.jpg'
 
const Register = () => {
  return (
    <div>
      <div className="login-wrapper">

    
      <div className="login-left">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img
          src={logimg}
          alt="Login"
        />
      </div>

     
      <div className="login-right">
        <div className="login-box">

          <input
            type="text"
            placeholder="Enter Email / Mobile Number"
            className="input-box"
          />

          <p className="terms">
            By continuing, you agree to Trendspher's  
            <span> Terms of Use </span> & <span> Privacy Policy </span>
          </p>

          <button className="login-btn">Request OTP</button>

          <div className="or">OR</div>

          <button className="create-account-btn">
            New to TrendSphere? Create an account
          </button>

        </div>
      </div>

    </div>
    </div>
  )
}

export default Register
