import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Wishlist from "./Pages/Wishlist";
import Women from "./Pages/Women";
import Register from "./Pages/Register";
import CartPage from './Pages/CartPage';
import Men from "./Pages/Men";
import Beauty from "./Pages/Beauty";
import Shoes from "./Pages/Shoes";
import Headphones from "./Pages/Headphones";
import SmartWatch from "./Pages/SmartWatch";

const App =()=> {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
          <Route path='/CartPage' element={<CartPage/>}/>
          
         
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path="/wishlist" element={<Wishlist />}/>


            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
             <Route path="/beauty" element={<Beauty />} />
             <Route path="/shoes" element={<Shoes />} />
            <Route path="/products/earbuds" element={<Headphones/>} />
            <Route path="/products/watch" element={<SmartWatch/>} />
          
      
        </Routes>
      </Router>
    </>
  )
}

export default App
