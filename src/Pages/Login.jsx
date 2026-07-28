import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import Navbar from "../Components/Navbar";

const Login = () => {

const [login,setLogin]=useState({

email:"",
password:""

})

const handleChange=(e)=>{

setLogin({...login,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{

e.preventDefault();

// Laravel Login API

}

return(
<>
<Navbar/>

<div className="login">


<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button>

Login

</button>

<p>

Don't have an account?

<Link to="/register">

Register

</Link>

</p>

</form>

</div>
</>
)

}

export default Login;