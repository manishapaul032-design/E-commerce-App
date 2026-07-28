import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"
import Navbar from "../Components/Navbar";

const Register=()=>{

const navigate=useNavigate();

const [form,setForm]=useState({

name:"",
email:"",
password:"",
confirmPassword:""

})

const handleChange=(e)=>{

setForm({...form,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{

e.preventDefault();

if(form.password!==form.confirmPassword){

alert("Password doesn't match");

return;

}

// Laravel Register API

alert("Registration Successful");

navigate("/login");

}

return(
<>
<Navbar/>
<div className="register">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

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

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
onChange={handleChange}
/>

<button>

Register

</button>

</form>

</div>
</>
)

}

export default Register;